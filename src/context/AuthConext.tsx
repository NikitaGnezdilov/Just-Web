import { onAuthStateChanged, Unsubscribe, User } from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "../firebase";


export const AuthContext = createContext<User | null>(null);

interface Props {
  children: React.ReactNode;
}



export const AuthContextProvider = ({ children }: Props) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    const unSub : Unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

    return () => {
      unSub();
    }
  }, []);

  return <AuthContext.Provider value={currentUser}>{children}</AuthContext.Provider>;
};
