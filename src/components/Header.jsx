import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Header = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <div>
          <Image src="/images/logo.png" width={120} height={150} alt="logo" />
        </div>
        <div className="hidden lg:flex font-gilroy-medium space-x-10">
          <div className=" font-gilroy-bold underline">Home</div>
          <div>Products</div>
          <div>Resources</div>
          <div>Pricing</div>
        </div>
        <div className="flex space-x-3 items-center">
          <div className="flex items-center">
            <div className="font-gilroy-bold ">View Listings</div>
            <div>
              <FaArrowRight />
            </div>
          </div>
          <div className="p-2 bg-[#190041] text-white font-gilroy-bold rounded-3xl px-4">Sell Now</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
