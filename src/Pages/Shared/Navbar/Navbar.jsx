import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "./../../../../bannerImages/logo.jpeg";
import AuthProvider, { AuthContext } from "../../../Providers/AuthProvider";
const Navbar = () => {
  const {user, logOut} = useContext(AuthContext)
  console.log(user)
  const handleLogOut = () => {
    logOut()
    .then(() => {})
    .catch((error) => console.error(error));
  }
  const navOptions = (
    <>
      <li>
        <Link to="/">
          <a>Home</a>
        </Link>
      </li>

      <li>
        <Link to="/apartment">Apartment</Link>
      </li>
    </>
  );
  return (

    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navOptions}
            </ul>
          </div>
          <div className="flex flex-row items-center">
            <a className="btn btn-ghost text-xl">
              {" "}
              <img src={logo} className="h-8 rounded-md " alt="" />
              Skyview Apartments
            </a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>

        <div className="navbar-end">
          {!user? <>
            <Link to="/login">
              {" "}
              <a className="btn">Login</a>
            </Link>
          </>: <>
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img alt="photo of user" src={
                    user?.photoURL? user.photoURL : "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  } />
                </div>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                  <a className="justify-between">
                    {user?.displayName? user.displayName : "User"}
                  </a>
                </li>
                <li>
                  <a>Dashboard</a>
                </li>
                <li>
                  <a onClick={handleLogOut}>Logout</a>
                </li>
              </ul>
            </div>
            </>}
        </div>
      </div>
    </div>
    
  );
};

export default Navbar;
