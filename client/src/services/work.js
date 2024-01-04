

self.addEventListener('push', (e) => {
  e.waitUntil(
    self.registration.showNotification('Advice', {
      body: e.data.text(),
      icon: 'src/img/favicon.ico',
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: 1,
      },
      actions: [],
    }));
});