/* ============================================
   MAIN.JS - Inicialización global
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  Storage.init();
  UI.renderHeader();
  UI.renderFooter();
  UI.updateCartCount();

  // Activar fallback de imágenes después de que el DOM esté listo
  UI.setupImageFallbacks();

  // Observar imágenes añadidas dinámicamente
  const observer = new MutationObserver(() => UI.setupImageFallbacks());
  observer.observe(document.body, { childList: true, subtree: true });
});
