import React from "react";
import Image from "next/image";
import { px } from "framer-motion";

const ListingCard = ({ listing }) => {
  const {
    title,
    price,
    thumbnailUrl,
    verified,
    topRated,
    monthlyNetProfit,
    monthlyRevenue,
    trafficPercentage,
    type,
    industry,
    monetization,
  } = listing;

  return (
    <div className="bg-white rounded-lg shadow-md p-4 width-1296px height-365px flex">
      <div className="relative">
        <Image
          src={thumbnailUrl}
          alt={title}
          width={194}
          height={333}
          className="rounded-lg"
        />
      </div>
      <div className="flex flex-col ml-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-gilroy-bold">{title}</h3>
        </div>

        <p className="text-gray-600 text-16px">{`Electronic commerce (e-commerce) refers to companies and individuals that buy and sell goods and services over the internet. E-commerce operates in different types of market segments and can be conducted over computers, tablets, smartphones.`}</p>
        <div className="flex justify-between mt-2">
          <div className="flex justify-between mt-2">
            <div>
              <div className="flex items-center">
                <img
                  src="/images/briefcase.png"
                  alt="icon"
                  className="w-4 h-4 mr-1"
                />
                <p className="text-14px text-gray-500 ml-1">Type</p>
              </div>
              <p className="font-gilroy-bold ml-1">{type}</p>
            </div>
          </div>
          <hr
            style={{
              width: "1px",
              height: "40px",
              backgroundColor: "#D7D7D7",
              border: "none",
              margin: "0 16px",
            }}
          />
          <div className="flex justify-between mt-2">
            <div>
              <div className="flex items-center">
                <img
                  src="/images/industry.png"
                  alt="icon"
                  className="w-4 h-4 mr-1"
                />
                <p className="text-14px text-gray-500 ml-1">Industry</p>
              </div>
              <p className="font-gilroy-bold ml-1">{industry}</p>
            </div>
          </div>
          <hr
            style={{
              width: "1px",
              height: "40px",
              backgroundColor: "#D7D7D7",
              border: "none",
              margin: "0 16px",
            }}
          />
          <div className="flex justify-between mt-2">
            <div>
              <div className="flex items-center">
                <img
                  src="/images/monetization.png"
                  alt="icon"
                  className="w-4 h-4 mr-1"
                />
                <p className="text-14px text-gray-500 ml-1">Monetization</p>
              </div>
              <p className="font-gilroy-bold ml-1">{monetization}</p>
            </div>
          </div>
          <hr
            style={{
              width: "1px",
              height: "40px",
              backgroundColor: "#D7D7D7",
              border: "none",
              margin: "0 16px",
            }}
          />
          <div className="flex justify-between mt-2">
            <div>
              <div className="flex items-center">
                <img
                  src="/images/monthlynet.png"
                  alt="icon"
                  className="w-4 h-4 mr-1"
                />
                <p className="text-14px text-gray-500 ml-1">
                  Monthly Net Profit
                </p>
              </div>
              <p className="font-gilroy-bold ml-1">
                ${monthlyNetProfit.toLocaleString()}
              </p>
            </div>
          </div>
          <hr
            style={{
              width: "1px",
              height: "40px",
              backgroundColor: "#D7D7D7",
              border: "none",
              margin: "0 16px",
            }}
          />

          <div className="flex justify-between mt-2">
            <div>
              <div className="flex items-center">
                <img
                  src="/images/monthlynet.png"
                  alt="icon"
                  className="w-4 h-4 mr-1"
                />
                <p className="text-14px text-gray-500 ml-1">Monthly Revenue</p>
              </div>
              <p className="font-gilroy-bold ml-1">
                ${monthlyRevenue.toLocaleString()}
              </p>
            </div>
          </div>
          <hr
            style={{
              width: "1px",
              height: "40px",
              backgroundColor: "#D7D7D7",
              border: "none",
              margin: "0 16px",
            }}
          />
          <div className="flex justify-between mt-2">
            <div>
              <div className="flex items-center">
                <img
                  src="/images/monthlynet.png"
                  alt="icon"
                  className="w-4 h-4 mr-1"
                />
                <p className="text-14px text-gray-500 ml-1">Monthly Multiple</p>
              </div>
              <p className="font-gilroy-bold ml-1">14x</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-2">
          <hr
            style={{
              width: "1170px",
              height: "1px",
              backgroundColor: "#D7D7D7",
              border: "none",
              marginTop: "20px",
            }}
          />
        </div>
        <div className="flex items-center justify-between mt-4">
          <div className="flex space-x-2">
            <div className="bg-black-600 text-16px px-2 py-1 rounded-full text-s">
              Estimated Price
            </div>

            {topRated && (
              <div className="bg-yellow-500 text-white px-2 py-1 rounded-full text-xs">
                Top Rated
              </div>
            )}
          </div>
          <p className="font-gilroy-bold">${price.toLocaleString()}</p>
        </div>
        <div className="flex justify-between mt-2">
          <div className="flex items-center space-x-2">
            <div className="bg-red-500 text-white px-2 py-1 rounded-full text-xs">
              -25%
            </div>
            <p className="text-xs text-gray-500">Profit (1 Y)</p>
          </div>
          <div className="flex items-center space-x-2">
            <div className="bg-green-500 text-white px-2 py-1 rounded-full text-xs">
              +25%
            </div>
            <p className="text-xs text-gray-500">Revenue (1 Y)</p>
          </div>
          <div className="flex items-center space-x-2">
            <div className="bg-yellow-500 text-white px-2 py-1 rounded-full text-xs">
              -5%
            </div>
            <p className="text-xs text-gray-500">Traffic (1 Y)</p>
          </div>
        </div>
        <div className="flex justify-end">
          <button className="bg-[#190041] text-white px-4 py-2 rounded-full font-gilroy-bold flex items-center justify-center">
            View Listing <span className="ml-2">&#8594;</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
