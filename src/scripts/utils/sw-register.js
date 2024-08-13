const swRegister = async () => {
  if (!('serviceWorker' in navigator)) {
    console.log('Service Worker not supported in the browser');
    return;
  }

  try {
    const registration = await navigator.serviceWorker.register('./sw.bundle.js');
    if (registration.installing) {
      console.log('Service worker is installing');
    } else if (registration.waiting) {
      console.log('Service worker is waiting');
    } else if (registration.active) {
      console.log('Service worker is active');
    }
    console.log('Service worker registered successfully');
  } catch (error) {
    console.error('Failed to register service worker:', error);
  }
};

export default swRegister;
