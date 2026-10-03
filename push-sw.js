/*
 * スマホの通知だけを扱う裏方。届いた通知を出し、タップされたらその画面を開く。
 *
 * ページやデータは溜め込まない（読み込みの横取りをしない）。溜めると古い画面やデータが
 * 出る原因になるため。通知の中身は VPS の scripts/push/notifyEvents.mjs が作る。
 */

self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("push", (event) => {
  let message = {};
  try {
    message = event.data ? event.data.json() : {};
  } catch {
    message = { body: event.data ? event.data.text() : "" };
  }
  event.waitUntil(self.registration.showNotification(message.title || "マーケットダッシュボード", {
    body: message.body || "",
    icon: "icons/icon-192.png",
    data: { url: message.url || "#events" }
  }));
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  const target = new URL(event.notification.data?.url || "#events", self.registration.scope).href;
  event.waitUntil((async () => {
    const windows = await self.clients.matchAll({ type: "window", includeUncontrolled: true });
    for (const client of windows) {
      if ("focus" in client) {
        await client.focus();
        if ("navigate" in client) {
          try {
            await client.navigate(target);
            return;
          } catch {
            // 動いている画面を動かせないときは、新しく開く。
          }
        }
      }
    }
    await self.clients.openWindow(target);
  })());
});
