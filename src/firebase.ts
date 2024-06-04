// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration


const firebaseConfig = {
  apiKey: "AIzaSyDMnoIa4XH2yeDKMoIygVsf3p5_GVfZj-E",
  authDomain: "favtutor-d543d.firebaseapp.com/",
  projectId: "favtutor-d543d",
  storageBucket: "favtutor-d543d.appspot.com",
  messagingSenderId: "390827040414",
  appId: "1:390827040414:web:05ee674e633786cf07658f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirebase = () => {
  return app;
};
