import '../map/polylocal-map.js';
import { HOME } from './i18n.js';
import { PolylocalPage } from '../shared/page.js';

class PolylocalHome extends PolylocalPage {
  page(lang, h) {
    const t = HOME[lang];
    const { esc, L, icons } = h;
    return `

  <section class="hero ink">
    <div class="dots" aria-hidden="true"></div>
    <div class="wrap hero-top">
      <div class="hero-copy">
        <p class="eyebrow light"><span class="rule"></span>${esc(t.hero.eyebrow)}</p>
        <h1>${esc(t.hero.title[0])}<br><span class="accent">${esc(t.hero.title[1])}</span></h1>
      </div>
      <div class="hero-side">
        <p class="lead">${esc(t.hero.lead)}</p>
        <div class="btns">
          <a class="btn primary" href="${L('/contactus')}">${esc(t.hero.primary)}</a>
          <a class="btn ghost" href="#services">${esc(t.hero.secondary)}</a>
        </div>
      </div>
    </div>
    <div class="wrap hero-map">
      <polylocal-map lang="${lang}" cta-href="/about-us" cta-href-zh="/zh_TW/about-us"></polylocal-map>
    </div>
  </section>

${h.proof()}

  <section class="wrap split problem">
    <div class="split-a">
      <p class="eyebrow">${esc(t.problem.kicker)}</p>
      <h2>${esc(t.problem.title)}</h2>
      <p class="body">${esc(t.problem.body)}</p>
    </div>
    <ol class="numbered split-b">
      ${t.problem.items.map(([h, p], i) => `<li><span class="num">0${i + 1}</span><div><h3>${esc(h)}</h3><p>${esc(p)}</p></div></li>`).join('')}
    </ol>
  </section>

  <section class="sand">
    <div class="wrap">
      <div class="head-row">
        <div class="head-main"><p class="eyebrow">${esc(t.directions.kicker)}</p><h2>${esc(t.directions.title)}</h2></div>
        <p class="body narrow">${esc(t.directions.body)}</p>
      </div>
      <div class="directions">
        ${t.directions.cards.map((c) => `
        <article class="direction ${c.tone}">
          <div class="direction-top"><span class="dir-label">${esc(c.label)}</span><span class="dir-alt">${esc(c.alt)}</span></div>
          <h3>${esc(c.title)}</h3>
          <ul class="dash">${c.items.map((x) => `<li>${esc(x)}</li>`).join('')}</ul>
        </article>`).join('')}
      </div>
    </div>
  </section>

  <section class="wrap services" id="services">
    <p class="eyebrow">${esc(t.services.kicker)}</p>
    <h2 class="wide">${esc(t.services.title)}</h2>
    <div class="service-grid">
      ${t.services.cards.map((c, i) => `
      <a class="service ${i ? 'dark' : 'light'}" href="${L(c.href)}" aria-label="${esc(`${t.services.more}: ${c.title}`)}">
        <div class="service-top"><span class="service-tag">${esc(c.tag)}</span><span class="round">${icons.diag}</span></div>
        <h3>${esc(c.title)}</h3>
        <p>${esc(c.body)}</p>
        <div class="chips">${c.chips.map((x) => `<span>${esc(x)}</span>`).join('')}</div>
      </a>`).join('')}
    </div>
  </section>

  <section class="white-band">
    <div class="wrap">
      <p class="eyebrow">${esc(t.method.kicker)}</p>
      <h2 class="mid">${esc(t.method.title)}</h2>
      <div class="steps">
        ${t.method.steps.map(([h, p], i) => `<div class="step"><div class="step-num">0${i + 1}</div><h3>${esc(h)}</h3><p>${esc(p)}</p></div>`).join('')}
      </div>
    </div>
  </section>

  <section class="wrap split ground">
    <div class="split-a">
      <p class="eyebrow">${esc(t.ground.kicker)}</p>
      <h2>${esc(t.ground.title)}</h2>
      <p class="body">${esc(t.ground.body)}</p>
      <a class="underline" href="${L('/about-us')}">${esc(t.ground.link)}${icons.arrow}</a>
    </div>
    <div class="tiles split-b">
      ${t.ground.tiles.map((x, i) => `<div class="tile t${i}"><span class="tile-big${x.zh ? ' zh' : ''}">${esc(x.big)}</span><h3>${esc(x.title)}</h3><p>${esc(x.text)}</p></div>`).join('')}
    </div>
  </section>

  <section class="sand">
    <div class="wrap">
      <div class="head-row tight"><h2 class="mid">${esc(t.insights.title)}</h2><a class="underline" href="${L('/insight')}">${esc(t.insights.all)}${icons.arrow}</a></div>
      <div class="insights">
        ${t.insights.cards.map((c, i) => `
        <a class="insight i${i}" href="${L(c.href)}">
          <span class="insight-tag">${esc(c.tag)}</span>
          <p>${esc(c.text)}</p>
          <span class="insight-more">${esc(t.insights.read)}${icons.arrow}</span>
        </a>`).join('')}
      </div>
    </div>
  </section>

${h.cta({ ...t.cta, secondaryHref: '#services' })}
`;
  }
}

if (!customElements.get('polylocal-home')) customElements.define('polylocal-home', PolylocalHome);
export default PolylocalHome;
