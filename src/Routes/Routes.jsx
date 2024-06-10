import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Apartment from "../Pages/Apartment/Apartment";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import Dashboard from "../Layout/Dashboard";
import Reservation from "../Pages/Dashboard/Reservation/Reservation";
import PrivateRoute from "./PrivateRoute";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import MyProfile from "../Pages/Dashboard/MyProfile/MyProfile";
import MakeAnnouncement from "../Pages/Dashboard/Announcement/MakeAnnouncement";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/apartment",
        element: <Apartment></Apartment>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
    ],
  },

  {
    path: "dashboard",
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      //normal user routes
      {
        path: "reservation",
        element: <Reservation></Reservation>,
      },
      {
        path: 'allUsers',
        element: <AllUsers></AllUsers>
      },
      {
        path: 'profile',
        element: <MyProfile></MyProfile>
      },

      //admin only routes

      {
        path: 'makeAnnouncement',
        element: <MakeAnnouncement></MakeAnnouncement>
      }

    ],
  },
]);
