import { ARTICLES, LABELS } from './index.js';
import { PolylocalPage } from '../shared/page.js';
import { assetUrl } from '../shared/lang.js';
import CSS from './styles.js';

const titleText = (parts, lang) => parts.filter(Boolean).join(lang === 'zh-TW' ? '' : ' ');

class PolylocalArticle extends PolylocalPage {
  static get observedAttributes() { return ['lang', 'contained', 'article']; }
  static css = CSS;

  connectedCallback() {
    // Odoo shows its own title cover above every blog post. The article has
    // its own header, so hide Odoo's (add `keep-cover` to keep it).
    if (!this.hasAttribute('keep-cover')) {
      const cover = document.getElementById('o_wblog_post_top');
      if (cover) cover.style.display = 'none';
    }
    super.connectedCallback();
  }

  page(lang, h) {
    const { esc, L } = h;
    const lab = LABELS[lang];
    const a = ARTICLES[this.getAttribute('article')];
    if (!a) return `<p class="a-missing">${esc(lab.missing)}</p>`;
    const t = a[lang];
    const cat = lab.categories[a.category];
    const isCase = a.kind === 'case';
    const logo = a.client && a.client.logo ? esc(assetUrl(a.client.logo, this)) : '';
    const sp = lang === 'zh-TW' ? '' : ' ';

    const block = (b) => this.block(b, h, a);
    const wideTypes = new Set(['speakers', 'speakerRows', 'highlight', 'trio', 'feature', 'gallery']);

    const hero = `
  <header class="ink a-hero ${isCase ? 'has-card' : ''} tone-${a.tone}">
    <div class="dots${a.tone === 'clay' ? ' clay-dots' : ''}" aria-hidden="true"></div>
    <div class="a-wide a-hero-in">
      <nav class="crumbs" aria-label="${esc(lab.breadcrumb)}"><a href="${L(lab.insights[1])}">${esc(lab.insights[0])}</a><span aria-hidden="true">/</span><a href="${L(cat[1])}">${esc(cat[0])}</a></nav>
      <div class="tags">${t.tags.map((x, i) => `<span class="${i ? 'tag-line' : 'tag-fill'}">${esc(x)}</span>`).join('')}</div>
      <h1>${esc(t.title[0])}${sp}<span class="hl">${esc(t.title[1])}</span>${t.title[2] ? `${sp}${esc(t.title[2])}` : ''}</h1>
      <p class="dek">${esc(t.dek)}</p>
      ${isCase ? `<p class="meta">${esc(t.meta)}</p>` : `
      <dl class="hero-facts">${t.facts.map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join('')}</dl>`}
    </div>
  </header>`;

    const caseTop = isCase ? `
  <div class="a-wide fact-card-wrap">
    <div class="fact-box">
      ${logo ? `<div class="fact-logo"><span class="side-label">${esc(lab.client)}</span><img src="${logo}" alt="${esc(a.client.name)}"></div>` : ''}
      <dl class="fact-card">${t.facts.map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join('')}</dl>
    </div>
  </div>
  <section class="a-wide results tone-${a.tone}">
    <h2 class="eyebrow">${esc(lab.results)}</h2>
    <div class="result-grid n${t.results.length}">
      ${t.results.map(([n, txt, accent]) => `<div class="result"><div class="result-n${accent ? ' accent' : ''}">${esc(n)}</div><p>${esc(txt)}</p></div>`).join('')}
    </div>
  </section>` : '';

    const body = isCase ? `
  <section class="a-wide case-body tone-${a.tone}">
    <aside class="side">
      <p class="side-label">${esc(lab.toc)}</p>
      <ol class="toc">${t.body.filter((b) => b.toc).map((b) => `<li><a href="#${esc(b.id)}">${esc(b.toc)}</a></li>`).join('')}</ol>
      <div class="client"><span class="side-label">${esc(lab.client)}</span>${logo ? `<img class="client-logo" src="${logo}" alt="${esc(a.client.name)}">` : `<strong style="color:${esc(a.client.color)}">${esc(a.client.name)}</strong>`}<span>${esc(t.clientText)}</span></div>
    </aside>
    <div class="col">${t.body.map(block).join('')}</div>
  </section>` : `
  <div class="event-body tone-${a.tone}">
    ${t.body.map((b) => `<div class="${wideTypes.has(b.type) ? 'a-wide' : 'a-narrow'} ev-block">${block(b)}</div>`).join('')}
  </div>`;

    const related = (a.related || []).map((id) => ARTICLES[id]).filter(Boolean);
    const more = related.length ? `
  <section class="a-wide more">
    <h2>${esc(lab.more[a.category])}</h2>
    <div class="more-list">${related.map((r) => `<a class="more-card tone-${r.tone}" href="${L(r.url)}"><span>${esc(titleText(r[lang].title, lang))}</span><span class="more-read">${esc(lab.read)} →</span></a>`).join('')}</div>
  </section>` : '';

    const cta = `
  <section class="ink a-cta">
    <div class="a-wide cta-in">
      <div class="cta-text"><h2>${esc(t.cta.title)}</h2><p>${esc(t.cta.text)}</p></div>
      <div class="btns"><a class="btn primary" href="${L('/contactus')}">${esc(h.common.contact)}</a><a class="btn ghost" href="${L(t.cta.secondary[1])}">${esc(t.cta.secondary[0])}</a></div>
    </div>
  </section>`;

    return `<article class="art">${hero}${caseTop}${body}${cta}${more}</article>`;
  }

