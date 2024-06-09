import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { Navigate, useLocation, useNavigate } from "react-router-dom";



import axios from "axios";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const ApartmentCard = ({ apartment }) => {
  const { apartment_image, floor_no, block_name, apartment_no, rent, other_details } = apartment;
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  
  const handleAgreement = (apartment) => {
    if (user && user.email) {
      console.log(user.email, apartment);
      const reserveItem = {
        apartmentId: apartment._id,
        email: user.email,
        name: user.displayName,
        apartment_no,
        apartment_image,
        floor_no,
        block_name,
        rent,
        status: "pending",
      };
      console.log(reserveItem, user)

      axiosSecure.post('/reservation', reserveItem)
      .then((response) => {
          console.log(response.data)
          if(response.data.insertedId){
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `Apartment ${apartment_no} added to reservation`,
              showConfirmButton: false,
              timer: 1500
            });
          }
      })
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
          // <Navigate to = '/login'></Navigate>
        }
      });
    }
  };
  return (
    <div>
      <div>
        <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
          <div
            className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md"
            style={{
              backgroundImage: `url(${apartment.apartment_image})`,
            }}
          />
          <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
            <div className="text-center mt-2">
              <span className="px-3 py-1 text-xs text-black uppercase bg-gray-100 rounded-lg">
                Apartment No: <span className="font-bold px-1">{apartment.apartment_no}</span>
              </span>
            </div>

            <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">
              {apartment.block_name} block, Floor : {apartment.floor_no}
            </h3>

            <div className="flex flex-col items-center justify-between px-3 bg-gray-200 dark:bg-gray-700 rounded-md py-3">
              <div className="flex items-center justify-between w-full">
                <span className="font-bold text-gray-800 dark:text-gray-200">Rent:</span>
                <span className="text-gray-800 bg-green-300 border-2 border-green-400 rounded-md  px-4 ">$1200</span> {/* Sample value */}
              </div>

              {/* <div className="flex items-center justify-between w-full">
                <button
                  className="w-full py-2 mt-2 text-sm font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none"
                  onClick={() => console.log("Add to cart clicked")}>
                  $1200 per month
                </button>
              </div> */}
              <div className="flex items-center justify-between w-full">
                <button
                  className="w-full py-2 mt-2 text-sm font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none"
                  onClick={() => handleAgreement(apartment)}>
                  Agreement
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApartmentCard;
