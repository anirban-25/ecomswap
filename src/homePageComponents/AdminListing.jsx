import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { RxTriangleRight } from "react-icons/rx";
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
      <div className=" mt-10 ">
        <div className="">
          <div className=" text-[#8D8D8D] text-lg font-gilroy-bold py-3 mt-3  px-2  grid grid-cols-5 lg:mt-5  text-center  ">
            <div className="  ">Industry</div>
            <div className="  ">Business Type</div>
            <div className="  ">Listing</div>
            <div className="  ">Monthly Net Profit</div>
            <div className="  ">Price</div>
          </div>
        </div>
        <div className="">
          {lists.map((list) => (
            <div className="">
              <div className="bg-white relative">
                <div className="bg-white py-3 mt-3 border-dotted border-2 px-2  grid grid-cols-5 lg:mt-5  text-center rounded-md shadow-sm ">
                  <div className=" text-lg font-gilroy-bold capitalize">
                    {list.type}
                  </div>
                  <div>
                    <div className="text-[#7850FF] p-2 font-gilroy-medium rounded-3xl border border-[#7850FF]">
                      {list.niche}
                    </div>
                  </div>
                  <div>{list.listing}</div>
                  <div className=" font-gilroy-medium">
                    {list.monthlyIncome}
                  </div>
                  <div className="text-[#7850FF] text-lg font-gilroy-bold">
                    {list.price}
                  </div>
                </div>
                <div className=" absolute top-5 right-5 ">
                  <RxTriangleRight  size={30}/>
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
