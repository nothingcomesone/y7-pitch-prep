/* ============================================================
   Y7 Pitch Prep — Shared vocabulary + utilities
   Year 7 Term 2 Task 2 (The Family Pitch)
   ============================================================ */

/* Vocab is restricted to what Year 7 has actually been taught
   in Term 2 Topics 1–5 + Term 1 review. Matches the official
   Student Pack word banks exactly. */
const VOCAB = {
  family: [
    { en: 'Dad',             pinyin: 'bàba',     char: '爸爸' },
    { en: 'Mum',             pinyin: 'māma',     char: '妈妈' },
    { en: 'Older brother',   pinyin: 'gēge',     char: '哥哥' },
    { en: 'Older sister',    pinyin: 'jiějie',   char: '姐姐' },
    { en: 'Younger brother', pinyin: 'dìdi',     char: '弟弟' },
    { en: 'Younger sister',  pinyin: 'mèimei',   char: '妹妹' },
    { en: 'Pet dog',         pinyin: 'gǒu',      char: '狗' },
    { en: 'Pet cat',         pinyin: 'māo',      char: '猫' },
  ],
  /* Y7 appearance adjectives — only the 4 from Topic 3 */
  appearance: [
    { en: 'Tall',  pinyin: 'gāo',  char: '高' },
    { en: 'Short', pinyin: 'ǎi',   char: '矮' },
    { en: 'Big',   pinyin: 'dà',   char: '大' },
    { en: 'Small', pinyin: 'xiǎo', char: '小' },
  ],
  /* Y7 personality adjectives — only the 4 from Topic 4 */
  personality: [
    { en: 'Happy',  pinyin: 'kuàilè',   char: '快乐' },
    { en: 'Smart',  pinyin: 'cōngming', char: '聪明' },
    { en: 'Cute',   pinyin: "kě'ài",    char: '可爱' },
    { en: 'Strict', pinyin: 'yánlì',    char: '严厉' },
  ],
  countries: [
    { en: 'Chinese',    pinyin: 'Zhōngguó rén',   char: '中国人' },
    { en: 'Australian', pinyin: 'Àodàlìyà rén',   char: '澳大利亚人' },
    { en: 'American',   pinyin: 'Měiguó rén',     char: '美国人' },
    { en: 'British',    pinyin: 'Yīngguó rén',    char: '英国人' },
    { en: 'Japanese',   pinyin: 'Rìběn rén',      char: '日本人' },
  ],
  /* Cities from Topic 5 lesson log: Xīní / Běijīng / Lúndūn */
  cities: [
    { en: 'Sydney',   pinyin: 'Xīní',     char: '悉尼' },
    { en: 'Beijing',  pinyin: 'Běijīng',  char: '北京' },
    { en: 'London',   pinyin: 'Lúndūn',   char: '伦敦' },
    { en: 'Shanghai', pinyin: 'Shànghǎi', char: '上海' },
  ],
  /* Realistic age range for Y7 students + family members */
  ages: [
    { en: '11', pinyin: 'shíyī',     char: '十一' },
    { en: '12', pinyin: 'shí’èr', char: '十二' },
    { en: '13', pinyin: 'shísān',    char: '十三' },
    { en: '14', pinyin: 'shísì',     char: '十四' },
    { en: '15', pinyin: 'shíwǔ',     char: '十五' },
    { en: '40', pinyin: 'sìshí',     char: '四十' },
    { en: '45', pinyin: 'sìshíwǔ',   char: '四十五' },
    { en: '50', pinyin: 'wǔshí',     char: '五十' },
  ],
  linkers: [
    { en: 'and', pinyin: 'hé',     char: '和' },
    { en: 'but', pinyin: 'dànshì', char: '但是' },
  ],
};

/* Sentences for the sentence builder. Every sentence uses ONLY
   Y7 vocab + Y7 6-element grammar patterns. */
const SENTENCES = [
  { en: 'This is my dad.',
    correct: ['Zhè', 'shì', 'wǒ', 'de', 'bàba'],
    distractors: [],
    cn: '这是我的爸爸。' },
  { en: 'My mum is called Sarah.',
    correct: ['Wǒ', 'de', 'māma', 'jiào', 'Sarah'],
    distractors: ['shì'],
    cn: '我的妈妈叫Sarah。' },
  { en: 'He is 14 years old.',
    correct: ['Tā', 'shísì', 'suì'],
    distractors: ['shì'],
    cn: '他十四岁。' },
  { en: 'She is Australian.',
    correct: ['Tā', 'shì', 'Àodàlìyà', 'rén'],
    distractors: [],
    cn: '她是澳大利亚人。' },
  { en: 'My dad is tall.',
    correct: ['Wǒ', 'de', 'bàba', 'hěn', 'gāo'],
    distractors: ['shì'],
    cn: '我的爸爸很高。' },
  { en: 'My younger brother is small.',
    correct: ['Wǒ', 'de', 'dìdi', 'hěn', 'xiǎo'],
    distractors: [],
    cn: '我的弟弟很小。' },
  { en: 'My older sister is tall and smart.',
    correct: ['Wǒ', 'de', 'jiějie', 'hěn', 'gāo', 'hé', 'hěn', 'cōngming'],
    distractors: ['dànshì'],
    cn: '我的姐姐很高和很聪明。' },
  { en: 'My older brother is big but cute.',
    correct: ['Wǒ', 'de', 'gēge', 'hěn', 'dà', 'dànshì', 'hěn', "kě'ài"],
    distractors: ['hé'],
    cn: '我的哥哥很大但是很可爱。' },
  { en: 'He lives in Sydney.',
    correct: ['Tā', 'zhù', 'zài', 'Xīní'],
    distractors: ['shì'],
    cn: '他住在悉尼。' },
  { en: 'My pet dog is small and cute.',
    correct: ['Wǒ', 'de', 'gǒu', 'hěn', 'xiǎo', 'hé', 'hěn', "kě'ài"],
    distractors: ['shì'],
    cn: '我的狗很小和很可爱。' },
];

