import React from 'react';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

const firebaseConfig = {
  apiKey: 'AIzaSyAJpUfYAe46sGj3GZeAzpAJr7OCxDuflFI',
  authDomain: 'balance-b7333.firebaseapp.com',
  databaseURL: 'https://balance-b7333.firebaseio.com',
  projectId: 'balance-b7333',
  storageBucket: 'balance-b7333.appspot.com',
  messagingSenderId: '282059513800',
  appId: '1:282059513800:web:4683da2fdee5e03649aafd',
  measurementId: 'G-955DXM1L4M',
};
firebase.initializeApp(firebaseConfig);
//firebase.analytics();

// Configure FirebaseUI.
const firebaseUIConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'redirect',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: '/',
  // We will display Google and Facebook as auth providers.
  signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
};

const openFirebaseUI = () => (
  <StyledFirebaseAuth uiConfig={firebaseUIConfig} firebaseAuth={firebase.auth()} />
);

const db = firebase.database();

export { firebase, openFirebaseUI, db };
