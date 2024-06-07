import React from 'react';

const ApartmentCard = ({apartment}) => {
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
            <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">B block, 2nd Floor</h3>
            <div className="flex flex-col items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
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
                  onClick={() => console.log("Agreement button clicked")}>
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