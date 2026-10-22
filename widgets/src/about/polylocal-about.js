import '../map/polylocal-map.js';
import { ABOUT } from './i18n.js';
import { PolylocalPage } from '../shared/page.js';
import CSS from './styles.js';

class PolylocalAbout extends PolylocalPage {
  static css = CSS;

  page(lang, h) {
    const t = ABOUT[lang];
    const { esc, L } = h;
    return `
  <section class="hero ink">
    <div class="dots" aria-hidden="true"></div>
    <div class="wrap ab-hero">
      <p class="eyebrow light"><span class="rule"></span>${esc(t.hero.kicker)}</p>
      <div class="word-row">
        <h1 class="word" aria-label="Polylocal">${esc(t.hero.word[0])}<span class="dot-mid" aria-hidden="true">·</span>${esc(t.hero.word[1])}</h1>
        <span class="pos">${esc(t.hero.pos)}</span>
      </div>
      <div class="def-row">
        <p class="definition">${esc(t.hero.definition)}</p>
        <div class="def-side">
          <span class="def-alt">${esc(t.hero.alt)}</span>
          <p>${esc(t.hero.note)}</p>
        </div>
      </div>
    </div>
  </section>

  <section class="sand">
    <div class="wrap">
      <h2 class="wide">${esc(t.position.title)}</h2>
      <div class="options">
        ${t.position.cards.map(([title, text], i) => `
        <div class="option${i === 1 ? ' us' : ''}">
          <h3>${esc(title)}</h3>
          <p>${esc(text)}</p>
          ${i === 1 ? '<span class="option-bar" aria-hidden="true"></span>' : ''}
        </div>`).join('')}
      </div>
    </div>
  </section>

  <section class="wrap ab-how">
    <p class="eyebrow">${esc(t.how.kicker)}</p>
    <div class="how-grid">
      ${t.how.items.map(([title, text]) => `<div class="how-item"><h3>${esc(title)}</h3><p>${esc(text)}</p></div>`).join('')}
    </div>
  </section>

  <section class="reach">
    <div class="wrap">
      <div class="head-row">
        <div class="head-main"><p class="eyebrow">${esc(t.reach.kicker)}</p><h2>${esc(t.reach.title)}</h2></div>
        <p class="body narrow">${esc(t.reach.body)}</p>
      </div>
      <polylocal-map lang="${lang}" theme="light" hub="brussels" no-cta></polylocal-map>
    </div>
  </section>

  <section class="wrap ab-team">
    <p class="eyebrow">${esc(t.team.kicker)}</p>
    <h2 class="wide">${esc(t.team.title)}</h2>
    <div class="team-grid">
      ${t.team.tiles.map((x, i) => `
      <div class="team-tile k${i}">
        <span class="team-big${x.serif ? ' serif' : ''}${x.small ? ' small' : ''}">${esc(x.big)}</span>
        <h3>${esc(x.title)}</h3>
        <p>${esc(x.text)}</p>
      </div>`).join('')}
    </div>
    <p class="network">${esc(t.team.network)}</p>
  </section>

  <section class="commit">
    <div class="wrap">
      <p class="eyebrow clay-light">${esc(t.commitment.kicker)}</p>
      <p class="quote">${esc(t.commitment.quote)}</p>
      <div class="pillars">
        ${t.commitment.pillars.map(([title, text]) => `<div class="pillar"><h3>${esc(title)}</h3><p>${esc(text)}</p></div>`).join('')}
      </div>
    </div>
  </section>
${h.cta({ ...t.cta, secondaryHref: '/digital-marketing' })}`;
  }
}

if (!customElements.get('polylocal-about')) customElements.define('polylocal-about', PolylocalAbout);
export default PolylocalAbout;
