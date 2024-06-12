import React from "react";
import useAuth from "../../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Apartment from "../../Apartment/Apartment";

const AdminProfile = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const { data: userData = [] } = useQuery({
    queryKey: ["allUsers"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      const members = res.data.filter((user) => user.role === "member");
      return { allUsers: res.data, memberCount: members.length };
    },
  });

  const { data: apartments = [] } = useQuery({
    queryKey: ["apartments"],
    queryFn: async () => {
      const res = await axiosSecure.get("/apartments");
      return res.data;
    },
  });
  return (
    <div className="flex justify-center items-center h-full mt-16">
      <div className="w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <img
          className="object-cover object-center w-full h-56"
          src={
            user?.photoURL ? user.photoURL : "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" }
          alt="avatar"
        />

        <div className="flex items-center px-6 py-3 bg-gray-900 ">
        

          <h1 className="text-lg font-semibold text-white mx-auto">Name: {user.displayName}</h1>
        </div>

        <div className="px-6 py-4 text-center">
          <h1 className="text-xl font-semibold text-gray-800 dark:text-white"> {user.email}</h1>


          <p className="text-xl py-2 font-semibold text-gray-800  dark:text-gray-400">Total Rooms : {apartments.length}</p>

          <p className="text-xl py-2 font-semibold text-gray-800 dark:text-gray-400">
             Available Rooms: {userData.memberCount === 0 ? 0 : ((apartments.length - userData.memberCount) / apartments.length) * 100}%
          </p>
          <p className="text-xl py-2 font-semibold text-gray-800 dark:text-gray-400">
            Unavailable Rooms: {userData.memberCount === 0 ? 0 : (( userData.memberCount) / apartments.length) * 100}%
          </p>
          <h1 className="text-xl py-2 font-semibold text-gray-800 dark:text-white">Total Members: {userData.memberCount}</h1>
          <h1 className="text-xl py-2 font-semibold text-gray-800 dark:text-white">Total Users: {users.length}</h1>

          {/* <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
            <svg aria-label="suitcase icon" className="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 11H10V13H14V11Z" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7 5V4C7 2.89545 7.89539 2 9 2H15C16.1046 2 17 2.89545 17 4V5H20C21.6569 5 23 6.34314 23 8V18C23 19.6569 21.6569 21 20 21H4C2.34314 21 1 19.6569 1 18V8C1 6.34314 2.34314 5 4 5H7ZM9 4H15V5H9V4ZM4 7C3.44775 7 3 7.44769 3 8V14H21V8C21 7.44769 20.5522 7 20 7H4ZM3 18V16H21V18C21 18.5523 20.5522 19 20 19H4C3.44775 19 3 18.5523 3 18Z"
              />
            </svg>

            <h1 className="px-2 text-sm">Total Users: {users.length} </h1>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
