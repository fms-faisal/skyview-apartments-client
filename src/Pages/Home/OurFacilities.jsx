import React from "react";
import { Link } from "react-router-dom";

const OurFacilities = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-white p-20">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://www.shutterstock.com/image-photo/eu-modern-european-complex-apartment-600nw-1445600369.jpg"
            className="min-w-[600px] min-h-[450px] rounded-lg shadow-2xl"
          />
          <div className="p-4">
            <h1 className="text-5xl font-bold">Our Facilities</h1>
            <p className="py-6">
            Our facilities include a state-of-the-art fitness center, a sparkling swimming pool, a beautifully landscaped garden, a playground for kids, 24/7 security, ample parking spaces, a spacious community room for gatherings and events, convenient laundry facilities, and an on-site gym equipped with the latest exercise equipment and free weights.
            </p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurFacilities;
