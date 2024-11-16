import React, { useContext } from "react";
import logo from "../images/icons/logo.png";
import blogo from "../images/icons/black-logo.png";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FaSearchLocation } from "react-icons/fa";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Navbar = () => {
  const location = useLocation();
  const {user, handleSignOut} = useContext(AuthContext)

  const userSignOut = () => {
    handleSignOut()
    .then(() => {
      // Sign-out successful.
      alert('successfully SignOut')
    }).catch((error) => {
      // An error happened.
      alert('Error Happend', error)
    });
  }

  return (
    <div className="flex items-center justify-between w-10/12 mx-auto py-6">
      <Link to="/">
        {location.pathname === "/booking" || location.pathname === "/" ? (
          <img src={logo} alt="logo icon" />
        ) : (
          <img src={blogo} alt="logo icon" />
        )}
      </Link>
      <div className="space-x-10 flex items-center">
        {location.pathname === "/booking" || location.pathname === "/" ? (
          <div className="flex items-center border bg-white/20 rounded-md pl-4">
            <span className="text-white text-2xl">
              <FaSearchLocation></FaSearchLocation>
            </span>
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search your Destination..."
              className=" py-3 px-5  bg-transparent placeholder-white focus:outline-none text-white w-60"
            />
          </div>) : ("")}

        <div
          className={` ${
            location.pathname === "/booking" || location.pathname === "/"
              ? " text-white"
              : "text-blackColor"
          } space-x-10 text-lg`}
        >
          <NavLink to="/news">News</NavLink>
          <NavLink to="/booking">Destination</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          {
            user && <NavLink to="/hotels">Hotels</NavLink>
          }
          
        </div>
        <div>
          {
             location.pathname === "/hotels"? (<Link to='/' onClick={userSignOut} className="bg-mainColor text-blackColor  hover:bg-yellow-600 py-3 px-6 rounded-md text-lg font-semibold">LogOut</Link>

             ):(<Link
            to="/login"
            className="bg-mainColor text-blackColor  hover:bg-yellow-600 py-3 px-6 rounded-md text-lg font-semibold"
          >
            Login
          </Link>)
          }
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
