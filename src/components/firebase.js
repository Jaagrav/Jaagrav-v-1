import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyD5gzW4416Um4SdGCniozo9PE-dnwRvU5U",
  authDomain: "myportfolio-d868a.firebaseapp.com",
  databaseURL: "https://myportfolio-d868a.firebaseio.com",
  projectId: "myportfolio-d868a",
  storageBucket: "myportfolio-d868a.appspot.com",
  messagingSenderId: "1062777067070",
  appId: "1:1062777067070:web:31c114f8551074d791236f",
  measurementId: "G-XE7L743EGW"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;