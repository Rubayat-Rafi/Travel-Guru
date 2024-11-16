import React, { createContext, useEffect, useState } from "react";
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [selectedBackground, setSelectedBackground] = useState(null);
  const [selectedSpot, setSelectedSpot] = useState(null);
  const [travelSpots, setTravelSpots] = useState([]);
  const [user, setUser] = useState(null);

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
    
  };

  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
