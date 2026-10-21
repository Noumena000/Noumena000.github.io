/* Thinking Well: course runner.
   No dependencies. Course text lives in content/*.js. Learner work is saved in localStorage. */
(function () {
  'use strict';

  var C = window.COURSE;
  var KEY = 'thinking-well:v2';
  var OLD_KEY = 'thinking-well:v1';   /* read once, so earlier progress carries over */
  var THEME_KEY = 'thinking-well-theme';   /* shared with the pilot course on the same site */

  /* ---------- theme ---------- */

  var theme = 'auto';
  try { theme = window.localStorage.getItem(THEME_KEY) || 'auto'; } catch (e) { /* keep auto */ }

  function applyTheme() {
    var r = document.documentElement;
    if (theme === 'light' || theme === 'dark') { r.setAttribute('data-theme', theme); }
    else { r.removeAttribute('data-theme'); }
  }
  function themeLabel() { return 'Colors: ' + (theme === 'auto' ? 'match my device' : theme); }
  function cycleTheme(btn) {
    theme = theme === 'auto' ? 'light' : (theme === 'light' ? 'dark' : 'auto');
    try { window.localStorage.setItem(THEME_KEY, theme); } catch (e) { /* ignore */ }
    applyTheme();
    btn.textContent = themeLabel();
  }
  applyTheme();

  /* ---------- storage ---------- */

  var saveTimer = null;
  var storageOk = true;

  function emptyState() {
    return { text: {}, q: {}, rubric: {}, capDone: {} };
  }

  /* Accepts a current save, a backup file, or the first version's save. */
  function normalize(o) {
    var s = emptyState();
    if (!o || typeof o !== 'object') { return s; }
    ['text', 'q', 'rubric', 'capDone'].forEach(function (k) {
      if (o[k] && typeof o[k] === 'object') { s[k] = o[k]; }
    });
    if (o.checks && typeof o.checks === 'object') {
      Object.keys(o.checks).forEach(function (k) {
        var c = o.checks[k];
        if (c && Array.isArray(c.answers) && !s.q[k + '.c']) { s.q[k + '.c'] = c.answers.slice(); }
      });
    }
    return s;
  }

  function load() {
    try {
      var raw = window.localStorage.getItem(KEY) || window.localStorage.getItem(OLD_KEY);
      if (raw) { return normalize(JSON.parse(raw)); }
    } catch (e) { storageOk = false; }
    return emptyState();
  }

  var state = load();

  function persist() {
    try {
      window.localStorage.setItem(KEY, JSON.stringify(state));
      storageOk = true;
    } catch (e) {
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
    s = esc(String(s));
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

  function firstSentence(s) {
    var i = String(s).search(/[.?!](\s|$)/);
    return i < 0 ? String(s) : String(s).slice(0, i + 1);
  }

  function words(s) { return (s.trim().match(/\S+/g) || []).length; }

  function download(name, text, type) {
    var blob = new Blob([text], { type: type });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url; a.download = name;
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
  }

  /* Same shuffled order every time for a given question, so the page does not rearrange itself on a reload. */
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

  /* ---------- course data helpers ---------- */

  function modules() { return C.modules.slice().sort(function (a, b) { return a.n - b.n; }); }
  function findModule(n) { return modules().filter(function (m) { return m.n === n; })[0]; }
  function phaseName(id) {
    var p = C.phases.filter(function (x) { return x.id === id; })[0];
    return p ? p.name : '';
  }
  function textOf(k) { return state.text[k] || ''; }

  function items(m, kind) { return kind === 'p' ? m.practice : m.selfcheck; }

  function answersOf(n, kind) {
    var a = state.q['m' + n + '.' + kind];
    return Array.isArray(a) ? a : [];
  }

  function isAnswered(x) { return x !== null && x !== undefined; }

  function counts(m, kind) {
    var list = items(m, kind), a = answersOf(m.n, kind), done = 0, right = 0;
    list.forEach(function (q, i) {
      if (isAnswered(a[i])) { done++; if (a[i] === q.a) { right++; } }
    });
    return { done: done, right: right, total: list.length };
  }

  function pushDone(n) { return textOf('m' + n + '.pushback').trim().length > 0; }

  /* 'new', 'partial', or 'done' */
  function status(m) {
    var p = counts(m, 'p'), c = counts(m, 'c');
    if (p.done === p.total && c.done === c.total && pushDone(m.n)) { return 'done'; }
    if (p.done + c.done > 0 || pushDone(m.n)) { return 'partial'; }
    return 'new';
  }

  function doneCount() { return modules().filter(function (m) { return status(m) === 'done'; }).length; }

  function nextModule() {
    var ms = modules();
    for (var i = 0; i < ms.length; i++) { if (status(ms[i]) !== 'done') { return ms[i]; } }
    return null;
  }

  /* ---------- shared widgets ---------- */

  var partsRef = null;

  function fillParts(el, m) {
    var p = counts(m, 'p'), c = counts(m, 'c');
    el.innerHTML = '';
    [
      ['Practice ' + p.done + ' of ' + p.total, p.done === p.total],
      ['Push back', pushDone(m.n)],
      ['Self-check ' + c.done + ' of ' + c.total, c.done === c.total]
    ].forEach(function (x) { el.appendChild(h('span', { class: x[1] ? 'ok' : '' }, x[0])); });
  }

  function refreshChrome() {
    if (partsRef) { fillParts(partsRef.el, partsRef.m); }
  }

  function writing(key, label, rows, short, onChange) {
    var ta = h('textarea', { class: 'write' + (short ? ' short' : ''), 'aria-label': label, rows: rows || 6, spellcheck: 'true' });
    ta.value = textOf(key);
    ta.addEventListener('input', function () {
      state.text[key] = ta.value;
      saveSoon();
      if (onChange) { onChange(ta.value); }
      refreshChrome();
    });
    return ta;
  }

  function dotsFor(m) {
    var span = h('span', { class: 'dots', 'aria-hidden': 'true' });
    ['p', 'c'].forEach(function (kind) {
      var a = answersOf(m.n, kind);
      items(m, kind).forEach(function (q, i) {
        var cls = isAnswered(a[i]) ? (a[i] === q.a ? 'y' : 'n') : '';
        span.appendChild(h('i', { class: cls }));
      });
    });
    return span;
  }

  function pathRow(href, num, title, gist, stateText, isDone, dots) {
    return h('li', null,
      h('a', { class: 'book', href: href },
        h('span', { class: 'numcol' }, num),
        h('span', null, h('span', { class: 'title' }, title), h('span', { class: 'gist' }, gist), dots || null),
        h('span', { class: 'state' + (isDone ? ' done' : '') }, stateText)));
  }

  function footer() {
    var themeBtn = h('button', { type: 'button', class: 'btn quiet' }, themeLabel());
    themeBtn.addEventListener('click', function () { cycleTheme(themeBtn); });
    return h('footer', { class: 'foot' },
      h('p', { class: 'links' },
        h('a', { href: '#/capstone' }, 'Capstone project'),
        h('a', { href: '#/resources' }, 'Readings and resources'),
        h('a', { href: '#/teachers' }, 'For teachers'),
        h('a', { href: '#/work' }, 'Your work and backup')),
      h('p', { id: 'savenote', role: 'status' }),
      h('p', null, 'A draft. The examples, statistics, and explanations have not yet been reviewed by a subject expert.'),
      h('p', null, 'Made by ', h('a', { href: '../../' }, 'Benjamin A. Moss'), '. Everything you write here stays in your own browser; nothing is sent to a server.'),
      h('p', null, themeBtn));
  }

  /* ---------- the question card, one question at a time ---------- */

  function renderQuiz(m, kind) {
    var list = items(m, kind);
    var key = 'm' + m.n + '.' + kind;
    var seedBase = kind === 'p' ? 1005 : 5;
    var title = kind === 'p' ? 'Practice' : 'Self-check';
    var intro = kind === 'p'
      ? 'Apply the lesson to short cases. Pick the best answer, then read why.'
      : 'Five quick questions on the main ideas.';

    var stat = h('span', { class: 'small muted' });
    var body = h('div', null);
    var wrap = h('section', { class: 'practice', id: 'part-' + kind },
      h('div', { class: 'practice-head' }, h('h2', null, title), stat),
      h('p', { class: 'muted' }, intro),
      body);

    function firstOpen() {
      var a = answersOf(m.n, kind);
      for (var i = 0; i < list.length; i++) { if (!isAnswered(a[i])) { return i; } }
      return -1;
    }

    function setAnswer(i, v) {
      var a = answersOf(m.n, kind).slice();
      while (a.length < list.length) { a.push(null); }
      a[i] = v;
      state.q[key] = a;
      persist();
      refreshChrome();
    }

    function updateStat() {
      var c = counts(m, kind);
      stat.textContent = c.done === c.total ? 'Complete: ' + c.right + ' of ' + c.total + ' right' : c.done + ' of ' + c.total + ' answered';
    }

    function drawQuestion(i, focusCard) {
      var q = list[i];
      var card = h('div', { class: 'prop', tabindex: '-1' },
        h('div', { class: 'label' }, 'Question ' + (i + 1) + ' of ' + list.length),
        h('p', { class: 'qt', html: inline(q.q) }));
      var feedback = h('div', { class: 'feedback', 'aria-live': 'polite' });
      var btns = [];

      stableOrder(q.options.length, m.n * 131 + i * 17 + seedBase).forEach(function (oi) {
        var b = h('button', { type: 'button', class: 'opt' }, q.options[oi]);
        b.addEventListener('click', function () {
          setAnswer(i, oi);
          updateStat();
          var ok = oi === q.a;
          btns.forEach(function (x) {
            x.b.disabled = true;
            if (x.oi === q.a) {
              x.b.classList.add('right');
              x.b.appendChild(h('span', { class: 'tag' }, ok ? 'Your answer, and the best one' : 'The best answer'));
            } else if (x.oi === oi) {
              x.b.classList.add('wrong');
              x.b.appendChild(h('span', { class: 'tag' }, 'Your answer'));
            }
          });
          var last = firstOpen() < 0;
          var next = h('button', { type: 'button', class: 'btn' }, last ? 'See your result' : 'Next question');
          next.addEventListener('click', function () { draw(true); });
          feedback.innerHTML = '';
          feedback.appendChild(h('p', { class: 'verdict ' + (ok ? 'ok' : 'bad') }, ok ? 'Yes.' : 'Not quite.'));
          feedback.appendChild(h('p', { html: inline(q.why) }));
          feedback.appendChild(h('div', { class: 'row' }, next));
          next.focus();
        });
        btns.push({ b: b, oi: oi });
        card.appendChild(b);
      });
      card.appendChild(feedback);
      body.appendChild(card);
      if (focusCard) { card.focus({ preventScroll: true }); }
    }

    function drawSummary(focusCard) {
      var c = counts(m, kind);
      var msg = c.right >= c.total - 1
        ? 'Good. Read the explanation for any you missed, then move on.'
        : 'Read the explanations below, and reread the part of the lesson behind each one you missed. You can try again.';
      var card = h('div', { class: 'prop', tabindex: '-1' },
        h('p', { class: 'verdict' }, 'You got ' + c.right + ' of ' + c.total + '.'),
        h('p', null, msg),
        h('div', { class: 'row' },
          h('button', { type: 'button', class: 'btn ghost', onclick: function () {
            state.q[key] = [];
            persist(); refreshChrome(); draw(true);
          } }, 'Try again')));
      var a = answersOf(m.n, kind);
      var review = h('details', { class: 'review solo' }, h('summary', null, 'Review your answers'));
      var inner = h('div', { class: 'reading' });
      list.forEach(function (q, i) {
        var ok = a[i] === q.a;
        inner.appendChild(h('div', { class: 'rev' },
          h('p', { class: 'rq', html: (i + 1) + '. ' + inline(q.q) }),
          h('p', null, h('b', { class: ok ? 'ok' : 'bad' }, ok ? 'Right: ' : 'Your answer: '), q.options[a[i]]),
          ok ? null : h('p', null, h('b', { class: 'ok' }, 'Best answer: '), q.options[q.a]),
          h('p', { class: 'muted', html: inline(q.why) })));
      });
      review.appendChild(inner);
      body.appendChild(card);
      body.appendChild(review);
      if (focusCard) { card.focus({ preventScroll: true }); }
    }

    function draw(focusCard) {
      body.innerHTML = '';
      updateStat();
      var i = firstOpen();
      if (i < 0) { drawSummary(focusCard); } else { drawQuestion(i, focusCard); }
    }

    draw(false);
    return wrap;
  }

  /* ---------- pages ---------- */

  function renderHome() {
    var root = h('div', null);
    root.appendChild(h('p', { class: 'small muted', style: 'margin:0 0 6px' },
      h('a', { href: '../' }, '← All courses'), ' · ', h('a', { href: '../../' }, 'Benjamin A. Moss')));

    var total = modules().length;
    var hero = h('header', { class: 'hero' });
    hero.appendChild(h('div', { html: '<svg class="trio" width="86" height="28" viewBox="0 0 86 28" aria-hidden="true"><circle cx="14" cy="14" r="12" fill="var(--yellow)"/><circle cx="43" cy="14" r="12" fill="var(--red)"/><circle cx="72" cy="14" r="12" fill="var(--blue)"/></svg>' }));
    hero.appendChild(h('h1', null, C.title));
    hero.appendChild(h('p', { class: 'lede' }, C.subtitle));
    hero.appendChild(h('p', { class: 'small muted' }, doneCount() + ' of ' + total + ' modules complete. No account is needed, and it works on a phone.'));
    root.appendChild(hero);

    var nxt = nextModule();
    if (nxt) {
      var started = nxt.n > 1 || status(nxt) !== 'new';
      root.appendChild(h('div', { class: 'next' },
        h('p', null, h('strong', null, 'Next up: '), 'Module ' + nxt.n + ', ' + nxt.title + '.'),
        h('a', { class: 'btn', href: '#/module/' + nxt.n }, started ? 'Continue' : 'Start')));
    } else {
      root.appendChild(h('div', { class: 'next' },
        h('p', null, h('strong', null, 'All ' + total + ' modules are complete. '), 'The capstone project is next.'),
        h('a', { class: 'btn', href: '#/capstone' }, 'Open the capstone')));
    }

    /* Two lines the learner returns to at the end. Open until they have written something. */
    var startBox = h('details', { class: 'solo' }, h('summary', null, 'Before you begin: two lines for yourself'));
    var startInner = h('div', { class: 'reading' },
      h('p', { class: 'muted' }, 'Just for you. You will come back to them at the end.'),
      h('label', { class: 'fl', for: 'startBelief' }, 'Something I believe strongly'));
    var a = writing('start.belief', 'Something I believe strongly', 2, true);
    a.id = 'startBelief';
    startInner.appendChild(a);
    startInner.appendChild(h('label', { class: 'fl', for: 'startChange' }, 'What would change my mind (if nothing would, write that)'));
    var b = writing('start.change', 'What would change my mind', 2, true);
    b.id = 'startChange';
    startInner.appendChild(b);
    startBox.appendChild(startInner);
    if (!textOf('start.belief').trim() && !textOf('start.change').trim()) { startBox.setAttribute('open', ''); }
    root.appendChild(h('section', { class: 'sec' }, startBox));

    var path = h('section', { class: 'sec' }, h('h2', null, 'The path'),
      h('p', { class: 'muted' }, 'Twelve modules, in order. Each ends with a short written push-back and a self-check. The dots show your answers: blue for right, red for wrong.'));
    C.phases.forEach(function (ph) {
      path.appendChild(h('h3', { class: 'grp' }, ph.name));
      path.appendChild(h('p', { class: 'small muted' }, ph.theme));
      var ul = h('ul', { class: 'books' });
      modules().filter(function (m) { return m.phase === ph.id; }).forEach(function (m) {
        var st = status(m);
        ul.appendChild(pathRow('#/module/' + m.n, String(m.n), m.title, firstSentence(m.summary),
          st === 'done' ? 'Complete' : (st === 'partial' ? 'In progress' : 'Not started'), st === 'done', dotsFor(m)));
      });
      path.appendChild(ul);
    });
    path.appendChild(h('h3', { class: 'grp' }, 'Then'));
    path.appendChild(h('ul', { class: 'books' },
      pathRow('#/capstone', '→', 'Capstone project', C.capstone.lead, 'About 2,000 words', false, null)));
    root.appendChild(path);

    root.appendChild(h('div', { class: 'acc' },
      h('details', null, h('summary', null, 'About this course'), h('div', { class: 'reading' }, mdNode(C.intro))),
      h('details', null, h('summary', null, 'What you will be able to do'), h('div', { class: 'reading' }, mdNode(C.outcomes))),
      h('details', null, h('summary', null, 'How each module works'), h('div', { class: 'reading' }, mdNode(C.howItWorks))),
      h('details', null, h('summary', null, 'Pace, cost, and privacy'), h('div', { class: 'reading' }, mdNode(C.pace)))));

    return root;
  }

  function renderModule(n) {
    var m = findModule(n);
    if (!m) { return notFound(); }
    var total = modules().length;
    var root = h('article', null);

    root.appendChild(h('p', { class: 'small muted back' }, h('a', { href: '#/' }, '← The path')));
    root.appendChild(h('header', { class: 'unit-head' },
      h('span', { class: 'num' }, 'Module ' + m.n + ' of ' + total + ' · ' + phaseName(m.phase)),
      h('h1', null, m.title),
      h('p', { class: 'gist' }, m.summary)));

    var parts = h('p', { class: 'parts', 'aria-label': 'Your progress in this module' });
    fillParts(parts, m);
    partsRef = { el: parts, m: m };
    root.appendChild(parts);

    root.appendChild(h('section', { class: 'kase' }, h('h2', null, 'The question'), h('div', { class: 'scene' }, mdNode(m.question))));

    var acc = h('div', { class: 'acc' },
      h('details', { open: true }, h('summary', null, 'Lesson'), h('div', { class: 'reading' }, mdNode(m.lesson))));
    if (m.example) {
      acc.appendChild(h('details', null, h('summary', null, 'A worked example'), h('div', { class: 'reading' }, h('div', { class: 'ex' }, mdNode(m.example)))));
    }
    acc.appendChild(h('details', null, h('summary', null, 'Reading'), h('div', { class: 'reading' }, mdNode(m.reading))));
    root.appendChild(acc);

    root.appendChild(renderQuiz(m, 'p'));

    root.appendChild(h('section', { class: 'reflect', id: 'part-pushback' },
      h('h2', null, 'Push back'),
      h('div', { class: 'scene' }, mdNode(m.pushback)),
      writing('m' + m.n + '.pushback', 'Your push-back reply', 6)));

    root.appendChild(renderQuiz(m, 'c'));

    if (m.extension) {
      root.appendChild(h('div', { class: 'acc', style: 'margin-top:36px' },
        h('details', null, h('summary', null, 'Optional extension'), h('div', { class: 'reading' }, mdNode(m.extension)))));
    }

    var prev = findModule(n - 1), next = findModule(n + 1);
    root.appendChild(h('nav', { class: 'pager', 'aria-label': 'Module navigation' },
      prev ? h('a', { class: 'btn ghost', href: '#/module/' + prev.n }, '← ' + prev.title) : h('span'),
      next ? h('a', { class: 'btn', href: '#/module/' + next.n }, next.title + ' →') : h('a', { class: 'btn', href: '#/capstone' }, 'On to the capstone →')));
    return root;
  }

  /* ---------- capstone ---------- */

  function renderCapstone() {
    var cap = C.capstone;
    var root = h('article', null,
      h('p', { class: 'small muted back' }, h('a', { href: '#/' }, '← The path')),
      h('h1', { style: 'font-size:clamp(32px,7.5vw,48px)' }, 'Capstone project'),
      h('p', { class: 'lede', style: 'font-style:italic;font-size:21px;margin:10px 0 16px' }, cap.lead),
      mdNode(cap.intro));

    var start = textOf('start.belief').trim(), change = textOf('start.change').trim();
    if (start || change) {
      root.appendChild(h('div', { class: 'scene', style: 'margin-top:22px' },
        h('p', { class: 'small muted' }, 'What you wrote at the start'),
        start ? h('p', null, h('strong', null, 'A belief I held strongly: '), start) : null,
        change ? h('p', null, h('strong', null, 'What would change my mind: '), change) : null));
    }

    cap.steps.forEach(function (st, si) {
      var key = 'cap.' + st.id;
      var sec = h('section', { class: 'cap-step', style: si === 0 ? 'margin-top:36px' : null },
        h('h2', null, 'Step ' + (si + 1) + ': ' + st.title), mdNode(st.body));
      if (st.checklist) {
        var ul = h('ul', { class: 'checks' });
        st.checklist.forEach(function (item, i) {
          var ck = 'cap.' + st.id + '.c' + i;
          var cb = h('input', { type: 'checkbox' });
          cb.checked = !!state.capDone[ck];
          cb.addEventListener('change', function () { state.capDone[ck] = cb.checked; persist(); });
          ul.appendChild(h('li', null, h('label', null, cb, h('span', null, item))));
        });
        sec.appendChild(ul);
      }
      var count = h('p', { class: 'count' });
      var upd = function (v) { count.textContent = words(v) + ' words' + (st.target ? ' (aim for about ' + st.target + ')' : ''); };
      var ta = writing(key, 'Your writing for step ' + (si + 1), st.rows || 10, false, upd);
      upd(ta.value);
      sec.appendChild(ta);
      sec.appendChild(count);
      var cb2 = h('input', { type: 'checkbox' });
      cb2.checked = !!state.capDone[key];
      cb2.addEventListener('change', function () { state.capDone[key] = cb2.checked; persist(); });
      sec.appendChild(h('label', { class: 'tick' }, cb2, 'Mark this step as done'));
      root.appendChild(sec);
    });

    root.appendChild(renderRubric(cap));
    root.appendChild(h('div', { class: 'row', style: 'margin-top:28px' },
      h('button', { type: 'button', class: 'btn', onclick: function () {
        download('thinking-well-capstone.md', buildCapstoneMarkdown(), 'text/markdown');
      } }, 'Download my capstone'),
      h('a', { class: 'btn ghost', href: '#/work' }, 'Your work and backup')));
    return root;
  }

  function renderRubric(cap) {
    var wrapper = h('section', { class: 'cap-step', id: 'part-rubric' },
      h('h2', null, 'Score your capstone'), mdNode(cap.rubricIntro));
    var verdict = h('div', { class: 'result', 'aria-live': 'polite' });
    var picks = {};
    var LEVELS = ['Beginning', 'Developing', 'Competent', 'Strong'];

    cap.rubric.forEach(function (r) {
      var fs = h('fieldset', { class: 'crit' }, h('legend', null, r.name));
      picks[r.id] = [];
      r.levels.forEach(function (txt, li) {
        var val = li + 1;
        var input = h('input', { type: 'radio', name: 'rubric-' + r.id, value: val });
        input.checked = state.rubric[r.id] === val;
        var lab = h('label', { class: 'pick' + (input.checked ? ' chosen' : '') }, input,
          h('span', null, h('b', null, LEVELS[li] + ':'), ' ', txt));
        picks[r.id].push(lab);
        input.addEventListener('change', function () {
          state.rubric[r.id] = val; persist();
          picks[r.id].forEach(function (l, k) { l.classList.toggle('chosen', k === li); });
          updateVerdict();
        });
        fs.appendChild(lab);
      });
      wrapper.appendChild(fs);
    });

    function updateVerdict() {
      var rated = 0, total = 0, low = [];
      cap.rubric.forEach(function (r) {
        var v = state.rubric[r.id];
        if (v) { rated++; total += v; }
      });
      verdict.innerHTML = '';
      if (rated < cap.rubric.length) {
        verdict.appendChild(h('p', null, 'Rated ' + rated + ' of ' + cap.rubric.length + ' criteria.'));
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

    wrapper.appendChild(verdict);
    updateVerdict();
    return wrapper;
  }

  /* ---------- work and backup ---------- */

  /* Written answers from the first version of the course are kept and exported, not dropped. */
  function legacyNotes(m) {
    var out = [];
    m.practice.forEach(function (q, i) {
      var t = textOf('m' + m.n + '.practice.' + i).trim();
      if (t) { out.push(['Practice ' + (i + 1) + ' (earlier version)', t]); }
    });
    var nb = textOf('m' + m.n + '.notebook').trim();
    if (nb) { out.push(['Notebook (earlier version)', nb]); }
    return out;
  }

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
      var p = counts(m, 'p'), s = counts(m, 'c');
      if (p.done || s.done) {
        chunk.push('Practice: ' + p.right + ' of ' + p.total + ' right (' + p.done + ' answered). Self-check: ' + s.right + ' of ' + s.total + ' right (' + s.done + ' answered).', '');
      }
      var pb = textOf('m' + m.n + '.pushback').trim();
      if (pb) { chunk.push('### Push back', '', '*' + m.pushback.replace(/\*/g, '').replace(/\s*\n+\s*/g, ' ') + '*', '', pb, ''); }
      legacyNotes(m).forEach(function (x) { chunk.push('### ' + x[0], '', x[1], ''); });
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
      h('p', { class: 'small muted back' }, h('a', { href: '#/' }, '← The path')),
      h('h1', { style: 'font-size:clamp(32px,7.5vw,48px)' }, 'Your work and backup'),
      h('p', { style: 'margin-top:12px' }, 'Everything you write in the course is saved in this browser only. Download a copy now and then, and before you clear your browser data or switch devices.'));

    root.appendChild(h('div', { class: 'box', style: 'margin-top:22px' },
      h('h3', null, 'Download your work'),
      h('p', null, 'The notebook file is plain Markdown that you can open in any text editor. The backup file holds all your progress and can be restored on another device.'),
      h('div', { class: 'row' },
        h('button', { type: 'button', class: 'btn', onclick: function () { download('thinking-well-notebook.md', buildMarkdown(), 'text/markdown'); } }, 'Download notebook (Markdown)'),
        h('button', { type: 'button', class: 'btn ghost', onclick: function () { download('thinking-well-backup.json', JSON.stringify(state, null, 2), 'application/json'); } }, 'Download backup (JSON)'))));

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
          state = normalize(obj);
          persist();
          route();
        } catch (e) {
          msg.textContent = 'That file is not a Thinking Well backup. Choose the JSON file you downloaded from this page.';
        }
      };
      reader.readAsText(f);
    });
    root.appendChild(h('div', { class: 'box' },
      h('h3', null, 'Restore a backup'),
      h('p', null, 'Choose a backup file you downloaded earlier. This replaces the progress currently in this browser.'),
      file, msg));

    root.appendChild(h('h2', { style: 'font-size:28px;margin:34px 0 10px' }, 'Your writing'));
    var any = false;
    var acc = h('div', { class: 'acc' });
    if (textOf('start.belief').trim() || textOf('start.change').trim()) {
      any = true;
      acc.appendChild(h('details', { open: true }, h('summary', null, 'Where I started'),
        h('div', { class: 'reading entry' },
          textOf('start.belief').trim() ? [h('h4', null, 'A belief I held strongly'), h('p', null, textOf('start.belief'))] : null,
          textOf('start.change').trim() ? [h('h4', null, 'What would change my mind'), h('p', null, textOf('start.change'))] : null)));
    }
    modules().forEach(function (m) {
      var entries = [];
      var pb = textOf('m' + m.n + '.pushback').trim();
      if (pb) { entries.push(h('h4', null, 'Push back'), h('p', null, pb)); }
      legacyNotes(m).forEach(function (x) { entries.push(h('h4', null, x[0]), h('p', null, x[1])); });
      if (entries.length) {
        any = true;
        acc.appendChild(h('details', null,
          h('summary', null, 'Module ' + m.n + ': ' + m.title),
          h('div', { class: 'reading entry' }, entries, h('a', { href: '#/module/' + m.n }, 'Go to this module'))));
      }
    });
    if (any) { root.appendChild(acc); }
    else { root.appendChild(h('p', null, 'Nothing here yet. Your push-back replies and capstone writing will appear here as you write them.')); }

    root.appendChild(h('div', { class: 'box', style: 'margin-top:34px' },
      h('h3', null, 'Start over'),
      h('p', null, 'This erases all progress and writing stored in this browser. Download a backup first if you might want it back.'),
      h('button', { type: 'button', class: 'btn ghost danger', onclick: function () {
        if (window.confirm('Erase all your progress and writing in this browser? This cannot be undone.')) {
          state = emptyState(); persist(); route();
        }
      } }, 'Erase everything')));
    return root;
  }

  function renderResources() {
    var root = h('article', null,
      h('p', { class: 'small muted back' }, h('a', { href: '#/' }, '← The path')),
      h('h1', { style: 'font-size:clamp(32px,7.5vw,48px)' }, 'Readings and resources'),
      h('p', { style: 'margin-top:12px' }, C.resources.lead));
    var acc = h('div', { class: 'acc', style: 'margin-top:22px' });
    C.resources.groups.forEach(function (g) {
      acc.appendChild(h('details', null, h('summary', null, g.title), h('div', { class: 'reading' }, mdNode(g.body))));
    });
    root.appendChild(acc);
    return root;
  }

  function renderTeachers() {
    return h('article', null,
      h('p', { class: 'small muted back' }, h('a', { href: '#/' }, '← The path')),
      h('h1', { style: 'font-size:clamp(32px,7.5vw,48px)' }, 'For teachers and study groups'),
      h('p', { style: 'margin-top:12px' }, C.teachers.lead),
      mdNode(C.teachers.body));
  }

  function notFound() {
    return h('article', null, h('h1', null, 'Page not found'),
      h('p', null, 'That page does not exist. Return to ', h('a', { href: '#/' }, 'the path'), '.'));
  }

  /* ---------- router ---------- */

  function route() {
    var hash = location.hash.replace(/^#\/?/, '');
    var seg = hash.split('/');
    var main = document.getElementById('main');
    var page, title;
    partsRef = null;

    if (!hash) { page = renderHome(); title = C.title; }
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
    main.appendChild(footer());
    updateSaveNote();
    document.title = (hash ? title + ' | ' : '') + C.title;
    window.scrollTo(0, 0);
    main.focus({ preventScroll: true });
  }

  window.addEventListener('hashchange', route);
  route();
})();