/* ============ localStorage helpers ============ */
const STORE_KEY = 'y7pitchprep.v1';

function loadState() {
  try {
    const raw = localStorage.getItem(STORE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (e) {
    return {};
  }
}

function saveState(patch) {
  try {
    const cur = loadState();
    const next = { ...cur, ...patch };
    localStorage.setItem(STORE_KEY, JSON.stringify(next));
    flashSaveIndicator();
    return next;
  } catch (e) {
    console.warn('save failed', e);
  }
}

function flashSaveIndicator(msg = 'Saved ✓') {
  let el = document.querySelector('.save-indicator');
  if (!el) {
    el = document.createElement('div');
    el.className = 'save-indicator';
    document.body.appendChild(el);
  }
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(el._t);
  el._t = setTimeout(() => el.classList.remove('show'), 1200);
}

function clearAllProgress() {
  if (confirm('This will erase ALL your progress on this device. Continue?')) {
    localStorage.removeItem(STORE_KEY);
    location.reload();
  }
}

/* ============ Shared header (injected) ============ */
function renderHeader(activePage) {
  const html = `
    <div class="site-header-inner">
      <a class="brand" href="index.html">
        <span class="brand-dot">●</span> Y7 Pitch Prep
      </a>
      <nav class="main-nav">
        <a href="index.html"           class="${activePage==='home'?'active':''}">Home</a>
        <a href="pitch-builder.html"   class="${activePage==='pitch'?'active':''}">Pitch Builder</a>
        <a href="flashcards.html"      class="${activePage==='flashcards'?'active':''}">Flashcards</a>
        <a href="sentence-builder.html"class="${activePage==='sentence'?'active':''}">Sentence Builder</a>
        <a href="reference.html"       class="${activePage==='reference'?'active':''}">Reference</a>
      </nav>
    </div>`;
  const header = document.createElement('header');
  header.className = 'site-header';
  header.innerHTML = html;
  document.body.insertBefore(header, document.body.firstChild);
}

/* ============ Helpers ============ */
function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/* ============ Pronunciation (pre-rendered MiniMax MP3 + Web Speech fallback) ============ */
/* MP3 files in audio/ are generated by _tools/build_audio.py. The manifest maps
   each Chinese string to its MP3 filename (sha1 hash). If a string isn't in the
   manifest, or the MP3 fails to play, we fall back to window.speechSynthesis. */
const TTS_SUPPORTED = typeof window !== 'undefined' && 'speechSynthesis' in window;
let _zhVoice = null;
let _audioManifest = null;
let _audioManifestPromise = null;
const _audioEl = typeof Audio !== 'undefined' ? new Audio() : null;

function _pickZhVoice() {
  if (!TTS_SUPPORTED) return;
  const voices = window.speechSynthesis.getVoices() || [];
  const zh = voices.filter(v => (v.lang || '').replace('_', '-').toLowerCase().startsWith('zh'));
  const cn = zh.find(v => v.lang.replace('_', '-').toLowerCase() === 'zh-cn');
  _zhVoice = cn || zh[0] || null;
}
if (TTS_SUPPORTED) {
  _pickZhVoice();
  window.speechSynthesis.addEventListener('voiceschanged', _pickZhVoice);
}

function _loadManifest() {
  if (_audioManifestPromise) return _audioManifestPromise;
  _audioManifestPromise = fetch('audio/manifest.json', { cache: 'force-cache' })
    .then(r => r.ok ? r.json() : null)
    .then(j => { _audioManifest = j || {}; return _audioManifest; })
    .catch(() => { _audioManifest = {}; return _audioManifest; });
  return _audioManifestPromise;
}
if (typeof document !== 'undefined') _loadManifest();

function _speakFallback(text, opts) {
  if (!TTS_SUPPORTED || !text) return;
  try {
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(String(text));
    u.lang = opts.lang || 'zh-CN';
    u.rate = opts.rate != null ? opts.rate : 0.85;
    if (_zhVoice) u.voice = _zhVoice;
    window.speechSynthesis.speak(u);
  } catch (e) {
    console.warn('speak fallback failed', e);
  }
}

function speak(text, opts = {}) {
  if (!text) return;
  const play = () => {
    const file = _audioManifest && _audioManifest[text];
    if (!file || !_audioEl) { _speakFallback(text, opts); return; }
    try {
      if (TTS_SUPPORTED) window.speechSynthesis.cancel()