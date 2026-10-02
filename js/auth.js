/* ============================================
   AUTH.JS - Lógica de autenticación
   ============================================ */

const Auth = {
  registrar(datos) {
    const usuarios = Storage.get(KEYS.USUARIOS, []);
    const existe = usuarios.find(u => u.email.toLowerCase() === datos.email.toLowerCase());
    if (existe) {
      return { ok: false, error: 'Ya existe una cuenta registrada con este email.' };
    }
    const nuevoUsuario = {
      id: 'u' + Date.now(),
      nombre: datos.nombre.trim(),
      email: datos.email.trim().toLowerCase(),
      password: datos.password,
      telefono: datos.telefono || '',
      direccion: datos.direccion || '',
      comuna: datos.comuna || '',
      region: datos.region || '',
      fechaRegistro: new Date().toISOString()
    };
    usuarios.push(nuevoUsuario);
    Storage.set(KEYS.USUARIOS, usuarios);
    Storage.set(KEYS.SESION, { id: nuevoUsuario.id, email: nuevoUsuario.email, nombre: nuevoUsuario.nombre });
    return { ok: true, usuario: nuevoUsuario };
  },

  login(email, password) {
    const usuarios = Storage.get(KEYS.USUARIOS, []);
    const usuario = usuarios.find(u => u.email.toLowerCase() === email.toLowerCase());
    if (!usuario) {
      return { ok: false, error: 'No encontramos una cuenta con ese email.' };
    }
    if (usuario.password !== password) {
      return { ok: false, error: 'La contraseña es incorrecta.' };
    }
    Storage.set(KEYS.SESION, { id: usuario.id, email: usuario.email, nombre: usuario.nombre });
    return { ok: true, usuario };
  },

  logout() {
    Storage.remove(KEYS.SESION);
  },

  recuperarPassword(email) {
    const usuarios = Storage.get(KEYS.USUARIOS, []);
    const usuario = usuarios.find(u => u.email.toLowerCase() === email.toLowerCase());
    if (!usuario) {
      return { ok: false, error: 'No encontramos una cuenta con ese email.' };
    }
    return { ok: true, mensaje: `Hemos enviado las instrucciones de recuperación a ${email}.` };
  },

  estaLogueado() {
    return Storage.get(KEYS.SESION) !== null;
  },

  usuarioActual() {
    const sesion = Storage.get(KEYS.SESION);
    if (!sesion) return null;
    const usuarios = Storage.get(KEYS.USUARIOS, []);
    return usuarios.find(u => u.id === sesion.id) || sesion;
  },

  actualizarPerfil(datos) {
    const sesion = Storage.get(KEYS.SESION);
    if (!sesion) return { ok: false, error: 'No hay sesión activa.' };
    const usuarios = Storage.get(KEYS.USUARIOS, []);
    const idx = usuarios.findIndex(u => u.id === sesion.id);
    if (idx === -1) return { ok: false, error: 'Usuario no encontrado.' };
    usuarios[idx] = { ...usuarios[idx], ...datos };
    Storage.set(KEYS.USUARIOS, usuarios);
    Storage.set(KEYS.SESION, { id: usuarios[idx].id, email: usuarios[idx].email, nombre: usuarios[idx].nombre });
    return { ok: true, usuario: usuarios[idx] };
  },

  cambiarPassword(actual, nueva) {
    const sesion = Storage.get(KEYS.SESION);
    if (!sesion) return { ok: false, error: 'No hay sesión activa.' };
    const usuarios = Storage.get(KEYS.USUARIOS, []);
    const idx = usuarios.findIndex(u => u.id === sesion.id);
    if (idx === -1) return { ok: false, error: 'Usuario no encontrado.' };
    if (usuarios[idx].password !== actual) {
      return { ok: false, error: 'La contraseña actual es incorrecta.' };
    }
    usuarios[idx].password = nueva;
    Storage.set(KEYS.USUARIOS, usuarios);
    return { ok: true };
  }
};
