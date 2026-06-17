/**
 * FINDLY — Firebase Realtime Database Configuration
 * =====================================================
 * 
 * HOW TO SET UP FIREBASE (FREE):
 * ─────────────────────────────
 * 1. Go to https://console.firebase.google.com
 * 2. Click "Add project", give it any name (e.g. "findly-fleet")
 * 3. Go to Build → Realtime Database → Create Database
 * 4. Choose "Start in test mode" (allows reads/writes for 30 days)
 * 5. Go to Project Settings (gear icon) → Your apps → Add app (</> Web)
 * 6. Copy the firebaseConfig object values into FIREBASE_CONFIG below
 * 7. Set FINDLY_DEMO_MODE to false
 * 
 * FIREBASE SECURITY RULES (paste in Realtime Database → Rules):
 * ──────────────────────────────────────────────────────────────
 * {
 *   "rules": {
 *     ".read": true,
 *     ".write": true
 *   }
 * }
 *
 * DATABASE STRUCTURE (auto-created by gps-simulator.html):
 * ─────────────────────────────────────────────────────────
 * vehicles/
 *   trip-1/
 *     lat: 37.7749
 *     lng: -122.4194
 *     speed: 48
 *     heading: 90
 *     status: "in-transit"
 *     locationName: "SOMA District"
 *     distanceRemaining: 4.2
 *     etaMins: 8
 *     timestamp: 1718500000000
 *   trip-2/ ...
 *   trip-3/ ...
 *   trip-4/ ...
 *   trip-5/ ...
 */

const FIREBASE_CONFIG = {
  apiKey:            "",   // YOUR_API_KEY
  authDomain:        "",   // YOUR_PROJECT.firebaseapp.com
  databaseURL:       "",   // https://YOUR_PROJECT-default-rtdb.firebaseio.com
  projectId:         "",   // YOUR_PROJECT_ID
  storageBucket:     "",   // YOUR_PROJECT.appspot.com
  messagingSenderId: "",   // YOUR_SENDER_ID
  appId:             ""    // YOUR_APP_ID
};

/**
 * DEMO MODE
 * ─────────
 * true  → App uses BroadcastChannel for inter-tab real-time updates.
 *         Open gps-simulator.html in another tab/device on the same browser
 *         to send live GPS updates. Works instantly — no setup required.
 *
 * false → App connects to Firebase Realtime Database for true multi-device
 *         real-time tracking. Requires valid FIREBASE_CONFIG above.
 *
 * This is auto-detected: demo mode activates when apiKey is empty.
 */
window.FINDLY_FIREBASE_CONFIG  = FIREBASE_CONFIG;
window.FINDLY_DEMO_MODE        = !FIREBASE_CONFIG.apiKey;
