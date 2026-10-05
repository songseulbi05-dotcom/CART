// 장바구니 상태 관리 (localStorage 기반)
const CART_KEY = 'smartcart_cart_v1';
const SEEDED_KEY = 'smartcart_seeded_v1';

function getCart() {
  try {
    const raw = localStorage.getItem(CART_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

function seedCartOnce() {
  if (localStorage.getItem(SEEDED_KEY)) return;
  saveCart([
    { id: 'milk_maeil', qty: 1 },
    { id: 'egg', qty: 1 },
    { id: 'apple', qty: 1 },
  ]);
  localStorage.setItem(SEEDED_KEY, '1');
}

function addToCart(id, qty = 1) {
  const cart = getCart();
  const existing = cart.find((c) => c.id === id);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ id, qty });
  }
  saveCart(cart);
}

function removeFromCart(id) {
  const cart = getCart().filter((c) => c.id !== id);
  saveCart(cart);
}

function updateCartQty(id, delta) {
  const cart = getCart();
  const item = cart.find((c) => c.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    saveCart(cart.filter((c) => c.id !== id));
  } else {
    saveCart(cart);
  }
}

function isInCart(id) {
  return getCart().some((c) => c.id === id);
}

function cartItemCount() {
  return getCart().reduce((sum, c) => sum + c.qty, 0);
}

function cartTotal() {
  return getCart().reduce((sum, c) => {
    const p = getProduct(c.id);
    return p ? sum + p.price * c.qty : sum;
  }, 0);
}
