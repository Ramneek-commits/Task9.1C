import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB2CSSU2c4zy1zISiPtLfEvCBEzHa93o0I",
    authDomain: "task-7-1p-app.firebaseapp.com",
    projectId: "task-7-1p-app",
    storageBucket: "task-7-1p-app.firebasestorage.app",
    messagingSenderId: "327116058042",
    appId: "1:327116058042:web:ceba0614585e93223ec183"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
