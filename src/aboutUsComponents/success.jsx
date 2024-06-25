import React from "react";

const Success = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center py-20 px-10 bg-[#F8F8F8]">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-pattern opacity-20 pointer-events-none"></div>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        {/* Image Section */}
        <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-8">
          <img
            src="/images/success.svg"
            alt="Success Graph"
            className="w-64 md:w-80 h-64"
          />
        </div>

        {/* Text and Metrics Section */}
        <div className="flex-1 text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-[#230D3D] mb-8">
            We’re completing our Targets Successfully
          </h2>

          {/* Metrics */}
          <div className="grid grid-cols-2 gap-8">
            <div className="flex flex-col items-start">
              <p className="text-2xl font-bold text-[#190041]">2014</p>
              <p className="text-lg font-normal text-gray-600">Founded</p>
            </div>
            <div className="flex flex-col items-start">
              <p className="text-2xl font-bold text-[#190041]">70,000+</p>
              <p className="text-lg font-normal text-gray-600">
                Websites Sold World Wide
              </p>
            </div>
            <div className="flex flex-col items-start">
              <p className="text-2xl font-bold text-[#190041]">100,000</p>
              <p className="text-lg font-normal text-gray-600">
                Users Worldwide
              </p>
            </div>
            <div className="flex flex-col items-start">
              <p className="text-2xl font-bold text-[#190041]">200+</p>
              <p className="text-lg font-normal text-gray-600">
                5-star reviews
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;

