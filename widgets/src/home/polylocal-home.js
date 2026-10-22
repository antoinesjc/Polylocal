import '../map/polylocal-map.js';
import { HOME } from './i18n.js';
import { detectLang, localHref, watchLang, loadFonts, assetUrl, esc } from '../shared/lang.js';
import CSS from './styles.js';

const LOGOS = {
  featured: [{ file: 'logos/the-diplomat.png', alt: 'The Diplomat', h: 24 }],
  partners: [
    { file: 'logos/mission-grey.png', alt: 'Mission Grey', h: 30 },
    { file: 'logos/formosa-network.png', alt: 'Formosa Network', h: 54 },
    { file: 'logos/founduz.svg', alt: 'Founduz', h: 26 },
  ],
};

const ARROW = '<svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
const DIAG = '<svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17L17 7M9 7h8v8"/></svg>';
const CHECK = '<svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6L9 17l-5-5"/></svg>';

class PolylocalHome extends HTMLElement {
  static get observedAttributes() { return ['lang', 'contained']; }

  constructor() {
    super();
    this.root = this.attachShadow({ mode: 'open' });
    this.onResize = () => this.fitWidth();
    this.root.addEventListener('click', (e) => this.onClick(e));
  }

  connectedCallback() {
    loadFonts();
    this.render();
    this.stopWatching = watchLang(() => this.render());
    window.addEventListener('resize', this.onResize);
    requestAnimationFrame(() => this.fitWidth());
  }

  disconnectedCallback() {
    this.stopWatching?.();
    window.removeEventListener('resize', this.onResize);
  }

  attributeChangedCallback() {
    if (this.isConnected && this.root.childElementCount) { this.render(); this.fitWidth(); }
  }

  // Odoo puts embedded code inside a centred container. Stretch to the full
  // window width so the dark sections run edge to edge (unless `contained`).
  fitWidth() {
    this.style.width = '';
    this.style.marginLeft = '';
    if (this.hasAttribute('contained') || !this.parentElement) return;
    const parent = this.parentElement.getBoundingClientRect();
    const pad = parseFloat(getComputedStyle(this.parentElement).paddingLeft) || 0;
    const viewport = document.documentElement.clientWidth;
    this.style.display = 'block';
    this.style.width = `${viewport}px`;
    this.style.maxWidth = 'none';
    this.style.marginLeft = `${-(parent.left + pad)}px`;
  }

  // In-page links (#services, #contact) live inside the shadow root.
  onClick(e) {
    const a = e.composedPath().find((n) => n.tagName === 'A');
    const href = a?.getAttribute('href');
    if (!href || !href.startsWith('#')) return;
    const target = this.root.getElementById(href.slice(1));
    if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
  }

  render() {
    const lang = detectLang(this);
    this.setAttribute('data-lang', lang);
    const t = HOME[lang];
    const L = (p) => esc(localHref(p, lang));
    const logo = (l) => `<img src="${esc(assetUrl(l.file, this))}" alt="${esc(l.alt)}" style="height:${l.h}px" loading="lazy">`;

    this.root.innerHTML = `<style>${CSS}</style>
<div class="page" lang="${lang}">

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
          <a class="btn primary" href="#contact">${esc(t.hero.primary)}</a>
          <a class="btn ghost" href="#services">${esc(t.hero.secondary)}</a>
        </div>
      </div>
    </div>
    <div class="wrap hero-map">
      <polylocal-map lang="${lang}" cta-href="/about-us" cta-href-zh="/zh_TW/about-us"></polylocal-map>
    </div>
  </section>

  <section class="proof">
    <div class="wrap proof-row">
      <div class="proof-col featured">
        <p class="label">${esc(t.proof.featured)}</p>
        <div class="logos">${LOGOS.featured.map(logo).join('')}</div>
      </div>
      <div class="proof-col partners">
        <div class="proof-head"><p class="label">${esc(t.proof.partners)}</p><p class="note">${esc(t.proof.partnersNote)}</p></div>
        <div class="logos">${LOGOS.partners.map(logo).join('')}</div>
      </div>
    </div>
  </section>

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
        <div class="service-top"><span class="service-tag">${esc(c.tag)}</span><span class="round">${DIAG}</span></div>
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
      <a class="underline" href="${L('/about-us')}">${esc(t.ground.link)}${ARROW}</a>
    </div>
    <div class="tiles split-b">
      ${t.ground.tiles.map((x, i) => `<div class="tile t${i}"><span class="tile-big${x.zh ? ' zh' : ''}">${esc(x.big)}</span><h3>${esc(x.title)}</h3><p>${esc(x.text)}</p></div>`).join('')}
    </div>
  </section>

  <section class="sand">
    <div class="wrap">
      <div class="head-row tight"><h2 class="mid">${esc(t.insights.title)}</h2><a class="underline" href="${L('/blog')}">${esc(t.insights.all)}${ARROW}</a></div>
      <div class="insights">
        ${t.insights.cards.map((c, i) => `
        <a class="insight i${i}" href="${L(c.href)}">
          <span class="insight-tag">${esc(c.tag)}</span>
          <p>${esc(c.text)}</p>
          <span class="insight-more">${esc(t.insights.read)}${ARROW}</span>
        </a>`).join('')}
      </div>
    </div>
  </section>

  <section class="ink cta" id="contact">
    <div class="wrap cta-row">
      <div class="cta-copy">
        <p class="eyebrow light">${esc(t.cta.kicker)}</p>
        <h2 class="big">${esc(t.cta.title)}</h2>
        <p class="lead">${esc(t.cta.body)}</p>
      </div>
      <div class="cta-box">
        <ul class="checks">${t.cta.checks.map((x) => `<li>${CHECK}${esc(x)}</li>`).join('')}</ul>
        <a class="btn primary block" href="${L('/contactus')}">${esc(t.cta.primary)}</a>
        <a class="btn ghost block" href="#services">${esc(t.cta.secondary)}</a>
      </div>
    </div>
  </section>
</div>`;
  }
}

if (!customElements.get('polylocal-home')) customElements.define('polylocal-home', PolylocalHome);
export default PolylocalHome;
