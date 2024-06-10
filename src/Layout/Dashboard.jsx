import React from "react";
import { FaBook, FaBuilding, FaHome, FaMicrophone, FaMoneyBill, FaUser, FaCalendar, FaPaypal } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";

const Dashboard = () => {
  const [isAdmin] = useAdmin();

  return (
    <div className="flex">
      <div className="w-56 min-h-screen flex items-center border-r-2 border-gray-200 rounded-lg">
        <ul className="menu p-4">
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
              {/* <li>
                <NavLink to="/dashboard/cupons">
                  <FaMoneyBill /> Manage Coupons
                </NavLink>
              </li> */}
            </>
          ) : (
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
                  <FaMoneyBill />
                  Make Payment
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/announcements">
                  <FaMicrophone />
                  Announcements
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/paymentHistory">
                  <FaPaypal /> Payment History
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
  );
};

export default Dashboard;
