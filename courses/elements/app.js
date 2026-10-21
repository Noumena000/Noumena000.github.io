"use strict";
/* ---------- State and persistence ---------- */
const KEY="elements-progress-v1";
const blank=()=>({v:1,units:{},drills:[],updated:0});
const valid=o=>o&&typeof o==="object"&&o.v===1&&o.units&&typeof o.units==="object"&&Array.isArray(o.drills);
let state=blank(), sync="local", docRef=null, saveTimer=null, view={name:"home"};
try{const s=localStorage.getItem(KEY);if(s){const o=JSON.parse(s);if(valid(o))state=o}}catch(e){}
function saveLocal(){try{localStorage.setItem(KEY,JSON.stringify(state))}catch(e){}}
function save(){state.updated=Date.now();saveLocal();clearTimeout(saveTimer);saveTimer=setTimeout(pushRemote,1200)}
async function pushRemote(retry){
  if(!docRef)return;
  try{await docRef.set({json:JSON.stringify(state),updated:state.updated});setSync("account")}
  catch(e){if(e&&e.code==="unavailable"&&!retry){setTimeout(()=>pushRemote(true),800+Math.random()*1200)}else if(e&&(e.code==="revoked"||e.code==="invalid_argument"||e.code==="not_granted")){docRef=null;setSync("local")}}
}
function setSync(s){sync=s;const el=document.getElementById("sync");if(el)el.textContent=syncText()}
const syncText=()=>sync==="account"?"Progress is saved to your account, and also in this browser.":"Progress is saved in this browser. Export it below to keep a portable copy.";
async function connect(){
  if(!window.claude||typeof window.claude.use!=="function")return;
  try{
    const [db,user]=await Promise.all([window.claude.use("db"),window.claude.use("user")]);
    if(!db||!user)return;const id=await user.id();if(!id)return;
    const ref=db.doc(`data/users/${id}/progress`);const snap=await ref.get();docRef=ref;
    if(snap.exists){let o=null;try{o=JSON.parse(snap.data().json)}catch(e){}
      if(valid(o)&&(o.updated||0)>(state.updated||0)){state=o;saveLocal();if(view.name==="home")render()}
      else if(state.updated>((o&&o.updated)||0))pushRemote()}
    else if(state.updated)pushRemote();
    setSync("account");
  }catch(e){}
}
function record(uid,ok){const u=state.units[uid]||(state.units[uid]={attempts:0,correct:0,recent:[]});u.attempts++;if(ok)u.correct++;u.recent.push(ok?1:0);if(u.recent.length>20)u.recent=u.recent.slice(-20);save()}
function status(uid){const u=state.units[uid];if(!u||!u.attempts)return {key:"new",label:"Not started",last:[]};
  const last=u.recent.slice(-10),right=last.reduce((a,b)=>a+b,0);
  if(last.length>=10&&right>=8)return {key:"done",label:"Mastered",last};
  return {key:"doing",label:`${right} of last ${last.length} right`,last}}
const dots=last=>`<span class="dots" aria-hidden="true">${Array.from({length:10},(_,i)=>{const v=last[i];return `<i class="${v===1?"y":v===0?"n":""}"></i>`}).join("")}</span>`;
const nextUnit=()=>UNITS.find(u=>status(u.id).key!=="done");

/* ---------- Rendering ---------- */
const app=document.getElementById("app");
function go(v){view=v;render();window.scrollTo(0,0)}
function render(){
  if(view.name==="unit")return renderUnit(view.id);
  if(view.name==="drill")return renderDrill();
  renderHome();
}

