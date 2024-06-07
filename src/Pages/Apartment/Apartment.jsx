import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import ApartmentCard from "./ApartmentCard";

const Apartment = () => {
  const [apartments, setApartments] = useState([]);
  useEffect(() => {
    fetch("apartments.json")
      .then((res) => res.json())
      .then((data) => setApartments(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <Helmet>
        <title>Skyview Apartments | Apartment</title>
      </Helmet>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20 lg:gap-y-32 mt-24">
        {apartments.map((apartment) => (
          <ApartmentCard key={apartment.apartment_no} apartment={apartment}></ApartmentCard>
        ))}
      </div>
    </div>
  );
};

export default Apartment;
