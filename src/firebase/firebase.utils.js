import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCIDb8SALEQ-iEcGs6XB74giYzZf4OqTwg",
    authDomain: "crwn-db-eaa54.firebaseapp.com",
    databaseURL: "https://crwn-db-eaa54.firebaseio.com",
    projectId: "crwn-db-eaa54",
    storageBucket: "crwn-db-eaa54.appspot.com",
    messagingSenderId: "864445057015",
    appId: "1:864445057015:web:074fe5957f7adff8be90f2"
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;