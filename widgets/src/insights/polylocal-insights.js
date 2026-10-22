// <polylocal-insights>: the Insights page. Lists case studies first, then
// events, and keeps itself up to date from the Odoo blog.
//
// How it stays current: on the live site it reads Odoo's own tag pages
// (/blog/tag/case-studies-18 and /blog/tag/events-19, in the page language).
// Every post tagged "Case Studies" is listed; posts that also carry the
// "Events" tag (or only the Events tag) go in the Events section. Posts that
// use the article widget get their rich content (summary, logo, key result,
// photo) from src/articles; any other post shows Odoo's own title, cover
// image and date. If Odoo can't be reached (local preview), the widget falls
// back to the articles in src/articles.
import { ARTICLES } from '../articles/index.js';
import { PolylocalPage } from '../shared/page.js';
import { assetUrl, localHref } from '../shared/lang.js';
import I18N from './i18n.js';
import CSS from './styles.js';

const postId = (url) => (String(url).split('?')[0].match(/-(\d+)\/?$/) || [])[1];
const BY_POST = Object.fromEntries(Object.values(ARTICLES).map((a) => [postId(a.url), a]));
const titleText = (parts, lang) => parts.filter(Boolean).join(lang === 'zh-TW' ? '' : ' ');

class PolylocalInsights extends PolylocalPage {
  static get observedAttributes() { return ['lang', 'contained', 'case-tag', 'event-tag']; }
  static css = CSS;

  connectedCallback() {
    super.connectedCallback();
    this.load();
  }

  // Re-read Odoo when the language changes (the tag pages differ per language).
  render() {
    super.render();
    const lang = this.getAttribute('data-lang');
    if (this._loadedLang && this._loadedLang !== lang) this.load();
  }

  get caseTag() { return this.getAttribute('case-tag') || 'case-studies-18'; }
  get eventTag() { return this.getAttribute('event-tag') || 'events-19'; }

  async load() {
    const lang = this.getAttribute('data-lang') || 'en';
    this._loadedLang = lang;
    try {
      const [cases, events] = await Promise.all([this.readTag(this.caseTag, lang), this.readTag(this.eventTag, lang)]);
      if (!cases.length && !events.length) return;
      const eventIds = new Set(events.map((p) => p.id));
      const seen = new Set();
      const posts = [...cases, ...events].filter((p) => (seen.has(p.id) ? false : seen.add(p.id)))
        .map((p) => ({ ...p, isEvent: eventIds.has(p.id) }));
      if (this._loadedLang !== lang) return;
      this._odoo = { lang, posts };
      super.render();
    } catch (e) {
      // Not on the Odoo site, or the tag pages moved: keep the built-in list.
    }
  }

