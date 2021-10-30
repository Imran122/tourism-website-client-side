
import React, { useState, useEffect } from 'react';
import initializeAuthentication from "../Firebase/firebase.initialize"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";

initializeAuthentication();

const useFireBase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    //loading readirect to login page afte reload
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const signInUsingGoogle = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider)


    }
    //signout 
    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .finally(() => setIsLoading(false))
    }
    //for state change and user info show
    //when state change then it will save user data
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {

                setUser(user)
            }
            else {
                setUser({})
            }
            setIsLoading(false);

        })
    }, [])



    return {
        user,
        error,
        logOut,
        signInUsingGoogle,
        isLoading,
        setIsLoading

    }
}

export default useFireBase;