  block(b, h) {
    const { esc } = h;
    const id = b.id ? ` id="${esc(b.id)}"` : '';
    const h2 = b.h ? `<h2${id}>${esc(b.h)}</h2>` : '';
    const dash = (items) => `<ul class="dash">${items.map((x) => `<li>${esc(x)}</li>`).join('')}</ul>`;
    switch (b.type) {
      case 'lead': return `<p class="lead-p">${esc(b.text)}</p>`;
      case 'prose': return `<div class="prose"${b.h ? '' : id}>${h2}${b.p.map((x) => `<p>${esc(x)}</p>`).join('')}</div>`;
      case 'steps': return `<div class="prose">${h2}${b.intro ? `<p>${esc(b.intro)}</p>` : ''}</div>
        <ol class="a-steps">${b.items.map(([title, text, chips], i) => `<li><span class="step-n">${String(i + 1).padStart(2, '0')}</span><div><h3>${esc(title)}</h3><p>${esc(text)}</p>${chips ? `<div class="chips tone-chips">${chips.map((c) => `<span>${esc(c)}</span>`).join('')}</div>` : ''}</div></li>`).join('')}</ol>`;
      case 'quote': return `<figure class="pull"><blockquote>${esc(b.text)}</blockquote></figure>`;
      case 'box': return `<div class="box"${id}><h2>${esc(b.h)}</h2>${dash(b.items)}</div>`;
      case 'list': return `<div class="prose">${h2}${dash(b.items)}</div>`;
      case 'note': return `<p class="note">${esc(b.text)}</p>`;
      case 'speakers': return `${h2}<div class="speakers">${b.items.map((s) => `
        <div class="speaker${s.dark ? ' dark' : ''}"><span class="sp-tag">${esc(s.tag)}</span><h3>${esc(s.title)}</h3><p>${esc(s.text)}</p><span class="sp-who"><strong>${esc(s.who)}</strong>${s.org ? `, ${esc(s.org)}` : ''}</span></div>`).join('')}</div>`;
      case 'speakerRows': return `${h2}<div class="rows">${b.items.map((s) => `
        <div class="row"><div class="row-who"><strong>${esc(s.who)}</strong><span>${esc(s.org)}</span></div><div class="row-what"><h3 class="t-${esc(s.tone)}">${esc(s.title)}</h3><p>${esc(s.text)}</p></div></div>`).join('')}</div>`;
      case 'highlight': return `<div class="highlight"><div class="hl-head"><span class="hl-kicker">${esc(b.kicker)}</span><h2>${esc(b.title)}</h2></div><div class="hl-body"><p>${esc(b.text)}</p><div class="hl-chips">${b.chips.map((c) => `<span>${esc(c)}</span>`).join('')}</div></div></div>`;
      case 'trio': return `<p class="eyebrow">${esc(b.kicker)}</p><div class="trio">${b.items.map((x) => `<div class="trio-card"><span class="trio-r">R</span><h3>${esc(x)}</h3></div>`).join('')}</div>`;
      case 'feature': return `<div class="feature"><span class="feature-kicker">${esc(b.kicker)}</span><h2>${esc(b.title)}</h2>${b.p.map((x) => `<p>${esc(x)}</p>`).join('')}</div>`;
      case 'gallery': {
        // photos: file names in assets/photos/. The first is shown large unless
        // `grid: true`; the rest sit in a row of up to three. `ratio` sets the
        // shape of the smaller photos (default 4/3; use '3/4' for portrait shots).
        const src = (f) => esc(assetUrl(`photos/${f}`, this));
        const img = (f) => `<img src="${src(f)}" alt="${esc(b.alt)}" loading="lazy">`;
        const [first, ...rest] = b.grid ? [null, ...b.photos] : b.photos;
        const style = `--cols:${Math.min(rest.length, 3)};--ratio:${esc(b.ratio || '4/3')}`;
        return `<figure class="gallery">
          ${b.h ? `<h2>${esc(b.h)}</h2>` : ''}
          ${first ? `<div class="g-main">${img(first)}</div>` : ''}
          ${rest.length ? `<div class="g-grid${first ? '' : ' g-only'}" style="${style}">${rest.map(img).join('')}</div>` : ''}
          ${b.caption ? `<figcaption>${esc(b.caption)}</figcaption>` : ''}
        </figure>`;
      }
      case 'app': {
        // An app showcase: phone-framed screenshots from assets/photos/.
        const shots = b.screens.map(([f, label]) => `<figure class="phone"><div class="phone-frame"><img src="${esc(assetUrl(`photos/${f}`, this))}" alt="${esc(label)}" loading="lazy"></div><figcaption>${esc(label)}</figcaption></figure>`).join('');
        return `<div class="app-show"${id}><div><span class="feature-kicker">${esc(b.kicker)}</span><h2>${esc(b.title)}</h2><p>${esc(b.text)}</p></div><div class="phones" style="--n:${Math.min(b.screens.length, 3)}">${shots}</div></div>`;
      }
      default: return '';
    }
  }
}

if (!customElements.get('polylocal-article')) customElements.define('polylocal-article', PolylocalArticle);
export default PolylocalArticle;
