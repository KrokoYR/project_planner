import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/analytics'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyD5eFbrhN5FVRhQSg2dp91qQFWc_tds9lI",
    authDomain: "planner-bbe1b.firebaseapp.com",
    databaseURL: "https://planner-bbe1b.firebaseio.com",
    projectId: "planner-bbe1b",
    storageBucket: "planner-bbe1b.appspot.com",
    messagingSenderId: "930260250094",
    appId: "1:930260250094:web:f2f470567428641256b2ff",
    measurementId: "G-EX78EQR4GS"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.firestore();

export {firebase};