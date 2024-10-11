import React from "react";

const Gym = () => {
  return (
    <div>
      <div className="hero  lg:min-h-[500px] lg:py-10 py-4  bg-white ">
        <div className="hero-content flex-col-reverse xl:flex-row-reverse">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/026/727/090/small_2x/gym-equipment-illustration-background-landscape-free-photo.jpg"
            className="min-w-[500px] min-h-[450px] rounded-lg shadow-2xl"
          />
          <div className="p-2">
            <h1 className="text-5xl font-bold">Gym Facility</h1>
            <p className="py-6 text-justify">
              Empower healthcare innovation while safeguarding patient privacy with our cutting-edge approach: Federated Learning for Hospitals.
              Revolutionize machine learning models while prioritizing data security.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gym;
