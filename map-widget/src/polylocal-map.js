import MAP from './map-data.js';
import { STRINGS, detectLang } from './i18n.js';

const HUBS = ['taipei', 'warsaw', 'brussels'];
const SVG_NS = 'http://www.w3.org/2000/svg';

// Which region layers each hub lights up.
const HUB_LAYERS = {
  taipei: ['asia', 'asiaCore'],
  warsaw: ['cee', 'ceeCore'],
  brussels: ['eu'],
};
// Pins drawn on the map. `asiaOnly` pins appear only while Taipei is selected.
const PINS = [
  { city: 'taipei', hub: 'taipei', tone: 'clay', major: true, side: 'left' },
  { city: 'singapore', hub: 'taipei', tone: 'clay', major: false, side: 'right', asiaOnly: true },
  { city: 'warsaw', hub: 'warsaw', tone: 'clay', major: true, side: 'right' },
  { city: 'brussels', hub: 'brussels', tone: 'sky', major: true, side: 'left' },
];
const COORDS = {
  taipei: '25.03° N · 121.56° E',
  warsaw: '52.23° N · 21.01° E',
  brussels: '50.85° N · 4.35° E',
};

const CSS = `
:host{
  --pl-ink:#17222A; --pl-ink-2:#1B2830; --pl-land:#2C3B42; --pl-border:#1A252A;
  --pl-grat:rgba(129,174,196,.08); --pl-text:#FFFFFF; --pl-muted:rgba(255,255,255,.78);
  --pl-clay:#B57A72; --pl-clay-hi:#C98B82; --pl-clay-lt:#D9A69E; --pl-clay-xl:#E8C2BB;
  --pl-sky:#81AEC4; --pl-sky-lt:#A9CADB; --pl-sky-xl:#C8DFEA;
  --pl-card:#FFFFFF; --pl-card-text:#1E2A30; --pl-card-muted:#3C4A50; --pl-card-line:#ECE6DF;
  --pl-font:'Manrope','Open Sans',system-ui,sans-serif;
  --pl-font-zh:'Noto Sans TC','PingFang TC','Microsoft JhengHei',system-ui,sans-serif;
  display:block; color:var(--pl-text); font-family:var(--pl-font);
  -webkit-font-smoothing:antialiased;
}
:host([theme="light"]){
  --pl-ink-2:#F6F3EF; --pl-land:#E3E0DC; --pl-border:#F7F4F1; --pl-grat:rgba(113,136,145,.10);
  --pl-text:#17222A; --pl-muted:#3C4A50;
}
:host([data-lang="zh-TW"]){ font-family:var(--pl-font-zh); }
*,*::before,*::after{box-sizing:border-box}
button{font:inherit}
.bar{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:16px;padding:18px 0;border-top:1px solid color-mix(in srgb,currentColor 14%,transparent)}
.tabs,.views{display:flex;flex-wrap:wrap;gap:8px}
.tab{min-height:44px;padding:11px 18px;border-radius:999px;cursor:pointer;font-weight:700;font-size:14px;
  border:1px solid color-mix(in srgb,currentColor 22%,transparent);background:transparent;color:inherit;transition:background .2s,color .2s,border-color .2s}
.tab[aria-pressed="true"]{background:var(--pl-text);color:var(--pl-ink-2);border-color:var(--pl-text)}
:host(:not([theme="light"])) .tab[aria-pressed="true"]{color:var(--pl-ink)}
.views{gap:4px;padding:4px;border-radius:999px;border:1px solid color-mix(in srgb,currentColor 16%,transparent)}
.view{min-height:40px;padding:10px 16px;border-radius:999px;border:0;cursor:pointer;font-weight:700;font-size:13px;background:transparent;color:var(--pl-muted)}
.view[aria-pressed="true"]{background:var(--pl-clay);color:var(--pl-ink)}
button:focus-visible{outline:2px solid var(--pl-sky-lt);outline-offset:2px}

.body{display:flex;flex-wrap:wrap;gap:24px;align-items:flex-start}
.stage{flex:999 1 560px;min-width:0;position:relative;aspect-ratio:${MAP.width} / ${MAP.height};overflow:hidden;border-radius:4px;
  background:var(--pl-ink-2);border:1px solid color-mix(in srgb,currentColor 8%,transparent)}
svg.map{position:absolute;inset:0;width:100%;height:100%;display:block}
.grat{fill:none;stroke:var(--pl-grat);stroke-width:.8}
.land{fill:var(--pl-land);stroke:var(--pl-border);stroke-width:.7;stroke-linejoin:round;vector-effect:non-scaling-stroke}
.grat{vector-effect:non-scaling-stroke}
.layer{opacity:0;transition:opacity .6s ease;stroke-width:.9;stroke-linejoin:round;vector-effect:non-scaling-stroke;visibility:hidden}
.layer.on{opacity:1;visibility:visible}
.layer:not(.on){transition:opacity .6s ease,visibility 0s .6s}
.asia,.cee{fill:color-mix(in srgb,var(--pl-clay-hi) 45%,transparent);stroke:var(--pl-clay-xl)}
.asiaCore,.ceeCore{fill:var(--pl-clay-hi);stroke:var(--pl-clay-xl)}
.eu{fill:color-mix(in srgb,var(--pl-sky) 55%,transparent);stroke:var(--pl-sky-xl)}
:host([theme="light"]) .asiaCore,:host([theme="light"]) .ceeCore{fill:var(--pl-clay);stroke:#F7F4F1}
:host([theme="light"]) .asia,:host([theme="light"]) .cee{stroke:#F7F4F1}
:host([theme="light"]) .eu{stroke:#3E6C82}
.arc{fill:none;vector-effect:non-scaling-stroke}
.arc.base{stroke-width:1;stroke-opacity:.35}
.arc.flow{stroke-width:2;stroke-linecap:round;stroke-dasharray:4 10;animation:flow 2.4s linear infinite;stroke-opacity:.25;transition:stroke-opacity .4s}
.arc.flow.on{stroke-opacity:.95}
.arc.link{stroke:var(--pl-text);stroke-width:1.4;stroke-dasharray:3 5;stroke-opacity:.55}
.clay{stroke:var(--pl-clay-lt)} .clay.flow{stroke:var(--pl-clay-xl)}
.sky{stroke:var(--pl-sky-lt)} .sky.flow{stroke:var(--pl-sky-xl)}
@keyframes flow{to{stroke-dashoffset:-56}}
:host([theme="light"]) .arc.clay{stroke:var(--pl-clay)}
:host([theme="light"]) .arc.sky{stroke:#4F86A0}
:host([theme="light"]) .pin{--pl-sky-lt:#6E9FB7;--pl-clay-lt:var(--pl-clay)}

.pins{position:absolute;inset:0;pointer-events:none}
.pin{position:absolute;width:44px;height:44px;margin:-22px 0 0 -22px;padding:0;border:0;background:transparent;cursor:pointer;pointer-events:auto;
  transition:opacity .4s}
.pin[hidden]{display:block;opacity:0;pointer-events:none}
.dot,.pulse{position:absolute;left:50%;top:50%;border-radius:50%;width:var(--s);height:var(--s);background:var(--c)}
.dot{transform:translate(-50%,-50%);box-shadow:0 0 0 3px var(--pl-ink-2)}
.pin.active .dot{box-shadow:0 0 0 3px var(--pl-ink-2),0 0 0 5px var(--c)}
.pulse{display:none;animation:pulse 2.2s ease-out infinite}
.pin.active .pulse{display:block}
@keyframes pulse{0%{transform:translate(-50%,-50%) scale(.6);opacity:.75}100%{transform:translate(-50%,-50%) scale(2.6);opacity:0}}
.pin .label{position:absolute;top:50%;transform:translateY(-50%);white-space:nowrap;font-weight:700;font-size:13px;color:#FFFFFF;
  background:rgba(23,34,42,.72);padding:5px 9px;border-radius:2px}
.pin.left .label{right:calc(50% + 14px)} .pin.right .label{left:calc(50% + 14px)}
.pin.active .label{font-weight:800;background:rgba(23,34,42,.92)}
.pin.minor .label{font-size:12px}

.chip{position:absolute;display:flex;align-items:center;gap:10px;background:rgba(23,34,42,.88);border:1px solid rgba(255,255,255,.16);
  padding:9px 13px;border-radius:2px;font-size:13px;font-weight:800;color:#FFFFFF}
.region{left:16px;top:16px}
.swatch{width:10px;height:10px;display:inline-block}
.swatch.clay{background:var(--pl-clay-hi);border:1px solid var(--pl-clay-xl)}
.swatch.sky{background:color-mix(in srgb,var(--pl-sky) 80%,transparent);border:1px solid var(--pl-sky-xl)}
.hint{left:16px;bottom:14px;font-size:12px;font-weight:600;padding:8px 12px;background:rgba(23,34,42,.78);border:0;color:rgba(255,255,255,.82)}
.distance{right:18px;top:50%;transform:translateY(-50%);font-weight:700;opacity:0;transition:opacity .4s;pointer-events:none}
.distance.on{opacity:1}
.distance svg{width:18px;height:18px;fill:none;stroke:var(--pl-clay-lt);stroke-width:2;stroke-linecap:round}

.card{flex:1 1 300px;min-width:0;background:var(--pl-card);color:var(--pl-card-text);border-radius:4px;padding:32px;display:flex;flex-direction:column;gap:18px}
.card .top{display:flex;align-items:center;justify-content:space-between;gap:12px}
.kicker{font-size:12px;font-weight:800;letter-spacing:2px;text-transform:uppercase;color:var(--accent-text)}
:host([data-lang="zh-TW"]) .kicker{letter-spacing:1px}
.alt{font-size:22px;font-weight:700;color:var(--accent);font-family:'Noto Serif TC',var(--pl-font-zh)}
:host([data-lang="zh-TW"]) .alt{font-family:var(--pl-font);font-size:18px;font-weight:800;letter-spacing:.5px}
.card h3{margin:0;font-weight:800;font-size:32px;line-height:1.1;letter-spacing:-.02em;color:#17222A}
.coords{font-size:12px;font-weight:600;color:#56656C;letter-spacing:.6px}
.card p{margin:0;font-size:15px;line-height:1.7;color:var(--pl-card-muted)}
.card ul{margin:0;padding:18px 0 0;list-style:none;display:flex;flex-direction:column;gap:10px;border-top:1px solid var(--pl-card-line)}
.card li{display:flex;gap:12px;font-size:14px;line-height:1.5}
.card li::before{content:"";flex:0 0 auto;width:6px;height:6px;margin-top:8px;background:var(--accent)}
.cta{margin-top:auto;font-weight:800;font-size:14px;color:#17222A;text-decoration:none;display:inline-flex;align-items:center;gap:8px}
.cta:hover{text-decoration:underline}
.cta svg{width:16px;height:16px;fill:none;stroke:currentColor;stroke-width:2.2;stroke-linecap:round}
.card[data-tone="clay"]{--accent:var(--pl-clay);--accent-text:#9A5C54}
.card[data-tone="sky"]{--accent:var(--pl-sky);--accent-text:#3E6C82}

@media (max-width:640px){
  .pin .label{font-size:11px;padding:4px 7px}
  .pin.brussels .label{right:auto;left:50%;top:auto;bottom:calc(50% + 10px);transform:translateX(-50%)}
  .region{top:auto;bottom:8px;left:8px;font-size:11px;padding:6px 9px;gap:7px}
  .hint{display:none}
  .card{padding:24px}
  .card h3{font-size:26px}
}
@media (prefers-reduced-motion:reduce){
  .pin,.layer,.arc.flow{transition:none}
  .arc.flow,.pulse{animation:none}
}
`;

