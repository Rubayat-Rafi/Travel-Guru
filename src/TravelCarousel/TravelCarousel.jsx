import React, { useContext, } from "react";
import Navbar from "../Components/Navbar";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";

const TravelCarousel = () => {

    const {
        travelSpots,
        selectedSpot,
        selectedBackground,
        setSelectedSpot,
        setSelectedBackground,
      } = useContext(AuthContext);

  const handleSpotClick = (spot) => {
    setSelectedBackground(spot.background);
    setSelectedSpot(spot);
  };

    // Return early if travelSpots is not loaded yet
    if (!travelSpots.length) {
        return <div>Loading...</div>;
      }

  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${selectedBackground})` }}
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
              <Link to={`/booking`} className="mt-6 px-6 py-3 text-lg bg-mainColor text-blackColor font-semibold rounded hover:bg-yellow-600">
                Booking →
              </Link>
            </div>
          </div>

          <div>
            {/* Carousel Section */}
            <div className="bottom-10 left-0 right-0 mx-auto flex space-x-6 items-start">
              {travelSpots.map((spot) => (
                <div
                  key={spot.id}
                  className={`cursor-pointer relative rounded-3xl overflow-hidden border-4 ${
                    selectedSpot.id === spot.id
                      ? "border-yellow-500"
                      : "border-transparent"
                  }`}
                  onClick={() => handleSpotClick(spot)}
                >
                  {/* Image */}
                  <img
                    src={spot.image}
                    alt={spot.name}
                    className="w-[270px] h-[416px] object-cover transform hover:scale-105 transition-transform"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>

                  {/* Spot Name */}
                  <div className="absolute bottom-7 left-6 z-10 text-3xl font-semibold text-white">
                    {spot.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelCarousel;
