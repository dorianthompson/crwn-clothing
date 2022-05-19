import { initializeApp } from 'firebase/app';
import { 
    getAuth, 
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth';

import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB6-y3SQb3BTls7OgBW_QnVrJisOpOB_CU",
    authDomain: "crwn-clothing-db-4b779.firebaseapp.com",
    projectId: "crwn-clothing-db-4b779",
    storageBucket: "crwn-clothing-db-4b779.appspot.com",
    messagingSenderId: "321862107440",
    appId: "1:321862107440:web:67ee3ec22306eb6d87c8f5"
  };
  
  const firebaseApp = initializeApp(firebaseConfig);

  const googleProvider = new GoogleAuthProvider();

  googleProvider.setCustomParameters({
      prompt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
  
  export const db = getFirestore();

  export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);
    
    if(!userSnapshot.exists()){
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try{
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
        }catch(error){
            console.log('error creating the user', error.message);
        }
    }

    return userDocRef;
  }