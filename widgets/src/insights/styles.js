// Styles for the Insights page (on top of shared/styles.js).
export default `
.tone-sky{--tone:var(--sky);--tone-dk:var(--sky-dk);--tone-soft:#EEF4F7}
.tone-clay{--tone:var(--clay);--tone-dk:var(--clay-dk);--tone-soft:#F3E6E3}

/* header */
.ins-hero-in{position:relative;padding-top:88px;padding-bottom:80px}
.ins-hero h1{font-size:clamp(46px,6.4vw,92px);color:#fff}
:host([data-lang="zh-TW"]) .ins-hero h1{line-height:1.15;letter-spacing:-.01em}
.accent-sky{color:var(--sky-lt)}
.ins-dek{margin-top:28px;max-width:680px;font-size:20px;line-height:1.6;color:rgba(255,255,255,.82)}
.ins-jump{margin-top:48px;display:flex;flex-wrap:wrap;gap:12px}
.ins-jump a{display:flex;align-items:baseline;gap:10px;padding:14px 20px;border:1px solid rgba(255,255,255,.22);color:#fff;text-decoration:none;font-family:var(--display);font-weight:700;font-size:15px;transition:background .2s,border-color .2s}
.ins-jump a:hover{background:rgba(255,255,255,.06);border-color:rgba(255,255,255,.5)}
.ins-jump strong{font-size:26px;font-weight:800;color:var(--sky-lt);line-height:1}
.ins-jump a + a strong{color:var(--clay-lt)}

/* sections */
.ins-cases{background:var(--ivory);padding:104px 0}
.ins-events{padding:104px 0}
.ins-head{max-width:720px;margin-bottom:48px}
.ins-head h2{margin-top:18px}
.ins-sub{margin-top:16px;font-size:18px;line-height:1.6;color:var(--text-2)}
.card-kicker{font-family:var(--display);font-size:12px;font-weight:800;letter-spacing:1.6px;text-transform:uppercase;color:var(--muted)}
:host([data-lang="zh-TW"]) .card-kicker{letter-spacing:.5px;font-size:13px}
.read{margin-top:auto;padding-top:20px;display:inline-flex;align-items:center;gap:8px;font-family:var(--display);font-weight:800;font-size:15px;color:var(--ink)}
.read svg{width:16px;height:16px;transition:transform .2s}
a:hover .read svg{transform:translateX(4px)}
.empty{color:var(--muted)}

/* case studies */
.case-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:24px}
.case-card{display:flex;flex-direction:column;background:#fff;border:1px solid var(--line-2);color:var(--text);text-decoration:none;transition:box-shadow .25s,transform .25s}
.case-card:hover{box-shadow:0 24px 60px rgba(23,34,42,.12);transform:translateY(-2px)}
.case-visual{height:200px;background:var(--tone-soft);border-bottom:4px solid var(--tone);display:flex;align-items:center;justify-content:center;padding:32px;overflow:hidden}
.case-logo{max-width:min(78%,320px);max-height:96px;width:auto;height:auto;object-fit:contain}
.case-cover{width:calc(100% + 64px);height:calc(100% + 64px);margin:-32px;object-fit:cover}
.case-body{flex:1;display:flex;flex-direction:column;padding:32px}
.case-body h3{margin-top:12px;font-family:var(--display);font-weight:800;font-size:26px;line-height:1.2;letter-spacing:-.02em;color:var(--ink)}
.case-body p{margin-top:12px;font-size:16px;line-height:1.6;color:var(--text-2)}
.case-stat{margin-top:24px;padding-top:20px;border-top:1px solid var(--line-2);display:flex;align-items:baseline;gap:14px}
.case-stat strong{font-family:var(--display);font-weight:800;font-size:40px;line-height:1;letter-spacing:-.03em;color:var(--tone-dk)}
.case-stat span{font-size:14px;line-height:1.5;color:var(--muted)}

/* events */
.event-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:24px}
.event-card{display:flex;flex-direction:column;background:#fff;color:var(--text);text-decoration:none;transition:box-shadow .25s,transform .25s}
.event-card:hover{box-shadow:0 24px 60px rgba(23,34,42,.12);transform:translateY(-2px)}
.event-img{aspect-ratio:4/3;background:var(--ink);overflow:hidden}
.event-img img{display:block;width:100%;height:100%;object-fit:cover;transition:transform .4s}
.event-card:hover .event-img img{transform:scale(1.03)}
.event-body{flex:1;display:flex;flex-direction:column;padding:26px 26px 28px}
.event-body .card-kicker{color:var(--clay-dk)}
.event-body h3{margin-top:12px;font-family:var(--display);font-weight:800;font-size:21px;line-height:1.25;letter-spacing:-.015em;color:var(--ink)}
.event-body p{margin-top:10px;font-size:15px;line-height:1.6;color:var(--text-2);display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}
.all-link{margin-top:40px;display:inline-flex;align-items:center;gap:8px;font-family:var(--display);font-weight:800;color:var(--ink);text-decoration:none;border-bottom:2px solid var(--clay);padding-bottom:4px}
.all-link svg{width:16px;height:16px}

@media (max-width:1000px){
  .event-grid{grid-template-columns:repeat(2,minmax(0,1fr))}
}
@media (max-width:760px){
  .ins-hero-in{padding-top:56px;padding-bottom:56px}
  .ins-dek{font-size:18px}
  .ins-cases,.ins-events{padding:72px 0}
  .case-grid,.event-grid{grid-template-columns:1fr}
  .case-visual{height:160px}
  .case-body{padding:24px}
  .case-body h3{font-size:22px}
}
@media (prefers-reduced-motion:reduce){ .case-card,.event-card,.event-img img,.read svg{transition:none} }
`;
