import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDq3rQ6sHvsCdtNhYgGUOGzO3-SnK87huM",
  authDomain: "usernotes-6ceb0.firebaseapp.com",
  projectId: "usernotes-6ceb0",
  storageBucket: "usernotes-6ceb0.appspot.com",
  messagingSenderId: "71776188653",
  appId: "1:71776188653:web:2a4c532ecce38069b074e4"
};

export const firebase = initializeApp(firebaseConfig);