import React from 'react';
import logo from '../images/icons/logo.png'
import { Link, NavLink } from 'react-router-dom';
import { FaSearchLocation } from "react-icons/fa";

const Navbar = () => {
    return (
        <div className='flex items-center justify-between w-10/12 mx-auto py-6'>
            <Link to='/'>
                <img src={logo} alt="logo icon" />
            </Link>
            <div className='space-x-10 flex items-center'>   
            <div className="flex items-center border bg-white/20 rounded-md pl-4">
                <span className='text-white text-2xl'><FaSearchLocation></FaSearchLocation></span>
                <input type="search" name="search" id="search" placeholder='Search your Destination...' className=' py-3 px-5  bg-transparent placeholder-white focus:outline-none text-white' />
            </div>
            <div className="text-white space-x-10 text-lg">
                <NavLink to='/news'>News</NavLink>
                <NavLink to='/booking'>Destination</NavLink>
                <NavLink to='/blog'>Blog</NavLink>
                <NavLink to='/contact'>Contact</NavLink>
            </div>
            <div>
                <Link to='/login' className='bg-mainColor text-blackColor  hover:bg-yellow-600 py-3 px-6 rounded-md text-lg font-semibold'>Login</Link>
            </div>
            </div>
        </div>
    );
};

export default Navbar;