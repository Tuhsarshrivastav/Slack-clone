import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdUjceXMONPBPCd_NX_4fNChVenNZ_CmQ",
  authDomain: "slack-clone-9eabf.firebaseapp.com",
  projectId: "slack-clone-9eabf",
  storageBucket: "slack-clone-9eabf.appspot.com",
  messagingSenderId: "637942742117",
  appId: "1:637942742117:web:987449721d36268b4c1a8c",
  measurementId: "G-9WPZKXQ7RG",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db ,auth, provider };
