import firebase, { initializeApp } from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config= {
    apiKey: "AIzaSyChM8bu3AtcnZ2-bhtlJn29fNVeUGWNx-A",
    authDomain: "fua-db.firebaseapp.com",
    projectId: "fua-db",
    storageBucket: "fua-db.appspot.com",
    messagingSenderId: "857185226181",
    appId: "1:857185226181:web:5a7aa02e9834beb5e1cfac",
    measurementId: "G-7C5SLLF3XR"
  };

  export const createdUserProfileDocument=async (userAuth, additionalData)=>{
    
    if(!userAuth) return;

    

    const userRef= firestore.doc(`users/${userAuth.uid}`);
    const snapShot= await userRef.get();
 

    if(!snapShot.exists){
      const {displayName, email}=userAuth;
      const createdAt= new Date();
      
      try{
       await  userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
      }catch(error){
        console.log('Error creating user', error.message)
      }
      
    }
    return userRef;
    }

   firebase.initializeApp(config);
 export const auth= firebase.auth();
 export const firestore=firebase.firestore();

 const provider= new firebase.auth.GoogleAuthProvider();
 provider.setCustomParameters({prompt:'select_account'});

 export const signInWithGoogle=()=> auth.signInWithPopup(provider);
 export default  firebase;