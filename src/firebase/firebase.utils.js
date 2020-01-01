import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDNLMD3FHpPXrPvsY2AFY7P6g8eUQYrWf8",
  authDomain: "crwn-db-70945.firebaseapp.com",
  databaseURL: "https://crwn-db-70945.firebaseio.com",
  projectId: "crwn-db-70945",
  storageBucket: "crwn-db-70945.appspot.com",
  messagingSenderId: "1006819212853",
  appId: "1:1006819212853:web:1d6fe6dbc7f7bbfc41bb7c"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;