  // Read every page of an Odoo blog tag listing.
  async readTag(tag, lang) {
    const out = [];
    let url = localHref(`/blog/tag/${tag}`, lang);
    for (let page = 0; url && page < 6; page += 1) {
      const res = await fetch(url, { credentials: 'same-origin' });
      if (!res.ok) break;
      const doc = new DOMParser().parseFromString(await res.text(), 'text/html');
      doc.querySelectorAll('article').forEach((el) => {
        const link = el.querySelector('a.o_blog_post_title') || el.querySelector('a[href*="/blog/"]');
        const href = link && link.getAttribute('href');
        const id = href && postId(href);
        if (!id) return;
        const style = el.querySelector('.o_record_cover_image')?.getAttribute('style') || '';
        const cover = (style.match(/url\(['"]?([^'")]+)/) || [])[1] || '';
        const dateEl = [...el.querySelectorAll('time, span, div')].find((n) => !n.children.length && /\b(19|20)\d\d\b/.test(n.textContent) && n.textContent.trim().length < 32);
        const teaser = el.querySelector('.card-body .mt-2, .o_wblog_post_teaser')?.textContent.trim() || '';
        out.push({ id, href, title: link.textContent.trim(), cover, date: dateEl ? dateEl.textContent.trim() : '', teaser: teaser.replace(/^\.+$/, '') });
      });
      const next = doc.querySelector('.pagination .page-item.active + .page-item:not(.disabled) a, a.page-link[rel="next"]');
      url = next ? next.getAttribute('href') : null;
    }
    return out;
  }

  // One list of cards from Odoo (live) or from the article registry (fallback).
  items(lang) {
    const fromArticle = (a, base = {}) => {
      const t = a[lang];
      const photo = t.body.find((b) => b.type === 'gallery');
      const when = a.kind === 'event' ? (t.facts[0] || [])[1] : String(t.meta || '').split('·')[0].trim();
      const stat = a.kind === 'case' ? (t.results.find((r) => r[2]) || t.results[0]) : null;
      return {
        isEvent: base.isEvent ?? a.kind === 'event',
        href: localHref(a.url, lang),
        title: titleText(t.title, lang),
        dek: t.dek,
        date: when || base.date || '',
        client: a.client,
        tone: a.tone,
        stat,
        image: photo ? assetUrl(`photos/${photo.photos[0]}`, this) : base.cover || '',
      };
    };
    if (this._odoo && this._odoo.lang === lang) {
      return this._odoo.posts.map((p) => {
        const a = BY_POST[p.id];
        if (a) return fromArticle(a, p);
        return { isEvent: p.isEvent, href: p.href, title: p.title, dek: p.teaser, date: p.date, image: p.cover, tone: p.isEvent ? 'clay' : 'sky' };
      });
    }
    return Object.values(ARTICLES).map((a) => fromArticle(a));
  }

  page(lang, h) {
    const { esc } = h;
    const t = I18N[lang];
    const all = this.items(lang);
    const cases = all.filter((x) => !x.isEvent);
    const events = all.filter((x) => x.isEvent);
    const arrow = h.icons.arrow;

    const caseCard = (c) => `
      <a class="case-card tone-${esc(c.tone || 'sky')}" href="${esc(c.href)}">
        <div class="case-visual">
          ${c.client && c.client.logo
            ? `<img class="case-logo" src="${esc(assetUrl(c.client.logo, this))}" alt="${esc(c.client.name)}" loading="lazy">`
            : c.image ? `<img class="case-cover" src="${esc(c.image)}" alt="" loading="lazy">` : ''}
        </div>
        <div class="case-body">
          <span class="card-kicker">${esc(t.caseKicker)}${c.date ? ` · ${esc(c.date)}` : ''}</span>
          <h3>${esc(c.title)}</h3>
          ${c.dek ? `<p>${esc(c.dek)}</p>` : ''}
          ${c.stat ? `<div class="case-stat"><strong>${esc(c.stat[0])}</strong><span>${esc(c.stat[1])}</span></div>` : ''}
          <span class="read">${esc(t.readCase)}${arrow}</span>
        </div>
      </a>`;

    const eventCard = (e) => `
      <a class="event-card" href="${esc(e.href)}">
        <div class="event-img">${e.image ? `<img src="${esc(e.image)}" alt="" loading="lazy">` : ''}</div>
        <div class="event-body">
          <span class="card-kicker">${esc(e.date || t.eventKicker)}</span>
          <h3>${esc(e.title)}</h3>
          ${e.dek ? `<p>${esc(e.dek)}</p>` : ''}
          <span class="read">${esc(t.readEvent)}${arrow}</span>
        </div>
      </a>`;

    return `
  <section class="ink ins-hero">
    <div class="dots" aria-hidden="true"></div>
    <div class="wrap ins-hero-in">
      <p class="eyebrow light">${esc(t.kicker)}</p>
      <h1>${esc(t.title[0])}${lang === 'zh-TW' ? '' : ' '}<span class="accent-sky">${esc(t.title[1])}</span></h1>
      <p class="ins-dek">${esc(t.dek)}</p>
      <nav class="ins-jump" aria-label="${esc(t.jump)}">
        <a href="#case-studies"><strong>${cases.length}</strong><span>${esc(cases.length === 1 ? t.caseOne : t.caseMany)}</span></a>
        <a href="#events"><strong>${events.length}</strong><span>${esc(events.length === 1 ? t.eventOne : t.eventMany)}</span></a>
      </nav>
    </div>
  </section>

  <section class="ins-cases" id="case-studies">
    <div class="wrap">
      <div class="ins-head">
        <p class="eyebrow">${esc(t.cases.kicker)}</p>
        <h2 class="mid">${esc(t.cases.title)}</h2>
        <p class="ins-sub">${esc(t.cases.body)}</p>
      </div>
      <div class="case-grid">${cases.map(caseCard).join('') || `<p class="empty">${esc(t.empty)}</p>`}</div>
    </div>
  </section>

  <section class="ins-events sand" id="events">
    <div class="wrap">
      <div class="ins-head">
        <p class="eyebrow">${esc(t.events.kicker)}</p>
        <h2 class="mid">${esc(t.events.title)}</h2>
        <p class="ins-sub">${esc(t.events.body)}</p>
      </div>
      <div class="event-grid">${events.map(eventCard).join('') || `<p class="empty">${esc(t.empty)}</p>`}</div>
    </div>
  </section>

  ${h.cta({ kicker: t.cta.kicker, title: t.cta.title, body: t.cta.body, secondary: t.cta.secondary, secondaryHref: '/digital-marketing' })}`;
  }
}

if (!customElements.get('polylocal-insights')) customElements.define('polylocal-insights', PolylocalInsights);
export default PolylocalInsights;
