import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import vm from "node:vm";

const html = readFileSync(new URL("../index.html", import.meta.url), "utf8");
const script = html.match(/<script>([\s\S]*?)<\/script>/)?.[1];
assert.ok(script, "The course has an inline application script");

function course() {
  const window = {
    location: { hash: "" },
    history: { pushState(_state, _title, hash) { window.location.hash = hash; } },
    addEventListener() {}, scrollTo() {}
  };
  const document = {
    documentElement: { setAttribute() {}, removeAttribute() {} },
    getElementById() { return { focus() {} }; }
  };
  const localStorage = { getItem() { return null; }, setItem() {}, removeItem() {} };
  const context = vm.createContext({ window, document, localStorage });
  // Startup renders real DOM. Tests execute the application definitions without startup.
  const definitions = script.replace(/\/\* ---------- Start ---------- \*\/[\s\S]*$/, "");
  vm.runInContext(definitions + `
    globalThis.testApi = { MODS, CAPSTONE, blank, valid, normalise, M, status,
      checkScore, baselineScore, capstoneOk, routeFromHash, routeHash,
      getState: () => state, setState: value => { state = value; } };`, context);
  return { api: context.testApi, window };
}

test("course has eight modules, forty-eight practice questions and twenty checks", () => {
  const { api } = course();
  assert.equal(api.MODS.length, 8);
  assert.equal(api.MODS.reduce((sum, m) => sum + m.items.length, 0), 48);
  assert.match(html, /const CHECK=\{/);
});

test("Module 6 correctly distinguishes agreement from independent judgment", () => {
  assert.match(html, /would this source still agree with me if I held the opposite view/);
  assert.match(html, /keeps its assessment steady regardless of my expressed view/);
});

test("rejects maliciously typed assessment results", () => {
  const { api } = course();
  const progress = api.blank();
  progress.check.A = {
    r: ['<img src=x onerror=alert(1)>', ...Array(9).fill(0)],
    date: 1000
  };
  assert.equal(api.valid(progress), false);
});

test("normalization removes unsafe values from imported nested progress", () => {
  const { api } = course();
  const progress = api.blank();
  progress.mods.claims = {
    kase: "<img>",
    read: {},
    lab: { done: "true", d: { ans: { "0.0": '<svg onload=alert(1)>' } } },
    items: { attempts: "<img>", correct: 100, recent: ["bad", 1, 0] },
    reflect: "A reflection"
  };
  const clean = api.normalise(progress).mods.claims;
  assert.equal(clean.kase, null);
  assert.equal(clean.lab.done, false);
  assert.equal(clean.items.attempts, 0);
  assert.equal(clean.items.correct, 0);
  assert.deepEqual(Array.from(clean.items.recent), [1, 0]);
  assert.equal(Object.keys(clean.lab.d.ans).length, 0);
});

test("original baseline persists after first-form retakes", () => {
  const { api } = course();
  const progress = api.blank();
  progress.check.A = { r: Array(10).fill(1), date: 2000 };
  progress.check.baselineA = { r: Array(10).fill(0), date: 1000 };
  api.setState(api.normalise(progress));
  assert.equal(api.baselineScore(), 0);
  assert.equal(api.checkScore("A"), 10);
});

test("legacy progress migrates the original pre-check into baseline", () => {
  const { api } = course();
  const progress = api.blank();
  delete progress.check.baselineA;
  progress.check.A = { r: [1, ...Array(9).fill(0)], date: 1000 };
  assert.equal(api.normalise(progress).check.baselineA.r[0], 1);
});

test("module completion requires the case, readings, lab, practice, dialogue and reflection", () => {
  const { api } = course();
  api.setState(api.blank());
  const m = api.MODS[0], progress = api.M(m.id);
  progress.items.recent = Array(6).fill(1);
  progress.dlg.done = true;
  progress.reflect = "A sufficiently detailed account of the evidence.";
  assert.notEqual(api.status(m.id).key, "done");
  progress.kase = 0;
  progress.lab.done = true;
  m.reads.forEach((_, i) => { progress.read[i] = 1; });
  assert.equal(api.status(m.id).key, "done");
});

test("capstone requires all eight answers and three self-checks", () => {
  const { api } = course();
  api.setState(api.blank());
  const progress = api.getState().cap;
  progress.rubric = [true, true, true];
  api.CAPSTONE.steps.slice(0, 6).forEach(s => {
    progress.steps[s.k] = "A sufficiently detailed analysis for this step.";
  });
  assert.equal(api.capstoneOk(), false);
  api.CAPSTONE.steps.slice(6).forEach(s => {
    progress.steps[s.k] = "A sufficiently detailed analysis for this step.";
  });
  assert.equal(api.capstoneOk(), true);
});

test("shareable URLs resolve to the proper course view", () => {
  const { api, window } = course();
  window.location.hash = "#unit-claims";
  assert.equal(api.routeFromHash().id, "claims");
  assert.equal(api.routeHash({ name: "check", form: "B" }), "#check-B");
  window.location.hash = "#unit-not-real";
  assert.equal(api.routeFromHash().name, "home");
});

test("course privacy notice distinguishes browser storage from optional Claude use", () => {
  assert.match(html, /On this public site, progress stays in this browser/);
  assert.match(html, /text or progress may be sent to Claude/);
});
