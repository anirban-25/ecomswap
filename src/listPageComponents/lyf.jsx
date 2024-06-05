import React from 'react';
import Image from 'next/image';

const ListingCard = ({ listing }) => {
  const { title, price, thumbnailUrl, verified, topRated, monthlyNetProfit, monthlyRevenue, trafficPercentage } = listing;

  return (
    <div className="bg-white rounded-lg shadow-md p-4 font-gilroy-light flex">
      <div className="relative">
        <Image src={thumbnailUrl} alt={title} width={150} height={100} className="rounded-lg" />
        <div className="absolute top-2 right-2 flex space-x-2">
          {verified && (
            <div className="bg-green-500 text-white px-2 py-1 rounded-full text-xs">
              Verified Listing
            </div>
          )}
          {topRated && (
            <div className="bg-yellow-500 text-white px-2 py-1 rounded-full text-xs">
              Top Rated
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col ml-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-gilroy-bold">{title}</h3>
          <p className="font-gilroy-bold">${price.toLocaleString()}</p>
        </div>
        <p className="text-gray-600 text-sm mt-1">{`Electronic commerce (e-commerce) refers to companies and individuals that buy and sell goods and services over the internet. E-commerce operates in different types of market segments and can be conducted over computers, tablets, smartphones.`}</p>
        <div className="flex justify-between mt-2">
          <div>
            <p className="text-xs text-gray-500">Monthly Net Profit</p>
            <p className="font-gilroy-bold">${monthlyNetProfit.toLocaleString()}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500">Monthly Revenue</p>
            <p className="font-gilroy-bold">${monthlyRevenue.toLocaleString()}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500">Monthly Multiple</p>
            <p className="font-gilroy-bold">14x</p>
          </div>
        </div>
        <div className="flex justify-between mt-2">
          <div className="flex items-center space-x-2">
            <div className="bg-red-500 text-white px-2 py-1 rounded-full text-xs">-25%</div>
            <p className="text-xs text-gray-500">Profit (1 Y)</p>
          </div>
          <div className="flex items-center space-x-2">
            <div className="bg-green-500 text-white px-2 py-1 rounded-full text-xs">+25%</div>
            <p className="text-xs text-gray-500">Revenue (1 Y)</p>
          </div>
          <div className="flex items-center space-x-2">
            <div className="bg-yellow-500 text-white px-2 py-1 rounded-full text-xs">-5%</div>
            <p className="text-xs text-gray-500">Traffic (1 Y)</p>
          </div>
        </div>
        <div className="mt-4 text-center">
          <button className="bg-[#190041] text-white px-4 py-2 rounded-full font-gilroy-bold">
            View Listing
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
