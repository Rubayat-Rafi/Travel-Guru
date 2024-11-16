import React, { useContext } from "react";
import Navbar from "../Components/Navbar";
import { Link, useNavigate } from "react-router-dom";
import facebook from '../images/icons/fb.png'
import google from '../images/icons/google.png'
import { AuthContext } from "../AuthProvider/AuthProvider";

const login = () => {
const {handleLogin, setUser} = useContext(AuthContext)
const navigate = useNavigate()

    const UserLogin = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(email, password)
        handleLogin(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            setUser(user)
            navigate('/hotels')
          })
          .catch((error) => {
            const errorMessage = error.message;
            alert(errorMessage)
          });
    }


  return (



    <div>
      <Navbar></Navbar>
      <div className="mx-auto max-w-[1440px] w-11/12 ">
        <div className=" min-h-[80vh] flex items-center justify-center flex-col">
          <form onSubmit={UserLogin} className="w-1/2 bg-white p-12 rounded-lg border shadow-md">
            <h1 className="text-blackColor text-2xl font-bold">Login</h1>
            <div>
              <input
              name="email"
                type="email"
                placeholder="Username or Email"
                className="w-full border-gray-300 p-2 border-b mt-6"
                required
              />
            </div>
            <div>
              {/* <label className="block text-sm font-semibold mb-1">
                Destination
              </label> */}
              <input
              name="password"
                type="password"
                placeholder="Passowrd"
                className="w-full border-b border-gray-300 p-2 mt-6"
                required
              />
            </div>
            <div className="mt-6 flex items-center justify-between">
                <div className="flex items-center gap-2"><input type="checkbox"  className="checkbox w-5 h-5" /> <span>Remember Me</span></div>
                <div><a className="text-mainColor font-medium text-base underline cursor-pointer">Forgot Password</a></div>
            </div>
            <button
              type="submit"
              className="mt-8 w-full bg-mainColor text-white py-2 rounded hover:bg-yellow-600"
            >
              Login
            </button>
            <p className="mt-4 text-center text-xs">Don’t have an account? <Link  to='/signup' className="text-mainColor underline font-medium ml-2">Create an account</Link></p>
          </form>

          <div className="my-8 "><span className="text-xl font-semibold text-blackColor">Or</span></div>
          <div className="flex flex-col gap-6">
            <button className="hover:bg-base-200 font-semibold py-3 px-8 border rounded-full flex items-center gap-5"><img src=
            {facebook} alt="facebook icon" className="w-8" />Continue with Facebook</button>
            <button className="hover:bg-base-200 font-semibold py-3 px-8 border rounded-full flex items-center gap-5"> <img src={google} alt="google icon" className="w-7" /> Continue with Google</button>
          </div>


        </div>
      </div>
    </div>
  );
};

export default login;
