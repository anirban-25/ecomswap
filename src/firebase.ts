// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxtvEnvgI9t6OuG2qQRTRY89d4-am_bp8",
  authDomain: "ecomswap-91377.firebaseapp.com",
  projectId: "ecomswap-91377",
  storageBucket: "ecomswap-91377.appspot.com",
  messagingSenderId: "1090361002813",
  appId: "1:1090361002813:web:02fc8838af307a258ed354"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {db}
