

import React, { createContext, useState, useEffect } from 'react';
import {auth} from '../firebase';


export const AuthContext = createContext();

export default function AuthProvider({children}) {
    const [user, setUser] = useState({});



    const signup = (email, password) => {
      return auth.createUserWithEmailAndPassword(email, password);
    }

    const login = (email, password) => {
      return auth.signInWithEmailAndPassword(email,password);
    }

    const logout = () => {
      return auth.signOut();
    }

    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged(user => {
        setUser(user)
      });
  
      return unsubscribe
    }, [])

  return (
    <AuthContext.Provider value={{user, signup, login, logout}}>
        {children}
    </AuthContext.Provider>
  )
}
