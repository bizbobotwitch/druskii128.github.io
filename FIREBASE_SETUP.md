# Firebase Setup Instructions for druskii128

## Step 1: Create a Firebase Project

1. Go to https://console.firebase.google.com/
2. Click "Add project"
3. Enter project name (e.g., "druskii128-games")
4. Disable Google Analytics (optional)
5. Click "Create project"

## Step 2: Enable Realtime Database

1. In your Firebase project, click "Realtime Database" in the left menu
2. Click "Create Database"
3. Select a location (choose closest to your users)
4. Start in **test mode** for now (we'll secure it later)
5. Click "Enable"

## Step 3: Get Your Firebase Configuration

1. Click the gear icon ⚙️ next to "Project Overview"
2. Click "Project settings"
3. Scroll down to "Your apps"
4. Click the web icon (</>)
5. Register your app (name: "druskii128-web")
6. Copy the `firebaseConfig` object

## Step 4: Update firebase-config.js

Open `JS/firebase-config.js` and replace the configuration:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "your-project.firebaseapp.com",
  databaseURL: "https://your-project-default-rtdb.firebaseio.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef123456"
};
```

## Step 5: Set Database Rules (Security)

1. Go to Realtime Database
2. Click "Rules" tab
3. Replace with these rules:

```json
{
  "rules": {
    "games": {
      ".read": true,
      ".write": "auth != null"
    },
    "trending": {
      ".read": true,
      ".write": "auth != null"
    }
  }
}
```

For now, to test without authentication, you can use:

```json
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```

**⚠️ WARNING: This allows anyone to write. Secure this later!**

## Step 6: Test Your Site

1. Open `index.html` in a browser
2. Open browser console (F12)
3. Check for any Firebase errors
4. Games should load from Firebase

## Step 7: Test Admin Panel

1. Go to `/admin.html`
2. Login with password: `admin123`
3. Try adding/editing/deleting games
4. Changes should appear instantly on main page!

## How It Works

- **index.html**: Reads games from Firebase and displays them in real-time
- **admin.html**: Allows you to modify games in Firebase
- **Firebase Realtime Database**: Stores all game data
- **Real-time sync**: Any changes in admin panel appear instantly on the main site

## Troubleshooting

**Games not loading?**
- Check browser console for errors
- Verify Firebase config is correct
- Make sure database rules allow reads

**Can't add/edit games?**
- Check database rules allow writes
- Verify you're logged into admin panel
- Check browser console for errors

**Changes not appearing?**
- Refresh the page
- Check if Firebase is initialized correctly
- Verify database URL is correct

## Adding Existing Games

The first time you load the site, it will automatically add these games to Firebase:
- 2048
- Bitlife
- Drift Boss
- Slope
- Happy Wheels
- Polytrack

You can add more games through the admin panel or by updating the `existingGames` array in `index.html`.

## Next Steps

1. Add authentication for admin panel security
2. Implement proper database security rules
3. Add more games through admin panel
4. Backup your database regularly
