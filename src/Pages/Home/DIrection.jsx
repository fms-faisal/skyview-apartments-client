import React from "react";
import SimpleMap from "./SimpleMap";

const DIrection = () => {
  return (
    <div>
      <div className="hero  min-h-[500px] lg:py-10 py-4">
        <div className="hero-content flex-col-reverse xl:flex-row">
          <SimpleMap className="rounded-lg"></SimpleMap>
          <div className="p-2">
            <h1 className="text-5xl font-bold">Directions to Skyview Apartments</h1>
            <p className="py-6 text-justify">
              Welcome to our community! To make your visit seamless, we've provided a detailed map and step-by-step directions to guide you to our
              apartment complex. Whether you're a prospective resident or a guest, follow these easy instructions to find your way to our leasing
              office, amenities, and various buildings. Enjoy your journey, and we look forward to seeing you!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DIrection;
