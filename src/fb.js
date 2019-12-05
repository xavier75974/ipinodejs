import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyAOH4mUd7VPO-BV96pbL0qknzDbA9TPwgA",
    authDomain: "ipinodejs.firebaseapp.com",
    databaseURL: "https://ipinodejs.firebaseio.com",
    projectId: "ipinodejs",
    storageBucket: "ipinodejs.appspot.com",
    messagingSenderId: "882218850878",
    appId: "1:882218850878:web:c2c67546b9ac86d0004f6f",
    measurementId: "G-Y8PEZVGS1Z"
  };

  //Initialise Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

  export default db;