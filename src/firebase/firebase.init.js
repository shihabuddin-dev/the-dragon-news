import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDne8wNc3Bk2yXnB_EWPmDg_GB-N2zQrwo",
    authDomain: "auth-int2.firebaseapp.com",
    projectId: "auth-int2",
    storageBucket: "auth-int2.firebasestorage.app",
    messagingSenderId: "1052347179261",
    appId: "1:1052347179261:web:07f305e0aa23cad9225e94"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
