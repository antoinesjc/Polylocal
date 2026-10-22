// Extra styles for the Digital Marketing page (on top of shared/styles.js).
// This page leads with the sky blue, the homepage with terracotta.
export default `
.sky-text{color:var(--sky-dk)}
.sky-accent{color:var(--sky-lt)}
:host([data-lang="zh-TW"]) .sky-accent{display:block}

/* hero */
.dm-hero{position:relative;display:flex;flex-wrap:wrap;gap:64px;align-items:center;padding-top:88px;padding-bottom:112px}
.dm-hero-copy{flex:1 1 560px;min-width:0}
.dm-h1{font-size:clamp(46px,6vw,88px);line-height:.98}
:host([data-lang="zh-TW"]) .dm-h1{font-size:clamp(40px,5.2vw,76px);line-height:1.15}
.dm-lead{margin-top:30px;max-width:560px}
.search{flex:1 1 420px;max-width:520px;min-width:0;margin:0}
.search-card{background:#fff;border-radius:6px;padding:22px;color:var(--text);box-shadow:0 30px 60px rgba(0,0,0,.35);font-family:var(--zh)}
.search-box{display:flex;align-items:center;gap:12px;border:1px solid var(--line-2);border-radius:999px;padding:12px 18px;font-size:15px}
.search-box .ico{width:18px;height:18px;color:var(--muted)}
.result{padding:14px 16px}
.result.top{margin-top:18px;border:2px solid var(--sky);border-radius:4px;background:#F3F8FA;position:relative;padding:16px}
.result-badge{position:absolute;top:-12px;right:14px;background:var(--sky);color:var(--ink);font-family:var(--display);font-weight:800;font-size:11px;letter-spacing:1px;text-transform:uppercase;padding:4px 8px;border-radius:2px}
.result-url{font-size:12px;color:var(--muted);font-family:var(--sans)}
.result-title{margin-top:4px;font-weight:700;font-size:17px;color:#2F5A6E}
.result-text{margin-top:6px;font-size:13px;line-height:1.6;color:var(--text-2)}
.ghost-row{opacity:.55;display:flex;flex-direction:column;gap:10px}
.ghost-row.faint{opacity:.4}
.ghost-row i,.ghost-row b{display:block;height:8px;border-radius:4px;background:var(--line-2)}
.ghost-row b{height:10px;background:#CFC8C0}
.search-caption{display:flex;flex-wrap:wrap;justify-content:space-between;gap:8px;margin-top:16px;font-family:var(--display);font-size:12px;font-weight:700;letter-spacing:1px;color:rgba(255,255,255,.62);text-transform:uppercase}

/* problem cards */
.letters{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,250px),1fr));gap:16px;align-content:start}
.letter{background:#fff;border:1px solid var(--line-2);padding:28px}
.letter-mark{font-family:var(--display);font-weight:800;font-size:36px;color:var(--sky);letter-spacing:-.03em;line-height:1}
.letter h3{margin-top:12px;font-size:19px;color:var(--ink);line-height:1.3}
.letter p{margin-top:8px;font-size:15px;line-height:1.6;color:var(--muted)}

/* approach band */
.approach{background:var(--sky);color:var(--ink)}
.approach-row{display:flex;flex-wrap:wrap;gap:48px;align-items:center;justify-content:space-between;padding-top:88px;padding-bottom:88px}
.approach-title{flex:1 1 420px;margin:0;font-size:clamp(44px,5.4vw,76px);line-height:.98;letter-spacing:-.045em;color:var(--ink)}
:host([data-lang="zh-TW"]) .approach-title{line-height:1.15;letter-spacing:-.01em}
.approach-title{flex:1 1 400px;font-size:clamp(40px,4.6vw,66px)}
.approach-points{flex:1.3 1 560px;min-width:0;display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:28px}
.approach-point{border-top:2px solid var(--ink);padding-top:18px}
.approach-point h3{font-size:18px}
.approach-point p{margin-top:8px;font-size:15px;line-height:1.6}

/* services list */
.dm-services{padding-top:128px;padding-bottom:96px}
.rows{list-style:none;padding:0;border-top:1px solid var(--text)}
.row{display:flex;flex-wrap:wrap;gap:20px 48px;padding:36px 20px;border-bottom:1px solid var(--line);align-items:flex-start;transition:background .25s}
.row:hover{background:#fff}
.row-num{flex:0 0 60px;font-family:var(--display);font-weight:800;font-size:15px;color:var(--sky-dk)}
.row-num.light{flex:none;color:var(--sky-lt)}
.row h3{flex:1 1 280px;font-size:28px;line-height:1.15;letter-spacing:-.02em;color:var(--ink)}
.row-body{flex:2 1 420px;min-width:0}
.row-body p{font-size:16px;line-height:1.65;color:var(--text-2)}
.sky-chips{margin-top:16px}
.sky-chips span{background:#EEF4F7;color:#2F5A6E}

/* health check offer */
.check-offer{margin-top:40px;background:var(--ink);color:#fff;display:flex;flex-wrap:wrap}
.offer-main{flex:2 1 520px;padding:48px;display:flex;flex-direction:column;gap:18px;min-width:0}
.offer-top{display:flex;align-items:center;gap:14px}
.offer-badge{font-family:var(--display);font-size:12px;font-weight:800;letter-spacing:2px;text-transform:uppercase;background:var(--clay);color:var(--ink);padding:5px 10px}
:host([data-lang="zh-TW"]) .offer-badge{letter-spacing:1px}
.offer-main h3{font-size:40px;line-height:1.05;letter-spacing:-.03em}
.offer-main p{font-size:17px;line-height:1.65;color:rgba(255,255,255,.82);max-width:600px}
.offer-side{flex:1 1 320px;padding:48px;background:#22323A;display:flex;flex-direction:column;justify-content:space-between;gap:28px;min-width:0}
.sky-checks .ico{color:var(--sky-lt)}
.btn.light-btn{background:#fff;color:var(--ink)}
.btn.light-btn:hover{background:#EEF4F7}

/* markets */
.markets-title{margin-bottom:48px}
.markets{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,320px),1fr));gap:16px}
.market{background:var(--ivory);padding:36px;display:flex;flex-direction:column;gap:14px;border-top:4px solid var(--clay)}
.market.clay-dk{border-top-color:var(--clay-dk)}
.market.sky{border-top-color:var(--sky)}
.market-top{display:flex;justify-content:space-between;align-items:baseline;gap:12px}
.market h3{font-size:24px;color:var(--ink)}
.market-alt{font-family:var(--display);font-weight:800;font-size:18px;color:var(--clay)}
:host([data-lang="en"]) .market.clay .market-alt{font-family:var(--zh-serif);font-size:22px}
.market.clay-dk .market-alt{color:var(--clay-dk)}
.market.sky .market-alt{color:var(--sky-dk)}
.market-langs{font-size:13px;font-weight:600;color:var(--muted);letter-spacing:.4px}
.market ul{list-style:none;padding:16px 0 0;display:flex;flex-direction:column;gap:10px;font-size:15px;color:var(--text-2);border-top:1px solid var(--line)}

/* FAQ */
.faq-row{display:flex;flex-wrap:wrap;gap:64px}
.faq-title{flex:1 1 320px;margin-top:0}
.faq{flex:2 1 560px;min-width:0;border-top:1px solid var(--text)}
details{border-bottom:1px solid var(--line);padding:24px 0}
summary{list-style:none;cursor:pointer;display:flex;justify-content:space-between;gap:24px;font-family:var(--display);font-weight:800;font-size:20px;color:var(--ink)}
summary::-webkit-details-marker{display:none}
summary:focus-visible{outline:2px solid var(--sky);outline-offset:4px}
.plus{font-size:26px;font-weight:500;color:var(--sky-dk);line-height:1;transition:transform .25s}
details[open] .plus{transform:rotate(45deg)}
details p{margin-top:14px;font-size:16px;line-height:1.7;color:var(--text-2);max-width:680px}

@media (max-width:640px){
  .dm-hero{padding-top:56px;padding-bottom:72px;gap:40px}
  .approach-row{padding-top:64px;padding-bottom:64px}
  .approach-points{grid-template-columns:1fr}
  .dm-services{padding-top:80px;padding-bottom:72px}
  .row{padding:28px 4px}
  .row h3{font-size:24px}
  .offer-main,.offer-side{padding:28px}
  .offer-main h3{font-size:32px}
  .market{padding:28px}
  .faq-row{gap:32px}
}
`;
