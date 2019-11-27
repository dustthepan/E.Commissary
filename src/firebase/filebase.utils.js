import firebase from 'firebase/app';
import 'firebase/firestore'; 
import 'firebase/auth';

const config = //INSERT CDN HERE

  firebase.initializeApp(config); // starts firebase

  export const auth = firebase.auth(); // exporting to use with anything with authentication 
  
  export const firestore = firebase.firestore(); // exporting to database relalated functions
  
  const provider = new firebase.auth.GoogleAuthProvider(); // gives access to Google Auth Class
  provider.setCustomParameters({prompt:'select_account'}); // use Custom Parameter method always trigger Google pop up when using provider for sign in and auth
  
  export const signInGoogle = () => auth.signInWithPopup(provider);

  // checks to see if user is already in db
  // takes user object when authenticated, and stores it into our database
  export const createUserProfileDocument = async (userAuth, additionalData) => {
      
    if (!userAuth) return;

   const userRef = firestore.doc(`users/${userAuth.uid}`);
   

   const snapShot = await userRef.get();

   if (!snapShot.exists){
      
    const {displayName, email} = userAuth
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch(error) {
      console.log('Error', error.message)
   }
  }
  return userRef;
}

export default firebase;