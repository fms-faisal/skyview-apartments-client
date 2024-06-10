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
import AdminRoute from "./AdminRoute";
import Announcements from "../Pages/Dashboard/Announcement/Announcements";
import Payment from "../Pages/Dashboard/Payment/Payment";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";
import AgreementRequests from "../Pages/Dashboard/AgreementRequests/AgreementRequests";
import AdminProfile from "../Pages/Dashboard/AdminProfile/AdminProfile";

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
        path: 'payment',
        element: <Payment></Payment>
      },
      
      {
        path: 'userprofile',
        element: <MyProfile></MyProfile>
      },
      {
        path: 'announcements',
        element: <Announcements></Announcements>
      },
      {
        path: 'paymentHistory',
        element: <PaymentHistory></PaymentHistory>
      },

      //admin only routes

      {
        path: 'makeAnnouncement',
        element: <AdminRoute><MakeAnnouncement></MakeAnnouncement></AdminRoute>
      },
      {
        path: 'allUsers',
        element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
      },
      {
        path: 'manageReservation',
        element: <AgreementRequests></AgreementRequests>
      },
      {
        path: 'adminProfile',
        element: <AdminProfile></AdminProfile>
      }
    ],
  },
]);
