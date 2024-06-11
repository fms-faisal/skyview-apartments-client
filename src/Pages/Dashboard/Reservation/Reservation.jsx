import React from "react";
import useReservation from "../../../Hooks/useReservation";
import useAuth from "../../../Hooks/useAuth";
import { FaPaypal, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import NullReservation from "../../../components/NullReservation";
import { Link } from "react-router-dom";
import useMember from "../../../Hooks/useMember";

const Reservation = () => {
  const { user } = useAuth();
  const [reservation, refetch] = useReservation();
  const axiosSecure = useAxiosSecure();
  const [isMember] = useMember();
  console.log(isMember)

  isMember && console.log(' member', isMember); 
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/reservation/${id}`)
          .then((response) => {
            console.log(response);
            Swal.fire({
              title: "Deleted!",
              text: "Your reservation has been deleted.",
              icon: "success"
            });
            refetch();
          })
          .catch((error) => {
            console.error(error);
            Swal.fire({
              title: "Error",
              text: "Failed to delete reservation.",
              icon: "error"
            });
          });
      }
    });
  };

  // Filter reservations by user email
  const userReservations = reservation.filter(res => res.email === user.email);

  if (userReservations.length === 0) {
    return <NullReservation />;
  }



  return (
    <div className="flex flex-col h-full items-center justify-center">
      {userReservations.map(res => (
        <div key={res._id} className="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 mb-4">
          <img
            className="object-cover w-full h-64"
            src={res.apartment_image}
            alt="Apartment"
          />
          <div className="p-6">
            <div>
              <div className="flex flex-row justify-between">
                <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">
                  Apartment No: {res.apartment_no}
                </span>
                <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">
                  Status: {res.status}
                </span>
              </div>
              <div className="flex flex-row justify-between items-center mt-2">
                <a
                  href="#"
                  className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline"
                  tabIndex="0"
                  role="link">
                  Block {res.block_name}, Floor No {res.floor_no}
                </a>
                <button className="btn btn-sm">
                  Rent: {res.rent}
                </button>
              </div>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                {res.other_details}
              </p>
            </div>
            <div className="mt-4">
              <div className="flex flex-row justify-between items-center">
                <div className="flex items-center">
                  <img
                    className="object-cover h-10 rounded-full"
                    src={user.photoURL}
                    alt="Avatar"
                  />
                  <a
                    href="#"
                    className="mx-2 font-semibold text-gray-700 dark:text-gray-200"
                    tabIndex="0"
                    role="link">
                    {res.name}
                  </a>
                </div>
                <div>
                  <button onClick={() => handleDelete(res._id)}>
                    <FaTrashAlt className="text-red-400 mr-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      {/* Render message and hide button if user is not a member */}
      {!isMember && (
        <p className="mt-4 text-red-500">Your reservation has not been accepted yet. Please wait.</p>
      )}
      {/* Render Pay Now button only if user is a member */}
      {isMember && (
        <Link to='/dashboard/payment'>
          <button className="btn mt-4 bg-green-300">
            <FaPaypal /> Pay Now
          </button>
        </Link>
      )}
    </div>
  );
};

export default Reservation;
