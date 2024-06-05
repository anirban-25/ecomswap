import React from "react";
import { FaArrowRight } from "react-icons/fa";

const AdminListing = () => {
  const lists = [
    {
      type: "website",
      niche: "fintech",
      listing: "123abc",
      monthlyIncome: "$2,500",
      price: "$35,000",
    },
    {
      type: "app",
      niche: "health",
      listing: "456def",
      monthlyIncome: "$1,200",
      price: "$18,000",
    },
    {
      type: "website",
      niche: "ecommerce",
      listing: "789ghi",
      monthlyIncome: "$4,000",
      price: "$75,000",
    },
  ];
  return (
    <div className="mt-16">
      <div className="text-2xl lg:text-4xl font-gilroy-bold text-center">
        Our Latest Listings
      </div>
      <div className="lg:px-20 mt-10">
        <div className="flex justify-between text-[#8D8D8D] font-gilroy-bold text-base">
          <div className="w-1/5 text-xs lg:text-base flex justify-center">Monetization</div>
          <div className="w-1/5 hidden lg:flex text-center">Niche</div>
          <div className="w-1/5 hidden lg:flex text-center">Listing</div>
          <div className="w-1/5 text-xs lg:text-base text-center">Monthly Net Profit</div>
          <div className="w-1/5 text-xs lg:text-base flex justify-center">Price</div>
        </div>
        <div className="">
          {lists.map((list) => (
            <div className="">
              <div className="bg-white py-3 mt-3 lg:py-5 border-dotted border-2 px-2 lg:px-10 lg:mt-5 flex text-center rounded-md shadow-sm justify-between">
                <div className="flex justify-start lg:px-10 lg:w-1/5 font-gilroy-bold text-sm lg:text-lg ">
                  {list.type}
                </div>
                <div className=" text-center lg:w-1/5 ">
                  <div className="hidden lg:flex justify-center">
                    <div className="border-[#7850FF] p-2 border-2 rounded-2xl text-[#7850FF] font-gilroy-bold">
                      {list.niche}
                    </div>
                  </div>
                </div>
                <div className=" hidden lg:flex text-center lg:w-1/5 font-gilroy-medium">{list.listing}</div>
                <div className="lg:w-1/5 text-center font-gilroy-medium text-sm lg:text-base">{list.monthlyIncome}</div>
                <div className="lg:w-1/5 flex justify-end lg:px-10 text-center font-gilroy-bold text-sm lg:text-lg text-[#7850FF] ">
                  {list.price}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div>
        <div className="flex justify-center mt-10">
          <div className="bg-[#190041] p-2 rounded-full px-4 flex justify-center">
            <div className="flex items-center text-white space-x-2 ">
              <div className="font-gilroy-bold ">View Listings</div>
              <div className="text-[#DCFD82]">
                <FaArrowRight />
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default AdminListing;
