import React from 'react';
import './assets/scss/themes.scss';
import RouteIndex from 'Routes/Index';

// import fakeBackend from "./helpers/AuthType/fakeBackend";

// Activating fake backend
// fakeBackend();

// Import Firebase Configuration file
import { initFirebaseBackend } from "./helpers/firebase_helper";

const firebaseConfig = {
  apiKey: "AIzaSyA-08zqD7FKrPxxrLIZoT92kVEnOPffXbs",
  authDomain: "pdinsight-eb5dc.firebaseapp.com",
  projectId: "pdinsight-eb5dc",
  storageBucket: "pdinsight-eb5dc.appspot.com",
  messagingSenderId: "96057552774",
  appId: "1:96057552774:web:92e1eff926d9d7d8e80607",
  measurementId: "G-QSGD20ZMLN"
};

// init firebase backend
initFirebaseBackend(firebaseConfig);

function App() {
  return (
    <RouteIndex />
  );
}

export default App;
