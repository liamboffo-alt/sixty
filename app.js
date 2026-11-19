(function () {
  'use strict';

  // ---------- Config ----------
  const LAUNCH = new Date(2026, 10, 18);   // Day #1 (local time). Months are 0-based: 10 = November.
  const DURATION_MS = 60 * 1000;
  const COUNTDOWN_MS = 5 * 1000;            // thinking time after the category is revealed
  const STORAGE_KEY = 'sixty:v1';
  // Your public address, added to the share text (e.g. 'https://playsixty.com').
  // Leave empty to use whatever web address the game is served from.
  const SITE_URL = '';
  const BULBS = 60;

  const CATS = window.SIXTY_CATEGORIES || [];
  const $ = (s) => document.querySelector(s);

  // ---------- Text matching ----------
  function norm(s) {
    let t = String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
    t = t.replace(/&/g, ' and ').replace(/['’‘`.!?$]/g, '').replace(/[^a-z0-9]+/g, ' ').trim();
    t = t.replace(/^(the|a|an) (?=\S)/, '');
    return t.replace(/ /g, '');
  }

  // Plural-tolerant variants of a normalized guess ("cherries" -> "cherry").
  function variants(n) {
    const out = [n];
    if (n.length > 3) {
      if (n.endsWith('ies')) out.push(n.slice(0, -3) + 'y');
      if (n.endsWith('es')) out.push(n.slice(0, -2));
      if (n.endsWith('s')) out.push(n.slice(0, -1));
    }
    return out;
  }

  function lev(a, b) {
    const m = a.length, n = b.length;
    if (!m) return n;
    if (!n) return m;
    let prev = new Array(n + 1);
    for (let j = 0; j <= n; j++) prev[j] = j;
    for (let i = 1; i <= m; i++) {
      const cur = [i];
      for (let j = 1; j <= n; j++) {
        cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
      }
      prev = cur;
    }
    return prev[n];
  }

  // How many typos we forgive, by word length.
  function tolerance(len) {
    if (len <= 4) return 0;
    if (len <= 7) return 1;
    if (len <= 12) return 2;
    return 3;
  }

  // ---------- Day / category ----------
  function dayNumber(date) {
    const d = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    return Math.round((d - LAUNCH) / 864e5) + 1;
  }
  const realDay = Math.max(1, dayNumber(new Date()));
  const catFor = (d) => CATS[(((d - 1) % CATS.length) + CATS.length) % CATS.length];

  // Another episode can be opened with #ep-12 (works inside the artifact) or ?day=12 (plain hosting).
  function requestedDay() {
    const h = /^#ep-(\d+)$/.exec(location.hash);
    if (h) return parseInt(h[1], 10);
    const q = parseInt(new URLSearchParams(location.search).get('day'), 10);
    return q > 0 ? q : realDay;
  }

  let day, practice, cat, answers, index, allKeys, total, par;
  // Par for categories that don't set one: about a third of the list, between 5 and 15.
  const parFor = (c, n) => c.par || Math.max(5, Math.min(15, Math.round(n * 0.35)));
  function setupEpisode(d) {
    day = d > 0 ? d : realDay;
    practice = day !== realDay;
    cat = catFor(day);
    answers = cat.answers.split('\n').map((l) => l.trim()).filter(Boolean).map((line) => {
      const parts = line.split('|').map((p) => p.trim()).filter(Boolean);
      return { name: parts[0], keys: [...new Set(parts.map(norm).filter(Boolean))] };
    });
    index = new Map(); // normalized key -> [answer indexes]
    answers.forEach((a, i) => a.keys.forEach((k) => {
      if (!index.has(k)) index.set(k, []);
      const arr = index.get(k);
      if (!arr.includes(i)) arr.push(i);
    }));
    allKeys = [...index.keys()];
    total = answers.length;
    par = Math.min(parFor(cat, total), total);
  }
  setupEpisode(requestedDay());

  // ---------- Storage ----------
  function loadStore() {
    try {
      const s = JSON.parse(localStorage.getItem(STORAGE_KEY));
      if (s && typeof s === 'object') return { results: s.results || {}, seenHelp: !!s.seenHelp, muted: !!s.muted };
    } catch (e) { /* ignore */ }
    return { results: {}, seenHelp: false, muted: false };
  }
  const store = loadStore();
  function persist() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(store)); } catch (e) { /* ignore */ }
  }

  // ---------- Game state ----------
  let phase = 'ready';
  let found = new Set();
  let rec = null;      // record for this day's game
  let endAt = 0;

  const el = {
    ready: $('#screen-ready'), reveal: $('#screen-reveal'), play: $('#screen-play'), done: $('#screen-done'),
    input: $('#guess'), form: $('#guess-form'), feedback: $('#feedback'),
    foundList: $('#found-list'), scoreNow: $('#score-now'), score: $('.score'),
    ring: $('#ring'), timeLeft: $('#time-left'),
  };

  // Scoreboard digits: pad to the width of the total ("07" of 50).
  const fmt = (n) => String(n).padStart(String(total).length, '0');

  // ---------- The bulb clock ----------
  const bulbEls = [];
  (function buildBulbs() {
    const g = $('#bulbs');
    for (let i = 0; i < BULBS; i++) {
      const a = (-90 + i * (360 / BULBS)) * Math.PI / 180;
      const c = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      c.setAttribute('cx', (60 + 53 * Math.cos(a)).toFixed(2));
      c.setAttribute('cy', (60 + 53 * Math.sin(a)).toFixed(2));
      c.setAttribute('r', '3.3');
      c.setAttribute('class', 'bulb on');
      g.appendChild(c);
      bulbEls.push(c);
    }
  })();

  // ---------- Sound (tiny synth, no files) ----------
  let actx = null;
  function tone(freq, dur, type, vol, delay) {
    if (store.muted) return;
    try {
      if (!actx) actx = new (window.AudioContext || window.webkitAudioContext)();
      if (actx.state === 'suspended') actx.resume();
      const t = actx.currentTime + (delay || 0);
      const o = actx.createOscillator();
      const g = actx.createGain();
      o.type = type || 'sine';
      o.frequency.setValueAtTime(freq, t);
      g.gain.setValueAtTime(vol || 0.1, t);
      g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
      o.connect(g); g.connect(actx.destination);
      o.start(t); o.stop(t + dur + 0.02);
    } catch (e) { /* audio unavailable */ }
  }
  const sfx = {
    start() { tone(523, 0.12, 'triangle', 0.09); tone(784, 0.22, 'triangle', 0.09, 0.1); },
    count() { tone(660, 0.09, 'triangle', 0.08); },
    go() { tone(880, 0.12, 'square', 0.05); tone(1318, 0.35, 'triangle', 0.1, 0.06); },
    ding() { tone(1046, 0.18, 'triangle', 0.12); tone(1568, 0.32, 'triangle', 0.09, 0.07); },
    buzz() { tone(110, 0.3, 'square', 0.05); tone(82, 0.3, 'square', 0.04); },
    dup() { tone(660, 0.12, 'triangle', 0.07); },
    tick() { tone(1500, 0.04, 'square', 0.03); },
    horn() { [196, 247, 294].forEach((f) => tone(f, 0.8, 'sawtooth', 0.045)); },
    fanfare() { [523, 659, 784, 1046].forEach((f, i) => tone(f, 0.3, 'triangle', 0.1, i * 0.12)); },
  };
  function renderSoundBtn() { $('#btn-sound').setAttribute('aria-pressed', String(!store.muted)); }

  function show(screen) {
    [el.ready, el.reveal, el.play, el.done].forEach((s) => { s.hidden = s !== screen; });
  }

  function saveRec() {
    if (!practice && rec) { store.results[day] = rec; persist(); }
  }

  // ---------- Matching against the board ----------
  function firstUnfound(key) {
    const idxs = index.get(key);
    if (!idxs) return undefined;
    return idxs.find((i) => !found.has(i));
  }

  // True if another still-unfound answer has a key that starts with this one
  // (e.g. "cars" vs "cars 2"), so we wait for Enter instead of auto-accepting.
  function isPrefixOfOther(key, idx) {
    for (const k of allKeys) {
      if (k.length > key.length && k.startsWith(key) &&
          index.get(k).some((i) => i !== idx && !found.has(i))) return true;
    }
    return false;
  }

  function fuzzy(n, needUnfound) {
    let best = null;
    for (const k of allKeys) {
      const t = tolerance(Math.min(k.length, n.length));
      if (t === 0 || Math.abs(k.length - n.length) > t) continue;
      const d = lev(n, k);
      if (d > t || (best && d >= best.d)) continue;
      const u = firstUnfound(k);
      if (needUnfound && u === undefined) continue;
      best = { idx: u === undefined ? index.get(k)[0] : u, d };
    }
    return best;
  }

  function onType() {
    if (phase !== 'playing') return;
    const n = norm(el.input.value);
    if (!n) return;
    const u = firstUnfound(n);
    if (u !== undefined && !isPrefixOfOther(n, u)) accept(u);
  }

  function onSubmit(e) {
    e.preventDefault();
    if (phase !== 'playing') return;
    const n = norm(el.input.value);
    if (!n) return;
    const cands = variants(n);
    for (const c of cands) {
      const u = firstUnfound(c);
      if (u !== undefined) return accept(u);
    }
    const f = fuzzy(n, true);
    if (f) return accept(f.idx);

    if (cands.some((c) => index.has(c)) || fuzzy(n, false)) {
      flash('Already on the board', 'dup');
      sfx.dup();
      el.input.value = '';
    } else {
      flash('Bzzt! Not on the board', 'bad');
      sfx.buzz();
      el.input.classList.remove('shake');
      void el.input.offsetWidth;
      el.input.classList.add('shake');
      el.input.select();
    }
  }

  let flashTimer;
  function flash(msg, kind) {
    el.feedback.textContent = msg;
    el.feedback.className = 'feedback ' + kind;
    clearTimeout(flashTimer);
    flashTimer = setTimeout(() => { el.feedback.textContent = ''; el.feedback.className = 'feedback'; }, 1400);
  }

  function addChip(idx) {
    const li = document.createElement('li');
    li.textContent = answers[idx].name;
    el.foundList.prepend(li);
  }

  function accept(idx) {
    found.add(idx);
    rec.found.push(idx);
    saveRec();
    addChip(idx);
    el.input.value = '';
    el.input.classList.remove('shake');
    el.input.classList.add('ok');
    setTimeout(() => el.input.classList.remove('ok'), 250);
    el.scoreNow.textContent = fmt(found.size);
    el.score.classList.remove('bump');
    void el.score.offsetWidth;
    el.score.classList.add('bump');
    if (found.size === par && par < total) {
      flash('Ding! You hit par!', 'good');
      $('#play-par').classList.add('hit');
    } else {
      flash('Ding! ' + answers[idx].name, 'good');
    }
    if (found.size === total) finish();
    else sfx.ding();
  }

  // ---------- Flow ----------
  // Menu: the category stays hidden until the player presses Play.
  function renderReady() {
    $('#practice-banner').hidden = !practice;
    $('#menu-eyebrow').textContent = practice ? 'Bonus round' : `Tonight’s episode · #${day}`;
    const s = computeStats();
    $('#menu-fine').textContent = !practice && s.current > 0
      ? `🔥 ${s.current}-night streak. Keep it alive!`
      : '60 bulbs on the clock. One goes dark every second.';
    show(el.ready);
  }

  function renderReveal() {
    $('#reveal-eyebrow').textContent = practice ? 'Bonus category' : 'Tonight’s category';
    $('#ready-tag').textContent = cat.tag;
    $('#ready-emoji').textContent = cat.emoji;
    $('#ready-title').textContent = cat.title;
    $('#ready-blurb').textContent = cat.blurb;
    $('#ready-count').textContent = `${total} answers on the board · Par ${par}`;
    show(el.reveal);
  }

  // Pressing Play reveals the category and saves the game straight away (the clock starts
  // COUNTDOWN_MS later), so refreshing can't be used to peek at the category and start over.
  function start() {
    rec = { cat: cat.id, startedAt: Date.now() + COUNTDOWN_MS, found: [], done: false };
    saveRec();
    sfx.start();
    countdown();
  }

  let countTimer;
  function countdown() {
    phase = 'countdown';
    renderReveal();
    let lastCount = -1;
    const num = $('#count-num');
    const step = () => {
      const left = rec.startedAt - Date.now();
      if (left <= 0) {
        clearInterval(countTimer);
        sfx.go();
        begin();
        return;
      }
      const n = Math.ceil(left / 1000);
      if (n !== lastCount) {
        lastCount = n;
        num.textContent = n;
        num.classList.remove('pop');
        void num.offsetWidth;
        num.classList.add('pop');
        if (n <= 3) sfx.count();
      }
    };
    clearInterval(countTimer);
    countTimer = setInterval(step, 100);
    step();
  }

  function begin() {
    found = new Set(rec.found);
    endAt = rec.startedAt + DURATION_MS;
    phase = 'playing';
    $('#play-title').textContent = cat.emoji + ' ' + cat.title;
    $('#score-total').textContent = total;
    el.scoreNow.textContent = fmt(found.size);
    $('#play-par').textContent = 'Par ' + par;
    $('#play-par').classList.toggle('hit', found.size >= par);
    lastSecs = -1;
    el.foundList.innerHTML = '';
    rec.found.forEach(addChip);
    show(el.play);
    el.input.value = '';
    el.input.focus();
    clearInterval(tickTimer);
    tickTimer = setInterval(tick, 100);
    tick();
  }

  let tickTimer;
  let lastSecs = -1;
  function tick() {
    if (phase !== 'playing') return clearInterval(tickTimer);
    const left = Math.max(0, endAt - Date.now());
    const secs = Math.ceil(left / 1000);
    if (secs !== lastSecs) {
      el.timeLeft.textContent = secs;
      bulbEls.forEach((b, i) => b.classList.toggle('on', i < secs));
      el.ring.classList.toggle('urgent', secs <= 10);
      if (lastSecs !== -1 && secs > 0 && secs <= 5) sfx.tick();
      lastSecs = secs;
    }
    if (left <= 0) { clearInterval(tickTimer); finish(); }
  }

  function finish(silent) {
    if (phase === 'done') return;
    phase = 'done';
    el.input.blur();
    rec.done = true;
    rec.score = found.size;
    rec.total = total;
    rec.par = par;
    rec.timeLeft = Math.max(0, Math.ceil((endAt - Date.now()) / 1000));
    saveRec();
    if (!silent) (found.size >= par ? sfx.fanfare : sfx.horn)();
    renderDone();
  }

  // ---------- Rating against par ----------
  // 0-5 bulbs: hitting par earns 3, a third over par earns 4, two-thirds over (or a full board) earns 5.
  function rating(score, p, tot) {
    if (tot && score >= tot) return 5;
    return Math.max(0, Math.min(5, Math.round((score / p) * 3)));
  }

  function verdict(score, p, tot) {
    if (tot && score >= tot) return 'A perfect show!';
    const r = score / p;
    if (r >= 1.6) return 'Hall of fame!';
    if (r >= 1.25) return 'The crowd goes wild!';
    if (r >= 1) return 'You beat the par!';
    if (r >= 0.75) return 'So close to par!';
    if (r >= 0.5) return 'Solid effort, contestant';
    if (r > 0) return 'Oof, too bad!';
    return 'Too bad! Better luck tomorrow';
  }

  function parLine(score, p) {
    const diff = score - p;
    if (diff > 0) return `Par ${p} · you beat it by ${diff}`;
    if (diff === 0) return `Par ${p} · right on the number`;
    return `Par ${p} · ${-diff} short`;
  }

  function emojiBar(stars) {
    return '💡'.repeat(stars) + '⚫'.repeat(5 - stars);
  }

  function renderDone() {
    const score = found.size;
    $('#practice-banner-done').hidden = !practice;
    $('#done-tag').textContent = cat.tag;
    $('#done-title').textContent = cat.emoji + ' ' + cat.title;
    $('#done-score').textContent = fmt(score);
    $('#done-total').textContent = total;
    $('#done-verdict').textContent = verdict(score, par, total) + (score >= total && rec.timeLeft ? ` (${rec.timeLeft}s to spare)` : '');
    $('#done-par').textContent = parLine(score, par);
    const lit = rating(score, par, total);
    $('#done-bar').innerHTML = Array.from({ length: 5 }, (_, i) => `<i class="mini-bulb${i < lit ? ' on' : ''}"></i>`).join('');
    $('#next-wrap').hidden = practice;

    const list = $('#reveal-list');
    list.innerHTML = '';
    const order = answers.map((a, i) => i).sort((a, b) => (found.has(b) - found.has(a)));
    order.forEach((i, n) => {
      const li = document.createElement('li');
      li.textContent = answers[i].name;
      li.style.setProperty('--i', Math.min(n, 90));
      if (!found.has(i)) li.className = 'miss';
      list.appendChild(li);
    });
    show(el.done);
    startCountdown();
  }

  let cdTimer;
  function startCountdown() {
    clearInterval(cdTimer);
    const update = () => {
      const now = new Date();
      const next = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
      const s = Math.max(0, Math.floor((next - now) / 1000));
      const pad = (x) => String(x).padStart(2, '0');
      $('#countdown').textContent = `${pad(Math.floor(s / 3600))}:${pad(Math.floor(s / 60) % 60)}:${pad(s % 60)}`;
      if (s === 0 && !practice) location.reload();
    };
    update();
    cdTimer = setInterval(update, 1000);
  }

  // ---------- Stats ----------
  function isDone(d) { const r = store.results[d]; return !!(r && r.done); }
  const catOf = (r, d) => CATS.find((x) => x.id === r.cat) || catFor(d);
  const parOf = (r, d) => r.par || Math.min(parFor(catOf(r, d), r.total), r.total);

  function computeStats() {
    const days = Object.keys(store.results).map(Number).filter(isDone).sort((a, b) => a - b);
    let best = 0, run = 0, prev = null, ratioSum = 0, beat = 0, perfect = 0;
    for (const d of days) {
      const r = store.results[d];
      run = prev !== null && d === prev + 1 ? run + 1 : 1;
      best = Math.max(best, run);
      prev = d;
      const p = parOf(r, d);
      ratioSum += r.score / p;
      if (r.score >= p) beat++;
      if (r.score === r.total) perfect++;
    }
    let cur = 0;
    let d = isDone(realDay) ? realDay : realDay - 1;
    while (isDone(d)) { cur++; d--; }
    return {
      played: days.length, current: cur, best,
      avg: days.length ? Math.round((ratioSum / days.length) * 100) : 0,
      beat, perfect, days,
    };
  }

  function renderStats() {
    const s = computeStats();
    const cells = [
      [s.played, 'Episodes'], [s.avg + '%', 'Avg vs par'], [s.beat, 'Beat par'],
      [s.current, 'Streak'], [s.best, 'Best streak'], [s.perfect, 'Perfect'],
    ];
    $('#stat-grid').innerHTML = cells.map(([v, l]) => `<div class="stat"><b>${v}</b><span>${l}</span></div>`).join('');
    const hist = $('#history');
    const recent = s.days.slice(-10).reverse();
    hist.innerHTML = recent.length ? '' : '<li class="empty">No episodes yet. Tonight’s your debut.</li>';
    for (const d of recent) {
      const r = store.results[d];
      const c = catOf(r, d);
      const li = document.createElement('li');
      li.innerHTML = `<span class="h-cat"></span><span class="h-score">${r.score} <small>par ${parOf(r, d)}</small></span>`;
      li.firstChild.textContent = `#${d} · ${c.emoji} ${c.title}`;
      hist.appendChild(li);
    }
  }

  // ---------- Share ----------
  function shareText() {
    const score = found.size;
    const s = computeStats();
    const diff = score - par;
    const vsPar = diff > 0 ? `+${diff} over par` : diff === 0 ? 'on par' : `${diff} under par`;
    const lines = [
      `SIXTY 📺 Episode #${day}`,
      `${cat.emoji} ${cat.title}`,
      `${score} named · ${vsPar}` + (score >= total && rec.timeLeft ? ` ⏱️ ${rec.timeLeft}s to spare` : ''),
      emojiBar(rating(score, par, total)),
    ];
    if (!practice && s.current > 1) lines.push(`🔥 ${s.current}-night streak`);
    const url = siteUrl();
    if (url) lines.push(url);
    return lines.join('\n');
  }

  // The public link for the share text: SITE_URL if set, otherwise the address the game is
  // served from (but never localhost or a Claude artifact frame).
  function siteUrl() {
    if (SITE_URL) return SITE_URL;
    if (/^https?:$/.test(location.protocol) && !/claude|localhost|127\.0\.0\.1/.test(location.hostname)) {
      return location.origin + location.pathname.replace(/index\.html$/, '');
    }
    return '';
  }

  function share() {
    const text = shareText();
    const fallback = () => {
      const ta = document.createElement('textarea');
      ta.value = text; ta.setAttribute('readonly', '');
      ta.style.position = 'fixed'; ta.style.opacity = '0';
      document.body.appendChild(ta); ta.select();
      let ok = false;
      try { ok = document.execCommand('copy'); } catch (e) { /* ignore */ }
      ta.remove();
      toast(ok ? 'Copied! Paste it anywhere.' : 'Couldn’t copy. Your browser blocked it.');
    };
    try {
      navigator.clipboard.writeText(text).then(() => toast('Copied! Paste it anywhere.'), fallback);
    } catch (e) { fallback(); }
  }

  let toastTimer;
  function toast(msg) {
    const t = $('#toast');
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove('show'), 1800);
  }

  // ---------- Modals ----------
  function openModal(id) {
    const m = $(id);
    if (id === '#modal-stats') renderStats();
    if (typeof m.showModal === 'function') m.showModal(); else m.setAttribute('open', '');
  }
  document.querySelectorAll('.modal').forEach((m) => {
    m.addEventListener('click', (e) => {
      if (e.target === m || e.target.hasAttribute('data-close')) {
        m.close();
        if (phase === 'playing') el.input.focus();
      }
    });
  });

  // ---------- Switching episodes ----------
  // Show the current episode: resume today's game if one exists (refreshing doesn't reset the clock).
  function enterEpisode() {
    clearInterval(tickTimer);
    clearInterval(cdTimer);
    clearInterval(countTimer);
    phase = 'ready';
    found = new Set();
    rec = null;
    $('#daynum').textContent = '#' + day;
    const existing = practice ? null : store.results[day];
    if (existing && existing.cat === cat.id) {
      rec = existing;
      found = new Set(rec.found);
      if (rec.done) {
        phase = 'done';
        endAt = rec.startedAt + DURATION_MS;
        renderDone();
      } else if (Date.now() < rec.startedAt) {
        countdown();
      } else if (Date.now() < rec.startedAt + DURATION_MS) {
        begin();
      } else {
        endAt = rec.startedAt + DURATION_MS;
        phase = 'playing';
        finish(true);
      }
    } else {
      renderReady();
    }
    window.scrollTo(0, 0);
  }

  function setHash(h) {
    try { history.replaceState(null, '', location.pathname + location.search + h); } catch (e) { /* ignore */ }
  }

  // Bonus round: a random category you haven't played yet (other than tonight's), as practice.
  function playBonus() {
    const played = new Set(Object.values(store.results).filter((r) => r && r.done).map((r) => r.cat));
    const options = [];
    for (let k = 1; k < CATS.length; k++) {
      const d = realDay + k;
      if (catFor(d).id !== cat.id) options.push(d);
    }
    const fresh = options.filter((d) => !played.has(catFor(d).id));
    const pool = fresh.length ? fresh : options;
    const d = pool[Math.floor(Math.random() * pool.length)];
    setHash('#ep-' + d);
    setupEpisode(d);
    enterEpisode();
  }

  function backToTonight(e) {
    e.preventDefault();
    setHash('');
    setupEpisode(realDay);
    enterEpisode();
  }

  // ---------- Wire up ----------
  $('#btn-start').addEventListener('click', start);
  $('#btn-bonus').addEventListener('click', playBonus);
  document.querySelectorAll('.back-today').forEach((a) => a.addEventListener('click', backToTonight));
  window.addEventListener('hashchange', () => { setupEpisode(requestedDay()); enterEpisode(); });
  $('#btn-share').addEventListener('click', share);
  $('#btn-help').addEventListener('click', () => openModal('#modal-help'));
  $('#btn-stats').addEventListener('click', () => openModal('#modal-stats'));
  $('#btn-sound').addEventListener('click', () => {
    store.muted = !store.muted;
    persist();
    renderSoundBtn();
    if (!store.muted) sfx.ding();
  });
  renderSoundBtn();
  el.input.addEventListener('input', onType);
  el.form.addEventListener('submit', onSubmit);

  enterEpisode();

  if (!store.seenHelp) {
    store.seenHelp = true;
    persist();
    if (phase === 'ready') openModal('#modal-help');
  }

  // Exposed for quick debugging / data checks in the console.
  window.__sixty = { norm, get cat() { return cat; }, get day() { return day; } };
})();
