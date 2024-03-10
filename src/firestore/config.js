import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getVariables } from "../helpers/getVariables";

const {
  VITE_APIKEY,
  VITE_AUTHDOMAIN,
  VITE_PROJECTID,
  VITE_STORAGEBUCKET,
  VITE_MESSAGINGSENDERID,
  VITE_APPID,
} = getVariables();

const firebaseConfig = {
  apiKey: VITE_APIKEY,
  authDomain: VITE_AUTHDOMAIN,
  projectId: VITE_PROJECTID,
  storageBucket: VITE_STORAGEBUCKET,
  messagingSenderId: VITE_MESSAGINGSENDERID,
  appId: VITE_APPID,
};

export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseDB = getFirestore( FirebaseApp );