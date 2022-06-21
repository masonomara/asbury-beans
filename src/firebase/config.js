import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBGf6o4rDkBhSjvt-0pgUfdyU-LEEDrLXU",
    authDomain: "asbury-beans-8953f.firebaseapp.com",
    projectId: "asbury-beans-8953f",
    storageBucket: "asbury-beans-8953f.appspot.com",
    messagingSenderId: "349799312263",
    appId: "1:349799312263:web:8caa0138e3dfbabe384122",
    measurementId: "G-627499CPZB"
  };

  // init firebase
  firebase.initializeApp(firebaseConfig);

  // init services
  const projectFirestore = firebase.firestore();
  const projectStorage = firebase.storage();

  // timestampSampl
  const timestamp = firebase.firestore.Timestamp

  export { projectFirestore, projectStorage, timestamp }