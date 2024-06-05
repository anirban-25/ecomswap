import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const SellerSection = () => {
  return (
    <div>
      <div className="mt-20 lg:flex justify-between items-center">
        <div className="flex">
          <div>
            <Image
              src="/images/escrow.png"
              width={500}
              height={500}
              alt="escrow image"
            />
          </div>
        </div>
        <div>
          <div>
            <div className="text-[#7850FF] font-gilroy-bold italic text-2xl">
              Sellers
            </div>
            <div className="mt-5">
              <div className=" font-gilroy-bold text-2xl lg:text-4xl">
                Get good deals for your Business
              </div>
              <div className=" font-gilroy-regular max-w-[40rem] mt-2 text-sm lg:text-base">
                Browse 1,000s of vetted startups or enter your criteria to find
                matching deals. Project returns with real-time metrics. Make
                offers in minutes.
              </div>
            </div>
            <div className="mt-10">
              <Image
                src="/images/doubleSquare.png"
                width={30}
                height={30}
                alt="HourGlass"
              />
              <div className="text-lg lg:text-xl font-gilroy-bold">
                Get expert help to create the perfect listing
              </div>
              <div className="text-sm lg:text-base font-gilroy-regular max-w-[35rem]">
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
                Close safely for free with Escrow.com
              </div>
              <div className="text-sm lg:text-base font-gilroy-regular max-w-[35rem]">
                Random placeholder text to be edited later. Project returns with
                real-time metrics. Make offers in minutes.
              </div>
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
      </div>
    </div>
  );
};

export default SellerSection;
