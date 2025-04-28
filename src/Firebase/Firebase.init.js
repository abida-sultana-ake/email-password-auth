// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlG9csECsz950Yh18Hr_GDFrRGAXmSxMo",
  authDomain: "email-password-auth-338fc.firebaseapp.com",
  projectId: "email-password-auth-338fc",
  storageBucket: "email-password-auth-338fc.firebasestorage.app",
  messagingSenderId: "226035933044",
  appId: "1:226035933044:web:ca25b62c56d3a32536d621"
};

// Initialize Firebase
export const auth = getAuth(app);
const app = initializeApp(firebaseConfig);