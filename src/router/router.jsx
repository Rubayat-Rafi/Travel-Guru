import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../MainLayout/Mainlayout";
import TravelCarousel from "../TravelCarousel/TravelCarousel";
import Booking from "../Pages/Booking";
import Login from "../Pages/login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    children: [
      {
        path: "/",
        element: <TravelCarousel></TravelCarousel>,
      },
      {
        path: "/booking",
        element: <Booking></Booking>,
      },
      {
        path:'/login',
        element: <Login></Login>,
      },
      {
        
      }
    ],
  },
]);
