import React, { useContext } from "react";
import Navbar from "../Components/Navbar";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Hotels = () => {
  const { user} = useContext(AuthContext);
  const { email, displayName } = user || {};

  return (
    <div>
      <Navbar></Navbar>
      <div className="max-w-[1440px] mx-auto w-11/12 mt-12">
        <div className="border-t pt-5">
          <h1 className="text-xl font-semibold text-blackColor uppercase">
            User Name: {displayName}
          </h1>
          <p className="text-base font-semibold text-blackColor ">
            User Email: {email}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hotels;
