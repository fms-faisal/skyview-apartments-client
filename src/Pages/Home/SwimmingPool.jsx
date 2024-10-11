import React from "react";

const SwimmingPool = () => {
  return (
    <div>
      <div className="hero  lg:min-h-[500px] lg:py-10 py-4  bg-white ">
        <div className="hero-content flex-col-reverse xl:flex-row">
          <img
            src="https://img.pikbest.com/wp/202408/swimming-pool-3d-rendering-of-a-sunset-ocean-view-resort-villa-complete-with-refreshing_9833131.jpg!w700wp"
            className="min-w-[500px] min-h-[450px] rounded-lg shadow-2xl"
          />
          <div className="p-2">
            <h1 className="text-5xl font-bold">Swimming Pool</h1>
            <p className="py-6 text-justify">
              Our apartment complex offers a state-of-the-art gym facility, designed to provide a comfortable and convenient workout experience for
              residents. The gym is equipped with a range of equipment, including treadmills, ellipticals, and weight machines, as well as free
              weights and a variety of cardio machines. Additionally, the facility offers spacious areas for strength training, flexibility exercises,
              and relaxation, ensuring that all residents can pursue their fitness goals within a modern and safe environment. With extended hours and
              personal training options, the gym accommodates varying schedules and fitness levels, making it an ideal choice for those looking to
              maintain an active and healthy lifestyle.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwimmingPool;
