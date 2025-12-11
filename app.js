// Register Service Worker for PWA functionality
if ('serviceWorker' in navigator) {
  // Визначаємо base path з мета-тегу або використовуємо поточний шлях
  const basePath = document.querySelector('base')?.href || window.location.origin + '/Rezerv/';
  const swPath = new URL('service-worker.js', basePath).href;
  
  navigator.serviceWorker.register(swPath)
    .then((registration) => {
      console.log('Service Worker зареєстровано:', registration);
    })
    .catch((error) => {
      console.log('Помилка реєстрації Service Worker:', error);
    });
}