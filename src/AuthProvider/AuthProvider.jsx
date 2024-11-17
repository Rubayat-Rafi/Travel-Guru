import React, { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";
export const AuthContext = createContext();
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

const AuthProvider = ({ children }) => {
  const [selectedBackground, setSelectedBackground] = useState(null);
  const [selectedSpot, setSelectedSpot] = useState(null);
  const [travelSpots, setTravelSpots] = useState([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] =useState(true)

  const auth = getAuth(app);

  const handleSignUp = (email, password) => {
      setLoading(true)
   return createUserWithEmailAndPassword(auth, email, password);
  };

  const handleLogin = (email, password) => {
      setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };
  const handleSignOut =()=>{
    setLoading(true)
    return signOut(auth)
  }

  const updateUserProfile = (updateData) => {
    return updateProfile(auth.currentUser, updateData)
  }



useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
        setUser(currentUser)
        setLoading(false)
    })
    return () => {
        unsubscribe()
    } 
},[])



  useEffect(() => {
    fetch("travelSpots.json")
      .then((res) => res.json())
      .then((data) => {
        setTravelSpots(data); // Store travel spots
        setSelectedSpot(data[0]); // Set initial spot
        setSelectedBackground(data[0]?.background); // Set initial background
      })
      .catch((err) => console.error("Error fetching travelSpots:", err));
  }, []);

  const authData = {
    setSelectedSpot,
    setSelectedBackground,
    selectedBackground,
    selectedSpot,
    travelSpots,
    setTravelSpots,
    user,
    handleSignUp,
    handleLogin,
    setUser,
    handleSignOut,
    loading,
    updateUserProfile
  };

  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
