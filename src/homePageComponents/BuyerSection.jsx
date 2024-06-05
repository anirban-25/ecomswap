import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const BuyerSection = () => {
  return (
    <div className="lg:px-10 mt-20">
      <div className="text-[#7850FF] font-gilroy-bold italic text-2xl">
        Buyer
      </div>
      <div className="lg:flex justify-between mt-5">
        <div>
          <div>
            <div className=" font-gilroy-bold text-2xl lg:text-4xl">
              Discover your dream Business
            </div>
            <div className=" font-gilroy-regular max-w-[40rem] mt-2 text-sm lg:text-base">
              Browse 1,000s of vetted startups or enter your criteria to find
              matching deals. Project returns with real-time metrics. Make
              offers in minutes.
            </div>
          </div>
          <div className="mt-10">
            <Image
              src="/images/HourGlass.jpg"
              width={30}
              height={30}
              alt="HourGlass"
            />
            <div className="text-lg lg:text-xl font-gilroy-bold ">
              Evaluate web, customer, and financial metrics
            </div>
            <div className=" font-gilroy-regular max-w-[35rem] text-sm lg:text-base">
              Browse 1,000s of vetted startups or enter your criteria to find
              matching deals. Project returns with real-time metrics. Make
              offers in minutes.
            </div>
          </div>
          <div className="mt-10">
            <Image
              src="/images/Segment.jpg"
              width={30}
              height={30}
              alt="HourGlass"
            />
            <div className="text-lg lg:text-xl font-gilroy-bold">
              Build and send LOIs and APAs in minutes
            </div>
            <div className=" font-gilroy-regular max-w-[35rem] text-sm lg:text-base">
              Random placeholder text to be edited later. Project returns with
              real-time metrics. Make offers in minutes.
            </div>
          </div>
        </div>
        <div>
          <Image src="/images/buyerHomePage.png" width={600} height={600} />
        </div>
      </div>
      <div>
        <div className="flex justify-start mt-10">
          <div className="bg-[#190041] p-2 rounded-full px-4 flex justify-center">
            <div className="flex items-center text-white space-x-2 ">
              <div className="font-gilroy-medium ">Tell me more</div>
              <div className="text-[#DCFD82]">
                <FaArrowRight />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyerSection;
