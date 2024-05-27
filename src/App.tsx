import React from 'react';
import './assets/scss/themes.scss';
import RouteIndex from 'Routes/Index';

<<<<<<< HEAD
import fakeBackend from "./helpers/AuthType/fakeBackend";

// Activating fake backend
fakeBackend();

// Import Firebase Configuration file
// import { initFirebaseBackend } from "./helpers/firebase_helper";

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_APIKEY,
//   authDomain: process.env.REACT_APP_AUTHDOMAIN,
//   databaseURL: process.env.REACT_APP_DATABASEURL,
//   projectId: process.env.REACT_APP_PROJECTID,
//   storageBucket: process.env.REACT_APP_STORAGEBUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
//   appId: process.env.REACT_APP_APPID,
//   measurementId: process.env.REACT_APP_MEASUREMENTID,
// };

// init firebase backend
// initFirebaseBackend(firebaseConfig);
=======
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
>>>>>>> e82bc1eb7bde4f7d090a524c6e230b9fad16e0af

function App() {
  return (
    <RouteIndex />
  );
}

export default App;
