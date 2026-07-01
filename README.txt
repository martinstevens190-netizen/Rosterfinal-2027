Westwonders/EarthRoster v217 — general inactive phone notifications + duplicate reminder fix.

Changes made only in the notification/login area:
- General inactive phone push now covers messages, roster updates, shift requests/responses, posts, comments, documents, timesheets and reminders.
- Shift reminders are scheduled server-side for inactive app use.
- Morning and night shift reminder times can be set manually.
- Duplicate push protection added at the server, service worker and alert level.
- Local shift reminder banners removed so users do not receive both local and server banners for the same reminder.
- V216 responsive login screen fix is preserved.


V218 notification note: General OS phone notifications now use one path only: server Web Push via the service worker. In-app cloud alert pulls show toast/in-app records only, which prevents duplicate iPhone banners. Scheduled booking and shift reminder functions are also declared in netlify.toml for reliable Netlify detection.
