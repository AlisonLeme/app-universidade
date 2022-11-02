import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBGdPTd5eDyW-agHzLj03CTtdoONjOQNxc",
  authDomain: "app-universidade-c1ca1.firebaseapp.com",
  projectId: "app-universidade-c1ca1",
  storageBucket: "app-universidade-c1ca1.appspot.com",
  messagingSenderId: "371927213794",
  appId: "1:371927213794:web:ecd936bf8ea0432ae320bb",
  measurementId: "G-9KKHSVE8DT",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore();

export default db;
