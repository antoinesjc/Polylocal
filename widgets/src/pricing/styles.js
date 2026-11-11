// Extra styles for the Packages & pricing page (on top of shared/styles.js).
export default `
/* hero */
.pr-hero{position:relative;padding-top:88px;padding-bottom:96px}
.pr-hero-row{display:flex;flex-wrap:wrap;gap:48px;align-items:flex-end;justify-content:space-between;margin-top:28px}
.pr-h1{flex:1 1 640px;margin:0;font-size:clamp(46px,6.4vw,96px);line-height:.98}
:host([data-lang="zh-TW"]) .pr-h1{line-height:1.15;font-size:clamp(40px,5.6vw,84px)}
.pr-hero-side{flex:1 1 360px;max-width:450px;min-width:0}

/* client and press strip */
.proof-col.clients{flex:2 1 560px;padding-right:40px}
.proof-col.featured-r{flex:1 1 300px;padding-left:40px;border-left:1px solid var(--sand)}
.wordmark{font-family:var(--display);font-weight:800;font-size:24px;letter-spacing:-.01em;color:#56656C}

/* market test */
.pr-test{padding-top:112px}
.test{display:flex;flex-wrap:wrap;gap:56px;background:#fff;border:1px solid var(--line-2);border-top:4px solid var(--sky);padding:56px}
.test-main{flex:1 1 420px;min-width:0;display:flex;flex-direction:column;align-items:flex-start;gap:0}
.test-main h2{margin-top:18px}
.test-main .body{margin-top:18px}
.test-price{margin:28px 0 24px;display:flex;flex-direction:column;gap:6px}
.test-name{font-family:var(--display);font-weight:800;font-size:13px;letter-spacing:1.6px;text-transform:uppercase;color:var(--sky-dk)}
:host([data-lang="zh-TW"]) .test-name{letter-spacing:.5px;font-size:14px}
.test-price .twd{margin-top:0}
.test-price .price{flex-wrap:wrap;row-gap:4px}
.test-main .fine{margin-top:14px}
.test-list{flex:1 1 480px;min-width:0;list-style:none;padding:0;margin:0;border-top:1px solid var(--text)}
.test-list li{display:flex;gap:24px;padding:20px 0;border-bottom:1px solid var(--line)}
.test-list .num{color:var(--sky-dk)}
.test-list h3{font-size:18px;color:var(--ink);line-height:1.3}
.test-list p{margin-top:6px;font-size:15px;line-height:1.6;color:var(--muted)}

/* packages */
.pr-packages{padding-top:120px;padding-bottom:112px}
.tiers{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:24px;align-items:stretch}
.tier{position:relative;background:#fff;border:1px solid var(--line-2);padding:40px 36px;display:flex;flex-direction:column;gap:16px}
.tier.popular{border:2px solid var(--clay);box-shadow:0 22px 50px rgba(23,34,42,.10)}
.tier.signature{background:var(--ink);border-color:var(--ink);color:#fff}
.tier .plan-badge{left:36px}
.tier-top{display:flex;justify-content:space-between;align-items:baseline;gap:12px}
.tier h3{font-size:30px;letter-spacing:-.02em;color:var(--ink)}
.tier.signature h3{color:#fff}
.tier-alt{font-family:var(--zh-serif);font-size:22px;font-weight:700;color:var(--sky)}
.tier.growth .tier-alt{color:var(--clay)}
.tier.signature .tier-alt{color:var(--clay-lt)}
.price{display:flex;align-items:baseline;gap:8px;margin-top:6px}
.amount{font-family:var(--display);font-weight:800;font-size:46px;letter-spacing:-.04em;line-height:1;color:var(--ink)}
.tier.signature .amount{color:#fff}
.per{font-family:var(--display);font-weight:700;font-size:15px;color:var(--muted)}
.tier.signature .per,.tier.signature .term{color:rgba(255,255,255,.65)}
.term{font-family:var(--display);font-weight:700;font-size:13px;letter-spacing:1px;text-transform:uppercase;color:var(--sky-dk)}
:host([data-lang="zh-TW"]) .term{letter-spacing:.3px;font-size:14px}
.tier-text{font-size:15px;line-height:1.6;color:var(--text-2);padding-bottom:4px}
.tier.signature .tier-text{color:rgba(255,255,255,.82)}
.tier-lead{font-family:var(--display);font-weight:800;font-size:14px;color:var(--ink)}
.tier.signature .tier-lead{color:#fff}
.plan-list{list-style:none;padding:18px 0 8px;display:flex;flex-direction:column;gap:11px;font-size:15px;line-height:1.5;border-top:1px solid var(--line)}
.tier-lead + .plan-list{border-top:0;padding-top:0}
.tier.signature .plan-list{border-top-color:rgba(255,255,255,.14);color:rgba(255,255,255,.9)}
.plan-list li{display:flex;gap:12px;align-items:flex-start}
.plan-list .ico{width:18px;height:18px;margin-top:2px;color:var(--clay-dk)}
.tier.signature .plan-list .ico{color:var(--clay-lt)}
.plan-badge{position:absolute;top:-13px;background:var(--clay);color:var(--ink);font-family:var(--display);font-weight:800;font-size:12px;letter-spacing:1.6px;text-transform:uppercase;padding:6px 10px}
:host([data-lang="zh-TW"]) .plan-badge{letter-spacing:.5px}
.tier-btn{margin-top:auto;width:100%}
.btn.outline{border:1px solid var(--ink);color:var(--ink)}
.btn.outline:hover{background:var(--ink);color:#fff}

/* price in NT$ (Chinese site) */
.twd{margin-top:-8px;font-family:var(--display);font-weight:700;font-size:14px;color:var(--muted)}
.tier.signature .twd{color:rgba(255,255,255,.6)}
.twd-s{font-size:13px;color:var(--muted)}

/* market choice */
.markets{display:flex;flex-wrap:wrap;align-items:center;gap:16px 28px;margin:-24px 0 48px}
.market-list{display:flex;flex-wrap:wrap;gap:12px}
.market{display:flex;flex-direction:column;gap:2px;padding:12px 18px;background:#fff;border:1px solid var(--line-2);border-left:4px solid var(--clay)}
.market.m1{border-left-color:var(--sky)}
.market strong{font-family:var(--display);font-weight:800;font-size:16px;color:var(--ink)}
.market span{font-size:13px;color:var(--muted)}

/* comparison matrix */
.white-band h2.mid{margin-bottom:40px}
.table-box{overflow-x:auto;-webkit-overflow-scrolling:touch}
.matrix{width:100%;min-width:860px;border-collapse:collapse;font-size:15px;table-layout:fixed}
.matrix thead th{text-align:left;padding:16px 16px;border-bottom:1px solid var(--text);font-family:var(--display);font-size:15px;font-weight:800;color:var(--ink);width:26%}
.matrix thead th:first-child{width:22%;font-size:13px;letter-spacing:1px;text-transform:uppercase;color:var(--muted)}
.matrix thead th.growth{color:var(--clay-dk)}
.matrix tbody th{text-align:left;vertical-align:top;padding:18px 16px;border-bottom:1px solid var(--line);font-family:var(--display);font-weight:800;color:var(--ink)}
.matrix td{vertical-align:top;padding:18px 16px;border-bottom:1px solid var(--line);color:var(--text-2);line-height:1.55}
.matrix td.growth{background:#FBF4F2}
.price-row td strong{font-family:var(--display);font-size:22px;color:var(--ink);letter-spacing:-.02em}
.price-row td{color:var(--muted)}
.none{color:var(--line)}
.fine{margin-top:20px;font-size:13px;color:var(--muted)}

/* extras */
.extras{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,320px),1fr));gap:2px;background:#CFC8C0}
.extra{background:var(--ivory);padding:32px;display:flex;flex-direction:column;gap:10px}
.extra h3{font-size:19px;line-height:1.3;color:var(--ink)}
.extra-price{font-family:var(--display);font-weight:800;font-size:20px;color:var(--clay-dk);letter-spacing:-.01em}
.extra p:last-child{font-size:15px;line-height:1.6;color:var(--muted)}

/* work */
.pr-work{padding-top:120px;padding-bottom:112px}
.work-row{display:grid;grid-template-columns:minmax(0,1.4fr) minmax(0,1fr);gap:24px}
.work-row.solo{grid-template-columns:minmax(0,1fr)}
.case{background:#fff;border:1px solid var(--line-2);border-top:4px solid var(--sky);padding:40px;display:flex;flex-direction:column;gap:18px;text-decoration:none;transition:transform .25s,box-shadow .25s}
.case:hover{transform:translateY(-3px);box-shadow:0 18px 40px rgba(23,34,42,.10)}
.case-head{display:flex;justify-content:space-between;align-items:center;gap:16px}
.case-tag{font-family:var(--display);font-weight:800;font-size:13px;letter-spacing:1.6px;text-transform:uppercase;color:var(--sky-dk)}
.case h3{font-size:30px;line-height:1.15;letter-spacing:-.02em;color:var(--ink);max-width:640px}
.case p{font-size:16px;line-height:1.65;color:var(--text-2);max-width:600px}
.stats{display:flex;flex-wrap:wrap;gap:16px 48px;padding:20px 0;border-top:1px solid var(--line);border-bottom:1px solid var(--line)}
.stats div{display:flex;flex-direction:column}
.stat-n{font-family:var(--display);font-weight:800;font-size:38px;letter-spacing:-.03em;color:var(--sky-dk);line-height:1.1}
.stat-l{font-size:14px;color:var(--muted)}
.quote{margin:0;background:var(--ink);color:#fff;padding:40px;display:flex;flex-direction:column;justify-content:space-between;gap:28px}
.quote blockquote{margin:0;font-family:var(--display);font-weight:700;font-size:24px;line-height:1.4;letter-spacing:-.01em}
.quote blockquote::before{content:"“";display:block;font-size:64px;line-height:.8;color:var(--clay-lt)}
.quote figcaption{display:flex;flex-direction:column;font-size:14px;color:rgba(255,255,255,.7)}
.quote figcaption strong{font-family:var(--display);font-size:16px;color:#fff}
.quote.placeholder{background:transparent;border:2px dashed var(--line);color:var(--muted)}
.quote.placeholder figcaption,.quote.placeholder figcaption strong{color:var(--muted)}

@media (max-width:1020px){
  .tiers{grid-template-columns:minmax(0,1fr);max-width:620px}
  .work-row{grid-template-columns:minmax(0,1fr)}
}
@media (max-width:640px){
  .pr-hero{padding-top:56px;padding-bottom:64px}
  .pr-hero-row{gap:28px}
  .pr-packages,.pr-work{padding-top:80px;padding-bottom:72px}
  .pr-test{padding-top:72px}
  .test{padding:28px;gap:32px}
  .tier,.case,.quote{padding:28px}
  .tier .plan-badge{left:28px}
  .proof-col.clients{padding-right:0;padding-bottom:24px}
  .proof-col.featured-r{padding-left:0;padding-top:24px;border-left:0;border-top:1px solid var(--sand)}
  .extra{padding:24px}
}
@media (prefers-reduced-motion:reduce){ .case{transition:none} }
`;
