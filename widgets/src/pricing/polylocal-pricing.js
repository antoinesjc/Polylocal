import { PRICING, PRICES, CLIENTS, TESTIMONIAL } from './i18n.js';
import { PolylocalPage } from '../shared/page.js';
import { LOGOS } from '../shared/common.js';
import { assetUrl } from '../shared/lang.js';
import MZ from '../articles/content/mandarin-zest.js';
import CSS from './styles.js';

class PolylocalPricing extends PolylocalPage {
  static css = CSS;
  static get observedAttributes() { return ['lang', 'contained', 'preview']; }

  page(lang, h) {
    const t = PRICING[lang];
    const { esc, L, icons } = h;
    const img = (file, alt, height) => `<img src="${esc(assetUrl(file, this))}" alt="${esc(alt)}" style="height:${height}px" loading="lazy">`;
    const client = (c) => (c.file ? img(c.file, c.name, c.h) : `<span class="wordmark">${esc(c.name)}</span>`);
    const p = t.packages;
    const pk = p.list;
    const zh = lang === 'zh-TW';
    const amount = (id) => PRICES[id][zh ? 'zh' : 'en'];
    const twd = (id) => (zh ? PRICES[id].twd : '');
    const quote = TESTIMONIAL
      ? `<figure class="quote"><blockquote>${esc(TESTIMONIAL[lang])}</blockquote><figcaption><strong>${esc(TESTIMONIAL.name)}</strong>${esc(TESTIMONIAL.role[lang])}</figcaption></figure>`
      : this.hasAttribute('preview')
        ? `<figure class="quote placeholder"><blockquote>${esc(t.work.quotePlaceholder)}</blockquote><figcaption><strong>${esc(t.work.quoteName)}</strong>${esc(t.work.quoteRole)}</figcaption></figure>`
        : '';

    return `
  <section class="hero ink">
    <div class="dots" aria-hidden="true"></div>
    <div class="wrap pr-hero">
      <p class="eyebrow light"><span class="rule"></span>${esc(t.hero.eyebrow)}</p>
      <div class="pr-hero-row">
        <h1 class="pr-h1">${esc(t.hero.title)} <span class="accent">${esc(t.hero.accent)}</span></h1>
        <div class="pr-hero-side">
          <p class="lead">${esc(t.hero.lead)}</p>
          <div class="btns">
            <a class="btn primary" href="${L('/contactus')}">${esc(t.hero.primary)}</a>
            <a class="btn ghost" href="#compare">${esc(t.hero.secondary)}</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="proof">
    <div class="wrap proof-row">
      <div class="proof-col clients">
        <p class="label">${esc(t.proof.clients)}</p>
        <div class="logos">${CLIENTS.map(client).join('')}</div>
      </div>
      <div class="proof-col featured-r">
        <p class="label">${esc(t.proof.featured)}</p>
        <div class="logos">${LOGOS.featured.map((l) => img(l.file, l.alt, l.h)).join('')}</div>
      </div>
    </div>
  </section>

  <section class="wrap pr-test" id="test">
    <div class="test">
      <div class="test-main">
        <p class="eyebrow">${esc(t.test.kicker)}</p>
        <h2 class="mid">${esc(t.test.title)}</h2>
        <p class="body">${esc(t.test.text)}</p>
        <div class="test-price">
          <span class="test-name">${esc(t.test.name)}</span>
          <p class="price"><span class="amount">${esc(amount('test'))}</span><span class="per">${esc(t.test.once)}</span></p>
          ${zh ? `<p class="twd">${esc(twd('test'))}</p>` : ''}
        </div>
        <a class="btn primary" href="${L('/contactus')}">${esc(t.test.button)}</a>
        <p class="fine">${esc(t.test.note)}</p>
      </div>
      <ol class="test-list">
        ${t.test.items.map(([title, text], i) => `<li><span class="num">0${i + 1}</span><div><h3>${esc(title)}</h3><p>${esc(text)}</p></div></li>`).join('')}
      </ol>
    </div>
  </section>

  <section class="wrap pr-packages" id="packages">
    <p class="eyebrow">${esc(p.kicker)}</p>
    <h2 class="wide">${esc(p.title)}</h2>
    <div class="markets">
      <p class="label">${esc(p.marketsLabel)}</p>
      <div class="market-list">${p.markets.map(([m, d], i) => `<div class="market m${i}"><strong>${esc(m)}</strong><span>${esc(d)}</span></div>`).join('')}</div>
    </div>
    <div class="tiers">
      ${pk.map((x) => `
      <article class="tier ${x.id}${x.popular ? ' popular' : ''}">
        ${x.popular ? `<span class="plan-badge">${esc(p.popular)}</span>` : ''}
        <div class="tier-top"><h3>${esc(x.name)}</h3><span class="tier-alt">${esc(x.alt)}</span></div>
        <p class="price"><span class="amount">${esc(amount(x.id))}</span><span class="per">${esc(p.perMonth)}</span></p>
        ${zh ? `<p class="twd">${esc(twd(x.id))} ${esc(p.perMonth)}</p>` : ''}
        <p class="term">${esc(x.term)}</p>
        <p class="tier-text">${esc(x.text)}</p>
        ${x.lead ? `<p class="tier-lead">${esc(x.lead)}</p>` : ''}
        <ul class="plan-list">${x.items.map((i) => `<li>${icons.check}${esc(i)}</li>`).join('')}</ul>
        <a class="btn ${x.popular ? 'primary' : x.id === 'signature' ? 'ghost' : 'outline'} tier-btn" href="${L('/contactus')}">${esc(x.id === 'signature' ? p.apply : p.button)}</a>
      </article>`).join('')}
    </div>
  </section>

  <section class="white-band" id="compare">
    <div class="wrap">
      <p class="eyebrow">${esc(t.compare.kicker)}</p>
      <h2 class="mid">${esc(t.compare.title)}</h2>
      <div class="table-box">
        <table class="matrix">
          <thead><tr><th scope="col">${esc(t.compare.head)}</th>${pk.map((x) => `<th scope="col" class="${x.id}">${esc(x.name)}</th>`).join('')}</tr></thead>
          <tbody>
            <tr class="price-row"><th scope="row">${esc(t.compare.price)}</th>${pk.map((x) => `<td class="${x.id}"><strong>${esc(amount(x.id))}</strong> ${esc(p.perMonth)}${zh ? `<br><span class="twd-s">${esc(twd(x.id))}</span>` : ''}</td>`).join('')}</tr>
            ${t.compare.rows.map(([k, ...cells]) => `<tr><th scope="row">${esc(k)}</th>${cells.map((c, i) => `<td class="${pk[i].id}">${c === null ? '<span class="none">—</span>' : esc(c)}</td>`).join('')}</tr>`).join('')}
          </tbody>
        </table>
      </div>
      <p class="fine">${esc(t.compare.note)}</p>
    </div>
  </section>

  <section class="sand" id="extras">
    <div class="wrap">
      <div class="head-row">
        <div class="head-main">
          <p class="eyebrow">${esc(t.extras.kicker)}</p>
          <h2>${esc(t.extras.title)}</h2>
        </div>
        <p class="body narrow">${esc(t.extras.body)}</p>
      </div>
      <div class="extras">
        ${t.extras.list.map(([name, price, text]) => `
        <div class="extra">
          <h3>${esc(name)}</h3>
          <p class="extra-price">${esc(price)}</p>
          <p>${esc(text)}</p>
        </div>`).join('')}
      </div>
    </div>
  </section>

  <section class="wrap pr-work">
    <p class="eyebrow">${esc(t.work.kicker)}</p>
    <h2 class="wide">${esc(t.work.title)}</h2>
    <div class="work-row${quote ? '' : ' solo'}">
      <a class="case" href="${L(MZ.url)}">
        <div class="case-head">
          <span class="case-tag">${esc(t.work.caseTag)}</span>
          ${img(MZ.client.logo, MZ.client.name, 26)}
        </div>
        <h3>${esc(t.work.caseTitle)}</h3>
        <p>${esc(t.work.caseText)}</p>
        <div class="stats">${t.work.caseStats.map(([n, l]) => `<div><span class="stat-n">${esc(n)}</span><span class="stat-l">${esc(l)}</span></div>`).join('')}</div>
        <span class="insight-more">${esc(t.work.caseLink)} ${icons.arrow}</span>
      </a>
      ${quote}
    </div>
  </section>
${h.cta({ ...t.cta, secondaryHref: '/b2b-lead-generation' })}`;
  }
}

if (!customElements.get('polylocal-pricing')) customElements.define('polylocal-pricing', PolylocalPricing);
export default PolylocalPricing;
