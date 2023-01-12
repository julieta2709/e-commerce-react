import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1wxQJ95C1iqVYEHo4HiiqMFV0oZoA4q8",
  authDomain: "tiendadecupcakes-61bcc.firebaseapp.com",
  projectId: "tiendadecupcakes-61bcc",
  storageBucket: "tiendadecupcakes-61bcc.appspot.com",
  messagingSenderId: "806192831187",
  appId: "1:806192831187:web:b80b40fc11ad80edd29226"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
     <App />
);
