import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: 'AIzaSyBP-XSWE97uRmzqDS72dekNB3vHw_ZNWO4',
  authDomain: 'notes-app-bf83e.firebaseapp.com',
  projectId: 'notes-app-bf83e',
  storageBucket: 'notes-app-bf83e.appspot.com',
  messagingSenderId: '298543919292',
  appId: '1:298543919292:web:your-app-id',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
