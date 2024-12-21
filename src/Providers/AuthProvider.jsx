import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../Firebase/firebase.init";
import AuthContext from "./AuthContext";




const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

// Register

const handleRegister = ( email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword (auth, email, password)
}






const userInfo = {
    user, 
    setUser,
    loading,
    handleRegister
}

    return (
        <div>
           <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;