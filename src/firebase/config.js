import firebase from "firebase/app";
import "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCk-wI3GAM_tLb-SKI-OZrM0x4LcJQZxXc",
  authDomain: "libreriaslea-app.firebaseapp.com",
  projectId: "libreriaslea-app",
  storageBucket: "libreriaslea-app.appspot.com",
  messagingSenderId: "671406446024",
  appId: "1:671406446024:web:10d902198cf238286cdcfd",
};

// Inicializamos la app
const app = firebase.initializeApp(firebaseConfig);




export const getFirestore = () => {
  return firebase.firestore(app);
};

