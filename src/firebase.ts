import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyC5hqp67K1ouBngBO-w8RlYwt0K-DL9GL4",
  authDomain: "prototipo-lecards.firebaseapp.com",
  projectId: "prototipo-lecards",
  storageBucket: "prototipo-lecards.appspot.com",
  messagingSenderId: "231904495098",
  appId: "1:231904495098:web:b15087ca4947858ded5043",
  measurementId: "G-X4R25WZF2N",
  databaseURL: "https://prototipo-lecards-default-rtdb.firebaseio.com/"
};
const app = initializeApp(firebaseConfig); 
const analytics = getAnalytics(app);
export const db = getDatabase(app);
export default app