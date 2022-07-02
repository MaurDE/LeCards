
import firebase from "firebase/compat/app";
import 'firebase/compat/database';

const firebaseConfig = {
  apiKey: "AIzaSyAbIng7slExdkFPOjjn0WOP7gScoHXipYw",

  authDomain: "le-cards.firebaseapp.com",

  projectId: "le-cards",

  storageBucket: "le-cards.appspot.com",

  messagingSenderId: "838106626812",

  appId: "1:838106626812:web:76809a50a57a1f31f7f579",
};

export default firebase.initializeApp(firebaseConfig);
export const db = firebase.database();
