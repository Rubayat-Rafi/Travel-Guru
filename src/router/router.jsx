import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../MainLayout/Mainlayout";
import TravelCarousel from "../TravelCarousel/TravelCarousel";
import Booking from "../Pages/Booking";
import Login from "../Pages/login";
import News from "../Pages/News";
import Contact from "../Pages/Contact";
import Blog from "../Pages/Blog";
import Signup from "../Pages/Signup";
import Hotels from "../Pages/Hotels";
import PrivetRoute from "./PrivetRoute";

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
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/news",
        element: <News></News>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/hotels",
        element: <PrivetRoute><Hotels></Hotels></PrivetRoute>,
      },
    ],
  },
]);