function renderHome(){
  const nx=nextUnit(), started=UNITS.some(u=>status(u.id).key!=="new");
  const lastDrills=state.drills.slice(-5).reverse();
  app.innerHTML=`
  <p class="small muted" style="margin:0 0 6px"><a href="../">← All courses</a> · <a href="../../">Benjamin A. Moss</a></p>
  <header class="hero">
    <svg class="trio" width="132" height="40" viewBox="0 0 132 40" aria-hidden="true"><circle cx="20" cy="20" r="18" fill="var(--yellow)"/><path d="M66 3 L84 37 L48 37 Z" fill="var(--red)"/><rect x="96" y="3" width="34" height="34" fill="var(--blue)"/></svg>
    <h1>Elements</h1>
    <p class="lede">Mathematics from the ground up, with the reasons left in.</p>
  </header>

  <div class="next">
    <p>${nx?(started?`Pick up where you left off: <b>Book ${UNIT[nx.id].n}, ${nx.title}.</b>`:`Begin with <b>Book 1, Place value.</b> Each book explains an idea, shows why it’s true, then gives you practice until it’s solid.`):`All ${UNITS.length} books are mastered. Keep them sharp with the drill.`}</p>
    ${nx?`<button class="btn" data-go="${nx.id}">${started?"Continue":"Start Book 1"}</button>`:`<button class="btn" data-drill>Start a drill</button>`}
  </div>

  <section class="sec">
    <h2>The path</h2>
    <p class="muted">The books build on each other, but you can open any of them. A book counts as mastered when you get 8 of your last 10 right.</p>
    ${PARTS.map(([pt,ids,note])=>`<h3 class="part">${pt}</h3>${note?`<p class="small muted">${note}</p>`:""}<ol class="books">
      ${ids.map(id=>{const u=UNIT[id],s=status(id);return `<li><button class="book" data-go="${id}">
        ${glyph(id)}
        <span><span class="num">Book ${u.n}</span><span class="title">${u.title}</span><span class="gist">${u.gist}</span></span>
        <span class="state ${s.key}">${s.label}${s.key!=="new"?"<br>"+dots(s.last):""}</span>
      </button></li>`}).join("")}
    </ol>`).join("")}
  </section>

  <section class="sec">
    <h2>Mixed drill</h2>
    <p class="muted">Ten mixed problems from the books you’ve started, timed for your own record. Before you start any book, it draws on the first three. Results also count toward each book.</p>
    <div class="row"><button class="btn ghost" data-drill>Start a drill</button></div>
    ${lastDrills.length?`<div class="tablewrap"><table class="statgrid" style="margin-top:18px"><tr><th>Date</th><th>Score</th><th>Time</th></tr>${lastDrills.map(d=>`<tr><td>${new Date(d.at).toLocaleDateString(undefined,{month:"short",day:"numeric"})}</td><td>${d.score} of ${d.total}</td><td>${fmtTime(d.secs)}</td></tr>`).join("")}</table></div>`:""}
  </section>

  <section class="sec" id="progress">
    <h2>Your progress</h2>
    <p class="sync" id="sync">${syncText()}</p>
    <div class="row" style="margin-top:14px">
      <button class="btn ghost" id="export">Export progress</button>
      <button class="btn ghost" id="showjson">Copy or paste as text</button>
      <button class="btn quiet" id="reset">Reset progress</button>
    </div>
    <div id="jsonbox" hidden>
      <textarea id="json" spellcheck="false" aria-label="Progress as JSON"></textarea>
      <div class="row"><button class="btn ghost" id="import">Load pasted progress</button><span id="jsonmsg" class="small muted"></span></div>
    </div>
  </section>
  <footer class="sec small muted" style="border-top:1px solid var(--rule);padding-top:18px">
    <p>Version 0.1, a draft. The readings and problems were written with AI assistance and are awaiting review by a mathematics educator, and the course has not yet been tested with learners. Practice checks numerical and multiple-choice answers; it cannot check a written proof. It does not replace a teacher or a textbook.</p>
    <p>Made by <a href="../../">Benjamin A. Moss</a>. Your progress stays in your own browser; nothing is sent to a server.</p>
  </footer>`;

  app.querySelectorAll("[data-go]").forEach(b=>b.onclick=()=>go({name:"unit",id:b.dataset.go}));
  app.querySelectorAll("[data-drill]").forEach(b=>b.onclick=startDrill);
  document.getElementById("export").onclick=exportProgress;
  document.getElementById("showjson").onclick=()=>{const box=document.getElementById("jsonbox");box.hidden=!box.hidden;if(!box.hidden){const t=document.getElementById("json");t.value=JSON.stringify(state,null,2);t.select()}};
  document.getElementById("import").onclick=importProgress;
  const rb=document.getElementById("reset");let armed=false,tm;
  rb.onclick=()=>{if(!armed){armed=true;rb.textContent="Confirm reset: this erases everything";tm=setTimeout(()=>{armed=false;rb.textContent="Reset progress"},5000);return}
    clearTimeout(tm);state=blank();save();render()};
}
const fmtTime=s=>{s=Math.round(s);return s<60?`${s}s`:`${Math.floor(s/60)}m ${String(s%60).padStart(2,"0")}s`};

async function exportProgress(){
  const data=JSON.stringify(state,null,2);let dl=null;
  try{dl=window.claude&&typeof window.claude.use==="function"?await window.claude.use("downloads"):null}catch(e){}
  if(dl){try{await dl.save({filename:"elements-progress.json",data});return}catch(e){if(e&&e.code==="declined")return}}
  try{
    const url=URL.createObjectURL(new Blob([data],{type:"application/json;charset=utf-8"}));
    const a=document.createElement("a");a.href=url;a.download="elements-progress.json";document.body.appendChild(a);a.click();a.remove();
    setTimeout(()=>URL.revokeObjectURL(url),4000);return;
  }catch(e){}
  const box=document.getElementById("jsonbox");box.hidden=false;const t=document.getElementById("json");t.value=data;t.select();
  document.getElementById("jsonmsg").textContent="Saving a file isn’t available here. Copy this text instead.";
}
function importProgress(){
  const msg=document.getElementById("jsonmsg");let o;
  try{o=JSON.parse(document.getElementById("json").value)}catch(e){msg.textContent="That text isn’t valid JSON.";return}
  if(!valid(o)){msg.textContent="That doesn’t look like an Elements progress file.";return}
  state=o;save();render();
}

