import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../Firebase/firebase.init";
import AuthContext from "./AuthContext";

const provider = new GoogleAuthProvider()
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

// Register
const handleRegister = ( email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword (auth, email, password)
}

// Sign In
const handleSignIn = (email, password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
}

// SignIn Google
const signInGoogle = ()=>{
    setLoading(true)
    return signInWithPopup(auth, provider)
}
// LogOut
const signOutUser = ()=>{
    setLoading(true)
    return signOut(auth)
}

// Update user Profile

const updateUserProfile = (name, photo) =>{
    return updateProfile(auth.currentUser,{
        displayName : name,
        photoURL : photo
    })
}

// AuthStateChange

 useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, currentUser =>{
        setUser(currentUser)
        console.log("Cuurent user", currentUser)
        console.log('currentUser --', currentUser)
        setLoading(false)
    })
    return()=>{
        return unsubscribe
    }
 },[])



const userInfo = {
    user, 
    setUser,
    loading,
    setLoading,
    handleRegister,
    handleSignIn,
    signInGoogle,
    signOutUser,
    updateUserProfile
}

    return (
        <div>
           <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;