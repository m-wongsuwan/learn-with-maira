// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {
    getFirestore,
    collection,
    doc,
    // addDoc,
    getDoc,
    setDoc,
    onSnapshot,
    query,
    // QuerySnapshot,
    orderBy
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

function getGroups(callback) {
    return onSnapshot(
        query(
            collection(db, 'groups'),
            orderBy('name', 'asc')
        ),
        (querySnapshot) => {
            const groups = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }));
            callback(groups)
        }
    )
}
function getIndividuals(callback) {
    return onSnapshot(
        query(
            collection(db, 'individuals'),
            orderBy('name', 'asc')
        ),
        (querySnapshot) => {
            const individuals = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                path: doc.ref.path,
                ...doc.data()
            }));
            callback(individuals)
        }
    )
}
function getEvents(callback) {
    return onSnapshot(
        query(
            collection(db, 'events'),
            orderBy('name', 'asc')
        ),
        (querySnapshot) => {
            const events = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }));
            callback(events)
        }
    )
}

async function submitGroup(formData) {
    try {
        await setDoc(doc(db, 'groups', formData.name), {
            ...formData
        })
    } catch (error) {
        console.error(error)
    }
}
async function submitIndividual(formData) {
    try {
        await setDoc(doc(db, 'individuals', formData.name), {
            ...formData
        })
    } catch (error) {
        console.error(error)
    }
}

async function addIndividualToGroup(groupID, individual) {
    try {
        await setDoc(doc(db, 'groups', groupID, 'members', individual.name), {
            memberRef: individual.name
        })
    } catch (error) {
        console.error(error)
    }
}

// 2/8
async function getOneGroup(groupID) {
    const docRef = doc(db, 'groups', groupID)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
        // console.log("Document data: ", docSnap.data())
    } else {
        console.log('you done goofed')
    }
}

function getGroupMembers(groupID, callback) {
    return onSnapshot(
        query(collection(db, 'groups', groupID, 'members'),
        orderBy('name', 'asc')
    ),
    (querySnapshot) => {
        const members = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
        }));
        callback(members)
    }
    )
}

async function addFounderToGroup(groupID, individual) {
    try {
        await setDoc(doc(db, 'groups', groupID, 'founders', individual.name), {
            memberRef: individual.name
        })
    } catch (error) {
        console.error(error)
    }
}

async function removeMemberFromGroup(groupID, individual) {
    try {
        await db.collection('groups').doc(groupID).collection('members').doc(individual.id).delete()
    } catch (error) {
        console.error(error)
    }
}

async function updateIndividual() {

}

async function updateGroup() {

}

// end 2/8 work


export { submitGroup, getGroups, getIndividuals, getEvents, submitIndividual, addIndividualToGroup, addFounderToGroup, removeMemberFromGroup, getOneGroup, getGroupMembers };