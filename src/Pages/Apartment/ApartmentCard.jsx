import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useReservation from "../../Hooks/useReservation";

const ApartmentCard = ({ apartment }) => {
  const { apartment_image, floor_no, block_name, apartment_no, rent,other_details } = apartment;
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useReservation();

  const handleAgreement = async (apartment) => {
  if (user && user.email) {
    const requestedDate = new Date(); 
    const reserveItem = {
      apartmentId: apartment._id,
      email: user.email,
      name: user.displayName,
      photoURL: user.photoURL,
      apartment_no,
      apartment_image,
      floor_no,
      block_name,
      rent,
      other_details,
      status: "pending",
      requested_date: requestedDate.toISOString(), 
    };

      try {
        const response = await axiosSecure.post('/reservation', reserveItem);

        if (response.status === 201 && response.data.insertedId) {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `Apartment ${apartment_no} added to reservation`,
            showConfirmButton: false,
            timer: 1500
          });
          refetch(); // Refetch reservations if needed
        } else {
          Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'You have already applied for one apartment.',
            showConfirmButton: false,
            timer: 1500
          });
        }
      } catch (error) {
        if (error.response && error.response.status === 400) {
          Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'You can apply for only one apartment.',
            showConfirmButton: false,
            timer: 1500
          });
        } else {
          Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'An error occurred. Please try again later.',
            showConfirmButton: false,
            timer: 1500
          });
        }
      }
    } else {
      Swal.fire({
        title: "You are not logged in!",
        text: "Please log in to reserve this apartment",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
      <div
        className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md"
        style={{ backgroundImage: `url(${apartment_image})` }}
      />
      <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
        <div className="text-center mt-2">
          <span className="px-3 py-1 text-xs text-black uppercase bg-gray-100 rounded-lg">
            Apartment No: <span className="font-bold px-1">{apartment_no}</span>
          </span>
        </div>
        <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">
          {block_name} block, Floor: {floor_no}
        </h3>
        <div className="flex flex-col items-center justify-between px-3 bg-gray-200 dark:bg-gray-700 rounded-md py-3">
          <div className="flex items-center justify-between w-full">
            <span className="font-bold text-gray-800 dark:text-gray-200">Rent:</span>
            <span className="text-gray-800 bg-green-300 border-2 border-green-400 rounded-md px-4">{rent}</span>
          </div>
          <div className="flex items-center justify-between w-full">
            <button
              className="w-full py-2 mt-2 text-sm font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none"
              onClick={() => handleAgreement(apartment)}
            >
              Agreement
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApartmentCard;
