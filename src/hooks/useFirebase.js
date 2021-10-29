
import React, { useState, useEffect } from 'react';
import initializeAuthentication from "../Firebase/firebase.initialize"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";

initializeAuthentication();

const useFireBase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user)
            })
            .catch(error => {
                setError(error.message)
            })

    }
    //signout 
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
    }
    //for state change and user info show
    //when state change then it will save user data
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {

                setUser(user)
            }


        })
    }, [])



    return {
        user,
        error,
        logOut,
        signInUsingGoogle,


    }
}

export default useFireBase;