import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyAQDz1J2HiboMpfazSyWtmJwCZADLaE3nk",
  authDomain: "proyecto-final-reactjs-c12d7.firebaseapp.com",
  projectId: "proyecto-final-reactjs-c12d7",
  storageBucket: "proyecto-final-reactjs-c12d7.appspot.com",
  messagingSenderId: "566547017029",
  appId: "1:566547017029:web:5722a155882c6be2b9e22c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
reportWebVitals();
