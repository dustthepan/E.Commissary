import firebase from 'firebase/app';
import 'firebase/firestore'; 
import 'firebase/auth';

const config = { // SDK from Firebase Docs
  apiKey: "AIzaSyD6FCyybTacUfpuve6w73efk3IkRPjywM8",
  authDomain: "e-pharm-db.firebaseapp.com",
  databaseURL: "https://e-pharm-db.firebaseio.com",
  projectId: "e-pharm-db",
  storageBucket: "e-pharm-db.appspot.com",
  messagingSenderId: "41887260321",
  appId: "1:41887260321:web:3a194c6dc954771275dae0",
  measurementId: "G-VGG4Q5DPJY"
};

  firebase.initializeApp(config); // starts firebase

  export const auth = firebase.auth(); // exporting to use with anything with authentication 
  
  export const firestore = firebase.firestore(); // exporting to database related functions
  
  //Sign in Google
  const googleP = new firebase.auth.GoogleAuthProvider(); // gives access to Google Auth Class
  googleP.setCustomParameters({prompt:'select_account'}); // use Custom Parameter method always trigger Google pop up when using provider for sign in and auth
  
  export const signInGoogle = () => auth.signInWithPopup(googleP);

  //Sign In Facebook
  // const facebookP = new firebase.auth.FacebookAuthProvider();
  // facebookP.setCustomParameters({prompt:'select_account'})

  // export const signInFacebook = () => auth.signInWithPopup(facebookP);

  // checks to see if user is already in db and creates one if not
  // takes user object when authenticated, and stores it into our database
  //asynchronously fetching user info and creating if it does not exist
  export const createUserProfileDocument = async (userAuth, additionalData) => {
     
    // if there is no user credentials, return back to the function
    if (!userAuth) return; 

    //if it does exist query the user id 
   const userRef = firestore.doc(`users/${userAuth.uid}`);
   
   //gets user info 
    const snapShot = await userRef.get(); 
   
    //if there is no user data
    if (!snapShot.exists){
     
     //create email and display name
      //at timestamp 
    const {displayName, email} = userAuth
    const createdAt = new Date();
      
    // if there is user data, grab desired properties
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