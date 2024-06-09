import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex">
      <div className="w-64 min-h-full">
        <ul className="menu p-4">
          <li>
            <NavLink to="/dashboard/userHome">User Home</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/reservation">My reservation</NavLink>
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
