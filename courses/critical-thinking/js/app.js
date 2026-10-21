/* Thinking Well: course runner.
   No dependencies. Course text lives in content/*.js. Learner work is saved in localStorage. */
(function () {
  'use strict';

  var C = window.COURSE;
  var KEY = 'thinking-well:v1';
  var PARTS = ['question', 'lesson', 'reading', 'practice', 'pushback', 'notebook', 'selfcheck'];
  var PART_LABEL = {
    question: 'The question', lesson: 'Lesson', reading: 'Reading', practice: 'Practice',
    pushback: 'Push back', notebook: 'Notebook', selfcheck: 'Self-check'
  };

  /* ---------- storage ---------- */

  var memory = null;
  var saveTimer = null;
  var storageOk = true;

  function emptyState() {
    return { parts: {}, text: {}, checks: {}, rubric: {}, capDone: {}, reveals: {} };
  }

  function load() {
    try {
      var raw = window.localStorage.getItem(KEY);
      if (raw) { return Object.assign(emptyState(), JSON.parse(raw)); }
    } catch (e) { storageOk = false; }
    return memory || emptyState();
  }

  var state = load();

  function persist() {
    try {
      window.localStorage.setItem(KEY, JSON.stringify(state));
      storageOk = true;
    } catch (e) {
      memory = state;
      storageOk = false;
    }
    updateSaveNote();
  }

  function saveSoon() {
    clearTimeout(saveTimer);
    saveTimer = setTimeout(persist, 300);
  }

  function updateSaveNote() {
    var n = document.getElementById('savenote');
    if (!n) { return; }
    n.textContent = storageOk
      ? 'Your progress is saved in this browser.'
      : 'This browser is blocking storage, so your work will be lost when you close the page. Download a backup from the Your work page.';
  }

  /* ---------- small helpers ---------- */

  function h(tag, props) {
    var e = document.createElement(tag);
    var p = props || {};
    Object.keys(p).forEach(function (k) {
      var v = p[k];
      if (v === false || v === null || v === undefined) { return; }
      if (k === 'class') { e.className = v; }
      else if (k === 'html') { e.innerHTML = v; }
      else if (k.indexOf('on') === 0) { e.addEventListener(k.slice(2), v); }
      else if (v === true) { e.setAttribute(k, ''); }
      else { e.setAttribute(k, v); }
    });
    for (var i = 2; i < arguments.length; i++) { appendKid(e, arguments[i]); }
    return e;
  }

  function appendKid(e, c) {
    if (c === null || c === undefined || c === false) { return; }
    if (Array.isArray(c)) { c.forEach(function (x) { appendKid(e, x); }); return; }
    e.appendChild(c.nodeType ? c : document.createTextNode(String(c)));
  }

  function esc(s) {
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function inline(s) {
    s = esc(s);
    s = s.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    s = s.replace(/\*(.+?)\*/g, '<em>$1</em>');
    return s;
  }

  function cells(row) {
    return row.trim().replace(/^\|/, '').replace(/\|$/, '').split('|').map(function (c) { return c.trim(); });
  }

  function mdTable(rows) {
    var head = cells(rows[0]);
    var body = rows.slice(2).map(cells);
    var out = '<div class="table-wrap"><table><thead><tr>';
    head.forEach(function (c) { out += '<th scope="col">' + inline(c) + '</th>'; });
    out += '</tr></thead><tbody>';
    body.forEach(function (r) {
      out += '<tr>';
      r.forEach(function (c) { out += '<td>' + inline(c) + '</td>'; });
      out += '</tr>';
    });
    return out + '</tbody></table></div>';
  }

  /* A small Markdown subset: paragraphs, ### headings, - bullets, 1. lists, pipe tables, **bold**, *italic*. */
  function md(src) {
    var lines = String(src || '').trim().split('\n');
    var out = [];
    var i = 0;
    var blockStart = /^(\||- |\d+\. |### )/;
    while (i < lines.length) {
      var l = lines[i];
      if (!l.trim()) { i++; continue; }
      if (l.indexOf('|') === 0) {
        var rows = [];
        while (i < lines.length && lines[i].indexOf('|') === 0) { rows.push(lines[i]); i++; }
        out.push(mdTable(rows));
      } else if (/^### /.test(l)) {
        out.push('<h4>' + inline(l.slice(4)) + '</h4>');
        i++;
      } else if (/^- /.test(l)) {
        var items = [];
        while (i < lines.length && /^- /.test(lines[i])) { items.push(lines[i].slice(2)); i++; }
        out.push('<ul>' + items.map(function (t) { return '<li>' + inline(t) + '</li>'; }).join('') + '</ul>');
      } else if (/^\d+\. /.test(l)) {
        var nums = [];
        while (i < lines.length && /^\d+\. /.test(lines[i])) { nums.push(lines[i].replace(/^\d+\. /, '')); i++; }
        out.push('<ol>' + nums.map(function (t) { return '<li>' + inline(t) + '</li>'; }).join('') + '</ol>');
      } else {
        var para = [];
        while (i < lines.length && lines[i].trim() && !blockStart.test(lines[i])) { para.push(lines[i]); i++; }
        out.push('<p>' + inline(para.join(' ')) + '</p>');
      }
    }
    return out.join('');
  }

  function mdNode(src, cls) { return h('div', { class: cls || 'md', html: md(src) }); }

  function words(s) { return (s.trim().match(/\S+/g) || []).length; }

  function download(name, text, type) {
    var blob = new Blob([text], { type: type });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url; a.download = name;
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
  }

  /* ---------- course data helpers ---------- */

  function modules() { return C.modules.slice().sort(function (a, b) { return a.n - b.n; }); }
  function findModule(n) { return modules().filter(function (m) { return m.n === n; })[0]; }
  function phaseName(id) {
    var p = C.phases.filter(function (x) { return x.id === id; })[0];
    return p ? p.name : '';
  }
  function textOf(k) { return state.text[k] || ''; }

  function partDone(n, p) {
    if (p === 'pushback') { return textOf('m' + n + '.pushback').trim().length > 0; }
    if (p === 'notebook') { return textOf('m' + n + '.notebook').trim().length > 0; }
    if (p === 'selfcheck') { var c = state.checks['m' + n]; return !!(c && c.done); }
    return !!(state.parts['m' + n] && state.parts['m' + n][p]);
  }

  function modProgress(n) {
    var d = 0;
    PARTS.forEach(function (p) { if (partDone(n, p)) { d++; } });
    return d / PARTS.length;
  }

  function overall() {
    var ms = modules(), s = 0;
    ms.forEach(function (m) { s += modProgress(m.n); });
    return ms.length ? s / ms.length : 0;
  }

  function nextModule() {
    var ms = modules();
    for (var i = 0; i < ms.length; i++) { if (modProgress(ms[i].n) < 1) { return ms[i]; } }
    return null;
  }

  /* ---------- shared widgets ---------- */

  var currentRoute = '';
  var stepperRefs = null;

  function ruled(key, label, rows, short, onChange) {
    var ta = h('textarea', { class: 'ruled' + (short ? ' short' : ''), 'aria-label': label, rows: rows || 6, spellcheck: 'true' });
    ta.value = textOf(key);
    ta.addEventListener('input', function () {
      state.text[key] = ta.value;
      saveSoon();
      if (onChange) { onChange(ta.value); }
      refreshChrome();
    });
    return ta;
  }

  function toggle(n, part) {
    var cb = h('input', { type: 'checkbox' });
    cb.checked = partDone(n, part);
    cb.addEventListener('change', function () {
      var k = 'm' + n;
      state.parts[k] = state.parts[k] || {};
      state.parts[k][part] = cb.checked;
      persist();
      refreshChrome();
    });
    return h('label', { class: 'done-toggle' }, cb, 'Mark as done');
  }

  /* ---------- rail and chrome ---------- */

  function renderRail() {
    var rail = document.getElementById('rail');
    rail.innerHTML = '';
    var pct = Math.round(overall() * 100);
    rail.appendChild(h('a', { class: 'back', href: '../' }, '← All courses'));
    rail.appendChild(h('a', { class: 'brand', href: '#/' }, C.title));
    rail.appendChild(h('p', { class: 'rail-progress' }, 'Course progress: ' + pct + '%'));
    rail.appendChild(h('div', { class: 'bar', role: 'progressbar', 'aria-valuemin': 0, 'aria-valuemax': 100, 'aria-valuenow': pct, 'aria-label': 'Course progress' }, h('span', { style: 'width:' + pct + '%' })));

    C.phases.forEach(function (ph) {
      rail.appendChild(h('h2', { class: 'phase' }, ph.name));
      var ul = h('ul', { class: 'line' });
      modules().filter(function (m) { return m.phase === ph.id; }).forEach(function (m) {
        var p = modProgress(m.n);
        var st = p === 1 ? 'done' : (p > 0 ? 'partial' : 'todo');
        var label = st === 'done' ? ' (complete)' : (st === 'partial' ? ' (in progress)' : '');
        var a = h('a', { class: 'node', href: '#/module/' + m.n, 'data-state': st },
          h('span', { class: 'num' }, m.n + '.'), m.short || m.title, h('span', { class: 'sr' }, label));
        if (currentRoute === 'module/' + m.n) { a.setAttribute('aria-current', 'page'); }
        ul.appendChild(h('li', null, a));
      });
      rail.appendChild(ul);
    });

    rail.appendChild(h('h2', { class: 'phase' }, 'Beyond the modules'));
    var links = h('ul', { class: 'rail-links' });
    [['capstone', 'Capstone project'], ['work', 'Your work and backup'], ['resources', 'Readings and resources'], ['teachers', 'For teachers']].forEach(function (x) {
      var a = h('a', { href: '#/' + x[0] }, x[1]);
      if (currentRoute === x[0]) { a.setAttribute('aria-current', 'page'); }
      links.appendChild(h('li', null, a));
    });
    rail.appendChild(links);
  }

  function refreshChrome() {
    renderRail();
    if (stepperRefs) {
      stepperRefs.parts.forEach(function (x) {
        x.btn.setAttribute('data-done', partDone(stepperRefs.n, x.part) ? 'true' : 'false');
      });
    }
  }

  /* ---------- pages ---------- */

  function renderHome() {
    var root = h('div', null);
    var hero = h('section', { class: 'hero' });
    hero.appendChild(h('h1', null, C.title));
    hero.appendChild(h('p', { class: 'lead' }, C.subtitle));
    hero.appendChild(mdNode(C.intro));

    var starter = h('div', { class: 'starter' });
    starter.appendChild(h('h2', null, 'Before you begin'));
    starter.appendChild(h('p', { class: 'hint' }, 'Two lines, just for you. You will come back to them at the end.'));
    starter.appendChild(h('label', { for: 'startBelief' }, 'Something I believe strongly'));
    var a = ruled('start.belief', 'Something I believe strongly', 2, true);
    a.id = 'startBelief';
    starter.appendChild(a);
    starter.appendChild(h('label', { for: 'startChange' }, 'What would change my mind'));
    starter.appendChild(h('p', { class: 'hint' }, 'If nothing would, write that. It is worth noticing.'));
    var b = ruled('start.change', 'What would change my mind', 2, true);
    b.id = 'startChange';
    starter.appendChild(b);
    hero.appendChild(starter);

    var nxt = nextModule();
    var row = h('div', { class: 'btn-row' });
    if (nxt) {
      var started = overall() > 0;
      row.appendChild(h('a', { class: 'btn', href: '#/module/' + nxt.n }, started ? 'Continue with module ' + nxt.n : 'Start module 1'));
    } else {
      row.appendChild(h('a', { class: 'btn', href: '#/capstone' }, 'Go to the capstone'));
    }
    row.appendChild(h('a', { class: 'btn secondary', href: '#/resources' }, 'Readings and resources'));
    hero.appendChild(row);
    root.appendChild(hero);

    root.appendChild(h('section', { class: 'section' },
      h('h2', null, 'What you will be able to do'),
      mdNode(C.outcomes)));

    root.appendChild(h('section', { class: 'section' },
      h('h2', null, 'How each module works'),
      mdNode(C.howItWorks)));

    var map = h('section', { class: 'section' }, h('h2', null, 'The course map'));
    C.phases.forEach(function (ph) {
      var blk = h('div', { class: 'map-phase' }, h('h3', null, ph.name), h('p', { class: 'theme' }, ph.theme));
      var ul = h('ul', { class: 'map-list' });
      modules().filter(function (m) { return m.phase === ph.id; }).forEach(function (m) {
        var pct = Math.round(modProgress(m.n) * 100);
        ul.appendChild(h('li', null, h('a', { href: '#/module/' + m.n }, h('span', null, m.n + '. ' + m.title), h('span', { class: 'pct' }, pct === 100 ? 'Complete' : (pct > 0 ? pct + '%' : 'Not started')))));
      });
      blk.appendChild(ul);
      map.appendChild(blk);
    });
    map.appendChild(h('p', null, 'After module 12, the ', h('a', { href: '#/capstone' }, 'capstone project'), ' brings everything together.'));
    root.appendChild(map);

    root.appendChild(h('section', { class: 'section' },
      h('h2', null, 'Pace, cost, and privacy'),
      mdNode(C.pace)));
    return root;
  }

  function section(id, title, body, toggleNode) {
    return h('section', { class: 'part', id: 'part-' + id },
      h('div', { class: 'part-head' }, h('h2', null, title), toggleNode || null),
      body);
  }

  function renderPractice(m) {
    var ol = h('ol', { class: 'practice' });
    m.practice.forEach(function (item, i) {
      var key = 'm' + m.n + '.practice.' + i;
      var rk = 'm' + m.n + '.model.' + i;
      var modelBox = h('div', { 'aria-live': 'polite' });
      var note = h('p', { class: 'note' });
      var btn = h('button', { type: 'button', class: 'btn secondary small' }, 'Compare with a model approach');

      function showModel() {
        modelBox.innerHTML = '';
        if (state.reveals[rk]) {
          modelBox.appendChild(h('div', { class: 'model' }, h('h4', null, 'A model approach'), mdNode(item.model)));
          btn.hidden = true;
          note.textContent = '';
        }
      }

      btn.addEventListener('click', function () {
        if (!state.reveals[rk] && textOf(key).trim().length < 20 && !btn.getAttribute('data-warned')) {
          note.textContent = 'Write a few sentences first. Your own attempt is what makes the comparison useful. Select the button again to see the model approach anyway.';
          btn.setAttribute('data-warned', '1');
          return;
        }
        state.reveals[rk] = true;
        persist();
        showModel();
      });

      var li = h('li', null,
        h('p', { class: 'prompt', html: inline(item.prompt) }),
        ruled(key, 'Your answer to practice item ' + (i + 1), 6),
        h('div', null, btn), note, modelBox);
      ol.appendChild(li);
      showModel();
    });
    return ol;
  }

  /* Same shuffled order every time for a given question, so saved answers stay valid. */
  function stableOrder(len, seed) {
    var order = [], i;
    for (i = 0; i < len; i++) { order.push(i); }
    var x = seed;
    for (i = len - 1; i > 0; i--) {
      x = (x * 1103515245 + 12345) % 2147483648;
      var j = Math.floor(x / 65536) % (i + 1);
      var t = order[i]; order[i] = order[j]; order[j] = t;
    }
    return order;
  }

  function renderSelfcheck(m) {
    var key = 'm' + m.n;
    var wrap = h('div', null);
    var summary = h('div', { 'aria-live': 'polite' });

    function current() { return state.checks[key] || { answers: [], done: false }; }

    function drawSummary() {
      summary.innerHTML = '';
      var c = current();
      var answered = c.answers.filter(function (x) { return x !== null && x !== undefined; }).length;
      var total = m.selfcheck.length;
      if (answered < total) {
        summary.appendChild(h('p', { class: 'note' }, 'Answered ' + answered + ' of ' + total + '.'));
        return;
      }
      var score = 0;
      m.selfcheck.forEach(function (q, i) { if (c.answers[i] === q.a) { score++; } });
      var msg = score >= total - 1
        ? 'You can move on. If you missed one, reread the explanation above.'
        : 'Reread the parts of the lesson behind the questions you missed, then try again.';
      summary.appendChild(h('p', { class: 'score' }, 'You got ' + score + ' of ' + total + '. ' + msg));
      summary.appendChild(h('div', { class: 'btn-row' },
        h('button', { type: 'button', class: 'btn secondary small', onclick: function () {
          state.checks[key] = { answers: [], done: false };
          persist(); redrawAll(); refreshChrome();
        } }, 'Try again')));
    }

    var fieldsets = [];

    function drawQuestion(qi) {
      var q = m.selfcheck[qi];
      var fs = fieldsets[qi];
      fs.innerHTML = '';
      var ans = current().answers[qi];
      var answered = ans !== null && ans !== undefined;
      fs.appendChild(h('legend', null, (qi + 1) + '. ' + q.q));
      stableOrder(q.options.length, m.n * 131 + qi * 17 + 5).forEach(function (oi) {
        var opt = q.options[oi];
        var id = key + '-q' + qi + '-o' + oi;
        var input = h('input', { type: 'radio', name: key + '-q' + qi, id: id, value: oi });
        if (answered) { input.disabled = true; if (ans === oi) { input.checked = true; } }
        input.addEventListener('change', function () { choose(qi, oi); });
        var cls = 'opt';
        if (answered) { if (oi === q.a) { cls += ' correct'; } else if (oi === ans) { cls += ' incorrect'; } }
        fs.appendChild(h('label', { class: cls, for: id }, input, h('span', null, opt)));
      });
      if (answered) {
        fs.appendChild(h('p', { class: 'why', role: 'status' }, (ans === q.a ? 'Right. ' : 'Not quite. ') + q.why));
      }
    }

    function choose(qi, oi) {
      var c = current();
      var answers = c.answers.slice();
      while (answers.length < m.selfcheck.length) { answers.push(null); }
      answers[qi] = oi;
      var done = answers.every(function (x) { return x !== null && x !== undefined; });
      state.checks[key] = { answers: answers, done: done };
      persist();
      drawQuestion(qi);
      drawSummary();
      refreshChrome();
    }

    function redrawAll() {
      m.selfcheck.forEach(function (q, qi) { drawQuestion(qi); });
      drawSummary();
    }

    m.selfcheck.forEach(function () {
      var fs = h('fieldset', { class: 'q' });
      fieldsets.push(fs);
      wrap.appendChild(fs);
    });
    wrap.appendChild(summary);
    redrawAll();
    return wrap;
  }

  function renderModule(n) {
    var m = findModule(n);
    if (!m) { return notFound(); }
    var total = modules().length;
    var root = h('article', null);

    var head = h('header', { class: 'module-head' },
      h('p', { class: 'kicker' }, 'Module ' + m.n + ' of ' + total + ', in the phase ' + phaseName(m.phase)),
      h('h1', null, m.title),
      h('p', { class: 'lead' }, m.summary));
    root.appendChild(head);

    var stepper = h('ul', { class: 'steps', 'aria-label': 'Parts of this module' });
    stepperRefs = { n: m.n, parts: [] };
    PARTS.forEach(function (p) {
      var btn = h('button', { type: 'button', 'data-done': partDone(m.n, p) ? 'true' : 'false' }, PART_LABEL[p]);
      btn.addEventListener('click', function () {
        var t = document.getElementById('part-' + p);
        if (t) { t.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
      });
      stepperRefs.parts.push({ part: p, btn: btn });
      stepper.appendChild(h('li', null, btn));
    });
    root.appendChild(stepper);

    root.appendChild(section('question', PART_LABEL.question, mdNode(m.question, 'question md'), toggle(m.n, 'question')));

    var lesson = h('div', null, mdNode(m.lesson));
    if (m.example) { lesson.appendChild(h('div', { class: 'example' }, h('h4', null, 'Worked example'), mdNode(m.example))); }
    root.appendChild(section('lesson', PART_LABEL.lesson, lesson, toggle(m.n, 'lesson')));

    root.appendChild(section('reading', PART_LABEL.reading, mdNode(m.reading), toggle(m.n, 'reading')));
    root.appendChild(section('practice', PART_LABEL.practice, renderPractice(m), toggle(m.n, 'practice')));

    var pb = h('div', null,
      h('div', { class: 'pushback' }, mdNode(m.pushback)),
      ruled('m' + m.n + '.pushback', 'Your push-back answer', 6));
    root.appendChild(section('pushback', PART_LABEL.pushback, pb));

    var nb = h('div', null, mdNode(m.notebook), ruled('m' + m.n + '.notebook', 'Your notebook entry', 5));
    root.appendChild(section('notebook', PART_LABEL.notebook, nb));

    var sc = h('div', null, renderSelfcheck(m));
    if (m.extension) {
      sc.appendChild(h('details', { class: 'extension' }, h('summary', null, 'Optional extension'), mdNode(m.extension)));
    }
    root.appendChild(section('selfcheck', PART_LABEL.selfcheck, sc));

    var prev = findModule(n - 1), next = findModule(n + 1);
    root.appendChild(h('nav', { class: 'pager', 'aria-label': 'Module navigation' },
      prev ? h('a', { class: 'btn secondary', href: '#/module/' + prev.n }, 'Previous: ' + prev.title) : h('span'),
      next ? h('a', { class: 'btn', href: '#/module/' + next.n }, 'Next: ' + next.title) : h('a', { class: 'btn', href: '#/capstone' }, 'On to the capstone')));
    return root;
  }

  /* ---------- capstone ---------- */

  function renderCapstone() {
    var cap = C.capstone;
    var root = h('article', null,
      h('h1', null, 'Capstone project'),
      h('p', { class: 'lead' }, cap.lead),
      mdNode(cap.intro));

    var start = textOf('start.belief').trim(), change = textOf('start.change').trim();
    if (start || change) {
      root.appendChild(h('div', { class: 'panel' },
        h('h3', null, 'What you wrote at the start'),
        start ? h('p', null, h('strong', null, 'A belief I held strongly: '), start) : null,
        change ? h('p', null, h('strong', null, 'What would change my mind: '), change) : null,
        h('p', { class: 'note' }, 'Use these in your reflection in step 5.')));
    }

    cap.steps.forEach(function (st, si) {
      var key = 'cap.' + st.id;
      var body = h('div', null, mdNode(st.body));
      if (st.checklist) {
        var ul = h('ul', { class: 'checklist' });
        st.checklist.forEach(function (item, i) {
          var ck = 'cap.' + st.id + '.c' + i;
          var cb = h('input', { type: 'checkbox' });
          cb.checked = !!state.capDone[ck];
          cb.addEventListener('change', function () { state.capDone[ck] = cb.checked; persist(); });
          ul.appendChild(h('li', null, h('label', null, cb, h('span', null, item))));
        });
        body.appendChild(ul);
      }
      var count = h('p', { class: 'count' });
      function upd(v) { count.textContent = words(v) + ' words' + (st.target ? ' (aim for about ' + st.target + ')' : ''); }
      var ta = ruled(key, 'Your writing for step ' + (si + 1), st.rows || 10, false, upd);
      upd(ta.value);
      body.appendChild(ta);
      body.appendChild(count);

      var cb2 = h('input', { type: 'checkbox' });
      cb2.checked = !!state.capDone[key];
      cb2.addEventListener('change', function () { state.capDone[key] = cb2.checked; persist(); });
      root.appendChild(section('cap-' + st.id, 'Step ' + (si + 1) + ': ' + st.title, body,
        h('label', { class: 'done-toggle' }, cb2, 'Mark as done')));
    });

    root.appendChild(renderRubric(cap));
    root.appendChild(h('div', { class: 'btn-row' },
      h('button', { type: 'button', class: 'btn', onclick: function () {
        download('thinking-well-capstone.md', buildCapstoneMarkdown(), 'text/markdown');
      } }, 'Download my capstone'),
      h('a', { class: 'btn secondary', href: '#/work' }, 'Your work and backup')));
    return root;
  }

  function renderRubric(cap) {
    var wrapper = h('section', { class: 'part', id: 'part-rubric' }, h('div', { class: 'part-head' }, h('h2', null, 'Score your capstone')),
      mdNode(cap.rubricIntro));
    var verdict = h('div', { class: 'verdict', 'aria-live': 'polite' });
    var tbody = h('tbody');
    var rows = {};

    cap.rubric.forEach(function (r) {
      var tr = h('tr', null, h('th', { scope: 'row' }, r.name));
      rows[r.id] = tr;
      r.levels.forEach(function (txt, li) {
        var val = li + 1;
        var input = h('input', { type: 'radio', name: 'rubric-' + r.id, value: val });
        input.checked = state.rubric[r.id] === val;
        input.addEventListener('change', function () {
          state.rubric[r.id] = val; persist(); updateVerdict();
        });
        tr.appendChild(h('td', null, h('label', null, input, h('span', null, txt))));
      });
      tbody.appendChild(tr);
    });

    function updateVerdict() {
      var rated = 0, total = 0, low = [];
      cap.rubric.forEach(function (r) {
        var v = state.rubric[r.id];
        rows[r.id].className = v ? 'chosen-' + v : '';
        if (v) { rated++; total += v; }
      });
      verdict.innerHTML = '';
      if (rated < cap.rubric.length) {
        verdict.textContent = 'Rated ' + rated + ' of ' + cap.rubric.length + ' criteria.';
        return;
      }
      var min = Math.min.apply(null, cap.rubric.map(function (r) { return state.rubric[r.id]; }));
      cap.rubric.forEach(function (r) { if (state.rubric[r.id] === min && min < 4) { low.push(r); } });
      var line = 'Total: ' + total + ' of ' + (cap.rubric.length * 4) + '. ';
      line += total >= cap.passScore ? cap.metText : (total >= cap.reviewBelow ? cap.partialText : cap.reviewText);
      verdict.appendChild(h('p', null, line));
      if (low.length && total < cap.passScore + 4) {
        verdict.appendChild(h('p', null, 'Your lowest-rated areas: ' + low.map(function (r) { return r.name + ' (review ' + r.review + ')'; }).join('; ') + '.'));
      }
    }

    wrapper.appendChild(h('div', { class: 'table-wrap' }, h('table', { class: 'rubric' },
      h('thead', null, h('tr', null, h('th', { scope: 'col' }, 'Criterion'),
        h('th', { scope: 'col' }, '1: Beginning'), h('th', { scope: 'col' }, '2: Developing'),
        h('th', { scope: 'col' }, '3: Competent'), h('th', { scope: 'col' }, '4: Strong'))),
      tbody)));
    wrapper.appendChild(verdict);
    updateVerdict();
    return wrapper;
  }

  /* ---------- work, backup ---------- */

  function buildMarkdown() {
    var out = ['# My Thinking Well notebook', ''];
    var b = textOf('start.belief').trim(), c = textOf('start.change').trim();
    if (b || c) {
      out.push('## Where I started', '');
      if (b) { out.push('**A belief I held strongly:** ' + b, ''); }
      if (c) { out.push('**What would change my mind:** ' + c, ''); }
    }
    modules().forEach(function (m) {
      var chunk = [];
      m.practice.forEach(function (item, i) {
        var t = textOf('m' + m.n + '.practice.' + i).trim();
        if (t) { chunk.push('### Practice ' + (i + 1), '', '*' + item.prompt.replace(/\*/g, '') + '*', '', t, ''); }
      });
      var pb = textOf('m' + m.n + '.pushback').trim();
      if (pb) { chunk.push('### Push back', '', pb, ''); }
      var nb = textOf('m' + m.n + '.notebook').trim();
      if (nb) { chunk.push('### Notebook', '', nb, ''); }
      if (chunk.length) { out.push('## Module ' + m.n + ': ' + m.title, ''); out = out.concat(chunk); }
    });
    var cap = buildCapstoneMarkdown(true);
    if (cap) { out.push(cap); }
    return out.join('\n');
  }

  function buildCapstoneMarkdown(sectionOnly) {
    var out = [];
    C.capstone.steps.forEach(function (st) {
      var t = textOf('cap.' + st.id).trim();
      if (t) { out.push('### ' + st.title, '', t, ''); }
    });
    var scored = C.capstone.rubric.filter(function (r) { return state.rubric[r.id]; });
    if (scored.length) {
      out.push('### Self-scoring', '');
      scored.forEach(function (r) { out.push('- ' + r.name + ': ' + state.rubric[r.id] + ' of 4'); });
      out.push('');
    }
    if (!out.length) { return sectionOnly ? '' : '# My capstone\n\nNothing written yet.\n'; }
    return (sectionOnly ? '## Capstone\n\n' : '# My capstone\n\n') + out.join('\n');
  }

  function renderWork() {
    var root = h('article', null,
      h('h1', null, 'Your work and backup'),
      h('p', { class: 'lead' }, 'Everything you write in the course is saved in this browser only. Download a copy now and then, and before you clear your browser data or switch devices.'));

    root.appendChild(h('div', { class: 'panel' },
      h('h3', null, 'Download your work'),
      h('p', null, 'The notebook file is plain Markdown that you can open in any text editor. The backup file holds all your progress and can be restored on another device.'),
      h('div', { class: 'btn-row' },
        h('button', { type: 'button', class: 'btn', onclick: function () { download('thinking-well-notebook.md', buildMarkdown(), 'text/markdown'); } }, 'Download notebook (Markdown)'),
        h('button', { type: 'button', class: 'btn secondary', onclick: function () { download('thinking-well-backup.json', JSON.stringify(state, null, 2), 'application/json'); } }, 'Download backup (JSON)'),
        h('button', { type: 'button', class: 'btn secondary', onclick: function () { window.print(); } }, 'Print this page'))));

    var file = h('input', { type: 'file', accept: 'application/json,.json', 'aria-label': 'Choose a backup file' });
    var msg = h('p', { class: 'note', role: 'status' });
    file.addEventListener('change', function () {
      var f = file.files && file.files[0];
      if (!f) { return; }
      var reader = new FileReader();
      reader.onload = function () {
        try {
          var obj = JSON.parse(String(reader.result));
          if (!obj || typeof obj !== 'object' || typeof obj.text !== 'object') { throw new Error('bad'); }
          if (!window.confirm('Replace your current progress with this backup?')) { return; }
          state = Object.assign(emptyState(), obj);
          persist();
          route();
        } catch (e) {
          msg.textContent = 'That file is not a Thinking Well backup. Choose the JSON file you downloaded from this page.';
        }
      };
      reader.readAsText(f);
    });
    root.appendChild(h('div', { class: 'panel' },
      h('h3', null, 'Restore a backup'),
      h('p', null, 'Choose a backup file you downloaded earlier. This replaces the progress currently in this browser.'),
      file, msg));

    root.appendChild(h('h2', null, 'Your notebook'));
    var any = false;
    var intro = textOf('start.belief').trim() || textOf('start.change').trim();
    if (intro) {
      any = true;
      root.appendChild(h('details', { class: 'mod', open: true }, h('summary', null, 'Where I started'),
        h('div', { class: 'entry' },
          textOf('start.belief').trim() ? [h('h4', null, 'A belief I held strongly'), h('p', null, textOf('start.belief'))] : null,
          textOf('start.change').trim() ? [h('h4', null, 'What would change my mind'), h('p', null, textOf('start.change'))] : null)));
    }
    modules().forEach(function (m) {
      var entries = [];
      m.practice.forEach(function (item, i) {
        var t = textOf('m' + m.n + '.practice.' + i).trim();
        if (t) { entries.push(h('h4', null, 'Practice ' + (i + 1)), h('p', null, t)); }
      });
      [['pushback', 'Push back'], ['notebook', 'Notebook']].forEach(function (x) {
        var t = textOf('m' + m.n + '.' + x[0]).trim();
        if (t) { entries.push(h('h4', null, x[1]), h('p', null, t)); }
      });
      if (entries.length) {
        any = true;
        root.appendChild(h('details', { class: 'mod' },
          h('summary', null, 'Module ' + m.n + ': ' + m.title),
          h('div', { class: 'entry' }, entries),
          h('a', { href: '#/module/' + m.n }, 'Go to this module')));
      }
    });
    if (!any) { root.appendChild(h('p', null, 'Nothing here yet. Your practice answers, push-back replies, and notebook entries will appear here as you write them.')); }

    root.appendChild(h('div', { class: 'panel' },
      h('h3', null, 'Start over'),
      h('p', null, 'This erases all progress and writing stored in this browser. Download a backup first if you might want it back.'),
      h('button', { type: 'button', class: 'btn secondary danger', onclick: function () {
        if (window.confirm('Erase all your progress and writing in this browser? This cannot be undone.')) {
          state = emptyState(); persist(); route();
        }
      } }, 'Erase everything')));
    return root;
  }

  function renderResources() {
    var root = h('article', null, h('h1', null, 'Readings and resources'), h('p', { class: 'lead' }, C.resources.lead));
    C.resources.groups.forEach(function (g) {
      root.appendChild(h('section', { class: 'section' }, h('h2', null, g.title), mdNode(g.body)));
    });
    return root;
  }

  function renderTeachers() {
    return h('article', null, h('h1', null, 'For teachers and study groups'), h('p', { class: 'lead' }, C.teachers.lead), mdNode(C.teachers.body));
  }

  function notFound() {
    return h('article', null, h('h1', null, 'Page not found'), h('p', null, 'That page does not exist. Return to the ', h('a', { href: '#/' }, 'course home'), '.'));
  }

  /* ---------- router ---------- */

  function route() {
    var hash = location.hash.replace(/^#\/?/, '');
    var seg = hash.split('/');
    var main = document.getElementById('main');
    var page, title;
    stepperRefs = null;
    currentRoute = hash;

    if (!hash) { currentRoute = ''; page = renderHome(); title = C.title; }
    else if (seg[0] === 'module') {
      var n = parseInt(seg[1], 10);
      var m = findModule(n);
      page = renderModule(n); title = m ? 'Module ' + n + ': ' + m.title : 'Not found';
    }
    else if (seg[0] === 'capstone') { page = renderCapstone(); title = 'Capstone project'; }
    else if (seg[0] === 'work') { page = renderWork(); title = 'Your work and backup'; }
    else if (seg[0] === 'resources') { page = renderResources(); title = 'Readings and resources'; }
    else if (seg[0] === 'teachers') { page = renderTeachers(); title = 'For teachers'; }
    else { page = notFound(); title = 'Not found'; }

    main.innerHTML = '';
    main.appendChild(page);
    document.title = title + ' | ' + C.title;
    renderRail();
    closeRail();
    window.scrollTo(0, 0);
    main.focus({ preventScroll: true });
  }

  function closeRail() {
    var rail = document.getElementById('rail');
    var t = document.getElementById('railToggle');
    rail.classList.remove('open');
    if (t) { t.setAttribute('aria-expanded', 'false'); }
  }

  function init() {
    var t = document.getElementById('railToggle');
    t.addEventListener('click', function () {
      var rail = document.getElementById('rail');
      var open = rail.classList.toggle('open');
      t.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') { closeRail(); } });
    document.addEventListener('click', function (e) {
      var rail = document.getElementById('rail');
      if (rail.classList.contains('open') && !rail.contains(e.target) && e.target !== t) { closeRail(); }
    });
    window.addEventListener('hashchange', route);
    updateSaveNote();
    route();
  }

  init();
})();
