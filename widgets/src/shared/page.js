// Base class for full-page widgets (homepage, service pages, ...).
// Handles: language detection and live switching, brand fonts, stretching to
// full window width inside Odoo's embed container, and in-page anchor links.
// A page widget extends it and implements `page(lang, h)` returning HTML.
import { detectLang, localHref, watchLang, loadFonts, assetUrl, esc } from './lang.js';
import { COMMON, LOGOS, ICONS } from './common.js';
import BASE_CSS from './styles.js';

export class PolylocalPage extends HTMLElement {
  static get observedAttributes() { return ['lang', 'contained']; }
  static css = '';

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
  // window width so coloured sections run edge to edge (unless `contained`).
  fitWidth() {
    this.style.width = '';
    this.style.marginLeft = '';
    if (this.hasAttribute('contained') || !this.parentElement) return;
    const parent = this.parentElement.getBoundingClientRect();
    const pad = parseFloat(getComputedStyle(this.parentElement).paddingLeft) || 0;
    this.style.display = 'block';
    this.style.width = `${document.documentElement.clientWidth}px`;
    this.style.maxWidth = 'none';
    this.style.marginLeft = `${-(parent.left + pad)}px`;
  }

  // In-page links (#services, #contact) point inside the shadow root.
  onClick(e) {
    const a = e.composedPath().find((n) => n.tagName === 'A');
    const href = a?.getAttribute('href');
    if (!href || !href.startsWith('#')) return;
    const target = this.root.getElementById(href.slice(1));
    if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
  }

  helpers(lang) {
    const c = COMMON[lang];
    const L = (p) => esc(localHref(p, lang));
    const logo = (l) => `<img src="${esc(assetUrl(l.file, this))}" alt="${esc(l.alt)}" style="height:${l.h}px" loading="lazy">`;
    return {
      lang, esc, L, icons: ICONS, common: c,
      // Press and partner logos. Used on the homepage only.
      proof: () => `
  <section class="proof">
    <div class="wrap proof-row">
      <div class="proof-col featured">
        <p class="label">${esc(c.proof.featured)}</p>
        <div class="logos">${LOGOS.featured.map(logo).join('')}</div>
      </div>
      <div class="proof-col partners">
        <div class="proof-head"><p class="label">${esc(c.proof.partners)}</p><p class="note">${esc(c.proof.partnersNote)}</p></div>
        <div class="logos">${LOGOS.partners.map(logo).join('')}</div>
      </div>
    </div>
  </section>`,
      // Closing dark call to action. `primary` goes to the contact page.
      cta: ({ kicker, title, body, primary, secondary, secondaryHref }) => `
  <section class="ink cta" id="contact">
    <div class="wrap cta-row">
      <div class="cta-copy">
        <p class="eyebrow light">${esc(kicker)}</p>
        <h2 class="big">${esc(title)}</h2>
        <p class="lead">${esc(body)}</p>
      </div>
      <div class="cta-box">
        <ul class="checks">${c.checks.map((x) => `<li>${ICONS.check}${esc(x)}</li>`).join('')}</ul>
        <a class="btn primary block" href="${L('/contactus')}">${esc(primary || c.contact)}</a>
        <a class="btn ghost block" href="${secondaryHref.startsWith('#') ? secondaryHref : L(secondaryHref)}">${esc(secondary)}</a>
      </div>
    </div>
  </section>`,
    };
  }

  render() {
    const lang = detectLang(this);
    this.setAttribute('data-lang', lang);
    this.root.innerHTML = `<style>${BASE_CSS}${this.constructor.css}</style><div class="page" lang="${lang}">${this.page(lang, this.helpers(lang))}</div>`;
  }

  page() { return ''; }
}
