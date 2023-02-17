import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCHcDD9m8qiOH3eJeROSCcGh53R8kXJxJ4",
  authDomain: "pocketful-cb284.firebaseapp.com",
  projectId: "pocketful-cb284",
  storageBucket: "pocketful-cb284.appspot.com",
  messagingSenderId: "508521706079",
  appId: "1:508521706079:web:817a63703e1d05f54a61ea",
  measurementId: "G-50GWL0V732"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth();

export {app,auth}