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
