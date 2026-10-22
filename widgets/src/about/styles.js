// Extra styles for the About page (on top of shared/styles.js).
export default `
.eyebrow.clay-light{color:var(--clay-lt)}

/* hero: the name as a dictionary entry */
.ab-hero{position:relative;padding-top:96px;padding-bottom:104px}
.word-row{display:flex;flex-wrap:wrap;align-items:baseline;gap:12px 28px;margin-top:32px}
.word{margin:0;font-family:var(--display);font-weight:800;font-size:clamp(72px,12vw,176px);line-height:.9;letter-spacing:-.055em;color:#fff}
:host([data-lang="zh-TW"]) .word{font-size:clamp(72px,12vw,176px);letter-spacing:-.055em;line-height:.9;font-family:'Manrope',sans-serif}
.dot-mid{color:var(--clay)}
.pos{font-family:var(--display);font-weight:500;font-size:22px;font-style:italic;color:rgba(255,255,255,.6)}
:host([data-lang="zh-TW"]) .pos{font-style:normal}
.def-row{display:flex;flex-wrap:wrap;gap:40px 64px;margin-top:44px;padding-top:32px;border-top:1px solid rgba(255,255,255,.22)}
.definition{flex:2 1 520px;font-family:var(--display);font-weight:600;font-size:clamp(22px,2.4vw,34px);line-height:1.35;letter-spacing:-.015em;color:#fff}
:host([data-lang="zh-TW"]) .definition{letter-spacing:0;line-height:1.55}
.def-side{flex:1 1 260px;display:flex;flex-direction:column;gap:10px}
.def-alt{font-family:var(--zh-serif);font-weight:700;font-size:40px;color:var(--clay-lt)}
:host([data-lang="zh-TW"]) .def-alt{font-family:'Quicksand','Manrope',sans-serif;font-size:34px}
.def-side p{font-size:15px;line-height:1.65;color:rgba(255,255,255,.72)}

/* positioning */
.sand h2.wide{margin-top:0}
.options{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,280px),1fr));gap:16px;align-items:stretch}
.option{padding:36px;border:1px solid #CFC8C0;display:flex;flex-direction:column;gap:14px}
.option h3{font-size:20px;color:var(--muted)}
.option p{font-size:15px;line-height:1.6;color:var(--muted)}
.option.us{background:var(--ink);border-color:var(--ink);transform:translateY(-12px);box-shadow:0 24px 48px rgba(23,34,42,.18)}
.option.us h3{font-family:'Quicksand','Manrope',sans-serif;font-size:26px;color:#fff}
.option.us p{color:rgba(255,255,255,.85)}
.option-bar{margin-top:6px;height:3px;width:56px;background:var(--clay)}

/* how we work */
.ab-how{padding-top:120px;padding-bottom:104px}
.how-grid{margin-top:40px;display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,250px),1fr));gap:40px 32px}
.how-item{border-top:2px solid var(--ink);padding-top:22px}
.how-item h3{font-size:22px;line-height:1.25;color:var(--ink)}
.how-item p{margin-top:10px;font-size:15px;line-height:1.65;color:var(--muted)}

/* reach: light map */
.reach{background:var(--sand)}
.reach > .wrap{padding-top:104px;padding-bottom:104px}
.reach polylocal-map{color:var(--ink)}

/* team expertise */
.ab-team{padding-top:120px;padding-bottom:104px}
.team-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,250px),1fr));gap:16px}
.team-tile{padding:32px;display:flex;flex-direction:column;gap:12px;background:#fff;border:1px solid var(--line-2)}
.team-tile.k0{background:var(--ink);border-color:var(--ink)}
.team-tile.k3{background:var(--sand);border-color:var(--sand)}
.team-big{font-family:var(--display);font-size:34px;font-weight:800;letter-spacing:-.02em;line-height:1.2}
.team-big.serif{font-family:var(--zh-serif);font-weight:700}
.team-big.small{font-size:20px;letter-spacing:0;white-space:nowrap;line-height:1.8}
.k0 .team-big{color:var(--sky-lt)} .k1 .team-big{color:var(--clay)} .k2 .team-big{color:var(--clay-dk)} .k3 .team-big{color:var(--ink)}
.team-tile h3{font-size:20px;color:var(--ink)} .k0 h3{color:#fff}
.team-tile p{font-size:15px;line-height:1.6;color:var(--muted)} .k0 p{color:rgba(255,255,255,.78)}
.network{margin-top:24px;padding:24px 32px;border:1px solid var(--line);font-family:var(--display);font-weight:800;font-size:18px;color:var(--ink)}

/* commitment */
.commit{background:var(--ink);color:#fff;border-bottom:1px solid rgba(255,255,255,.08)}
.commit > .wrap{padding-top:112px;padding-bottom:112px}
.quote{margin-top:28px;max-width:1040px;font-family:var(--display);font-weight:800;font-size:clamp(30px,3.8vw,52px);line-height:1.12;letter-spacing:-.035em}
:host([data-lang="zh-TW"]) .quote{letter-spacing:0;line-height:1.4}
.pillars{margin-top:64px;display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,260px),1fr));gap:32px}
.pillar{border-top:1px solid rgba(255,255,255,.18);padding-top:24px}
.pillar h3{font-size:20px}
.pillar p{margin-top:10px;font-size:15px;line-height:1.65;color:rgba(255,255,255,.75)}

@media (max-width:640px){
  .ab-hero{padding-top:56px;padding-bottom:64px}
  .option.us{transform:none}
  .option,.team-tile{padding:24px}
  .ab-how,.ab-team{padding-top:80px;padding-bottom:72px}
  .reach > .wrap,.commit > .wrap{padding-top:80px;padding-bottom:80px}
  .network{padding:20px}
}
`;
