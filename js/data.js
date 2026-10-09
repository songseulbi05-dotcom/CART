// 상품 데이터베이스 (목업)
const CATEGORIES = [
  { id: 'veg', name: '채소·과일', color: 'veg' },
  { id: 'meat', name: '육류·수산', color: 'meat' },
  { id: 'dairy', name: '유제품', color: 'dairy' },
  { id: 'health', name: '건강식품', color: 'health' },
  { id: 'processed', name: '가공식품', color: 'processed' },
  { id: 'drink', name: '음료·간식', color: 'drink' },
  { id: 'life', name: '생활용품', color: 'life' },
  { id: 'etc', name: '기타', color: 'etc' },
];

const PRODUCTS = [
  {
    id: 'milk_seoul', name: '서울우유 1등급 우유', category: 'dairy', emoji: '🥛',
    volume: '1L', price: 2980, origin: '국내산',
    nutrition: { cal: 65, carb: 5, sugar: 5, fat: 4, protein: 3 },
    rating: 4.8, reviews: 1234,
    location: { zone: '유제품 코너', detail: '3번 통로 · 오른쪽 2번 진열대', floor: 'f1', mapPos: { col: 3, row: 2 } },
  },
  {
    id: 'milk_maeil', name: '매일우유 오리지널', category: 'dairy', emoji: '🥛',
    volume: '1L', price: 3200, origin: '국내산',
    nutrition: { cal: 65, carb: 5, sugar: 1.5, fat: 3.6, protein: 3 },
    rating: 4.7, reviews: 4556,
    location: { zone: '유제품 코너', detail: '3번 통로 · 왼쪽 1번 진열대', floor: 'f1', mapPos: { col: 3, row: 2 } },
  },
  {
    id: 'milk_banana', name: '바나나맛 우유', category: 'dairy', emoji: '🍌',
    volume: '240ml', price: 1800, origin: '국내산',
    nutrition: { cal: 180, carb: 29, sugar: 27, fat: 6, protein: 5 },
    rating: 4.9, reviews: 2145,
    location: { zone: '유제품 코너', detail: '3번 통로 · 오른쪽 3번 진열대', floor: 'f1', mapPos: { col: 3, row: 2 } },
  },
  {
    id: 'milk_lowfat', name: '저지방 우유', category: 'dairy', emoji: '🥛',
    volume: '1L', price: 2900, origin: '국내산',
    nutrition: { cal: 46, carb: 5, sugar: 5, fat: 1, protein: 3 },
    rating: 4.6, reviews: 421,
    location: { zone: '유제품 코너', detail: '3번 통로 · 오른쪽 1번 진열대', floor: 'f1', mapPos: { col: 3, row: 2 } },
  },
  {
    id: 'milk_digest', name: '매일 소화가 잘되는 우유', category: 'dairy', emoji: '🥛',
    volume: '930ml', price: 3100, origin: '국내산',
    nutrition: { cal: 63, carb: 5, sugar: 5, fat: 3.8, protein: 3 },
    rating: 4.7, reviews: 532,
    location: { zone: '유제품 코너', detail: '3번 통로 · 왼쪽 2번 진열대', floor: 'f1', mapPos: { col: 3, row: 2 } },
  },
  {
    id: 'milk_seoul_lowfat', name: '서울우유 저지방', category: 'dairy', emoji: '🥛',
    volume: '1L', price: 2850, origin: '국내산',
    nutrition: { cal: 45, carb: 5, sugar: 5, fat: 1, protein: 3 },
    rating: 4.6, reviews: 321,
    location: { zone: '유제품 코너', detail: '3번 통로 · 오른쪽 2번 진열대', floor: 'f1', mapPos: { col: 3, row: 2 } },
  },
  {
    id: 'milk_choco', name: '초코 우유', category: 'dairy', emoji: '🍫',
    volume: '300ml', price: 1600, origin: '국내산',
    nutrition: { cal: 170, carb: 28, sugar: 26, fat: 5, protein: 5 },
    rating: 4.8, reviews: 934,
    location: { zone: '유제품 코너', detail: '3번 통로 · 오른쪽 3번 진열대', floor: 'f1', mapPos: { col: 3, row: 2 } },
  },
  {
    id: 'milk_straw', name: '딸기우유', category: 'dairy', emoji: '🍓',
    volume: '300ml', price: 1600, origin: '국내산',
    nutrition: { cal: 168, carb: 27, sugar: 25, fat: 5, protein: 5 },
    rating: 4.9, reviews: 2584,
    location: { zone: '유제품 코너', detail: '3번 통로 · 오른쪽 3번 진열대', floor: 'f1', mapPos: { col: 3, row: 2 } },
  },
  {
    id: 'egg', name: '신선한 특란 계란', category: 'dairy', emoji: '🥚',
    volume: '10구', price: 3980, origin: '국내산',
    nutrition: { cal: 70, carb: 1, sugar: 0, fat: 5, protein: 6 },
    rating: 4.8, reviews: 987,
    location: { zone: '냉장식품 코너', detail: '2번 통로 · 왼쪽 1번 진열대', floor: 'f1', mapPos: { col: 2, row: 1 } },
  },
  {
    id: 'apple', name: '사과 (국내산)', category: 'veg', emoji: '🍎',
    volume: '1kg', price: 5280, origin: '국내산',
    nutrition: { cal: 52, carb: 14, sugar: 10, fat: 0.2, protein: 0.3 },
    rating: 4.7, reviews: 655,
    location: { zone: '채소·과일 코너', detail: '1번 통로 · 입구 쪽 진열대', floor: 'f1', mapPos: { col: 1, row: 1 } },
  },
  {
    id: 'tofu', name: '두부', category: 'dairy', emoji: '🧊',
    volume: '1모', price: 1500, origin: '국내산',
    nutrition: { cal: 76, carb: 2, sugar: 1, fat: 4.5, protein: 8 },
    rating: 4.6, reviews: 210,
    location: { zone: '유제품 코너', detail: '3번 통로 · 왼쪽 3번 진열대', floor: 'f1', mapPos: { col: 3, row: 2 } },
  },
  {
    id: 'bread', name: '식빵', category: 'processed', emoji: '🍞',
    volume: '1개', price: 2500, origin: '국내산',
    nutrition: { cal: 266, carb: 49, sugar: 5, fat: 3.3, protein: 9 },
    rating: 4.5, reviews: 340,
    location: { zone: '베이커리 코너', detail: '5번 통로 · 오른쪽 1번 진열대', floor: 'f1', mapPos: { col: 4, row: 2 } },
  },
  {
    id: 'tissue', name: '휴지', category: 'life', emoji: '🧻',
    volume: '1팩', price: 6900, origin: '국내산',
    nutrition: null,
    rating: 4.6, reviews: 580,
    location: { zone: '생활용품 코너', detail: '6번 통로 · 오른쪽 2번 진열대', floor: 'f2', mapPos: { col: 3, row: 3 } },
  },
];

