// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {
    getFirestore,
    collection,
    doc,
    addDoc,
    setDoc,
    onSnapshot,
    query
} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyT6hB4WaxqoNZlRsDmjbqQWvt3NQmw0s",
  authDomain: "learn-with-maira.firebaseapp.com",
  projectId: "learn-with-maira",
  storageBucket: "learn-with-maira.appspot.com",
  messagingSenderId: "580478426469",
  appId: "1:580478426469:web:ee04b683ef9921d40a958c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function submitGroup(formData) {
    try {
        await setDoc(doc(db, 'groups', formData.name), {
            ...formData
        })
    } catch (error) {
        console.error(error)
    }
}

export { submitGroup };