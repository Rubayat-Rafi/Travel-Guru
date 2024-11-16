import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Navbar from "../Components/Navbar";
import Swal from 'sweetalert2'
import { Link, useNavigate } from "react-router-dom";

const Booking = () => {
  const { selectedSpot } = useContext(AuthContext);
const {user} = useContext(AuthContext);
const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault();

if(user){
    Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success"
      });
}else{
    Swal.fire({
        title: "No User",
        text: "Please login before booking!",
        icon: "info"
      });
    navigate('/login')
}

  };

  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${selectedSpot.background})` }}
    >
      <div className="inset-0 bg-black bg-opacity-60 absolute">
        <Navbar></Navbar>
        <div className="flex items-center justify-center min-h-[80vh] w-11/12 mx-auto max-w-[1440px] gap-14">
          <div>
            {/* Header Section */}
            <div className="  flex flex-col items-start text-white">
              <h1 className="text-7xl font-bold">{selectedSpot.name}</h1>
              <p className="mt-4 text-lg max-w-lg">
                {selectedSpot.description}
              </p>
              <Link to={`/`} className="mt-6 px-6 py-3 text-lg bg-mainColor text-blackColor font-semibold rounded hover:bg-yellow-600">
                Go Back →
              </Link>
            </div>
          </div>

          <div className="bg-white p-12 rounded-lg w-1/2">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-1">
                  Origin
                </label>
                <input
                  type="text"
                  placeholder="Enter your origin"
                  className="w-full border border-gray-300 p-2 rounded"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">
                  Destination
                </label>
                <input
                  type="text"
                  placeholder="Enter your destination"
                  className="w-full border border-gray-300 p-2 rounded"
                  required
                />
              </div>

              <div className="flex gap-6">
                <div className="w-full">
                  <label className="block text-sm font-semibold mb-1">
                  Form
                  </label>
                  <input
                    type="date"
                    className="w-full border border-gray-300 p-2 rounded"
                    required
                  />
                </div>

                <div className="w-full">
                  <label className="block text-sm font-semibold mb-1">
                  To
                  </label>
                  <input
                    type="date"
                    className="w-full border border-gray-300 p-2 rounded"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-mainColor text-white py-2 rounded hover:bg-yellow-600"
              >
                Confirm Booking
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Booking;

