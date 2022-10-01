// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyBkqOOlQHL_A1r-nj1WWnXfP_5qMVl4J3o",
    authDomain: "whatsapp-clone-6a1a7.firebaseapp.com",
    projectId: "whatsapp-clone-6a1a7",
    storageBucket: "whatsapp-clone-6a1a7.appspot.com",
    messagingSenderId: "483512257606",
    appId: "1:483512257606:web:6f83bbe9bbea50ae5cce47",
    measurementId: "G-XEXDD2GS40"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth(); 
const provider = new firebase.auth.GoogleAuthProvider();
export {auth,provider};
export default db;