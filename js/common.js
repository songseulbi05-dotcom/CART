// 모든 페이지 공통 동작: 글자 크기, 음성 읽기(TTS), 음성 인식(STT), 최근 검색어, 비교 선택, 카트 배지

const FONT_KEY = 'smartcart_font_lg';
const RECENT_KEY = 'smartcart_recent_v1';
const COMPARE_KEY = 'smartcart_compare_v1';

/* ---------- 글자 크게 ---------- */
function initFontToggle() {
  const on = localStorage.getItem(FONT_KEY) === '1';
  document.documentElement.classList.toggle('font-lg', on);
  document.querySelectorAll('.font-toggle-btn').forEach((btn) => {
    btn.classList.toggle('active', on);
    btn.addEventListener('click', () => {
      const next = !document.documentElement.classList.contains('font-lg');
      document.documentElement.classList.toggle('font-lg', next);
      localStorage.setItem(FONT_KEY, next ? '1' : '0');
      btn.classList.toggle('active', next);
    });
  });
}

/* ---------- 음성으로 읽어주기 (TTS) ---------- */
function speakPageIntro(btn) {
  if (!('speechSynthesis' in window)) {
    alert('이 브라우저는 음성 읽기를 지원하지 않아요.');
    return;
  }
  if (window.speechSynthesis.speaking) {
    window.speechSynthesis.cancel();
    btn.classList.remove('speaking');
    return;
  }
  const h1 = document.querySelector('h1, h2.page-heading');
  const sub = document.querySelector('[data-tts-sub]');
  const text = [h1 ? h1.textContent : '', sub ? sub.textContent : ''].join('. ');
  const utter = new SpeechSynthesisUtterance(text || document.title);
  utter.lang = 'ko-KR';
  utter.rate = 0.95;
  utter.onend = () => btn.classList.remove('speaking');
  btn.classList.add('speaking');
  window.speechSynthesis.speak(utter);
}

function initTTS() {
  document.querySelectorAll('.tts-btn').forEach((btn) => {
    btn.addEventListener('click', () => speakPageIntro(btn));
  });
}

/* ---------- 음성 인식 (STT) ---------- */
function initMic(micEl, onResult) {
  if (!micEl) return;
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  micEl.addEventListener('click', () => {
    if (!SR) {
      alert('이 브라우저는 음성 인식을 지원하지 않아요. 직접 입력해주세요.');
      return;
    }
    const rec = new SR();
    rec.lang = 'ko-KR';
    rec.interimResults = false;
    rec.maxAlternatives = 1;
    micEl.classList.add('listening');
    rec.start();
    rec.onresult = (e) => {
      const text = e.results[0][0].transcript;
      onResult(text);
    };
    rec.onerror = () => micEl.classList.remove('listening');
    rec.onend = () => micEl.classList.remove('listening');
  });
}

/* ---------- 최근 검색어 ---------- */
function getRecentSearches() {
  try {
    return JSON.parse(localStorage.getItem(RECENT_KEY)) || [];
  } catch (e) {
    return [];
  }
}
function addRecentSearch(term) {
  const t = term.trim();
  if (!t) return;
  let list = getRecentSearches().filter((x) => x !== t);
  list.unshift(t);
  list = list.slice(0, 6);
  localStorage.setItem(RECENT_KEY, JSON.stringify(list));
}
function clearRecentSearches() {
  localStorage.removeItem(RECENT_KEY);
}

/* ---------- 비교 선택 (최대 2개) ---------- */
function getCompareSelection() {
  try {
    return JSON.parse(localStorage.getItem(COMPARE_KEY)) || [];
  } catch (e) {
    return [];
  }
}
function toggleCompareSelection(id) {
  let sel = getCompareSelection();
  if (sel.includes(id)) {
    sel = sel.filter((x) => x !== id);
  } else {
    if (sel.length >= 2) sel.shift();
    sel.push(id);
  }
  localStorage.setItem(COMPARE_KEY, JSON.stringify(sel));
  return sel;
}
function clearCompareSelection() {
  localStorage.removeItem(COMPARE_KEY);
}

/* ---------- 공통 초기화 ---------- */
function formatPrice(n) {
  return n.toLocaleString('ko-KR') + '원';
}

document.addEventListener('DOMContentLoaded', () => {
  initFontToggle();
  initTTS();
});
