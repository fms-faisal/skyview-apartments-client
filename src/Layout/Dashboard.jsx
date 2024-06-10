import React from "react";
import { FaBook, FaBuilding, FaHome, FaUser } from "react-icons/fa";
import { FaCalendar, FaPaypal, FaPeopleGroup, FaPersonRifle } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";

const Dashboard = () => {
  const isAdmin = useAdmin();
  return (
    <div className="flex">
      <div className="w-56 min-h-screen flex items-center border-r-2 border-gray-200 rounded-lg">
        <ul className="menu p-4">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/adminProfile">
                  <FaUser></FaUser>Admin Profile
                </NavLink>
              </li>

              <li>
                <NavLink to="/dashboard/manageReservation">
                  <FaBook></FaBook> Agreement Requests
                </NavLink>
              </li>

              <li>
                <NavLink to="/dashboard/allUsers">
                  <FaUser></FaUser>Manage Members
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/userProfile">
                  <FaUser></FaUser>User Profile
                </NavLink>
              </li>

              <li>
                <NavLink to="/dashboard/reservation">
                  <FaCalendar></FaCalendar> My reservation
                </NavLink>
              </li>
            </>
          )}

          <li>
            <NavLink to="/dashboard/paymentHistory">
              <FaPaypal></FaPaypal> Payment History
            </NavLink>
          </li>

          <div className="divider"></div>

          <li>
            <NavLink to="/">
              <FaHome></FaHome>Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/apartment">
              <FaBuilding></FaBuilding> Apartments
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
