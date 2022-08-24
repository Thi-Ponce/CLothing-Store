import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDzNWCg6rdFfcwsV6-ZTfS7927LAZEGlos',
  authDomain: 'clothing-store-49047.firebaseapp.com',
  projectId: 'clothing-store-49047',
  storageBucket: 'clothing-store-49047.appspot.com',
  messagingSenderId: '250703404337',
  appId: '1:250703404337:web:3ebe1ef8db771e13662410',
};

// eslint-disable-next-line no-unused-vars
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
