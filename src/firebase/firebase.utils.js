import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyA24MaQ2YuXOYKRv6u9gnDU0Jcs8v228I4",
    authDomain: "ecommerce-portfolio-project.firebaseapp.com",
    databaseURL: "https://ecommerce-portfolio-project.firebaseio.com",
    projectId: "ecommerce-portfolio-project",
    storageBucket: "ecommerce-portfolio-project.appspot.com",
    messagingSenderId: "242617750201",
    appId: "1:242617750201:web:4cf7a3cd3ee27ecf3f0168",
    measurementId: "G-F9BWXV4VXW"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;