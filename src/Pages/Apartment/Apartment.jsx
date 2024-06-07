import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import ApartmentCard from "./ApartmentCard";
import useApartments from "./../../Hooks/useApartments";
const Apartment = () => {
  // const [apartments, setApartments] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const apartmentsPerPage = 6;

  const [apartments, loading] = useApartments();
  // useEffect(() => {
  //   fetch("apartments.json")
  //     .then((res) => res.json())
  //     .then((data) => setApartments(data))
  //     .catch((error) => console.error("Error fetching data:", error));
  // }, []);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(apartments.length / apartmentsPerPage);
  const currentApartments = apartments.slice((currentPage - 1) * apartmentsPerPage, currentPage * apartmentsPerPage);

  return (
    <div>
      <Helmet>
        <title>Skyview Apartments | Apartment</title>
      </Helmet>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20 lg:gap-y-32 mt-24">
        {currentApartments.map((apartment) => (
          <ApartmentCard key={apartment.apartment_no} apartment={apartment} />
        ))}
      </div>

      <div className="flex justify-center my-10">
        <div className="btn-group">
          {[...Array(totalPages)].map((_, index) => (
            <button key={index + 1} className={`btn ${currentPage === index + 1 ? "btn-active" : ""}`} onClick={() => handlePageChange(index + 1)}>
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Apartment;
