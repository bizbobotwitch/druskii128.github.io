// ONE-TIME MIGRATION SCRIPT
// Run this in browser console on index.html to load all games into Firebase
// Press F12, go to Console tab, paste this entire script and press Enter

async function migrateGamesToFirebase() {
  console.log('Starting migration...');
  
  // Verify Firebase is loaded
  if (typeof firebase === 'undefined') {
    console.error('Firebase not loaded. Make sure you are on index.html');
    return;
  }
  
  const database = firebase.database();
  const gamesRef = database.ref('games');
  
  // All your current games
  const allGames = [
    { name: '2048', path: 'projects/2048/index.html', thumb: 'projects/2048/thumb.png', trending: false },
    { name: '9007199254740992', path: 'projects/9007199254740992/index.html', thumb: 'projects/9007199254740992/logo-4.png', trending: false },
    { name: 'ages of conflict', path: 'projects/ages-of-conflict/index.html', thumb: 'projects/ages-of-conflict/splash.jpg', trending: false },
    { name: 'among us', path: 'projects/among-us/index.html', thumb: 'projects/among-us/unnamed.jpg', trending: false },
    { name: 'a small world cup', path: 'projects/a-small-world-cup/index.html', thumb: 'projects/a-small-world-cup/a-small-world-cup.png', trending: false },
    { name: "baldi's basics", path: 'projects/baldis-basics/index.html', thumb: 'projects/baldis-basics/baldis-basics.png', trending: false },
    { name: 'ball sort puzzle', path: 'projects/ball-sort-puzzle/index.html', thumb: 'projects/ball-sort-puzzle/thumb.png', trending: false },
    { name: 'basket and ball', path: 'projects/basket-and-ball/index.html', thumb: 'projects/basket-and-ball/thumb.jpg', trending: false },
    { name: 'bitlife', path: 'projects/bitlife/index.html', thumb: 'projects/bitlife/thumb.png', trending: true },
    { name: 'blackjack', path: 'projects/blackjack/index.html', thumb: 'projects/blackjack/thumb.png', trending: false },
    { name: 'block the pig', path: 'projects/block-the-pig/index.html', thumb: 'projects/block-the-pig/thumb.png', trending: false },
    { name: 'cell machine', path: 'projects/cell-machine/index.html', thumb: 'projects/cell-machine/img/te9nDu.png', trending: false },
    { name: 'chrome dino', path: 'projects/chrome-dino/index.html', thumb: 'projects/chrome-dino/icons/icon-256.png', trending: false },
    { name: 'circlo', path: 'projects/circlo/index.html', thumb: 'projects/circlo/img/download.png', trending: false },
    { name: 'cookie clicker', path: 'projects/cookie-clicker/index.html', thumb: 'projects/cookie-clicker/cookie1.jpeg', trending: false },
    { name: 'core ball', path: 'projects/core-ball/index.html', thumb: 'projects/core-ball/pr_source.png', trending: false },
    { name: 'cut the rope', path: 'projects/ctr-time-travel/index.html', thumb: 'projects/ctr-time-travel/thumb.png', trending: false },
    { name: 'death run 3d', path: 'projects/death-run-3d/index.html', thumb: 'projects/death-run-3d/img/death.png', trending: false },
    { name: 'doodle jump', path: 'projects/doodle-jump/index.html', thumb: 'projects/doodle-jump/doodle.png', trending: false },
    { name: 'drift boss', path: 'projects/drift-boss/index.html', thumb: 'projects/drift-boss/drift-boss.png', trending: true },
    { name: 'drift hunters', path: 'projects/drift-hunters/index.html', thumb: 'projects/drift-hunters/thumb.png', trending: false },
    { name: 'eaglercraft', path: 'projects/eaglercraft/index.html', thumb: 'projects/eaglercraft/icon.jpeg', trending: false },
    { name: 'edge surf', path: 'projects/edge-surf/index.html', thumb: 'projects/edge-surf/favicon.svg', trending: false },
    { name: 'flappy bird', path: 'projects/flappy-bird/index.html', thumb: 'projects/flappy-bird/assets/thumb.png', trending: false },
    { name: 'fruit ninja', path: 'projects/fruit-ninja/index.html', thumb: 'projects/fruit-ninja/thumb.png', trending: false },
    { name: 'geometry dash', path: 'projects/geodash/index.html', thumb: 'projects/geodash/geoscratchicon.png', trending: false },
    { name: 'google feud', path: 'projects/google-feud/index.html', thumb: 'projects/google-feud/splash.png', trending: false },
    { name: 'google snake', path: 'projects/google-snake/index.html', thumb: 'projects/google-snake/google-snake.png', trending: false },
    { name: 'hextris', path: 'projects/hextris/index.html', thumb: 'projects/hextris/images/hextris-logo.png', trending: false },
    { name: 'idle breakout', path: 'projects/idle-breakout/frame.html', thumb: 'projects/idle-breakout/thumb.png', trending: false },
    { name: 'little alchemy 2', path: 'projects/little-alchemy/index.html', thumb: 'projects/little-alchemy/unnamed.png', trending: false },
    { name: 'mario', path: 'projects/mario/index.html', thumb: 'projects/mario/Theme/Mario.jpg', trending: false },
    { name: 'minesweeper', path: 'projects/minesweeper/index.html', thumb: 'projects/minesweeper/img/minesweeper.png', trending: false },
    { name: 'pac-man', path: 'projects/pacman/index.html', thumb: 'projects/pacman/thumbnail.png', trending: false },
    { name: 'paper.io 2', path: 'projects/paperio2/index.html', thumb: 'projects/paperio2/images/icon512.png', trending: false },
    { name: 'papery planes', path: 'projects/papery-planes/index.html', thumb: 'projects/papery-planes/splash.jpg', trending: false },
    { name: 'poker', path: 'projects/poker/poker.html', thumb: 'projects/poker/static/images/logo.png', trending: false },
    { name: 'retro bowl', path: 'projects/retro-bowl/index.html', thumb: 'projects/retro-bowl/img/icon.jpg', trending: false },
    { name: 'retro bowl college', path: 'projects/retro-bowl-college/index.html', thumb: 'projects/retro-bowl-college/unnamed.png', trending: false },
    { name: 'rocketpult', path: 'projects/rocketpult/index.html', thumb: 'projects/rocketpult/rocketpult.png', trending: false },
    { name: 'rooftop snipers', path: 'projects/rooftop-snipers/index.html', thumb: 'projects/rooftop-snipers/thumb.png', trending: false },
    { name: 'sand tetris', path: 'projects/sandtrix/index.html', thumb: 'projects/sandtrix/thumb.png', trending: false },
    { name: 'save the doge', path: 'projects/save-the-doge/index.html', thumb: 'projects/save-the-doge/thumb.png', trending: false },
    { name: 'slope', path: 'projects/slope/index.html', thumb: 'projects/slope/slope4.jpeg', trending: true },
    { name: 'smash karts', path: 'projects/smash-karts/index.html', thumb: 'projects/smash-karts/smash-karts.png', trending: false },
    { name: 'solitaire', path: 'projects/solitaire/index.html', thumb: 'projects/solitaire/screen-shot.png', trending: false },
    { name: 'stack', path: 'projects/stack/index.html', thumb: 'projects/stack/icon.png', trending: false },
    { name: 'subway surfers', path: 'subway-surfers.html', thumb: 'projects/subway-surfers-san-francisco/img/splash.png', trending: false },
    { name: 'tomb of the mask', path: 'projects/totm/index.html', thumb: 'projects/totm/thumb.png', trending: false },
    { name: 'toss the turtle', path: 'projects/tosstheturtle/index.html', thumb: 'projects/tosstheturtle/tosstheturtle.png', trending: false },
    { name: 'waterworks!', path: 'projects/waterworks/index.html', thumb: 'projects/waterworks/thumb.png', trending: false },
    { name: 'we become what we behold', path: 'projects/wbwwb/index.html', thumb: 'projects/wbwwb/thumb.png', trending: false },
    { name: 'happy wheels', path: 'projects/hw/index.html', thumb: 'projects/hw/loading.png', trending: true },
    { name: 'polytrack', path: 'projects/polytrack/index.html', thumb: 'projects/polytrack/images/icon.svg', trending: true }
  ];

  try {
    // Check if database is empty
    const snapshot = await gamesRef.once('value');
    
    if (snapshot.exists()) {
      console.log('ℹ️ Database already has games. Clear them first if you want to re-migrate.');
      return;
    }
    
    console.log(`Migrating ${allGames.length} games to Firebase...`);
    
    // Add each game to Firebase
    const promises = allGames.map(game => {
      const newGameRef = gamesRef.push();
      return newGameRef.set({
        id: newGameRef.key,
        name: game.name,
        path: game.path,
        thumb: game.thumb,
        trending: game.trending || false,
        plays: 0,
        createdAt: Date.now()
      });
    });
    
    await Promise.all(promises);
    
    console.log('✅ Successfully migrated all games to Firebase!');
    console.log(`📊 Total games: ${allGames.length}`);
    console.log(`⭐ Trending games: ${allGames.filter(g => g.trending).length}`);
    console.log('\n🎉 Refresh the page to see your games!');
    
  } catch (error) {
    console.error('❌ Migration failed:', error);
    console.log('Make sure:');
    console.log('1. You have enabled Realtime Database in Firebase');
    console.log('2. Database rules allow writes');
    console.log('3. Your Firebase config is correct');
  }
}

// Run the migration
migrateGamesToFirebase();
