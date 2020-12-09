import { initializeApp } from 'firebase';

const firebase = require('firebase')
require('firebase/firestore')

firebase.initializeApp ({
    apiKey: "AIzaSyC57Jc5o1RsPSYtd-51wuYO8M2-K9qWZqY",
    authDomain: "seniortec-c2bc1.firebaseapp.com",
    projectId: "seniortec-c2bc1"
});
// Initialize Firebase
/* if (firebase.apps.length) {
    firebase.initializeApp();
} */



export default firebase;
