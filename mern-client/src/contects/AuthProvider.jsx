import React, { Children, useState } from 'react'
import { createContext } from 'react'
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";


export const Authcontext = createContext("");
export const auth = getAuth(app)

const AuthProvider = ({Children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);

    const createUser = (email , password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const authInfo = {
        createUser
    }
  return (
    <Authcontext.Provider value={authInfo}>
      {Children}
    </Authcontext.Provider>
  )
}

export default AuthProvider