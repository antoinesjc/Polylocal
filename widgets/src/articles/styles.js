// Styles for blog articles: case studies and event recaps (on top of shared/styles.js).
export default `
.art{background:var(--ivory)}
.a-wide{max-width:1080px;margin:0 auto;padding-left:32px;padding-right:32px}
.a-narrow{max-width:760px;margin:0 auto;padding-left:32px;padding-right:32px}
.tone-sky{--tone:var(--sky);--tone-dk:var(--sky-dk);--tone-lt:var(--sky-lt);--tone-soft:#EEF4F7;--tone-ink:#2F5A6E}
.tone-clay{--tone:var(--clay);--tone-dk:var(--clay-dk);--tone-lt:var(--clay-lt);--tone-soft:#F3E6E3;--tone-ink:#7E4840}
.clay-dots{background-image:radial-gradient(rgba(181,122,114,.13) 1px,transparent 1px)}

/* header */
.a-hero-in{position:relative;padding-top:72px;padding-bottom:64px}
.a-hero.has-card .a-hero-in{padding-bottom:160px}
.crumbs{display:flex;flex-wrap:wrap;gap:10px;font-family:var(--display);font-size:13px;font-weight:700;color:rgba(255,255,255,.55)}
.crumbs a{color:rgba(255,255,255,.78);text-decoration:none}
.crumbs a:hover{color:#fff;text-decoration:underline}
.tags{display:flex;flex-wrap:wrap;gap:8px;margin-top:28px}
.tags span{font-family:var(--display);font-size:12px;font-weight:800;letter-spacing:1.6px;text-transform:uppercase;padding:6px 10px}
:host([data-lang="zh-TW"]) .tags span{letter-spacing:.6px;font-size:13px}
.tag-fill{background:var(--tone-lt);color:var(--ink)}
.tag-line{border:1px solid rgba(255,255,255,.3);padding:5px 10px}
.a-hero h1{margin-top:24px;font-size:clamp(38px,5vw,64px);line-height:1.04;letter-spacing:-.04em;max-width:920px}
:host([data-lang="zh-TW"]) .a-hero h1{font-size:clamp(34px,4.4vw,56px);line-height:1.25;letter-spacing:-.01em}
.hl{color:var(--tone-lt)}
.dek{margin-top:24px;font-size:20px;line-height:1.6;color:rgba(255,255,255,.84);max-width:740px}
.meta{margin-top:28px;font-family:var(--display);font-size:14px;font-weight:600;color:rgba(255,255,255,.6)}
.hero-facts{margin:40px 0 0;display:flex;flex-wrap:wrap;border-top:1px solid rgba(255,255,255,.16)}
.hero-facts div{flex:1 1 200px;padding:22px 24px 0 0}
.hero-facts dt,.fact-card dt{font-family:var(--display);font-size:12px;font-weight:800;letter-spacing:1.6px;text-transform:uppercase}
:host([data-lang="zh-TW"]) .hero-facts dt,:host([data-lang="zh-TW"]) .fact-card dt{letter-spacing:.5px;font-size:13px}
.hero-facts dt{color:rgba(255,255,255,.55)}
.hero-facts dd{margin:6px 0 0;font-family:var(--display);font-weight:700;font-size:17px}

/* case study: facts card and results */
.fact-card-wrap{margin-top:-104px;position:relative}
.fact-card{margin:0;background:#fff;box-shadow:0 24px 60px rgba(23,34,42,.14);display:grid;grid-template-columns:repeat(4,minmax(0,1fr))}
.fact-card div{padding:28px;border-right:1px solid var(--sand)}
.fact-card div:last-child{border-right:0}
.fact-card dt{color:var(--muted)}
.fact-card dd{margin:8px 0 0;font-family:var(--display);font-weight:700;font-size:16px;line-height:1.4;color:var(--ink)}
.results{padding-top:88px}
.results .eyebrow{margin:0;color:var(--tone-dk)}
.result-grid{margin-top:24px;display:grid;gap:2px;background:var(--line)}
.result-grid.n4{grid-template-columns:repeat(4,minmax(0,1fr))}
.result-grid.n3{grid-template-columns:repeat(3,minmax(0,1fr))}
.result{background:var(--ivory);padding:28px 24px}
.result:first-child{padding-left:0}
.result-n{font-family:var(--display);font-weight:800;font-size:56px;letter-spacing:-.04em;color:var(--ink);line-height:1}
.result-n.accent{color:var(--clay)}
.result p{margin-top:12px;font-size:15px;line-height:1.55;color:var(--text-2)}

/* case study: body with side navigation */
.case-body{display:flex;gap:64px;align-items:flex-start;padding-top:64px}
.side{flex:0 0 240px;position:sticky;top:96px}
.side-label{font-family:var(--display);font-size:12px;font-weight:800;letter-spacing:1.6px;text-transform:uppercase;color:var(--muted)}
.toc{margin:16px 0 0;padding:0;list-style:none;display:flex;flex-direction:column;gap:12px;border-left:2px solid var(--line)}
.toc li{padding-left:16px}
.toc a{font-family:var(--display);font-weight:700;font-size:15px;color:var(--text-2);text-decoration:none}
.toc a:hover{color:var(--tone-dk)}
.client{margin-top:36px;padding:20px;background:#fff;border:1px solid var(--line-2);display:flex;flex-direction:column;gap:8px}
.client strong{font-family:var(--display);font-weight:800;font-size:20px}
.client span:last-child{font-size:14px;line-height:1.5;color:var(--text-2)}
.col{flex:1 1 auto;min-width:0;max-width:680px}

/* text blocks */
.prose h2,.box h2,.more h2,.ev-block > h2{font-family:var(--display);font-weight:800;font-size:32px;line-height:1.2;letter-spacing:-.02em;color:var(--ink);margin-top:0;scroll-margin-top:96px}
.prose p{margin-top:18px;font-size:18px;line-height:1.75;color:#2A363C}
.prose h2 + p{margin-top:20px}
.col > * + *,.ev-block{margin-top:56px}
.event-body{padding-top:64px}
.event-body .ev-block:first-child{margin-top:0}
.lead-p{font-size:22px;line-height:1.6;color:var(--ink)}
.a-steps{list-style:none;padding:0;margin-top:28px;border-top:1px solid var(--text)}
.col > .prose + .a-steps{margin-top:28px}
.a-steps li{display:flex;gap:24px;padding:22px 0;border-bottom:1px solid var(--line)}
.step-n{flex:0 0 32px;font-family:var(--display);font-weight:800;font-size:15px;color:var(--tone-dk);line-height:1.9}
.a-steps h3{font-size:19px;color:var(--ink)}
.a-steps p{margin-top:6px;font-size:16px;line-height:1.65;color:var(--text-2)}
.tone-chips{margin-top:12px}
.tone-chips span{background:var(--tone-soft);color:var(--tone-ink)}
.pull{margin-left:0;margin-right:0;margin-bottom:0;padding-left:28px;border-left:4px solid var(--tone)}
.pull blockquote{margin:0;font-family:var(--display);font-weight:800;font-size:28px;line-height:1.3;letter-spacing:-.02em;color:var(--ink)}
:host([data-lang="zh-TW"]) .pull blockquote{letter-spacing:0;line-height:1.5;font-size:26px}
.box{padding:36px;background:#fff;border:1px solid var(--line-2);scroll-margin-top:96px}
.box h2{font-size:24px}
.dash{list-style:none;padding:0;margin-top:18px;display:flex;flex-direction:column;gap:12px;font-size:17px;line-height:1.6;color:var(--text-2)}
.dash li{display:flex;gap:14px}
.dash li::before{content:"";flex:0 0 18px;height:1px;margin-top:14px;background:var(--tone-dk)}
.note{font-size:17px;line-height:1.7;color:var(--text-2)}

/* event blocks */
.ev-block > h2{font-size:36px;margin-bottom:28px}
.speakers{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px}
.speaker{background:#fff;border:1px solid var(--line-2);padding:28px;display:flex;flex-direction:column;gap:12px}
.speaker.dark{background:var(--ink);border-color:var(--ink);color:#fff}
.sp-tag{font-family:var(--display);font-size:12px;font-weight:800;letter-spacing:1.6px;text-transform:uppercase;color:var(--sky-dk)}
.speaker.dark .sp-tag{color:var(--clay-lt)}
.speaker h3{font-size:20px;line-height:1.3;color:var(--ink)}
.speaker.dark h3{color:#fff}
.speaker p{font-size:15px;line-height:1.6;color:var(--text-2)}
.speaker.dark p{color:rgba(255,255,255,.82)}
.sp-who{margin-top:auto;padding-top:12px;border-top:1px solid var(--sand);font-size:14px;color:var(--muted)}
.sp-who strong{color:var(--ink)}
.speaker.dark .sp-who{border-top-color:rgba(255,255,255,.14);color:rgba(255,255,255,.7)}
.speaker.dark .sp-who strong{color:#fff}
.rows{display:flex;flex-direction:column;gap:2px;background:var(--line)}
.row{background:#fff;padding:32px;display:flex;flex-wrap:wrap;gap:16px 40px;align-items:baseline}
.row-who{flex:0 0 260px;display:flex;flex-direction:column;gap:4px}
.row-who strong{font-family:var(--display);font-size:19px;color:var(--ink)}
.row-who span{font-size:14px;color:var(--muted)}
.row-what{flex:1 1 400px;min-width:0}
.row-what h3{font-size:17px}
.t-sky{color:var(--sky-dk)} .t-clay{color:var(--clay-dk)}
.row-what p{margin-top:6px;font-size:16px;line-height:1.6;color:var(--text-2)}
.highlight{background:var(--ink);color:#fff;padding:48px;display:flex;flex-wrap:wrap;gap:40px}
.hl-head{flex:1 1 320px}
.hl-kicker{font-family:var(--display);font-size:12px;font-weight:800;letter-spacing:2px;text-transform:uppercase;color:var(--clay-lt)}
.highlight h2{margin-top:14px;font-size:34px;line-height:1.15;letter-spacing:-.025em;color:#fff}
.hl-body{flex:1.3 1 420px;font-size:16px;line-height:1.7;color:rgba(255,255,255,.84)}
.hl-chips{margin-top:20px;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}
.hl-chips span{padding:12px 14px;background:rgba(255,255,255,.06);font-weight:600}
.trio{margin-top:20px;display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px}
.trio-card{background:#fff;border:1px solid var(--line-2);padding:28px}
.trio-r{font-family:var(--display);font-weight:800;font-size:44px;color:var(--clay);line-height:1}
.trio-card h3{margin-top:12px;font-size:20px;color:var(--ink)}
.feature{background:#fff;border:1px solid var(--line-2);border-left:6px solid var(--tone);padding:44px;display:flex;flex-direction:column;gap:16px}
.feature-kicker{font-family:var(--display);font-size:12px;font-weight:800;letter-spacing:1.6px;text-transform:uppercase;color:var(--tone-dk)}
.feature h2{margin:0;font-size:30px;line-height:1.15;letter-spacing:-.02em;color:var(--ink)}
.feature p{font-size:17px;line-height:1.7;color:var(--text-2);max-width:760px}

/* photos */
.gallery{margin:0}
.gallery img{display:block;width:100%;object-fit:cover;background:var(--sand)}
.g-main{aspect-ratio:16/9}
.g-grid{margin-top:8px;display:grid;grid-template-columns:repeat(auto-fill,minmax(min(100%,240px),1fr));gap:8px}
.g-grid img{aspect-ratio:4/3}
.gallery figcaption{margin-top:12px;font-size:14px;color:var(--muted)}

/* closing */
.a-cta{margin-top:88px}
.cta-in{padding-top:80px;padding-bottom:80px;display:flex;flex-wrap:wrap;gap:32px;align-items:center;justify-content:space-between}
.cta-text{flex:1 1 520px}
.cta-text h2{margin:0;font-family:var(--display);font-weight:800;font-size:40px;line-height:1.1;letter-spacing:-.035em;color:#fff}
:host([data-lang="zh-TW"]) .cta-text h2{letter-spacing:0;line-height:1.3}
.cta-text p{margin-top:14px;font-size:17px;line-height:1.6;color:rgba(255,255,255,.8)}
.a-cta .btns{margin-top:0}
.more{padding-top:72px;padding-bottom:96px}
.more h2{font-size:26px}
.more-list{margin-top:24px;display:flex;flex-direction:column;gap:12px}
.more-card{display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:16px;padding:28px;background:#fff;border:1px solid var(--line-2);border-top:4px solid var(--tone);text-decoration:none;color:var(--ink);font-family:var(--display);font-weight:800;font-size:20px;transition:transform .2s,box-shadow .2s}
.more-card:hover{transform:translateY(-2px);box-shadow:0 14px 30px rgba(23,34,42,.08)}
.more-read{font-size:14px;white-space:nowrap}
.a-missing{padding:48px 32px;font-family:var(--display);font-weight:700;color:var(--clay-dk)}

@media (max-width:900px){
  .case-body{flex-direction:column;gap:32px}
  .side{position:static;flex:none;width:100%}
  .fact-card{grid-template-columns:repeat(2,minmax(0,1fr))}
  .fact-card div:nth-child(2){border-right:0}
  .result-grid.n4{grid-template-columns:repeat(2,minmax(0,1fr))}
  .speakers,.trio{grid-template-columns:1fr}
}
@media (max-width:640px){
  .a-wide,.a-narrow{padding-left:16px;padding-right:16px}
  .a-hero-in{padding-top:48px}
  .a-hero.has-card .a-hero-in{padding-bottom:120px}
  .fact-card-wrap{margin-top:-80px}
  .fact-card{grid-template-columns:1fr}
  .fact-card div{border-right:0;border-bottom:1px solid var(--sand);padding:20px}
  .result-grid.n3,.result-grid.n4{grid-template-columns:1fr}
  .result,.result:first-child{padding:22px 0}
  .result-n{font-size:44px}
  .ev-block > h2{font-size:28px}
  .prose h2{font-size:26px}
  .prose p{font-size:17px}
  .pull blockquote{font-size:22px}
  .box,.feature,.highlight{padding:24px}
  .hl-chips{grid-template-columns:1fr}
  .row{padding:24px}
  .row-who{flex:1 1 100%}
  .cta-text h2{font-size:30px}
}
@media (prefers-reduced-motion:reduce){ .more-card{transition:none} }
`;
