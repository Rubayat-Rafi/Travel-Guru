import React, { useContext } from "react";
import Navbar from "../Components/Navbar";
import { Link, useNavigate } from "react-router-dom";
import facebook from "../images/icons/fb.png";
import google from "../images/icons/google.png";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Signup = () => {
  const { handleSignUp, setUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const signUp = (e) => {
    e.preventDefault();
    const fName = e.target.fname.value;
    const lName = e.target.lname.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const conpassword = e.target.conpassword.value;

    const dName = fName + ' ' + lName;

    if (password !== conpassword) {
      alert("Passwords do not match!");
      return;
    }
    // console.log(fName, lName, email, password, conpassword)
    handleSignUp(email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
        alert("user successfully create");
        updateUserProfile({ displayName: dName })
          .then((data) => {
            navigate("/login");
            console.log(data);
          })
          .catch((err) => {
            alert(err);
          });
      })
      .catch((error) => {
        console.error("Error during sign-up:", error.message);
      });
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="mx-auto max-w-[1440px] w-11/12">
        <div className=" min-h-[90vh] flex items-center justify-center flex-col">
          <form
            onSubmit={signUp}
            className="w-1/2 bg-white p-12 rounded-lg border shadow-md"
          >
            <h1 className="text-blackColor text-2xl font-bold">SignUp</h1>
            <div>
              <input
                name="fname"
                type="text"
                placeholder="First Name"
                className="w-full border-gray-300 p-2 border-b mt-6"
                required
              />
            </div>
            <div>
              <input
                name="lname"
                type="text"
                placeholder="Last Name"
                className="w-full border-gray-300 p-2 border-b mt-6"
                required
              />
            </div>
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
              <input
                name="password"
                type="password"
                placeholder="Passowrd"
                className="w-full border-b border-gray-300 p-2 mt-6"
                required
              />
            </div>
            <div>
              <input
                name="conpassword"
                type="password"
                placeholder="Confirm Passowrd"
                className="w-full border-b border-gray-300 p-2 mt-6"
                required
              />
            </div>

            <button
              type="submit"
              className="mt-8 w-full bg-mainColor text-white py-2 rounded hover:bg-yellow-600"
            >
              SignUp
            </button>
            <p className="mt-4 text-center text-xs">
              Already have an account?
              <Link
                to="/login"
                className="text-mainColor underline font-medium ml-2"
              >
                Create an account
              </Link>
            </p>
          </form>

          <div className="my-8 ">
            <span className="text-xl font-semibold text-blackColor">Or</span>
          </div>
          <div className="flex flex-col gap-6">
            <button className="hover:bg-base-200 font-semibold py-3 px-8 border rounded-full flex items-center gap-5">
              <img src={facebook} alt="facebook icon" className="w-8" />
              Continue with Facebook
            </button>
            <button className="hover:bg-base-200 font-semibold py-3 px-8 border rounded-full flex items-center gap-5">
              {" "}
              <img src={google} alt="google icon" className="w-7" /> Continue
              with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
