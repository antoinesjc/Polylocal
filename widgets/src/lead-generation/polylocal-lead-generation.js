import { LG } from './i18n.js';
import { PolylocalPage } from '../shared/page.js';
import CSS from './styles.js';

const SERVICE_ICONS = [
  '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.2"/></svg>',
  '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 17l5-5 4 4 8-8"/><path d="M14 8h6v6"/></svg>',
  '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="9" cy="12" r="5.5"/><circle cx="15" cy="12" r="5.5"/></svg>',
];
const LONG_ARROW = '<svg class="long-arrow" viewBox="0 0 64 14" aria-hidden="true"><path d="M0 7h58M52 1l6 6-6 6"/></svg>';

class PolylocalLeadGeneration extends PolylocalPage {
  static css = CSS;

  page(lang, h) {
    const t = LG[lang];
    const { esc, L, icons } = h;
    return `
  <section class="hero ink">
    <div class="dots clay-dots" aria-hidden="true"></div>
    <div class="wrap lg-hero">
      <p class="eyebrow clay-light"><span class="rule"></span>${esc(t.hero.eyebrow)}</p>
      <div class="lg-hero-row">
        <h1 class="lg-h1">${esc(t.hero.title)} <span class="accent">${esc(t.hero.accent)}</span></h1>
        <div class="lg-hero-side">
          <p class="lead">${esc(t.hero.lead)}</p>
          <div class="btns">
            <a class="btn primary" href="${L('/contactus')}">${esc(t.hero.primary)}</a>
            <a class="btn ghost" href="#how">${esc(t.hero.secondary)}</a>
          </div>
        </div>
      </div>
    </div>
    <div class="wrap pipeline-wrap">
      <ol class="pipeline" aria-label="${esc(t.pipeline.label)}">
        ${t.pipeline.stages.map(([name, text], i) => `
        <li class="stage s${i}">
          <span class="stage-no">${esc(t.pipeline.stage)} ${i + 1}</span>
          <span class="stage-name">${esc(name)}</span>
          <span class="stage-text">${esc(text)}</span>
          <span class="stage-bar" aria-hidden="true"></span>
        </li>`).join('')}
      </ol>
    </div>
  </section>
${h.proof()}
  <section class="wrap split">
    <div class="split-a">
      <p class="eyebrow">${esc(t.problem.kicker)}</p>
      <h2>${esc(t.problem.title)}</h2>
      <p class="body">${esc(t.problem.body)}</p>
    </div>
    <ol class="numbered split-b">
      ${t.problem.items.map(([title, text], i) => `<li><span class="num">0${i + 1}</span><div><h3>${esc(title)}</h3><p>${esc(text)}</p></div></li>`).join('')}
    </ol>
  </section>

  <section class="sand">
    <div class="wrap">
      <p class="eyebrow">${esc(t.directions.kicker)}</p>
      <h2 class="wide">${esc(t.directions.title)}</h2>
      <div class="bridges">
        ${t.directions.rows.map((r) => `
        <div class="bridge ${r.tone}">
          <div class="bridge-route"><span>${esc(r.from)}</span>${LONG_ARROW}<span>${esc(r.to)}</span></div>
          <p>${esc(r.text)}</p>
          <span class="bridge-alt">${esc(r.alt)}</span>
        </div>`).join('')}
      </div>
    </div>
  </section>

  <section class="wrap lg-services" id="how">
    <p class="eyebrow">${esc(t.services.kicker)}</p>
    <h2 class="wide">${esc(t.services.title)}</h2>
    <div class="lg-cards">
      ${t.services.cards.map(([title, text], i) => `
      <article class="lg-card${i === 2 ? ' dark' : ''}">
        <span class="lg-icon">${SERVICE_ICONS[i]}</span>
        <h3>${esc(title)}</h3>
        <p>${esc(text)}</p>
      </article>`).join('')}
    </div>
  </section>

  <section class="white-band">
    <div class="wrap">
      <p class="eyebrow">${esc(t.engage.kicker)}</p>
      <h2 class="mid">${esc(t.engage.title)}</h2>
      <div class="plans">
        ${t.engage.plans.map((p, i) => `
        <div class="plan${i ? ' dark' : ''}">
          ${p.badge ? `<span class="plan-badge">${esc(p.badge)}</span>` : ''}
          <div class="plan-top"><h3>${esc(p.title)}</h3><span class="plan-tag">${esc(p.tag)}</span></div>
          <p class="plan-text">${esc(p.text)}</p>
          <ul class="plan-list">${p.items.map((x) => `<li>${icons.check}${esc(x)}</li>`).join('')}</ul>
          <a class="btn ${i ? 'primary' : 'outline'} plan-btn" href="${L('/contactus')}">${esc(t.engage.button)}</a>
        </div>`).join('')}
      </div>
    </div>
  </section>

  <section class="wrap split compare">
    <div class="split-a">
      <p class="eyebrow">${esc(t.compare.kicker)}</p>
      <h2>${esc(t.compare.title)}</h2>
      <p class="body">${esc(t.compare.body)}</p>
    </div>
    <div class="split-b table-box">
      <table>
        <thead><tr>${t.compare.head.map((x, i) => `<th scope="col"${i === 2 ? ' class="us"' : ''}>${esc(x)}</th>`).join('')}</tr></thead>
        <tbody>${t.compare.rows.map(([k, a, b]) => `<tr><th scope="row">${esc(k)}</th><td>${esc(a)}</td><td class="us">${esc(b)}</td></tr>`).join('')}</tbody>
      </table>
    </div>
  </section>
${h.cta({ ...t.cta, secondaryHref: '/digital-marketing' })}`;
  }
}

if (!customElements.get('polylocal-lead-generation')) customElements.define('polylocal-lead-generation', PolylocalLeadGeneration);
export default PolylocalLeadGeneration;
