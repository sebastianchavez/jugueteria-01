/* ============================================
   CART.JS - Lógica del carrito
   ============================================ */

const Cart = {
  getAll() {
    return Storage.get(KEYS.CARRITO, []);
  },

  getCount() {
    return this.getAll().reduce((acc, item) => acc + item.cantidad, 0);
  },

  getSubtotal() {
    return this.getAll().reduce((acc, item) => acc + (item.precio * item.cantidad), 0);
  },

  agregar(productoId, cantidad = 1) {
    const producto = PRODUCTOS.find(p => p.id === productoId);
    if (!producto) return { ok: false, error: 'Producto no encontrado.' };
    const carrito = this.getAll();
    const idx = carrito.findIndex(item => item.productoId === productoId);
    if (idx >= 0) {
      carrito[idx].cantidad += cantidad;
    } else {
      carrito.push({
        productoId,
        nombre: producto.nombre,
        precio: producto.precio,
        imagen: producto.imagen,
        cantidad
      });
    }
    Storage.set(KEYS.CARRITO, carrito);
    UI.updateCartCount();
    return { ok: true };
  },

  cambiarCantidad(productoId, cantidad) {
    const carrito = this.getAll();
    const idx = carrito.findIndex(item => item.productoId === productoId);
    if (idx === -1) return { ok: false };
    if (cantidad <= 0) {
      carrito.splice(idx, 1);
    } else {
      carrito[idx].cantidad = cantidad;
    }
    Storage.set(KEYS.CARRITO, carrito);
    UI.updateCartCount();
    return { ok: true };
  },

  eliminar(productoId) {
    const carrito = this.getAll().filter(item => item.productoId !== productoId);
    Storage.set(KEYS.CARRITO, carrito);
    UI.updateCartCount();
    return { ok: true };
  },

  vaciar() {
    Storage.set(KEYS.CARRITO, []);
    UI.updateCartCount();
    return { ok: true };
  },

  generarPedido(datosCheckout) {
    const usuario = Auth.usuarioActual();
    if (!usuario) return { ok: false, error: 'Debes iniciar sesión para finalizar la compra.' };
    const carrito = this.getAll();
    if (carrito.length === 0) return { ok: false, error: 'El carrito está vacío.' };

    const envio = OPCIONES_ENVIO.find(o => o.id === datosCheckout.envioTipo);
    const subtotal = this.getSubtotal();
    const costoEnvio = envio ? envio.precio : 0;
    const total = subtotal + costoEnvio;

    const numeroPedido = 'PED-' + new Date().getFullYear() + '-' + String(Math.floor(Math.random() * 9000) + 1000);

    const nuevoPedido = {
      id: numeroPedido,
      usuarioId: usuario.id,
      fecha: new Date().toISOString(),
      estado: 'preparando',
      items: carrito.map(item => ({ ...item })),
      subtotal,
      envio: costoEnvio,
      envioTipo: envio ? `${envio.nombre} (${envio.dias})` : 'Estándar',
      total,
      direccion: datosCheckout.direccion,
      pago: datosCheckout.pago,
      seguimiento: [
        { estado: 'Confirmado', fecha: new Date().toISOString() },
        { estado: 'Preparando', fecha: new Date(Date.now() + 3600000).toISOString() }
      ]
    };

    const pedidos = Storage.get(KEYS.PEDIDOS, []);
    pedidos.push(nuevoPedido);
    Storage.set(KEYS.PEDIDOS, pedidos);
    this.vaciar();
    return { ok: true, pedido: nuevoPedido };
  }
};
