import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { useState } from "react";
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
const handleLogOut = ()=>{
    setLoading(true)
    return signOut(auth)
}

const userInfo = {
    user, 
    setUser,
    loading,
    setLoading,
    handleRegister,
    handleSignIn,
    signInGoogle,
    handleLogOut
}

    return (
        <div>
           <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;