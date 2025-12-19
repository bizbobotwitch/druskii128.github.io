// Load and display site settings from Firebase

function loadHeroText() {
  const db = firebase.database();
  const heroTextEl = document.getElementById('hero-text');
  
  if (!heroTextEl) return;
  
  db.ref('settings/heroText').on('value', snap => {
    const text = snap.val();
    if (text) {
      heroTextEl.textContent = text;
    } else {
      heroTextEl.textContent = 'druskii is so gnarly -s';
    }
  });
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  loadHeroText();
});
