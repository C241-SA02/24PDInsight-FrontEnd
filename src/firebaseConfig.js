// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-08zqD7FKrPxxrLIZoT92kVEnOPffXbs",
  authDomain: "pdinsight-eb5dc.firebaseapp.com",
  projectId: "pdinsight-eb5dc",
  storageBucket: "pdinsight-eb5dc.appspot.com",
  messagingSenderId: "96057552774",
  appId: "1:96057552774:web:92e1eff926d9d7d8e80607",
  measurementId: "G-QSGD20ZMLN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, database, db };
