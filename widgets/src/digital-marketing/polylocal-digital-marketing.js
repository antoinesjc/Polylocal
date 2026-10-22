import { DM } from './i18n.js';
import { PolylocalPage } from '../shared/page.js';
import CSS from './styles.js';

// The search mock-up in the hero is always in Traditional Chinese on purpose:
// it shows what a Taiwanese buyer sees when a European brand ranks first.
const SEARCH = {
  query: '歐洲 精密機械 供應商 台灣',
  url: 'yourbrand.eu › zh-tw',
  title: '歐洲精密機械專家｜台灣在地服務窗口',
  text: '在地化內容、台灣案例與中文聯絡窗口，讓買家第一眼就信任你。',
};

class PolylocalDigitalMarketing extends PolylocalPage {
  static css = CSS;

  page(lang, h) {
    const t = DM[lang];
    const { esc, L, icons } = h;
    return `
  <section class="hero ink">
    <div class="dots" aria-hidden="true"></div>
    <div class="wrap dm-hero">
      <div class="dm-hero-copy">
        <p class="eyebrow light"><span class="rule"></span>${esc(t.hero.eyebrow)}</p>
        <h1 class="dm-h1">${esc(t.hero.title)} <span class="sky-accent">${esc(t.hero.accent)}</span></h1>
        <p class="lead dm-lead">${esc(t.hero.lead)}</p>
        <div class="btns">
          <a class="btn primary" href="${L('/contactus')}">${esc(t.hero.primary)}</a>
          <a class="btn ghost" href="#services">${esc(t.hero.secondary)}</a>
        </div>
      </div>
      <figure class="search" role="img" aria-label="${esc(t.visual.label)}">
        <div class="search-card" lang="zh-TW">
          <div class="search-box"><svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg>${esc(SEARCH.query)}</div>
          <div class="result top">
            <span class="result-badge" lang="${lang}">${esc(t.visual.badge)}</span>
            <div class="result-url">${esc(SEARCH.url)}</div>
            <div class="result-title">${esc(SEARCH.title)}</div>
            <div class="result-text">${esc(SEARCH.text)}</div>
          </div>
          <div class="result ghost-row" aria-hidden="true"><i style="width:40%"></i><b style="width:75%"></b><i style="width:90%"></i></div>
          <div class="result ghost-row faint" aria-hidden="true"><i style="width:35%"></i><b style="width:68%"></b></div>
        </div>
        <figcaption class="search-caption"><span>${esc(t.visual.caption)}</span><span>${esc(t.visual.tagline)}</span></figcaption>
      </figure>
    </div>
  </section>
${h.proof()}
  <section class="wrap split">
    <div class="split-a">
      <p class="eyebrow sky-text">${esc(t.problem.kicker)}</p>
      <h2>${esc(t.problem.title)}</h2>
      <p class="body">${esc(t.problem.body)}</p>
    </div>
    <div class="letters split-b">
      ${t.problem.items.map(([title, text], i) => `<div class="letter"><span class="letter-mark">${'ABCD'[i]}</span><h3>${esc(title)}</h3><p>${esc(text)}</p></div>`).join('')}
    </div>
  </section>

  <section class="approach">
    <div class="wrap approach-row">
      <h2 class="approach-title">${esc(t.approach.title[0])}<br>${esc(t.approach.title[1])}</h2>
      <div class="approach-points">
        ${t.approach.points.map(([title, text]) => `<div class="approach-point"><h3>${esc(title)}</h3><p>${esc(text)}</p></div>`).join('')}
      </div>
    </div>
  </section>

  <section class="wrap dm-services" id="services">
    <div class="head-row">
      <div class="head-main"><p class="eyebrow sky-text">${esc(t.services.kicker)}</p><h2>${esc(t.services.title)}</h2></div>
      <p class="body narrow">${esc(t.services.body)}</p>
    </div>
    <ol class="rows">
      ${t.services.rows.map((r, i) => `
      <li class="row">
        <span class="row-num">0${i + 1}</span>
        <h3>${esc(r.title)}</h3>
        <div class="row-body"><p>${esc(r.text)}</p><div class="chips sky-chips">${r.chips.map((c) => `<span>${esc(c)}</span>`).join('')}</div></div>
      </li>`).join('')}
    </ol>
    <div class="check-offer">
      <div class="offer-main">
        <div class="offer-top"><span class="row-num light">05</span><span class="offer-badge">${esc(t.services.featured.badge)}</span></div>
        <h3>${esc(t.services.featured.title)}</h3>
        <p>${esc(t.services.featured.text)}</p>
      </div>
      <div class="offer-side">
        <ul class="checks sky-checks">${t.services.featured.items.map((x) => `<li>${icons.check}${esc(x)}</li>`).join('')}</ul>
        <a class="btn light-btn" href="${L('/contactus')}">${esc(t.services.featured.button)}</a>
      </div>
    </div>
  </section>

  <section class="sand">
    <div class="wrap">
      <p class="eyebrow sky-text">${esc(t.markets.kicker)}</p>
      <h2 class="mid markets-title">${esc(t.markets.title)}</h2>
      <div class="markets">
        ${t.markets.cards.map((c) => `
        <article class="market ${c.tone}">
          <div class="market-top"><h3>${esc(c.name)}</h3><span class="market-alt">${esc(c.alt)}</span></div>
          <p class="market-langs">${esc(c.langs)}</p>
          <ul>${c.items.map((x) => `<li>${esc(x)}</li>`).join('')}</ul>
        </article>`).join('')}
      </div>
    </div>
  </section>

  <section class="white-band">
    <div class="wrap faq-row">
      <h2 class="mid faq-title">${esc(t.faq.title)}</h2>
      <div class="faq">
        ${t.faq.items.map(([q, a], i) => `
        <details${i === 0 ? ' open' : ''}>
          <summary>${esc(q)}<span class="plus" aria-hidden="true">+</span></summary>
          <p>${esc(a)}</p>
        </details>`).join('')}
      </div>
    </div>
  </section>
${h.cta({ ...t.cta, secondaryHref: '/b2b-lead-generation' })}`;
  }
}

if (!customElements.get('polylocal-digital-marketing')) customElements.define('polylocal-digital-marketing', PolylocalDigitalMarketing);
export default PolylocalDigitalMarketing;
