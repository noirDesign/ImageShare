import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAF4JZrMR_Bk-ovf7tD6mzpi_shhgE7x3g",
    authDomain: "signal-14411.firebaseapp.com",
    projectId: "signal-14411",
    storageBucket: "signal-14411.appspot.com",
    messagingSenderId: "444908451452",
    appId: "1:444908451452:web:39a8137582d129d1b7fbf9",
};

let app;

if (firebase.apps.legth == 0) {
  app = firebase.initializeApp(firebaseConfig);
}else{
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();
export {db, auth};

