
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// Initialize Firebase
var config = {
  apiKey: "AIzaSyAzFM-jBYLcHpZl5uUnePAi6-8qGQH3iy0",
  authDomain: "stockapp1-7b62a.firebaseapp.com",
  databaseURL: "https://stockapp1-7b62a.firebaseio.com",
  projectId: "stockapp1-7b62a",
  storageBucket: "stockapp1-7b62a.appspot.com",
  messagingSenderId: "1085010994134"
};


firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;

