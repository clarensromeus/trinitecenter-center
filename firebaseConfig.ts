import { initializeApp } from 'firebase/app';

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
import { getFirestore } from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyA0O1u-bV1rniKj3_zTv1Kgntcujk9p5E4",
  authDomain: "trinite-28953.firebaseapp.com",
  projectId: "trinite-28953",
  storageBucket: "trinite-28953.appspot.com",
  messagingSenderId: "265477610721",
  appId: "1:265477610721:web:7f167b582ffb6a89f36ba0",
  measurementId: "G-RTXBZVYF0G",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)