/* ----- Unit view ----- */
let cur=null;
function renderUnit(uid){
  const u=UNIT[uid],s=status(uid),fresh=s.key==="new";
  app.innerHTML=`
  <p class="back"><button class="btn quiet" id="back">All books</button></p>
  <div class="unit-head">${glyph(uid,52)}<div><div class="num">Book ${u.n}</div><h1>${u.title}</h1></div></div>
  <details ${fresh?"open":""}><summary>The idea</summary><div class="reading">${u.idea}</div></details>
  <details ${fresh?"open":""}><summary>Why it works</summary><div class="reading">${u.why}</div></details>
  <details ${fresh?"open":""}><summary>Mental moves</summary><div class="reading">${u.moves}</div></details>
  <section class="practice">
    <div class="practice-head"><h2>Practice</h2><span class="small muted" id="ustatus">${s.label} ${s.key!=="new"?dots(s.last):""}</span></div>
    <div id="pbox"></div>
  </section>
  ${u.n<UNITS.length?`<p class="unit-next"><button class="btn quiet" id="nextbook">Next: Book ${u.n+1}, ${UNITS[u.n].title}</button></p>`:""}`;
  document.getElementById("back").onclick=()=>go({name:"home"});
  const nb=document.getElementById("nextbook");if(nb)nb.onclick=()=>go({name:"unit",id:UNITS[u.n].id});
  cur={uid,mode:"unit"};newProblem();
}
function updateUnitStatus(){const el=document.getElementById("ustatus");if(!el||!cur)return;const s=status(cur.uid);el.innerHTML=`${s.label} ${dots(s.last)}`}

function newProblem(){
  cur.p=makeProblem(cur.mode==="drill"?cur.queue[cur.i]:cur.uid);cur.done=false;cur.hint=false;
  drawProblem();
}
function drawProblem(){
  const p=cur.p,box=document.getElementById("pbox");
  const numeric=p.t==="num"&&["place","addsub","mult","div"].includes(p.unit);
  box.innerHTML=`<div class="prop">
    <div class="label">${cur.mode==="drill"?`Book ${UNIT[p.unit].n}, ${UNIT[p.unit].title}`:"Problem"}</div>
    <p class="q${p.q.replace(/<[^>]+>/g,"").length>90?" long":""}">${p.q}</p>
    ${p.t==="mc"?`<div class="options">${p.options.map((o,i)=>`<button class="btn ghost opt" data-mc="${i}">${o}</button>`).join("")}</div>${cur.mode==="drill"?"":`<p><button class="btn quiet" id="hintbtn">Hint</button></p>`}`
    :p.t==="yn"?`<div class="answer-row"><button class="btn ghost" data-yn="yes">${(p.labels||["Yes","No"])[0]}</button><button class="btn ghost" data-yn="no">${(p.labels||["Yes","No"])[1]}</button>${cur.mode==="drill"?"":`<button class="btn quiet" id="hintbtn">Hint</button>`}</div>`
    :`<form class="answer-row" id="af" autocomplete="off"><input id="ans" ${numeric?'inputmode="decimal"':'inputmode="text"'} aria-label="Your answer" placeholder="${p.t==="frac"?"e.g. 3/4":"Your answer"}"><button class="btn" type="submit">Check</button>${cur.mode==="drill"?"":`<button class="btn quiet" type="button" id="hintbtn">Hint</button>`}</form>`}
    <div class="err" id="err" role="alert"></div>
    <div class="feedback" id="fb"></div>
  </div>`;
  const f=document.getElementById("af");
  if(f){f.onsubmit=e=>{e.preventDefault();if(cur.done)advance();else submit(document.getElementById("ans").value)};const i=document.getElementById("ans");i.focus({preventScroll:true})}
  box.querySelectorAll("[data-yn]").forEach(b=>b.onclick=()=>{if(!cur.done)submit(b.dataset.yn)});
  box.querySelectorAll("[data-mc]").forEach(b=>b.onclick=()=>{if(!cur.done){cur.pickedMc=+b.dataset.mc;submit(b.dataset.mc)}});
  const hb=document.getElementById("hintbtn");if(hb)hb.onclick=()=>{if(cur.hint||cur.done)return;cur.hint=true;document.getElementById("fb").innerHTML=`<p class="hint">${p.hint}</p>`};
}
function submit(raw){
  const p=cur.p,r=check(p,raw),err=document.getElementById("err");
  if(r.invalid){err.textContent=r.invalid;return}
  err.textContent="";cur.done=true;record(p.unit,r.ok);
  if(cur.mode==="drill"){if(r.ok)cur.score++;else cur.misses.push(p)}
  const fb=document.getElementById("fb");
  fb.innerHTML=`<p class="verdict ${r.ok?"ok":"bad"}">${r.ok?"Right.":`Not quite. The answer is ${showAnswer(p)}.`}</p>
    ${r.note?`<p>${r.note}</p>`:""}
    <p class="${r.ok?"muted":""}">${p.why}</p>
    <div class="row" style="margin-top:12px"><button class="btn" id="nextbtn">${cur.mode==="drill"&&cur.i===cur.queue.length-1?"See results":"Next problem"}</button><span class="small muted">or press Enter</span></div>`;
  document.querySelector(".prop").classList.add("flash");
  const inp=document.getElementById("ans");if(inp){inp.readOnly=true}
  document.querySelectorAll("[data-yn]").forEach(b=>b.disabled=true);
  document.querySelectorAll("[data-mc]").forEach(b=>{b.disabled=true;const i=+b.dataset.mc;if(i===p.a)b.classList.add("right");else if(i===cur.pickedMc)b.classList.add("wrong")});
  document.getElementById("nextbtn").onclick=advance;
  if(p.t==="yn"||p.t==="mc")document.getElementById("nextbtn").focus({preventScroll:true});
  if(cur.mode==="unit"){updateUnitStatus();const s=status(cur.uid);if(s.key==="done"&&!cur.qedShown){cur.qedShown=true;document.querySelector(".prop").insertAdjacentHTML("beforeend",`<span class="qed">Mastered. Q.E.D.</span>`)}}
  if(cur.mode==="drill")updateDrillMeta();
}
function advance(){
  if(cur.mode==="drill"){cur.i++;if(cur.i>=cur.queue.length)return finishDrill();updateDrillMeta()}
  newProblem();
}
document.addEventListener("keydown",e=>{if(e.key==="Enter"&&cur&&cur.done&&cur.p&&(cur.p.t==="yn"||cur.p.t==="mc")&&document.activeElement&&document.activeElement.id!=="nextbtn"){e.preventDefault();advance()}});

