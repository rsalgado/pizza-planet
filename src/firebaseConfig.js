import Firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyD2zzq_dntIExIzcQr7grG7f3jku2IFfa0",
  authDomain: "pizza-planet-d5ad7.firebaseapp.com",
  databaseURL: "https://pizza-planet-d5ad7.firebaseio.com",
  projectId: "pizza-planet-d5ad7",
  storageBucket: "pizza-planet-d5ad7.appspot.com",
  messagingSenderId: "839413987025"
};

const firebaseApp = Firebase.initializeApp(config);
const db = firebaseApp.database();
export const dbMenuRef = db.ref("menu");