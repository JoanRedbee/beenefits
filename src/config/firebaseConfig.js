import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var config = {
  apiKey: "AIzaSyCZjgHkOsrE4WrfdLgvUCP0IlgqDj9pc_c",
  authDomain: "bee-nefits.firebaseapp.com",
  databaseURL: "https://bee-nefits.firebaseio.com",
  projectId: "bee-nefits",
  storageBucket: "bee-nefits.appspot.com",
  messagingSenderId: "1079081763861"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase;