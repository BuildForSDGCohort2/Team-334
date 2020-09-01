import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyAAGyJjtPLshVNm9FJ1MRESMdXObzrmijE",
  authDomain: "virtualcare-f3751.firebaseapp.com",
  databaseURL: "https://virtualcare-f3751.firebaseio.com",
  projectId: "virtualcare-f3751",
  storageBucket: "virtualcare-f3751.appspot.com",
  messagingSenderId: "163199849249",
  appId: "1:163199849249:web:1ff307bbb8ece67ca3e460",
  measurementId: "G-M58PC9EH98"
};

firebase.initializeApp(config);
firebase.firestore();

export default firebase;