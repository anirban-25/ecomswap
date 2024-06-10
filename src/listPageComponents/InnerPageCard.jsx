import Image from "next/image";
import React from "react";

const InnerPageCard = ({
  type,
  industry,
  description,
  verified,
  location,
  price,
  thumbnailUrl,
}) => {
  return (
    <div className="border mr-4 border-[#D8D8D8] rounded-3xl  ">
      <div className="max-h-[15rem] rounded-t-2xl overflow-hidden flex items-center justify-center">
        <Image
          src={thumbnailUrl}
          width={500}
          height={100}
          alt="image"
          className="object-cover object-center w-full h-full"
        />
      </div>
      <div className="flex flex-col px-4 my-4 w-full ">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-gilroy-bold">{`${type} | ${industry}`}</h3>
        </div>
        <div className="flex items-center mt-2 space-x-2">
          
          {verified && (
            <div className="flex items-center bg-white border border-gray-300 px-4 py-2 rounded-full text-s italic">
              <img
                src="/images/tick.svg"
                alt="Verified"
                className="w-4 h-4 mr-2"
              />
              Verified Listing
              <img
                src="/images/dollar.svg"
                alt="dollar"
                className="w-6 h-6 ml-4"
              />
              <img
                src="/images/googleanalytics.svg"
                alt="dollar"
                className="w-6 h-6 ml-2"
              />
            </div>
          )}
          {location && (
            <div className="flex items-center bg-white border border-gray-300 px-4 py-2 rounded-full text-s italic">
              <img
                src="/images/location.svg"
                alt="Location"
                className="w-4 h-4 mr-2"
              />
              {location}
            </div>
          )}
        </div>
        <div className="mt-4 ">
          <p className="text-gray-600 text-base overflow-hidden ">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default InnerPageCard;
