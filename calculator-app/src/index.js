import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Calculator from './calculator/Calculator';
import Attribution from './Attribution';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

ReactDOM.render(
  <React.StrictMode>
    <Calculator/>
    <Attribution/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApHlTnSdYDxL6KICwilxvZB3zCJq2PePQ",
  authDomain: "codementor-calculator-app.firebaseapp.com",
  projectId: "codementor-calculator-app",
  storageBucket: "codementor-calculator-app.appspot.com",
  messagingSenderId: "650230549092",
  appId: "1:650230549092:web:0e42fc48e1aef164a5ed71"
};

// Initialize Firebase
initializeApp(firebaseConfig)