const ARROW = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';

class PolylocalMap extends HTMLElement {
  static get observedAttributes() { return ['lang', 'hub', 'view', 'theme', 'cta-href']; }

  constructor() {
    super();
    this.state = { hub: 'warsaw', view: 'corridor' };
    this.root = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const hub = this.getAttribute('hub');
    if (HUBS.includes(hub)) this.state.hub = hub;
    if (this.getAttribute('view') === 'europe') this.state.view = 'europe';
    if (!this.built) this.build();
    this.applyLang();
    this.update();
    // Re-check the language if the page changes <html lang> after load.
    this.langObserver = new MutationObserver(() => this.applyLang());
    this.langObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
  }

  disconnectedCallback() { this.langObserver?.disconnect(); }

  attributeChangedCallback(name, _old, value) {
    if (!this.built) return;
    if (name === 'hub' && HUBS.includes(value)) this.select(value, false);
    else if (name === 'view') this.setView(value === 'europe' ? 'europe' : 'corridor', false);
    else if (name === 'lang' || name === 'cta-href') this.applyLang();
  }

  get t() { return STRINGS[this._lang] || STRINGS.en; }

  build() {
    this.built = true;
    const r = this.root;
    r.innerHTML = `<style>${CSS}</style>
      <div class="bar">
        <div class="tabs" role="group"></div>
        <div class="views" role="group">
          <button type="button" class="view" data-view="corridor"></button>
          <button type="button" class="view" data-view="europe"></button>
        </div>
      </div>
      <div class="body">
        <div class="stage" role="group">
          <svg class="map" viewBox="0 0 ${MAP.width} ${MAP.height}" preserveAspectRatio="none" aria-hidden="true"></svg>
          <div class="pins"></div>
          <div class="chip region"><span class="swatch"></span><span class="region-text"></span></div>
          <div class="chip distance"><span class="distance-text"></span>${ARROW}</div>
          <div class="chip hint"></div>
        </div>
        <aside class="card" aria-live="polite">
          <div class="top"><span class="kicker"></span><span class="alt"></span></div>
          <h3></h3>
          <div class="coords"></div>
          <p></p>
          <ul></ul>
          <a class="cta"><span></span>${ARROW}</a>
        </aside>
      </div>`;

    // Map SVG
    const svg = r.querySelector('svg.map');
    const add = (tag, attrs) => {
      const el = document.createElementNS(SVG_NS, tag);
      for (const [k, v] of Object.entries(attrs)) el.setAttribute(k, v);
      svg.appendChild(el);
      return el;
    };
    add('path', { class: 'grat', d: MAP.graticule });
    add('path', { class: 'land', d: MAP.land });
    this.layers = {};
    for (const key of ['eu', 'cee', 'ceeCore', 'asia', 'asiaCore']) {
      this.layers[key] = add('path', { class: `layer ${key}`, d: MAP.regions[key] });
    }
    add('path', { class: 'arc base clay', d: MAP.arcs.taipeiWarsaw });
    add('path', { class: 'arc base sky', d: MAP.arcs.taipeiBrussels });
    this.flows = {
      warsaw: add('path', { class: 'arc flow clay', d: MAP.arcs.taipeiWarsaw }),
      brussels: add('path', { class: 'arc flow sky', d: MAP.arcs.taipeiBrussels }),
    };
    add('path', { class: 'arc link', d: MAP.arcs.warsawBrussels });

    // Hub tabs
    const tabs = r.querySelector('.tabs');
    this.tabs = {};
    for (const hub of HUBS) {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'tab';
      b.addEventListener('click', () => this.select(hub));
      tabs.appendChild(b);
      this.tabs[hub] = b;
    }

    // Pins
    const pins = r.querySelector('.pins');
    this.pins = PINS.map((p) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = `pin ${p.city} ${p.side} ${p.major ? 'major' : 'minor'}`;
      b.style.setProperty('--c', p.tone === 'sky' ? 'var(--pl-sky-lt)' : 'var(--pl-clay-lt)');
      b.innerHTML = '<span class="pulse" aria-hidden="true"></span><span class="dot" aria-hidden="true"></span><span class="label"></span>';
      b.addEventListener('click', () => this.select(p.hub));
      pins.appendChild(b);
      return { ...p, el: b };
    });

