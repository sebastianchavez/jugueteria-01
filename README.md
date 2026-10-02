# 🧸 Mi Mundo de Juguetes — E-commerce de Juguetería

Plantilla de sitio web tipo e-commerce para una juguetería, construida con **HTML + JavaScript vanilla + Tailwind CSS**, sin dependencias de backend. Los datos están mockeados y la persistencia se realiza en `localStorage`.

## 🚀 Cómo usar

1. Abre el archivo `index.html` directamente en tu navegador, o
2. Sirve la carpeta con cualquier servidor estático (recomendado para evitar restricciones de CORS en algunos navegadores):

```bash
# Opción con Python
python -m http.server 8000

# Opción con Node.js (si tienes npx)
npx serve .
```

Luego visita `http://localhost:8000` en tu navegador.

## 👤 Cuentas de prueba

| Email | Contraseña |
|-------|-----------|
| `maria@ejemplo.com` | `123456` |
| `juan@ejemplo.com` | `123456` |

Estas cuentas ya tienen pedidos y productos comprados precargados para probar el flujo de reseñas.

## 📁 Estructura del proyecto

```
jugueteria-01/
├── index.html                    # Landing (Inicio)
├── nosotros.html                 # Sobre nosotros + equipo
├── productos.html                # Catálogo con filtros
├── producto.html?id=X            # Detalle de producto
├── contacto.html                 # Formulario + horario + mapa
├── carrito.html                  # Carrito de compras
├── checkout.html                 # Confirmación de pago
├── confirmacion.html?orden=X     # Confirmación de compra (comprobante)
├── perfil.html                   # Mi perfil + historial de pedidos
├── pedido.html?id=X              # Detalle de pedido + stepper
├── resena.html?producto=X        # Formulario de reseña con estrellas
├── privacidad.html               # Política de privacidad
├── terminos.html                 # Términos y condiciones
├── registro.html                 # Registro de usuario
├── login.html                    # Iniciar sesión
├── recuperar.html                # Recuperar contraseña
├── css/
│   └── styles.css                # Estilos custom (paleta fucsia + sol)
├── js/
│   ├── data.js                   # Datos mockeados (productos, usuarios, reseñas)
│   ├── storage.js                # Helpers de localStorage
│   ├── auth.js                   # Lógica de autenticación
│   ├── cart.js                   # Lógica del carrito y pedidos
│   ├── ui.js                     # Header, footer, toasts, componentes UI
│   └── main.js                   # Inicialización global
└── README.md
```

## ✨ Funcionalidades

### Públicas
- ✅ Landing page con hero, categorías, productos destacados y testimonios
- ✅ Catálogo con filtros por categoría, edad (0-2, 3-5, 6-8, 9-12, +13), precio, búsqueda y orden
- ✅ Detalle de producto con galería, descripción, edad recomendada y reseñas
- ✅ Página "Nosotros" con historia, valores y equipo
- ✅ Página de contacto con formulario, horario, mapa y datos
- ✅ Páginas legales (Privacidad, Términos)

### E-commerce
- ✅ Carrito persistente con agregar/quitar/cambiar cantidad
- ✅ Checkout con dirección, tipo de envío (Retiro/Estándar/Express) y método de pago (Webpay/Transferencia/Contra entrega)
- ✅ Confirmación con número de orden y comprobante imprimible
- ✅ Cálculo automático de envío según tipo seleccionado
- ✅ Botones finales: Imprimir comprobante + Ver historial de pedidos

### Usuario
- ✅ Registro, login y recuperación de contraseña (simulado)
- ✅ Perfil con datos editables, cambio de contraseña y resumen de compras
- ✅ Historial de pedidos con estado (Preparando / En camino / Entregado)
- ✅ Detalle completo de cada pedido con stepper de seguimiento
- ✅ Sistema de reseñas con calificación interactiva 1-5 estrellas (requiere compra entregada)

### Persistencia
Toda la información se guarda en `localStorage`:
- `jugu_usuarios` — Cuentas registradas
- `jugu_sesion` — Sesión iniciada
- `jugu_carrito` — Productos en el carrito
- `jugu_pedidos` — Pedidos realizados
- `jugu_resenas` — Reseñas publicadas por usuarios

Para limpiar todos los datos, abre la consola del navegador y ejecuta:
```js
localStorage.clear(); location.reload();
```

## 🎨 Personalización

### Colores
La paleta principal está definida en la configuración de Tailwind de cada HTML:
- `fucsia-700` / `fucsia-900` — Color principal (fucsia vibrante)
- `sol-400` / `sol-500` — Color de acento (amarillo sol)
- `turquesa-500` / `lima-500` — Colores complementarios
- `fucsia-50` / `sol-50` — Fondos suaves

### Datos mockeados
Edita `js/data.js` para modificar:
- `CATEGORIAS` — Lista de 8 categorías de juguetes
- `PRODUCTOS` — Catálogo de 24 productos (3 por categoría)
- `EQUIPO` — 5 miembros del equipo
- `TESTIMONIOS` — 3 testimonios de familias felices
- `USUARIOS_INICIALES` — 2 usuarios precargados
- `RESENAS_INICIALES` — 6 reseñas iniciales
- `PEDIDOS_INICIALES` — 3 pedidos de ejemplo para `maria@ejemplo.com`
- `OPCIONES_ENVIO` — 3 tipos de envío disponibles
- `MEDIOS_PAGO` — 3 métodos de pago aceptados
- `INFO_TIENDA` — Datos de contacto y horarios

### Imágenes
Las imágenes usan URLs de Unsplash. Para cambiarlas, reemplaza la URL en el campo `imagen` de cada producto en `js/data.js`.

## 🧪 Flujo de prueba recomendado

1. Abre `index.html` y explora el landing
2. Ve a **Productos** y filtra por edad (ej: 3-5 años)
3. Entra al detalle de un producto y agrégalo al carrito
4. Ve al **Carrito** y procede al pago (se requiere iniciar sesión)
5. Inicia sesión con `maria@ejemplo.com` / `123456`
6. Completa el formulario de checkout con dirección y método de pago
7. En la confirmación, usa **Imprimir comprobante** o **Ver historial de pedidos**
8. Ve a **Mi Perfil** y revisa tus pedidos
9. Entra al detalle de un pedido entregado (PED-2024-001) y deja una **reseña** con estrellas

## 📝 Notas

- El sitio es completamente funcional sin backend. La persistencia se hace en el navegador del usuario.
- Si abres el sitio en una pestaña de incógnito, los datos no persistirán entre pestañas.
- Las contraseñas se almacenan en texto plano en localStorage (solo con fines de demostración, no usar en producción).
- Todos los precios están en pesos chilenos (CLP) e incluyen IVA.
- La recomendación de edad es referencial; siempre supervisiona a los niños durante el juego.
