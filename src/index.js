import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import * as firebase from 'firebase';
// import 'firebase/firestore';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


const root = ReactDOM.createRoot(document.getElementById('root'));

const firebaseConfig = {
//add firebase config here
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

