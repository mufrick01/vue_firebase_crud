// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCLUVZ7_bURro3GHKAFrUlEhaAG9Ew6VHo',
  authDomain: 'test01-e4cbf.firebaseapp.com',
  databaseURL: 'https://test01-e4cbf-default-rtdb.firebaseio.com',
  projectId: 'test01-e4cbf',
  storageBucket: 'test01-e4cbf.firebasestorage.app',
  messagingSenderId: '1002507392469',
  appId: '1:1002507392469:web:9ccf17bab2a5025a4bd95c',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
