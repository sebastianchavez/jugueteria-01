/* ============================================
   STORAGE.JS - Helpers de localStorage
   ============================================ */

const KEYS = {
  USUARIOS: 'jugu_usuarios',
  SESION: 'jugu_sesion',
  CARRITO: 'jugu_carrito',
  PEDIDOS: 'jugu_pedidos',
  RESENAS: 'jugu_resenas'
};

const Storage = {
  get(key, fallback = null) {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (e) {
      console.error('Storage.get error:', e);
      return fallback;
    }
  },

  set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (e) {
      console.error('Storage.set error:', e);
      return false;
    }
  },

  remove(key) {
    localStorage.removeItem(key);
  },

  init() {
    if (!this.get(KEYS.USUARIOS)) {
      this.set(KEYS.USUARIOS, USUARIOS_INICIALES);
    }
    if (!this.get(KEYS.PEDIDOS)) {
      this.set(KEYS.PEDIDOS, PEDIDOS_INICIALES);
    }
    if (!this.get(KEYS.RESENAS)) {
      this.set(KEYS.RESENAS, RESENAS_INICIALES);
    }
    if (!this.get(KEYS.CARRITO)) {
      this.set(KEYS.CARRITO, []);
    }
  },

  limpiarTodo() {
    Object.values(KEYS).forEach(k => localStorage.removeItem(k));
  }
};
