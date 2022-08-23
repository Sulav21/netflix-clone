import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyA2g8ay-_6DTY0zkDjX_xk_j31uvWwy8OM",
    authDomain: "netflix-clone-a794b.firebaseapp.com",
    projectId: "netflix-clone-a794b",
    storageBucket: "netflix-clone-a794b.appspot.com",
    messagingSenderId: "463948765693",
    appId: "1:463948765693:web:e96f6a21a288d0884ce194"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  export const db = firebaseApp.firestore()
  export const auth= firebase.auth()


 