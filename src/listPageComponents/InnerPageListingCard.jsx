"use client";
import React from "react";
import Image from "next/image";
import { LuPhoneCall } from "react-icons/lu";
import { FaArrowAltCircleRight, FaArrowRight } from "react-icons/fa";
import { FaArrowRightArrowLeft } from "react-icons/fa6";

const InnerPageListingCard = () => {
  const listing = {
    id: 1,
    description:
      "Electronic commerce (e-commerce) refers to companies and individuals that buy and sell goods and services over the internet. E-commerce operates in different types of market segments and can be conducted over computers, tablets, smartphones.",
    price: 123133222,
    thumbnailUrl: "/images/Rectangle 1316.png",
    verified: true,
    topRated: false,
    isNew: true,
    monthlyNetProfit: 102435,
    monthlyRevenue: 88435,
    monthlyMultiple: 14,
    trafficPercentage: -5,
    type: "eCommerce",
    industry: "Home and Garden",
    monetization: "ecommerce",
    location: "United States",
    profit: "+25%",
    revenue: "+25%",
    traffic: "-5%",
  };
  const {
    id,
    description,
    price,
    thumbnailUrl,
    verified,
    topRated,
    isNew,
    monthlyNetProfit,
    monthlyRevenue,
    monthlyMultiple,
    type,
    industry,
    monetization,
    location,
    profit,
    revenue,
    traffic,
  } = listing;

  return (
    <div className="flex justify-between">
      <div className=" bg-white mr-7 border-[#D8D8D8] border w-2/3 max-h-[40rem] min-h-[25rem] h-full rounded-2xl shadow-md p-4 flex relative  mx-auto">
        <div className="relative min-w-[15rem]">
          <Image
            src={thumbnailUrl}
            alt={`${type} | ${industry}`}
            width={254}
            height={560}
            className="rounded-2xl h-full overflow-hidden"
          />
        </div>

        <div className="flex flex-col  max-w-[70rem] ml-4 overflow-hidden">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-gilroy-bold">{`${type} | ${industry}`}</h3>
          </div>
          <div className="flex items-center mt-2 space-x-2">
            {isNew && (
              <div className="flex items-center bg-white border border-gray-300 px-4 py-2 rounded-full text-s italic">
                <img
                  src="/images/newicon.svg"
                  alt="New"
                  className="w-4 h-4 mr-2"
                />
                New
              </div>
            )}
            {topRated && (
              <div className="flex items-center bg-white border border-gray-300 px-4 py-2 rounded-full text-s italic">
                <img
                  src="/images/newicon.svg"
                  alt="Top Rated"
                  className="w-4 h-4 mr-2"
                />
                Top Rated
              </div>
            )}
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
          <div className=" mt-2 flex items-center space-x-9">
            <div className="flex flex-col items-center">
              <p className="text-[14px] text-gray-500 ml-1">Profit (1 Yr)</p>
              <div className="flex items-center">
                {parseInt(profit) >= 0 ? (
                  <>
                    <p className={`font-gilroy-bold text-green-600`}>
                      {profit}
                    </p>
                    <img
                      src="/images/uparrow.svg"
                      alt="Positive"
                      className="h-4 w-4 ml-1"
                    />
                  </>
                ) : (
                  <>
                    <p className={`font-gilroy-bold text-red-600`}>{profit}</p>
                    <img
                      src="/images/downarrow.svg"
                      alt="Negative"
                      className="h-4 w-4 ml-1"
                    />
                  </>
                )}
              </div>
            </div>
            <hr
              style={{
                width: "1px",
                height: "30px",
                backgroundColor: "#D7D7D7",
                border: "none",
              }}
            />
            <div className="flex flex-col items-center">
              <p className="text-[14px] text-gray-500 ml-1">Revenue (1 Yr)</p>
              <div className="flex items-center">
                {parseInt(revenue) >= 0 ? (
                  <>
                    <p className={`font-gilroy-bold text-green-600`}>
                      {revenue}
                    </p>
                    <img
                      src="/images/uparrow.svg"
                      alt="Positive"
                      className="h-4 w-4 ml-1"
                    />
                  </>
                ) : (
                  <>
                    <p className={`font-gilroy-bold text-red-600`}>{revenue}</p>
                    <img
                      src="/images/downarrow.svg"
                      alt="Negative"
                      className="h-4 w-4 ml-1"
                    />
                  </>
                )}
              </div>
            </div>
            <hr
              style={{
                width: "1px",
                height: "30px",
                backgroundColor: "#D7D7D7",
                border: "none",
              }}
            />
            <div className="flex flex-col items-center">
              <p className="text-[14px] text-gray-500 ml-1">Traffic (1 Yr)</p>
              <div className="flex items-center">
                {parseInt(traffic) >= 0 ? (
                  <>
                    <p className={`font-gilroy-bold text-green-600`}>
                      {traffic}
                    </p>
                    <img
                      src="/images/uparrow.svg"
                      alt="Positive"
                      className="h-4 w-4 ml-1"
                    />
                  </>
                ) : (
                  <>
                    <p className={`font-gilroy-bold text-red-600`}>{traffic}</p>
                    <img
                      src="/images/downarrow.svg"
                      alt="Negative"
                      className="h-4 w-4 ml-1"
                    />
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-gray-600 text-[16px]">{description}</p>
          </div>
          <div className="flex justify-between mb-5 items-end h-full pr-5">
            <div className="space-y-5">
              <div className="flex">
                <div>
                  <div className="flex items-center">
                    <img
                      src="/images/briefcase.png"
                      alt="icon"
                      className="w-4 h-4 mr-1"
                    />
                    <p className="text-[14px] text-gray-500 ml-1">Type</p>
                  </div>
                  <p className="font-gilroy-bold ml-1">{type}</p>
                </div>
              </div>
              <div>
                <div className="flex items-center">
                  <img
                    src="/images/monthlynet.png"
                    alt="icon"
                    className="w-4 h-4 mr-1"
                  />
                  <p className="text-[14px] text-gray-500 ml-1">
                    Monthly Net Profit
                  </p>
                </div>
                <p className="font-gilroy-bold ml-1">${monthlyNetProfit}</p>
              </div>
            </div>

            <div className="flex">
              <div className="space-y-5">
                <div>
                  <hr
                    style={{
                      width: "1px",
                      height: "40px",
                      backgroundColor: "#D7D7D7",
                      border: "none",
                      margin: "0 16px",
                    }}
                  />
                </div>
                <div>
                  <hr
                    style={{
                      width: "1px",
                      height: "40px",
                      backgroundColor: "#D7D7D7",
                      border: "none",
                      margin: "0 16px",
                    }}
                  />
                </div>
              </div>
              <div className="space-y-5">
                <div className="flex">
                  <div>
                    <div className="flex items-center">
                      <img
                        src="/images/industry.png"
                        alt="icon"
                        className="w-4 h-4 mr-1"
                      />
                      <p className="text-[14px] text-gray-500 ml-1">Industry</p>
                    </div>
                    <p className="font-gilroy-bold ml-1">{industry}</p>
                  </div>
                </div>
                <div>
                  <div className="flex items-center">
                    <img
                      src="/images/monthlynet.png"
                      alt="icon"
                      className="w-4 h-4 mr-1"
                    />
                    <p className="text-[14px] text-gray-500 ml-1">
                      Monthly Revenue
                    </p>
                  </div>
                  <p className="font-gilroy-bold ml-1">${monthlyRevenue}</p>
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="space-y-5">
                <div>
                  <hr
                    style={{
                      width: "1px",
                      height: "40px",
                      backgroundColor: "#D7D7D7",
                      border: "none",
                      margin: "0 16px",
                    }}
                  />
                </div>
                <div>
                  <hr
                    style={{
                      width: "1px",
                      height: "40px",
                      backgroundColor: "#D7D7D7",
                      border: "none",
                      margin: "0 16px",
                    }}
                  />
                </div>
              </div>
              <div className="space-y-5">
                <div className="flex">
                  <div>
                    <div className="flex items-center">
                      <img
                        src="/images/monetization.png"
                        alt="icon"
                        className="w-4 h-4 mr-1"
                      />
                      <p className="text-[14px] text-gray-500 ml-1">
                        User Acquisition
                      </p>
                    </div>
                    <p className="font-gilroy-bold ml-1">{monetization}</p>
                  </div>
                </div>
                <div>
                  <div className="flex items-center">
                    <img
                      src="/images/monthlynet.png"
                      alt="icon"
                      className="w-4 h-4 mr-1"
                    />
                    <p className="text-[14px] text-gray-500 ml-1">
                      Monthly Multiple
                    </p>
                  </div>
                  <p className="font-gilroy-bold ml-1">${monthlyMultiple}x</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative bg-white text-center border-[#D8D8D8] border rounded-2xl shadow-md flex justify-center w-1/3 items-center">
        <div>
          <div className=" font-gilroy-medium text-xl">Asking Price</div>
          <div className=" font-gilroy-bold text-5xl text-[#7850FF]">
            ${price}
          </div>
        </div>
        <div className="absolute bottom-4 flex  justify-between">
          <div className="mr-10 border border-black rounded-full p-4 font-gilroy-medium">
            <div className=" flex space-x-2 items-center">
              <div>Contact Seller</div>
              <div>
                <LuPhoneCall size={18} />
              </div>
            </div>
          </div>
          <div className="border-black border bg-[#190041] flex rounded-full items-center space-x-2  p-4 font-gilroy-medium">
            <div className="text-white">Make Offer</div>
            <div className="text-[#DCFD82]">
              <FaArrowRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnerPageListingCard;
