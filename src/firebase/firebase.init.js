import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCNTo6TCw7qNeF8bk7Rw-xsdfXiEnzxuO8",
    authDomain: "the-dragon-news-2443b.firebaseapp.com",
    projectId: "the-dragon-news-2443b",
    storageBucket: "the-dragon-news-2443b.firebasestorage.app",
    messagingSenderId: "887959025281",
    appId: "1:887959025281:web:ad7ddfcac0181d0552ff80"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
