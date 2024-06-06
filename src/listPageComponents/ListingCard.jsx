import React from 'react';
import Image from 'next/image';
const ListingCard = ({ listing }) => {
  const { title, price, thumbnailUrl, verified, topRated, isNew, monthlyNetProfit, monthlyRevenue, trafficPercentage, type, industry, monetization, location, profit, revenue, traffic } = listing;
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex w-[1296px] h-[365px] relative">
      <div className="relative">
        <Image src={thumbnailUrl} alt={title} width={194} height={333} className="rounded-lg" />
      </div>
      <div className="absolute top-4 right-4 flex space-x-4">
        <div className="flex flex-col items-center">
          <p className="text-[14px] text-gray-500 ml-1">Profit (1 Yr)</p>
          <p className="font-gilroy-bold text-green-600">{profit}</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-[14px] text-gray-500 ml-1">Revenue (1 Yr)</p>
          <p className="font-gilroy-bold text-green-600">{revenue}</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-[14px] text-gray-500 ml-1">Traffic (1 Yr)</p>
          <p className="font-gilroy-bold text-red-600">{traffic}</p>
        </div>
      </div>
      <div className="flex flex-col ml-4 w-full">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-gilroy-bold">{title}</h3>
          <div className="flex space-x-2">
            {topRated && <span className="bg-[#FBBF24] text-white px-2 py-1 rounded-full text-xs">Top Rated</span>}
            {verified && <span className="bg-[#10B981] text-white px-2 py-1 rounded-full text-xs">Verified Listing</span>}
            {isNew && <span className="bg-[#34D399] text-white px-2 py-1 rounded-full text-xs">New</span>}
            <span className="bg-[#3B82F6] text-white px-2 py-1 rounded-full text-xs">{location}</span>
          </div>
        </div>
        <p className="text-gray-600 text-[16px] mt-2">{`Electronic commerce (e-commerce) refers to companies and individuals that buy and sell goods and services over the internet. E-commerce operates in different types of market segments and can be conducted over computers, tablets, smartphones.`}</p>
        <div className="flex justify-between mt-4">
          <div>
            <div className="flex items-center">
              <img src="/images/briefcase.png" alt="icon" className="w-4 h-4 mr-1" />
              <p className="text-[14px] text-gray-500 ml-1">Type</p>
            </div>
            <p className="font-gilroy-bold ml-1">{type}</p>
          </div>
          <hr style={{ width: '1px', height: '40px', backgroundColor: '#D7D7D7', border: 'none', margin: '0 16px' }} />
          <div>
            <div className="flex items-center">
              <img src="/images/industry.png" alt="icon" className="w-4 h-4 mr-1" />
              <p className="text-[14px] text-gray-500 ml-1">Industry</p>
            </div>
            <p className="font-gilroy-bold ml-1">{industry}</p>
          </div>
          <hr style={{ width: '1px', height: '40px', backgroundColor: '#D7D7D7', border: 'none', margin: '0 16px' }} />
          <div>
            <div className="flex items-center">
              <img src="/images/monetization.png" alt="icon" className="w-4 h-4 mr-1" />
              <p className="text-[14px] text-gray-500 ml-1">Monetization</p>
            </div>
            <p className="font-gilroy-bold ml-1">{monetization}</p>
          </div>
          <hr style={{ width: '1px', height: '40px', backgroundColor: '#D7D7D7', border: 'none', margin: '0 16px' }} />
          <div>
            <div className="flex items-center">
              <img src="/images/monthlynet.png" alt="icon" className="w-4 h-4 mr-1" />
              <p className="text-[14px] text-gray-500 ml-1">Monthly Net Profit</p>
            </div>
            <p className="font-gilroy-bold ml-1">${monthlyNetProfit.toLocaleString()}</p>
          </div>
          <hr style={{ width: '1px', height: '40px', backgroundColor: '#D7D7D7', border: 'none', margin: '0 16px' }} />
          <div>
            <div className="flex items-center">
              <img src="/images/monthlynet.png" alt="icon" className="w-4 h-4 mr-1" />
              <p className="text-[14px] text-gray-500 ml-1">Monthly Revenue</p>
            </div>
            <p className="font-gilroy-bold ml-1">${monthlyRevenue.toLocaleString()}</p>
          </div>
          <hr style={{ width: '1px', height: '40px', backgroundColor: '#D7D7D7', border: 'none', margin: '0 16px' }} />
          <div>
            <div className="flex items-center">
              <img src="/images/monthlynet.png" alt="icon" className="w-4 h-4 mr-1" />
              <p className="text-[14px] text-gray-500 ml-1">Monthly Multiple</p>
            </div>
            <p className="font-gilroy-bold ml-1">14x</p>
          </div>
        </div>
        <div className="flex justify-between mt-4">
          <hr style={{ width: '1170px', height: '1px', backgroundColor: '#D7D7D7', border: 'none' }} />
        </div>
        <div className="flex items-center justify-between mt-4">
          <div className="flex space-x-2">
            <div className="bg-black-600 text-[16px] px-2 py-1 rounded-full text-s">
              Estimated Price
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-2">
          <div className="flex items-center space-x-2">
            <div className="font-gilroy-bold text-[24px]"></div>
            <p className="font-gilroy-bold text-[24px]">${price.toLocaleString()}</p>
          </div>
          <div className="flex items-center">
            <button className="bg-[#190041] text-white px-4 py-2 rounded-full font-gilroy-bold flex items-center justify-center">
              View Listing <span className="ml-2">&#8594;</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ListingCard;









