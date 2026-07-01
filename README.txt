EarthRoster / Westwondersandco V219 Final Firebase Notification Build

This build uses Firebase Cloud Messaging for inactive/closed-app phone notifications and keeps the existing app design/features intact.

Before phone notifications can work when the app is closed:
1. Deploy with Netlify Functions active, preferably through Git deploy or Netlify CLI.
2. Add FIREBASE_SERVICE_ACCOUNT_JSON in Netlify environment variables.
3. Redeploy.
4. Open the live site from the iPhone Home Screen app.
5. Tap Enable inactive push in Notifications.
6. Tap Test inactive push.

See FIREBASE_NETLIFY_SETUP.txt for beginner steps.