// 실물 포장 느낌의 상품 아이콘 (SVG, 그라데이션/그림자로 입체감 추가)
const SHADOW = '<ellipse cx="32" cy="58" rx="18" ry="3" fill="#000" opacity=".1"/>';

function cartonIcon(id, topLight, topDark, labelColor, badge) {
  const g = 'g' + id;
  return `
    <defs>
      <linearGradient id="${g}b" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#e7e3d5"/>
      </linearGradient>
      <linearGradient id="${g}t" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="${topLight}"/><stop offset="1" stop-color="${topDark}"/>
      </linearGradient>
    </defs>
    ${SHADOW}
    <path d="M18,22 L18,56 Q18,58 20,58 H44 Q46,58 46,56 V22 Z" fill="url(#${g}b)" stroke="#ddd8c8"/>
    <path d="M18,22 L18,14 L32,6 L46,14 L46,22 Z" fill="url(#${g}t)"/>
    <path d="M32,6 L32,22" stroke="#00000020" stroke-width="1"/>
    <path d="M29,6 L32,1 L35,6 Z" fill="${topDark}"/>
    <rect x="18" y="34" width="28" height="6" fill="${labelColor}"/>
    <text x="32" y="50" font-size="6" text-anchor="middle" fill="#9a9480" font-family="sans-serif" font-weight="700">1L</text>
    ${badge ? `<circle cx="40" cy="27" r="6.5" fill="#F4C84B" stroke="#D9A82E"/><text x="40" y="30" font-size="6.5" text-anchor="middle" fill="#7A5A10" font-family="sans-serif" font-weight="700">1A</text>` : ''}
    <rect x="22" y="26" width="1.5" height="30" fill="#00000010"/>
  `;
}
function bottleIcon(id, light, dark, ringColor) {
  const g = 'g' + id;
  return `
    <defs>
      <linearGradient id="${g}" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stop-color="${light}"/><stop offset=".55" stop-color="${dark}"/><stop offset="1" stop-color="${light}"/>
      </linearGradient>
    </defs>
    ${SHADOW}
    <rect x="25" y="3" width="14" height="6" rx="3" fill="#fdfdfb" stroke="#e2ded0"/>
    <rect x="27" y="7" width="10" height="9" fill="url(#${g})"/>
    <path d="M18,18 C15,18 13,23 13,29 L13,46 C13,52 18,57 25,57 H39 C46,57 51,52 51,46 L51,29 C51,23 49,18 46,18 Z" fill="url(#${g})"/>
    <rect x="13" y="45" width="38" height="5" fill="${ringColor}"/>
    <rect x="19" y="29" width="26" height="12" rx="3" fill="#ffffff" opacity=".85"/>
    <ellipse cx="19" cy="30" rx="3.2" ry="11" fill="#ffffff" opacity=".3"/>
  `;
}
const PRODUCT_ICON_FNS = {
  milk_seoul: (id) => cartonIcon(id, '#5CBE63', '#2B6E34', '#D6453B', true),
  milk_maeil: (id) => cartonIcon(id, '#5A9CDB', '#204B7A', '#204B7A', false),
  milk_lowfat: (id) => cartonIcon(id, '#5BCFC6', '#256F69', '#256F69', false),
  milk_digest: (id) => cartonIcon(id, '#A98AE0', '#6A4FA0', '#6A4FA0', false),
  milk_seoul_lowfat: (id) => cartonIcon(id, '#A6D9A0', '#5FA058', '#D6453B', true),
  milk_banana: (id) => bottleIcon(id, '#FBE08A', '#E8A93C', '#C99A2E'),
  milk_choco: (id) => bottleIcon(id, '#8A6248', '#4A2C1C', '#4A2C1C'),
  milk_straw: (id) => bottleIcon(id, '#F7C3CE', '#D87E90', '#D87E90'),
  egg: () => `
    ${SHADOW}
    <path d="M12,28 L9,12 L55,12 L52,28 Z" fill="#B5945F"/>
    <path d="M9,12 L32,12 L30,28 L12,28 Z" fill="#ffffff" opacity=".15"/>
    <rect x="10" y="28" width="44" height="22" rx="6" fill="#C9A876"/>
    <ellipse cx="22" cy="35" rx="7.5" ry="9" fill="#F3E6D4" stroke="#E0CDA9"/>
    <ellipse cx="32" cy="35" rx="7.5" ry="9" fill="#F7ECD9" stroke="#E0CDA9"/>
    <ellipse cx="42" cy="35" rx="7.5" ry="9" fill="#F3E6D4" stroke="#E0CDA9"/>
    <ellipse cx="19" cy="31" rx="2.2" ry="1.5" fill="#ffffff" opacity=".7"/>
    <ellipse cx="29" cy="31" rx="2.2" ry="1.5" fill="#ffffff" opacity=".7"/>
    <ellipse cx="39" cy="31" rx="2.2" ry="1.5" fill="#ffffff" opacity=".7"/>
  `,
  apple: (id) => `
    <defs>
      <radialGradient id="g${id}" cx="35%" cy="28%" r="75%">
        <stop offset="0" stop-color="#F3927C"/><stop offset=".55" stop-color="#E2483C"/><stop offset="1" stop-color="#AD3023"/>
      </radialGradient>
    </defs>
    ${SHADOW}
    <path d="M32,20 C22,14 10,22 12,34 C14,46 24,54 32,50 C40,54 50,46 52,34 C54,22 42,14 32,20 Z" fill="url(#g${id})"/>
    <path d="M31,15 Q29,9 33,6" stroke="#6B4226" stroke-width="2.4" fill="none" stroke-linecap="round"/>
    <path d="M33,8 q7,-4 9,3 q-7,3 -9,-3z" fill="#4C9A4C"/>
    <path d="M35,9 q3,1 4,3" stroke="#357035" stroke-width=".8" fill="none"/>
    <ellipse cx="23" cy="26" rx="5" ry="9" fill="#ffffff" opacity=".4"/>
  `,
  tofu: (id) => `
    <defs>
      <linearGradient id="g${id}" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#F3FAFF" stop-opacity=".9"/><stop offset="1" stop-color="#D7E9F8" stop-opacity=".6"/>
      </linearGradient>
    </defs>
    ${SHADOW}
    <rect x="14" y="16" width="36" height="34" rx="5" fill="url(#g${id})" stroke="#BBD3EC"/>
    <rect x="18" y="21" width="28" height="19" rx="2" fill="#FAFAF7" stroke="#E5E5DD"/>
    <ellipse cx="26" cy="27" rx="3" ry="2" fill="#ffffff" opacity=".85"/>
    <ellipse cx="38" cy="33" rx="2" ry="1.3" fill="#ffffff" opacity=".6"/>
    <rect x="14" y="40" width="36" height="10" rx="5" fill="#3F7FC4"/>
    <rect x="14" y="40" width="36" height="3" fill="#ffffff" opacity=".2"/>
  `,
  bread: (id) => `
    <defs>
      <linearGradient id="g${id}" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#F2DBA0"/><stop offset="1" stop-color="#D9AE64"/>
      </linearGradient>
    </defs>
    ${SHADOW}
    <path d="M16,24 Q32,12 48,24 L48,50 Q32,56 16,50 Z" fill="#ffffff" opacity=".4" stroke="#D8D2C0"/>
    <path d="M21,42 L21,24 Q25,16 29,24 L29,42 Z" fill="url(#g${id})" stroke="#C9A860"/>
    <path d="M30,42 L30,22 Q34,13 38,22 L38,42 Z" fill="url(#g${id})" stroke="#C9A860"/>
    <path d="M39,42 L39,24 Q43,16 47,24 L47,42 Z" fill="url(#g${id})" stroke="#C9A860"/>
    <path d="M18,26 L20,48" stroke="#ffffff" stroke-width="3" opacity=".35"/>
    <rect x="29" y="13" width="5" height="9" rx="1.5" fill="#D6453B" transform="rotate(12 31 17)"/>
  `,
  tissue: (id) => `
    <defs>
      <radialGradient id="g${id}" cx="40%" cy="35%" r="65%">
        <stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#E7E3D7"/>
      </radialGradient>
    </defs>
    ${SHADOW}
    <rect x="10" y="20" width="44" height="30" rx="8" fill="#ffffff" opacity=".3" stroke="#CFC9B8"/>
    <circle cx="21" cy="35" r="8.5" fill="url(#g${id})" stroke="#E3DFD3"/><circle cx="21" cy="35" r="3" fill="#D8D2C2"/>
    <circle cx="32" cy="35" r="8.5" fill="url(#g${id})" stroke="#E3DFD3"/><circle cx="32" cy="35" r="3" fill="#D8D2C2"/>
    <circle cx="43" cy="35" r="8.5" fill="url(#g${id})" stroke="#E3DFD3"/><circle cx="43" cy="35" r="3" fill="#D8D2C2"/>
    <rect x="10" y="40" width="44" height="8" fill="#7BB8D8"/>
  `,
};