    r.querySelectorAll('.view').forEach((b) => b.addEventListener('click', () => this.setView(b.dataset.view)));
  }

  applyLang() {
    const lang = detectLang(this);
    this._lang = lang;
    this.setAttribute('data-lang', lang);
    const t = this.t;
    const r = this.root;
    r.querySelector('.tabs').setAttribute('aria-label', t.hubsLabel);
    r.querySelector('.views').setAttribute('aria-label', t.viewLabel);
    r.querySelector('[data-view="corridor"]').textContent = t.viewCorridor;
    r.querySelector('[data-view="europe"]').textContent = t.viewEurope;
    r.querySelector('.stage').setAttribute('aria-label', t.mapLabel);
    r.querySelector('.hint').textContent = t.hint;
    for (const hub of HUBS) this.tabs[hub].textContent = t.hubs[hub].tab;
    for (const p of this.pins) {
      p.el.querySelector('.label').textContent = t.hubs[p.city].pin;
      p.el.setAttribute('aria-label', t.show(t.hubs[p.hub].title));
    }
    const cta = r.querySelector('.cta');
    cta.querySelector('span').textContent = t.cta;
    const href = lang === 'zh-TW'
      ? (this.getAttribute('cta-href-zh') || '/zh_TW/about-us')
      : (this.getAttribute('cta-href') || '/about-us');
    cta.setAttribute('href', href);
    this.update();
  }

  select(hub, emit = true) {
    if (!HUBS.includes(hub)) return;
    this.state.hub = hub;
    // Taipei is not visible in the Europe view, so go back to the full map.
    if (hub === 'taipei') this.state.view = 'corridor';
    this.update();
    if (emit) this.dispatchEvent(new CustomEvent('hubchange', { detail: { hub }, bubbles: true, composed: true }));
  }

  setView(view, emit = true) {
    this.state.view = view;
    if (view === 'europe' && this.state.hub === 'taipei') this.state.hub = 'warsaw';
    this.update();
    if (emit) this.dispatchEvent(new CustomEvent('viewchange', { detail: { view }, bubbles: true, composed: true }));
  }

  // 0 = full corridor, 1 = Europe. Animates the SVG viewBox and keeps pins in place.
  zoomTo(target) {
    if (this.zoomTarget === target) return;
    this.zoomTarget = target;
    cancelAnimationFrame(this.zoomFrame);
    const from = this.zoomLevel ?? target;
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const start = performance.now();
    const step = (now) => {
      const k = reduce || from === target ? 1 : Math.min(1, (now - start) / 1000);
      const e = 1 - Math.pow(1 - k, 3);
      this.setZoom(from + (target - from) * e);
      if (k < 1) this.zoomFrame = requestAnimationFrame(step);
    };
    step(start);
  }

  setZoom(z) {
    this.zoomLevel = z;
    const { width: W, height: H } = MAP;
    const { scale: S, originX: OX, originY: OY } = MAP.zoom;
    const s = 1 + (S - 1) * z;                     // current scale
    const vw = W / s;
    const vh = H / s;
    const vx = (OX / 100) * W * (1 - 1 / s);
    const vy = (OY / 100) * H * (1 - 1 / s);
    this.root.querySelector('svg.map').setAttribute('viewBox', `${vx.toFixed(2)} ${vy.toFixed(2)} ${vw.toFixed(2)} ${vh.toFixed(2)}`);
    for (const p of this.pins) {
      const [cx, cy] = MAP.cities[p.city];
      p.el.style.left = `${(((cx / 100) * W - vx) / vw) * 100}%`;
      p.el.style.top = `${(((cy / 100) * H - vy) / vh) * 100}%`;
    }
  }

  update() {
    if (!this.built || !this._lang) return;
    const { hub, view } = this.state;
    const europe = view === 'europe';
    const t = this.t;
    const h = t.hubs[hub];
    const tone = hub === 'brussels' ? 'sky' : 'clay';
    const r = this.root;

    for (const k of HUBS) this.tabs[k].setAttribute('aria-pressed', String(k === hub));
    r.querySelectorAll('.view').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.view === view)));
    this.zoomTo(europe ? 1 : 0);

    const on = new Set(HUB_LAYERS[hub]);
    for (const [k, el] of Object.entries(this.layers)) el.classList.toggle('on', on.has(k));
    this.flows.warsaw.classList.toggle('on', hub !== 'brussels');
    this.flows.brussels.classList.toggle('on', hub !== 'warsaw');

    for (const p of this.pins) {
      const visible = europe ? p.hub !== 'taipei' : (!p.asiaOnly || hub === 'taipei');
      p.el.hidden = !visible;
      p.el.tabIndex = visible ? 0 : -1;
      const active = p.hub === hub && p.major;
      p.el.classList.toggle('active', active);
      p.el.style.setProperty('--s', `${active ? 16 : p.major ? 11 : 8}px`);
    }

    r.querySelector('.region-text').textContent = h.region;
    r.querySelector('.region .swatch').className = `swatch ${tone}`;
    const dist = r.querySelector('.distance');
    dist.classList.toggle('on', europe);
    const km = hub === 'brussels' ? MAP.distances.taipeiBrussels : MAP.distances.taipeiWarsaw;
    r.querySelector('.distance-text').textContent = t.distance(km);

    const card = r.querySelector('.card');
    card.dataset.tone = tone;
    card.querySelector('.kicker').textContent = h.kicker;
    card.querySelector('.alt').textContent = h.alt;
    card.querySelector('h3').textContent = h.title;
    card.querySelector('.coords').textContent = COORDS[hub];
    card.querySelector('p').textContent = h.text;
    const ul = card.querySelector('ul');
    ul.replaceChildren(...h.points.map((txt) => { const li = document.createElement('li'); li.textContent = txt; return li; }));
  }
}

if (!customElements.get('polylocal-map')) customElements.define('polylocal-map', PolylocalMap);
export default PolylocalMap;
