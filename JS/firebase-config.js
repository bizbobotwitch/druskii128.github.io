// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJFdASphHLiQOeTPGHcdLEW6j5diCtFSs",
  authDomain: "druskii.firebaseapp.com",
  databaseURL: "https://druskii-default-rtdb.firebaseio.com",
  projectId: "druskii",
  storageBucket: "druskii.firebasestorage.app",
  messagingSenderId: "172381965632",
  appId: "1:172381965632:web:5f4eaa72cf2d5277757ea5",
  measurementId: "G-6N29TVF4BZ"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// Reference to games in database
const gamesRef = database.ref('games');
const trendingRef = database.ref('trending');
