/* ============================================
   UI.JS - Header, footer, componentes, toasts
   ============================================ */

const UI = {
  formatCLP(precio) {
    if (typeof precio !== 'number') precio = parseInt(precio) || 0;
    return '$' + precio.toLocaleString('es-CL');
  },

  formatFecha(fechaISO) {
    try {
      const fecha = new Date(fechaISO);
      return fecha.toLocaleDateString('es-CL', { day: '2-digit', month: 'long', year: 'numeric' });
    } catch (e) {
      return fechaISO;
    }
  },

  getQuery(name) {
    const params = new URLSearchParams(window.location.search);
    return params.get(name);
  },

  nombreCategoria(id) {
    const cat = CATEGORIAS.find(c => c.id === id);
    return cat ? cat.nombre : id;
  },

  nombreEdad(edadMin, edadMax) {
    if (edadMin === 0 && edadMax <= 2) return '0 a 2 años';
    if (edadMin >= 13) return '13 años o más';
    return `${edadMin} a ${edadMax} años`;
  },

  renderStars(rating, size = 'text-base') {
    const full = Math.floor(rating);
    const half = rating - full >= 0.5;
    const empty = 5 - full - (half ? 1 : 0);
    let html = `<div class="inline-flex items-center text-yellow-400 ${size}">`;
    for (let i = 0; i < full; i++) html += '★';
    if (half) html += '★';
    for (let i = 0; i < empty; i++) html += '☆';
    html += `</div>`;
    return html;
  },

  renderStarsInteractive(rating = 0) {
    let html = '<div class="flex gap-1 justify-center text-3xl cursor-pointer select-none" id="starPicker">';
    for (let i = 1; i <= 5; i++) {
      const filled = i <= rating;
      html += `<span class="star-btn transition-transform hover:scale-110 ${filled ? 'text-yellow-400' : 'text-gray-300'}" data-value="${i}">★</span>`;
    }
    html += '</div>';
    return html;
  },

  renderProductoCard(p) {
    const descuento = p.precioAnterior ? Math.round((1 - p.precio / p.precioAnterior) * 100) : 0;
    return `
      <a href="producto.html?id=${p.id}" class="group card overflow-hidden hover:shadow-xl transition-all duration-300" data-categoria="${p.categoria}">
        <div class="relative aspect-square overflow-hidden bg-gradient-to-br from-fucsia-50 to-sol-50">
          <img src="${p.imagen}" alt="${p.nombre}" data-categoria="${p.categoria}" class="w-full h-full object-cover group-hover:scale-110 transition duration-500" loading="lazy">
          ${descuento > 0 ? `<div class="absolute top-3 left-3 bg-fucsia-600 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-lg">-${descuento}%</div>` : ''}
          <div class="absolute top-3 right-3 bg-white/90 backdrop-blur text-xs font-semibold px-2 py-1 rounded-full text-fucsia-700">${this.nombreEdad(p.edadMin, p.edadMax)}</div>
        </div>
        <div class="p-4">
          <p class="text-xs uppercase tracking-wider text-fucsia-600 font-semibold mb-1">${this.nombreCategoria(p.categoria)}</p>
          <h3 class="font-display font-semibold text-gray-900 mb-2 line-clamp-2 min-h-[3rem]">${p.nombre}</h3>
          <div class="flex items-center gap-2 mb-3">
            ${this.renderStars(p.rating, 'text-sm')}
            <span class="text-xs text-gray-500">(${p.rating})</span>
          </div>
          <div class="flex items-end justify-between">
            <div>
              <p class="font-display text-xl font-bold text-fucsia-700">${this.formatCLP(p.precio)}</p>
              ${p.precioAnterior ? `<p class="text-xs text-gray-400 line-through">${this.formatCLP(p.precioAnterior)}</p>` : ''}
            </div>
            <span class="bg-sol-400 hover:bg-sol-500 text-fucsia-900 w-9 h-9 rounded-full flex items-center justify-center transition group-hover:scale-110">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 4v16m8-8H4"/></svg>
            </span>
          </div>
        </div>
      </a>
    `;
  },

  renderHeader() {
    const sesion = Storage.get(KEYS.SESION);
    const cartCount = this.getCartCount();
    const header = document.querySelector('[data-header]');
    if (!header) return;

    const userMenu = sesion ? `
      <div class="relative group">
        <button class="flex items-center gap-2 text-gray-700 hover:text-fucsia-600 transition font-medium">
          <div class="w-8 h-8 bg-gradient-to-br from-fucsia-500 to-sol-400 rounded-full flex items-center justify-center text-white font-bold text-sm">${sesion.nombre.charAt(0).toUpperCase()}</div>
          <span class="hidden md:inline">${sesion.nombre.split(' ')[0]}</span>
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
        </button>
        <div class="absolute right-0 top-full mt-2 w-56 bg-white rounded-xl shadow-2xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
          <a href="perfil.html" class="block px-4 py-3 hover:bg-fucsia-50 rounded-t-xl text-sm text-gray-700 hover:text-fucsia-700">Mi perfil</a>
          <a href="perfil.html#pedidos" class="block px-4 py-3 hover:bg-fucsia-50 text-sm text-gray-700 hover:text-fucsia-700">Mis pedidos</a>
          <a href="carrito.html" class="block px-4 py-3 hover:bg-fucsia-50 text-sm text-gray-700 hover:text-fucsia-700">Mi carrito</a>
          <button onclick="Auth.logout(); location.href='index.html'" class="block w-full text-left px-4 py-3 hover:bg-red-50 rounded-b-xl text-sm text-red-600 border-t border-gray-100">Cerrar sesión</button>
        </div>
      </div>
    ` : `
      <a href="login.html" class="text-gray-700 hover:text-fucsia-600 transition font-medium hidden md:block">Ingresar</a>
      <a href="registro.html" class="btn-primary text-sm">Crear cuenta</a>
    `;

    header.innerHTML = `
      <header class="bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-40 border-b border-fucsia-100">
        <div class="container-page">
          <div class="flex items-center justify-between h-16 md:h-20">
            <a href="index.html" class="flex items-center gap-2 group">
              <div class="text-3xl group-hover:rotate-12 transition">🧸</div>
              <div>
                <p class="font-display font-bold text-lg md:text-xl text-fucsia-800 leading-tight">Mi Mundo de Juguetes</p>
                <p class="text-[10px] text-sol-700 font-semibold tracking-wider uppercase -mt-0.5">Donde la diversión comienza</p>
              </div>
            </a>

            <nav class="hidden lg:flex items-center gap-8">
              <a href="index.html" class="text-gray-700 hover:text-fucsia-600 transition font-medium">Inicio</a>
              <a href="productos.html" class="text-gray-700 hover:text-fucsia-600 transition font-medium">Productos</a>
              <a href="nosotros.html" class="text-gray-700 hover:text-fucsia-600 transition font-medium">Nosotros</a>
              <a href="contacto.html" class="text-gray-700 hover:text-fucsia-600 transition font-medium">Contacto</a>
            </nav>

            <div class="flex items-center gap-3">
              <a href="carrito.html" class="relative text-gray-700 hover:text-fucsia-600 transition" aria-label="Carrito de compras">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
                ${cartCount > 0 ? `<span class="absolute -top-1.5 -right-1.5 bg-sol-500 text-fucsia-900 text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">${cartCount}</span>` : ''}
              </a>
              ${userMenu}
              <button id="mobileMenuBtn" class="lg:hidden text-gray-700 hover:text-fucsia-600">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
              </button>
            </div>
          </div>
          <div id="mobileMenu" class="hidden lg:hidden pb-4 border-t border-fucsia-100 pt-4 space-y-2">
            <a href="index.html" class="block px-3 py-2 rounded-lg hover:bg-fucsia-50 text-gray-700">Inicio</a>
            <a href="productos.html" class="block px-3 py-2 rounded-lg hover:bg-fucsia-50 text-gray-700">Productos</a>
            <a href="nosotros.html" class="block px-3 py-2 rounded-lg hover:bg-fucsia-50 text-gray-700">Nosotros</a>
            <a href="contacto.html" class="block px-3 py-2 rounded-lg hover:bg-fucsia-50 text-gray-700">Contacto</a>
          </div>
        </div>
      </header>
    `;

    const btn = document.getElementById('mobileMenuBtn');
    const menu = document.getElementById('mobileMenu');
    if (btn && menu) {
      btn.addEventListener('click', () => menu.classList.toggle('hidden'));
    }
  },

  renderFooter() {
    const footer = document.querySelector('[data-footer]');
    if (!footer) return;
    footer.innerHTML = `
      <footer class="bg-gradient-to-br from-fucsia-900 to-fucsia-800 text-white mt-20">
        <div class="container-page py-12 md:py-16">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
            <div class="col-span-2 md:col-span-1">
              <div class="flex items-center gap-2 mb-4">
                <div class="text-3xl">🧸</div>
                <p class="font-display font-bold text-xl">Mi Mundo de Juguetes</p>
              </div>
              <p class="text-fucsia-100 text-sm mb-4">${INFO_TIENDA.slogan}. Juguetes seguros, educativos y divertidos para todas las edades.</p>
              <div class="flex gap-3">
                <a href="${INFO_TIENDA.redes.instagram}" target="_blank" class="w-9 h-9 bg-white/10 hover:bg-sol-400 hover:text-fucsia-900 rounded-full flex items-center justify-center transition" aria-label="Instagram">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38a3.7 3.7 0 01-1.38.9c-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 01-1.38-.9 3.7 3.7 0 01-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63a5.86 5.86 0 00-2.13 1.39A5.86 5.86 0 00.63 4.14C.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.31.79.73 1.46 1.39 2.13.67.66 1.34 1.08 2.13 1.39.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56.79-.31 1.46-.73 2.13-1.39.66-.67 1.08-1.34 1.39-2.13.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.86 5.86 0 00-1.39-2.13A5.86 5.86 0 0019.86.63C19.1.33 18.22.13 16.95.07 15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 100 12.32 6.16 6.16 0 000-12.32zm0 10.16a4 4 0 110-8 4 4 0 010 8zm6.41-11.85a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z"/></svg>
                </a>
                <a href="${INFO_TIENDA.redes.facebook}" target="_blank" class="w-9 h-9 bg-white/10 hover:bg-sol-400 hover:text-fucsia-900 rounded-full flex items-center justify-center transition" aria-label="Facebook">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.4 0 12.07c0 6.03 4.39 11.03 10.13 11.93v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.89v2.26h3.32l-.53 3.5h-2.79V24C19.61 23.1 24 18.1 24 12.07"/></svg>
                </a>
                <a href="${INFO_TIENDA.redes.tiktok}" target="_blank" class="w-9 h-9 bg-white/10 hover:bg-sol-400 hover:text-fucsia-900 rounded-full flex items-center justify-center transition" aria-label="TikTok">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005.8 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1.84-.1z"/></svg>
                </a>
              </div>
            </div>

            <div>
              <p class="font-display font-bold mb-4">Tienda</p>
              <ul class="space-y-2 text-sm text-fucsia-100">
                <li><a href="productos.html" class="hover:text-sol-400 transition">Todos los productos</a></li>
                <li><a href="productos.html?cat=educativos" class="hover:text-sol-400 transition">Educativos</a></li>
                <li><a href="productos.html?cat=peluches" class="hover:text-sol-400 transition">Peluches</a></li>
                <li><a href="productos.html?cat=mesa" class="hover:text-sol-400 transition">Juegos de mesa</a></li>
              </ul>
            </div>

            <div>
              <p class="font-display font-bold mb-4">Ayuda</p>
              <ul class="space-y-2 text-sm text-fucsia-100">
                <li><a href="contacto.html" class="hover:text-sol-400 transition">Contacto</a></li>
                <li><a href="nosotros.html" class="hover:text-sol-400 transition">Nosotros</a></li>
                <li><a href="terminos.html" class="hover:text-sol-400 transition">Términos y condiciones</a></li>
                <li><a href="privacidad.html" class="hover:text-sol-400 transition">Política de privacidad</a></li>
              </ul>
            </div>

            <div>
              <p class="font-display font-bold mb-4">Contacto</p>
              <ul class="space-y-2 text-sm text-fucsia-100">
                <li class="flex items-start gap-2"><svg class="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg> ${INFO_TIENDA.direccion}</li>
                <li class="flex items-start gap-2"><svg class="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg> ${INFO_TIENDA.telefono}</li>
                <li class="flex items-start gap-2"><svg class="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg> ${INFO_TIENDA.email}</li>
              </ul>
            </div>
          </div>

          <div class="border-t border-fucsia-700 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-fucsia-200">
            <p>© ${new Date().getFullYear()} ${INFO_TIENDA.nombre}. Todos los derechos reservados.</p>
            <p>Hecho con 💖 para los niños de Chile.</p>
          </div>
        </div>
      </footer>
    `;
  },

  getCartCount() {
    return Storage.get(KEYS.CARRITO, []).reduce((acc, item) => acc + item.cantidad, 0);
  },

  imagenPlaceholder(alt, categoria) {
    const colores = {
      munecas: { bg: '#fdf2f8', fg: '#831843' },
      figuras: { bg: '#fdf2f8', fg: '#831843' },
      mesa: { bg: '#fef3c7', fg: '#92400e' },
      peluches: { bg: '#fef3c7', fg: '#92400e' },
      educativos: { bg: '#ecfeff', fg: '#155e75' },
      vehiculos: { bg: '#ecfeff', fg: '#155e75' },
      arte: { bg: '#fdf2f8', fg: '#831843' },
      exterior: { bg: '#ecfccb', fg: '#365314' },
      equipo: { bg: '#fffbeb', fg: '#92400e' },
      avatar: { bg: '#fce7f3', fg: '#831843' }
    };
    const iconos = {
      munecas: '🪆', figuras: '🦸', mesa: '🎲', peluches: '🧸',
      educativos: '📚', vehiculos: '🚗', arte: '🎨', exterior: '⚽',
      equipo: '👤', avatar: '👤', default: '🧸'
    };
    const c = colores[categoria] || colores.avatar;
    const icon = iconos[categoria] || iconos.default;
    const texto = (alt || 'Imagen').substring(0, 28);
    const textoEnc = texto.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600">
<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="${c.bg}"/><stop offset="100%" stop-color="#ffffff"/></linearGradient></defs>
<rect fill="url(%23g)" width="600" height="600"/>
<circle cx="300" cy="260" r="130" fill="white" opacity="0.75"/>
<text x="300" y="320" font-size="150" text-anchor="middle">${icon}</text>
<text x="300" y="450" font-family="sans-serif" font-size="30" font-weight="bold" fill="${c.fg}" text-anchor="middle">${textoEnc}</text>
</svg>`;
    return 'data:image/svg+xml;charset=utf-8,' + svg.replace(/#/g, '%23').replace(/\n/g, '');
  },

  setupImageFallbacks() {
    const imgs = document.querySelectorAll('img:not([data-fallback-ready])');
    imgs.forEach(img => {
      img.setAttribute('data-fallback-ready', 'true');
      img.addEventListener('error', function() {
        if (this.dataset.fallbackApplied === 'true') return;
        this.dataset.fallbackApplied = 'true';
        const alt = this.alt || 'Imagen';
        let categoria = 'avatar';
        if (this.dataset.categoria) {
          categoria = this.dataset.categoria;
        } else if (this.closest('[data-categoria]')) {
          categoria = this.closest('[data-categoria]').dataset.categoria;
        } else if (alt.length > 0 && /[a-z]/.test(alt)) {
          const a = alt.toLowerCase();
          if (a.includes('tienda') || a.includes('juguetes') || a.includes('promo')) categoria = 'mesa';
          else if (a.includes('cliente') || a.includes('verificada')) categoria = 'avatar';
        }
        this.src = UI.imagenPlaceholder(alt, categoria);
        this.style.objectFit = 'cover';
      }, { once: true });
    });
  },

  updateCartCount() {
    const countEls = document.querySelectorAll('[data-cart-count]');
    const count = this.getCartCount();
    countEls.forEach(el => {
      el.textContent = count;
      el.style.display = count > 0 ? '' : 'none';
    });
    const headerBadges = document.querySelectorAll('header a[href="carrito.html"] span.absolute');
    headerBadges.forEach(el => {
      el.textContent = count;
      el.style.display = count > 0 ? '' : 'none';
    });
  },

  toast(mensaje, tipo = 'success') {
    let container = document.getElementById('toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toast-container';
      container.className = 'fixed top-24 right-4 z-50 space-y-2 pointer-events-none';
      document.body.appendChild(container);
    }
    const colors = {
      success: 'bg-lima-500 text-white',
      error: 'bg-red-500 text-white',
      info: 'bg-turquesa-500 text-white',
      warning: 'bg-sol-500 text-fucsia-900'
    };
    const iconos = {
      success: '✓',
      error: '✕',
      info: 'ℹ',
      warning: '⚠'
    };
    const toast = document.createElement('div');
    toast.className = `${colors[tipo] || colors.success} px-5 py-3 rounded-xl shadow-2xl font-semibold pointer-events-auto animate-toast-in flex items-center gap-3 min-w-[280px] max-w-md`;
    toast.innerHTML = `<span class="text-lg">${iconos[tipo] || iconos.success}</span><span>${mensaje}</span>`;
    container.appendChild(toast);
    setTimeout(() => {
      toast.classList.add('animate-toast-out');
      setTimeout(() => toast.remove(), 300);
    }, 2800);
  },

  badgeEstado(estado) {
    const map = {
      'preparando': { label: 'Preparando', color: 'bg-sol-100 text-sol-800 border-sol-300' },
      'en-camino': { label: 'En camino', color: 'bg-turquesa-100 text-turquesa-800 border-turquesa-300' },
      'entregado': { label: 'Entregado', color: 'bg-lima-100 text-lima-800 border-lima-300' },
      'cancelado': { label: 'Cancelado', color: 'bg-red-100 text-red-800 border-red-300' }
    };
    const info = map[estado] || map.preparando;
    return `<span class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold border ${info.color}">${info.label}</span>`;
  },

  requiereLogin(redirect = null) {
    if (!Auth.estaLogueado()) {
      const target = redirect || window.location.pathname.split('/').pop();
      window.location.href = 'login.html?redirect=' + encodeURIComponent(target);
      return false;
    }
    return true;
  }
};