// 네이버 쇼핑 검색 API로 가져온 실제 상품 이미지 URL (scripts/fetch-naver-images.mjs 실행 시 자동으로 채워짐)
const PRODUCT_IMAGES = {};

function productIconSVG(id) {
  const fn = PRODUCT_ICON_FNS[id];
  const inner = fn ? fn(id) : `${SHADOW}<rect x="16" y="16" width="32" height="32" rx="6" fill="#E7E4D8"/>`;
  return `<svg viewBox="0 0 64 64" class="p-icon">${inner}</svg>`;
}

function productThumb(p) {
  if (!p) return productIconSVG('');
  const url = PRODUCT_IMAGES[p.id];
  if (url) {
    return `<img src="${url}" alt="${p.name}" class="p-photo" loading="lazy" onerror="this.outerHTML = productIconSVG('${p.id}')">`;
  }
  return productIconSVG(p.id);
}

function getProduct(id) {
  return PRODUCTS.find((p) => p.id === id);
}

function searchProducts(query) {
  const q = (query || '').trim().toLowerCase();
  if (!q) return [];
  return PRODUCTS.filter((p) => p.name.toLowerCase().includes(q));
}

// 장보기 체크리스트의 전체 필요 목록 (상품 id)
const CHECKLIST_IDS = ['milk_maeil', 'egg', 'apple', 'tofu', 'bread', 'tissue'];
