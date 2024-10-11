import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import ApartmentCard from "./ApartmentCard";
import useApartments from "../../Hooks/useApartments";

const Apartment = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const apartmentsPerPage = 6;

  const [apartments, loading] = useApartments();

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(apartments.length / apartmentsPerPage);
  const currentApartments = apartments.slice(
    (currentPage - 1) * apartmentsPerPage,
    currentPage * apartmentsPerPage
  );

  return (
    <div>
      <Helmet>
        <title>Skyview Apartments | Apartment</title>
      </Helmet>

      {loading ? (
        <section className="bg-white dark:bg-gray-900">
          <div className="container px-6 py-10 mx-auto animate-pulse">
           
            <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 sm:grid-cols-2 lg:grid-cols-3">
              <div className="w-full">
                <div className="w-full h-64 bg-gray-300 rounded-lg md:h-72 dark:bg-gray-600"></div>
                <h1 className="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
                <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
              </div>
              <div className="w-full">
                <div className="w-full h-64 bg-gray-300 rounded-lg md:h-72 dark:bg-gray-600"></div>
                <h1 className="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
                <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
              </div>
              <div className="w-full">
                <div className="w-full h-64 bg-gray-300 rounded-lg md:h-72 dark:bg-gray-600"></div>
                <h1 className="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
                <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20 lg:gap-y-32 mt-24">
            {currentApartments.map((apartment) => (
              <ApartmentCard key={apartment.apartment_no} apartment={apartment} />
            ))}
          </div>

          <div className="flex justify-center my-10">
            <div className="btn-group">
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index + 1}
                  className={`btn ${currentPage === index + 1 ? "btn-active" : ""}`}
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Apartment;
