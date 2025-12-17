/**
 * Theme Configuration
 * Easy to add new themes by adding a new object to the themes array
 */

const themes = [
  {
    name: 'Dark',
    id: 'dark',
    colors: {
      // Primary colors
      primary: '#ffffff',
      primaryDark: '#e5e5e5',
      secondary: '#cccccc',
      accent: '#f5f5f5',
      success: '#ffffff',
      
      // Background colors
      bgDark: '#000000',
      bgCard: '#0a0a0a',
      bgElevated: '#1a1a1a',
      
      // Text colors
      textPrimary: '#ffffff',
      textSecondary: '#999999',
      textMuted: '#666666'
    }
  },
  {
    name: 'Light',
    id: 'light',
    colors: {
      // Primary colors
      primary: '#000000',
      primaryDark: '#1a1a1a',
      secondary: '#333333',
      accent: '#0a0a0a',
      success: '#000000',
      
      // Background colors
      bgDark: '#ffffff',
      bgCard: '#f5f5f5',
      bgElevated: '#e5e5e5',
      
      // Text colors
      textPrimary: '#000000',
      textSecondary: '#666666',
      textMuted: '#999999'
    }
  },
  {
    name: 'Untitled',
    id: 'untitled',
    colors: {
      // Primary colors
      primary: '#ff6b6b',
      primaryDark: '#ee5a52',
      secondary: '#4ecdc4',
      accent: '#ffe66d',
      success: '#95e1d3',
      
      // Background colors
      bgDark: '#2d3561',
      bgCard: '#3d4575',
      bgElevated: '#4d5585',
      
      // Text colors
      textPrimary: '#f7fff7',
      textSecondary: '#a8dadc',
      textMuted: '#6c757d'
    }
  }
];

// Get theme by ID
function getThemeById(id) {
  return themes.find(theme => theme.id === id) || themes[0];
}

// Get all theme names for dropdown
function getAllThemes() {
  return themes;
}
