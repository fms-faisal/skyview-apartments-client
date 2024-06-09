import React from "react";
import useReservation from "../../../Hooks/useReservation";
import useAuth from "../../../Hooks/useAuth";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import NullReservation from "../../../components/NullReservation";

const Reservation = () => {
  const { user } = useAuth();
  const [reservation, refetch] = useReservation();
  const axiosSecure = useAxiosSecure();

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
            refetch()
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

 
  if (reservation.length === 0) {
   
    return  <NullReservation></NullReservation>; 
  }

  return (
    <div className="flex h-full items-center justify-center">
      <div className="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
        <img
          className="object-cover w-full h-64"
          src={reservation[0].apartment_image}
          alt="Apartment"
        />
        <div className="p-6">
          <div>
            <div className="flex flex-row justify-between">
              <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">
                Apartment No: {reservation[0].apartment_no}
              </span>
              <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">
                Status: {reservation[0].status}
              </span>
            </div>
            <div className="flex flex-row justify-between items-center mt-2">
              <a
                href="#"
                className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline"
                tabIndex="0"
                role="link">
                Block {reservation[0].block_name}, Floor No {reservation[0].floor_no}
              </a>
              <button className="btn btn-sm">
                Rent: {reservation[0].rent}
              </button>
            </div>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              {reservation[0].other_details}
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
                  {reservation[0].name}
                </a>
              </div>
              <div>
                <button onClick={() => handleDelete(reservation[0]._id)}>
                  <FaTrashAlt className="text-red-400 mr-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
