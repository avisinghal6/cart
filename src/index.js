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
apiKey: "AIzaSyDDbRbzo4oJe2-ir1O8IeU6DWrqXxQUOZM",
authDomain: "cart-web-app-d7793.firebaseapp.com",
projectId: "cart-web-app-d7793",
storageBucket: "cart-web-app-d7793.appspot.com",
messagingSenderId: "806611669271",
appId: "1:806611669271:web:4db1dd91c21c9777f4e752"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

