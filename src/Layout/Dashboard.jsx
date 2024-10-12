import React, { useState } from "react";
import { FaBook, FaBuilding, FaHome, FaMicrophone, FaMoneyBill, FaUser, FaCalendar, FaPaypal, FaBars, FaTimes } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useMember from "../Hooks/useMember"; 
import Navbar from "../Pages/Shared/Navbar/Navbar";

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  const [isMember] = useMember();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
    <Navbar></Navbar>
    <div className="flex flex-col md:flex-row">
      <button className="md:hidden p-4" onClick={toggleSidebar}>
        {sidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>
      <div className={`w-full md:w-56 max-h-screen flex flex-col md:flex-row items-center mt-24 border-r-2 border-gray-200 rounded-lg ${sidebarOpen ? 'block' : 'hidden'} md:block`}>
        <ul className="menu p-4 w-full">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/adminProfile">
                  <FaUser /> Admin Profile
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageReservation">
                  <FaBook /> Agreement Requests
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allUsers">
                  <FaUser /> Manage Members
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/makeAnnouncement">
                  <FaMicrophone /> Make Announcement
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/cupons">
                  <FaMoneyBill /> Manage Coupons
                </NavLink>
              </li>
            </>
          ) : isMember ? (
            <>
              <li>
                <NavLink to="/dashboard/userProfile">
                  <FaUser /> User Profile
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/reservation">
                  <FaCalendar /> My Reservations
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/payment">
                  <FaMoneyBill /> Make Payment
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/announcements">
                  <FaMicrophone /> Announcements
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/paymentHistory">
                  <FaPaypal /> Payment History
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/userProfile">
                  <FaUser /> User Profile
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/announcements">
                  <FaMicrophone /> Announcements
                </NavLink>
              </li>
            </>
          )}

          <div className="divider"></div>

          <li>
            <NavLink to="/">
              <FaHome /> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/apartment">
              <FaBuilding /> Apartments
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
    </>
  );
};

export default Dashboard;