/* ----- Drill ----- */
function startDrill(){
  let pool=UNITS.filter(u=>status(u.id).key!=="new").map(u=>u.id);
  if(!pool.length)pool=["place","addsub","mult"];
  const queue=Array.from({length:10},(_,i)=>pool[i%pool.length]);
  cur={mode:"drill",queue:shuffle(queue),i:0,score:0,misses:[],start:Date.now()};
  view={name:"drill"};render();window.scrollTo(0,0);
}
function renderDrill(){
  app.innerHTML=`<p class="back"><button class="btn quiet" id="back">All books</button></p>
  <div class="practice-head"><h2 style="font-size:36px">Drill</h2></div>
  <div class="drill-meta"><span id="dprog"></span><span id="dtime"></span></div>
  <div id="pbox"></div>`;
  document.getElementById("back").onclick=()=>{clearInterval(cur.timer);go({name:"home"})};
  clearInterval(cur.timer);cur.timer=setInterval(updateDrillMeta,1000);
  updateDrillMeta();newProblem();
}
function updateDrillMeta(){const a=document.getElementById("dprog"),b=document.getElementById("dtime");if(!a||!cur||cur.mode!=="drill"){if(cur&&cur.timer)clearInterval(cur.timer);return}
  a.textContent=`Problem ${Math.min(cur.i+1,cur.queue.length)} of ${cur.queue.length}, ${cur.score} right`;b.textContent=fmtTime((Date.now()-cur.start)/1000)}
function finishDrill(){
  clearInterval(cur.timer);const secs=(Date.now()-cur.start)/1000;
  state.drills.push({at:Date.now(),score:cur.score,total:cur.queue.length,secs:Math.round(secs)});
  if(state.drills.length>30)state.drills=state.drills.slice(-30);save();
  document.getElementById("pbox").innerHTML=`<div class="prop">
    <p class="q">${cur.score} of ${cur.queue.length} in ${fmtTime(secs)}</p>
    ${cur.misses.length?`<p>Worth another look:</p><ol class="misses">${cur.misses.map(p=>`<li><span>${p.q}</span><br><span class="small">Answer ${showAnswer(p)}. ${p.why}</span></li>`).join("")}</ol>`:`<p>No misses.</p>`}
    <div class="row" style="margin-top:16px"><button class="btn" id="again">Drill again</button><button class="btn ghost" id="home">All books</button></div>
  </div>`;
  document.getElementById("dprog").textContent="Finished";
  document.getElementById("again").onclick=startDrill;
  document.getElementById("home").onclick=()=>go({name:"home"});
}

render();
connect();
