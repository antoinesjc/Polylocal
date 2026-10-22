// Styles shared by every page widget (homepage, service pages, ...).
// Brand colours from polylocal.eu: terracotta #B57A72, sky #81AEC4, slate #718891, plus deep ink #17222A and warm ivory.
export default `
:host{
  --ink:#17222A; --ink-2:#111A20; --ivory:#F6F3EF; --sand:#ECE6DF; --line:#DCD5CD; --line-2:#E2DBD3;
  --text:#1E2A30; --text-2:#3C4A50; --muted:#56656C;
  --clay:#B57A72; --clay-dk:#9A5C54; --clay-lt:#D9A69E;
  --sky:#81AEC4; --sky-dk:#3E6C82; --sky-lt:#A9CADB;
  --display:'Manrope','Open Sans',system-ui,sans-serif;
  --sans:'Open Sans',system-ui,sans-serif;
  --zh:'Noto Sans TC','PingFang TC','Microsoft JhengHei',system-ui,sans-serif;
  --zh-serif:'Noto Serif TC','Noto Sans TC',serif;
  display:block; background:var(--ivory); color:var(--text);
}
*,*::before,*::after{box-sizing:border-box}
.page{font-family:var(--sans);font-size:16px;line-height:1.6;-webkit-font-smoothing:antialiased;overflow:hidden}
:host([data-lang="zh-TW"]) .page{--display:'Manrope','Noto Sans TC','PingFang TC','Microsoft JhengHei',sans-serif;--sans:var(--zh)}
h1,h2,h3,p,ul,ol{margin:0}
h1,h2,h3{text-wrap:balance}
a{color:inherit}
.wrap{max-width:1280px;margin:0 auto;padding-left:32px;padding-right:32px}
.ico{width:16px;height:16px;flex:0 0 auto;fill:none;stroke:currentColor;stroke-width:2.2;stroke-linecap:round;stroke-linejoin:round}

/* type */
.eyebrow{font-family:var(--display);font-size:13px;font-weight:800;letter-spacing:2.4px;text-transform:uppercase;color:var(--clay-dk);display:flex;align-items:center;gap:14px}
.eyebrow.light{color:var(--sky-lt);font-weight:700}
:host([data-lang="zh-TW"]) .eyebrow{letter-spacing:1.2px;font-size:14px}
.rule{display:inline-block;width:36px;height:1px;background:currentColor}
h1{font-family:var(--display);font-weight:800;font-size:clamp(52px,8.4vw,124px);line-height:.94;letter-spacing:-.045em;margin-top:28px}
:host([data-lang="zh-TW"]) h1{letter-spacing:-.02em;line-height:1.08;font-size:clamp(46px,7.4vw,108px)}
h2{font-family:var(--display);font-weight:800;font-size:clamp(34px,4.4vw,58px);line-height:1.04;letter-spacing:-.035em;color:var(--ink);margin-top:22px}
:host([data-lang="zh-TW"]) h2{letter-spacing:-.01em;line-height:1.2}
h2.wide{max-width:780px;margin-bottom:56px}
h2.mid{font-size:clamp(30px,3.4vw,44px)}
h2.big{font-size:clamp(40px,4.8vw,66px);line-height:1;letter-spacing:-.04em;color:#fff}
:host([data-lang="zh-TW"]) h2.big{line-height:1.15}
h3{font-family:var(--display);font-weight:800}
.body{font-size:18px;line-height:1.7;color:var(--text-2);margin-top:26px;max-width:470px}
.body.narrow{font-size:16px;max-width:400px;margin-top:0}
.lead{font-size:19px;line-height:1.6;color:rgba(255,255,255,.86)}
.accent{color:var(--clay-lt)}

/* buttons */
.btns{display:flex;flex-wrap:wrap;gap:12px;margin-top:30px}
.btn{font-family:var(--display);font-weight:800;font-size:15px;padding:17px 26px;border-radius:2px;text-decoration:none;display:inline-flex;align-items:center;justify-content:center;min-height:52px;transition:transform .2s,background .2s}
.btn:hover{transform:translateY(-1px)}
.btn.primary{background:var(--clay);color:var(--ink)}
.btn.primary:hover{background:#C08A82}
.btn.ghost{border:1px solid rgba(255,255,255,.32);color:#fff}
.btn.ghost:hover{background:rgba(255,255,255,.06)}
.btn.block{width:100%}
a:focus-visible{outline:2px solid var(--sky);outline-offset:3px}

/* hero */
.ink{background:var(--ink);color:#fff;position:relative}
.dots{position:absolute;inset:0;background-image:radial-gradient(rgba(129,174,196,.10) 1px,transparent 1px);background-size:28px 28px;pointer-events:none}
.hero-top{position:relative;padding-top:88px;padding-bottom:40px;display:flex;flex-wrap:wrap;gap:48px;align-items:flex-end;justify-content:space-between}
.hero-copy{flex:1 1 640px;min-width:0}
.hero-side{flex:1 1 380px;max-width:460px;min-width:0}
.hero-map{position:relative;padding-top:24px;padding-bottom:96px}

/* proof strip */
.proof{background:#fff;border-bottom:1px solid var(--sand)}
.proof-row{display:flex;flex-wrap:wrap;padding-top:36px;padding-bottom:36px}
.proof-col{display:flex;flex-direction:column;gap:18px;min-width:0;padding:4px 0}
.proof-col.featured{flex:1 1 300px;padding-right:40px}
.proof-col.partners{flex:2 1 560px;padding-left:40px;border-left:1px solid var(--sand)}
.proof-head{display:flex;flex-wrap:wrap;align-items:baseline;justify-content:space-between;gap:8px 20px}
.label{font-family:var(--display);font-size:12px;font-weight:800;letter-spacing:2.2px;text-transform:uppercase;color:var(--muted)}
:host([data-lang="zh-TW"]) .label{letter-spacing:1px;font-size:13px}
.note{font-size:13px;color:var(--muted)}
.logos{display:flex;flex-wrap:wrap;align-items:center;gap:20px 48px;min-height:56px}
.logos img{display:block;width:auto;max-width:100%}

/* split sections */
.split{display:flex;flex-wrap:wrap;gap:64px;padding-top:128px;padding-bottom:112px}
.split-a{flex:1 1 420px;min-width:0}
.split-b{flex:1 1 520px;min-width:0}
.ground{align-items:center}
.numbered{list-style:none;padding:0;border-top:1px solid var(--text)}
.numbered li{display:flex;gap:28px;padding:28px 0;border-bottom:1px solid var(--line)}
.num{font-family:var(--display);font-weight:800;font-size:15px;color:var(--clay-dk);width:30px;flex:0 0 auto;line-height:1.9}
.numbered h3{font-size:21px;color:var(--ink);line-height:1.3}
.numbered p{margin-top:8px;font-size:15px;line-height:1.6;color:var(--muted)}

/* sand sections */
.sand{background:var(--sand)}
.sand > .wrap{padding-top:112px;padding-bottom:112px}
.head-row{display:flex;flex-wrap:wrap;justify-content:space-between;align-items:flex-end;gap:32px;margin-bottom:56px}
.head-row.tight{margin-bottom:40px;align-items:center}
.head-row.tight h2{margin-top:0}
.head-main{max-width:700px}
.directions{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,460px),1fr));gap:2px;background:#CFC8C0}
.direction{background:var(--ivory);padding:48px;display:flex;flex-direction:column;gap:22px}
.direction-top{display:flex;flex-wrap:wrap;align-items:baseline;justify-content:space-between;gap:8px 16px}
.dir-label{font-family:var(--display);font-weight:800;font-size:14px;letter-spacing:1.6px;text-transform:uppercase}
.dir-alt{font-family:var(--zh-serif);font-size:26px;font-weight:700}
:host([data-lang="zh-TW"]) .dir-alt{font-family:var(--display);font-size:18px;letter-spacing:.3px}
.direction.sky .dir-label{color:var(--sky-dk)} .direction.sky .dir-alt{color:var(--sky)}
.direction.clay .dir-label{color:var(--clay-dk)} .direction.clay .dir-alt{color:var(--clay)}
.direction h3{font-size:32px;line-height:1.12;letter-spacing:-.02em;color:var(--ink)}
.dash{list-style:none;padding:0;display:flex;flex-direction:column;gap:14px;font-size:16px;line-height:1.55;color:var(--text-2)}
.dash li{display:flex;gap:14px}
.dash li::before{content:"";flex:0 0 18px;height:1px;margin-top:12px;background:currentColor}
.direction.sky .dash li::before{background:var(--sky-dk)}
.direction.clay .dash li::before{background:var(--clay-dk)}

/* services */
.services{padding-top:128px;padding-bottom:112px}
.service-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,500px),1fr));gap:24px}
.service{padding:48px;text-decoration:none;display:flex;flex-direction:column;gap:24px;min-height:440px;transition:transform .25s,box-shadow .25s}
.service:hover{transform:translateY(-3px);box-shadow:0 18px 40px rgba(23,34,42,.12)}
.service.light{background:#fff;border:1px solid var(--line-2);color:var(--text)}
.service.dark{background:var(--ink);color:#fff}
.service-top{display:flex;justify-content:space-between;align-items:center}
.service-tag{font-family:var(--display);font-weight:800;font-size:15px}
.service.light .service-tag{color:var(--sky-dk)} .service.dark .service-tag{color:var(--clay-lt)}
.round{width:48px;height:48px;border-radius:50%;border:1px solid currentColor;display:flex;align-items:center;justify-content:center;opacity:.8}
.round .ico{width:18px;height:18px}
.service h3{font-size:40px;line-height:1.02;letter-spacing:-.03em}
.service.light h3{color:var(--ink)}
.service p{font-size:16px;line-height:1.65}
.service.light p{color:var(--text-2)} .service.dark p{color:rgba(255,255,255,.82)}
.chips{margin-top:auto;display:flex;flex-wrap:wrap;gap:8px}
.chips span{font-size:13px;font-weight:600;padding:8px 12px}
.service.light .chips span{background:#EEF4F7;color:#2F5A6E}
.service.dark .chips span{background:rgba(255,255,255,.08);color:#F1DDD9}

/* method */
.white-band{background:#fff;border-top:1px solid var(--line);border-bottom:1px solid var(--line)}
.white-band > .wrap{padding-top:96px;padding-bottom:96px}
.white-band h2{margin-bottom:48px}
.steps{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,240px),1fr));border-left:1px solid var(--line)}
.step{padding:8px 28px;border-right:1px solid var(--line)}
.step-num{font-family:var(--display);font-weight:800;font-size:64px;letter-spacing:-.04em;color:var(--sand);line-height:1}
.step h3{margin-top:18px;font-size:20px;color:var(--ink)}
.step p{margin-top:10px;font-size:15px;line-height:1.6;color:var(--muted)}

/* on the ground */
.underline{display:inline-flex;align-items:center;gap:10px;margin-top:30px;font-family:var(--display);font-weight:800;font-size:15px;color:var(--ink);text-decoration:none;border-bottom:2px solid var(--clay);padding-bottom:4px}
.head-row .underline{margin-top:0}
.tiles{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,220px),1fr));gap:16px}
.tile{padding:30px;display:flex;flex-direction:column;gap:10px;background:#fff;border:1px solid var(--line-2)}
.tile.t0{background:var(--ink);border-color:var(--ink);color:#fff}
.tile.t3{background:var(--sand);border-color:var(--sand)}
.tile-big{font-family:var(--display);font-size:30px;font-weight:800;letter-spacing:-.02em;line-height:1.2}
.tile-big.zh{font-family:var(--zh-serif);color:var(--clay-lt)}
.tile.t1 .tile-big{color:var(--clay-dk)} .tile.t2 .tile-big{color:var(--sky-dk)} .tile.t3 .tile-big{color:var(--ink)}
.tile h3{font-size:19px;color:var(--ink)} .tile.t0 h3{color:#fff}
.tile p{font-size:14px;line-height:1.55;color:var(--muted)} .tile.t0 p{color:rgba(255,255,255,.75)}

/* insights */
.insights{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr));gap:24px}
.insight{background:var(--ivory);padding:32px;min-height:240px;display:flex;flex-direction:column;gap:16px;text-decoration:none;border-top:4px solid var(--clay);transition:transform .25s,box-shadow .25s}
.insight.i0{border-top-color:var(--sky)} .insight.i2{border-top-color:#718891}
.insight:hover{transform:translateY(-3px);box-shadow:0 18px 40px rgba(23,34,42,.10)}
.insight-tag{font-family:var(--display);font-size:22px;font-weight:800;letter-spacing:-.01em;color:var(--ink)}
.insight p{font-size:15px;line-height:1.65;color:var(--text-2)}
.insight-more{margin-top:auto;display:inline-flex;align-items:center;gap:8px;font-family:var(--display);font-weight:800;font-size:14px;color:var(--ink)}

/* final call to action */
.cta-row{display:flex;flex-wrap:wrap;gap:64px;align-items:center;padding-top:120px;padding-bottom:120px}
.cta-copy{flex:1 1 480px;min-width:0}
.cta-copy .lead{margin-top:26px;max-width:480px;font-size:18px;line-height:1.7;color:rgba(255,255,255,.82)}
.cta-box{flex:1 1 360px;max-width:460px;min-width:0;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.12);padding:36px;display:flex;flex-direction:column;gap:14px}
.checks{list-style:none;padding:0 0 10px;display:flex;flex-direction:column;gap:14px;font-size:15px;color:rgba(255,255,255,.86)}
.checks li{display:flex;gap:12px;align-items:center}
.checks .ico{color:var(--clay-lt);width:18px;height:18px}

/* phones */
@media (max-width:640px){
  .wrap{padding-left:16px;padding-right:16px}
  .hero-top{padding-top:56px;gap:28px}
  .hero-map{padding-bottom:64px}
  .split{padding-top:80px;padding-bottom:72px;gap:40px}
  .sand > .wrap,.services{padding-top:80px;padding-bottom:80px}
  .white-band > .wrap{padding-top:72px;padding-bottom:72px}
  .proof-col.featured{padding-right:0;padding-bottom:24px}
  .proof-col.partners{padding-left:0;padding-top:24px;border-left:0;border-top:1px solid var(--sand)}
  .logos{gap:20px 32px}
  .direction,.service{padding:28px}
  .service{min-height:0}
  .service h3{font-size:32px}
  .step{padding:8px 20px 24px}
  .cta-row{padding-top:80px;padding-bottom:80px;gap:40px}
  .cta-box{padding:24px}
}
@media (prefers-reduced-motion:reduce){
  .btn,.service,.insight{transition:none}
}
`;
