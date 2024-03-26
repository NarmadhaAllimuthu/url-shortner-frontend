
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";


const app = initializeApp({
    apiKey: "AIzaSyC8eX19Xiv_VcOq2xIqqlzFbv3oaeeteD8",
    authDomain: "nomadic-entry-406608.firebaseapp.com",
    projectId: "nomadic-entry-406608",
    storageBucket: "nomadic-entry-406608.appspot.com",
    messagingSenderId: "728849704304",
    appId: "1:728849704304:web:71abb29772d9311b689bb5",
    measurementId: "G-Z42YWRR43M"
});


const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();


export const signInWithGoogle = async () => {
    try {
        const res = await signInWithPopup(auth, googleProvider);
        const user = res.user;
        return { user };

    } catch (error) {
        console.log(error);
        return { error };
    }
};






