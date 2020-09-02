import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/firebase-auth';

const config = {
    
        apiKey: "AIzaSyCPRYX9yoLtZsKutc4pNUp9DVAgdRmxtK8",
        authDomain: "e-commerce-1e4f0.firebaseapp.com",
        databaseURL: "https://e-commerce-1e4f0.firebaseio.com",
        projectId: "e-commerce-1e4f0",
        storageBucket: "e-commerce-1e4f0.appspot.com",
        messagingSenderId: "1013465980154",
        appId: "1:1013465980154:web:7b78981d39877b906ffd43",
        measurementId: "G-4EEYW3013S"
      };

      export const createuserProfileDocument = async (userAuth, additionalData) => {
        if(!userAuth) return;
        const userRef = firestore.doc(`users/${userAuth.uid}`);
        const snapShot = await userRef.get();
        console.log(snapShot);

        if(!snapShot.exists) {
          const { displayName, email } = userAuth;
          const createdAt = new Date();

          try {
            await userRef.set({
              displayName,
              email,
              createdAt,
              ...additionalData
            })

          } catch (error) {
            console.log('err creating user', error.message);

          }
        }
        return userRef;
      }

      firebase.initializeApp(config);

      export const auth = firebase.auth();
      export const firestore = firebase.firestore();

      const provider = new firebase.auth.GoogleAuthProvider();
      provider.setCustomParameters({prompt: 'select_account'});
      export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;