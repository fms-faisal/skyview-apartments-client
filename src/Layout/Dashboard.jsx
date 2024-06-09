import React from "react";
import { FaBuilding, FaHome } from "react-icons/fa";
import { FaCalendar, FaPaypal } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex">
      <div className="w-64 min-h-screen">
        <ul className="menu p-4">
          <li>
            <NavLink to="/dashboard/userHome">
                <FaHome></FaHome> User Home</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/reservation">
                <FaCalendar></FaCalendar> My reservation</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/paymentHistory">
                <FaPaypal></FaPaypal> Payment History</NavLink>
          </li>

          <div className="divider"></div>

          <li>
            <NavLink to="/">
            <FaHome></FaHome>Home</NavLink>
          </li>
          <li>
            <NavLink to="/apartment">
            <FaBuilding></FaBuilding> Apartments</NavLink>
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
