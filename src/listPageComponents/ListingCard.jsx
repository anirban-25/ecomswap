"use client";
import React from 'react';
import Image from 'next/image';
import { useRouter } from "next/navigation";


const ListingCard = ({ listing }) => {
  const router = useRouter();
  const handleClick= (id) => {
    router.push(`/listings/${id}`);
  };

  const { id, description, price, thumbnailUrl, verified, topRated, isNew, monthlyNetProfit, monthlyRevenue, monthlyMultiple, type, industry, monetization, location, profit, revenue, traffic } = listing;

  return (
    <div className="bg-white border border-[#aaa] border-dashed rounded-lg shadow-md p-4 flex h-auto relative w-full mx-auto">
      <div className="relative">
        <Image src={thumbnailUrl} alt={`${type} | ${industry}`} width={254} height={560} className="rounded-lg h-full" />
      </div>
      <div className="absolute top-4 right-4 flex items-center space-x-9">
        <div className="flex flex-col items-center">
          <p className="text-[14px] text-gray-500 ml-1">Profit (1 Yr)</p>
          <div className="flex items-center">
            {parseInt(profit) >= 0 ? (
              <>
                <p className={`font-gilroy-bold text-green-600`}>{profit}</p>
                <img src='/images/uparrow.svg' alt="Positive" className="h-4 w-4 ml-1" />
              </>
            ) : (
              <>
                <p className={`font-gilroy-bold text-red-600`}>{profit}</p>
                <img src='/images/downarrow.svg' alt="Negative" className="h-4 w-4 ml-1" />
              </>
            )}
          </div>
        </div>
        <hr style={{ width: '1px', height: '30px', backgroundColor: '#D7D7D7', border: 'none' }} />
        <div className="flex flex-col items-center">
          <p className="text-[14px] text-gray-500 ml-1">Revenue (1 Yr)</p>
          <div className="flex items-center">
            {parseInt(revenue) >= 0 ? (
              <>
                <p className={`font-gilroy-bold text-green-600`}>{revenue}</p>
                <img src='/images/uparrow.svg' alt="Positive" className="h-4 w-4 ml-1" />
              </>
            ) : (
              <>
                <p className={`font-gilroy-bold text-red-600`}>{revenue}</p>
                <img src='/images/downarrow.svg' alt="Negative" className="h-4 w-4 ml-1" />
              </>
            )}
          </div>
        </div>
        <hr style={{ width: '1px', height: '30px', backgroundColor: '#D7D7D7', border: 'none' }} />
        <div className="flex flex-col items-center">
          <p className="text-[14px] text-gray-500 ml-1">Traffic (1 Yr)</p>
          <div className="flex items-center">
            {parseInt(traffic) >= 0 ? (
              <>
                <p className={`font-gilroy-bold text-green-600`}>{traffic}</p>
                <img src='/images/uparrow.svg' alt="Positive" className="h-4 w-4 ml-1" />
              </>
            ) : (
              <>
                <p className={`font-gilroy-bold text-red-600`}>{traffic}</p>
                <img src='/images/downarrow.svg' alt="Negative" className="h-4 w-4 ml-1" />
              </>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-col ml-4 w-full">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-gilroy-bold">{`${type} | ${industry}`}</h3>
        </div>
        <div className="flex items-center mt-2 space-x-2">
          {isNew && (
            <div className="flex items-center bg-white border border-gray-300 px-4 py-2 rounded-full text-s italic">
              <img src="/images/newicon.svg" alt="New" className="w-4 h-4 mr-2" />
              New
            </div>
          )}
          {topRated && (
            <div className="flex items-center bg-white border border-gray-300 px-4 py-2 rounded-full text-s italic">
              <img src="/images/newicon.svg" alt="Top Rated" className="w-4 h-4 mr-2" />
              Top Rated
            </div>
          )}
          {verified && (
            <div className="flex items-center bg-white border border-gray-300 px-4 py-2 rounded-full text-s italic">
              <img src="/images/tick.svg" alt="Verified" className="w-4 h-4 mr-2" />
              Verified Listing
              <img src="/images/dollar.svg" alt="dollar" className="w-6 h-6 ml-4" />
              <img src="/images/googleanalytics.svg" alt="dollar" className="w-6 h-6 ml-2" />
            </div>
          )}
          {location && (
            <div className="flex items-center bg-white border border-gray-300 px-4 py-2 rounded-full text-s italic">
              <img src="/images/location.svg" alt="Location" className="w-4 h-4 mr-2" />
              {location}
            </div>
          )}
        </div>
        <div className="mt-4">
          <p className="text-gray-600 text-[16px]">{description}</p>
        </div>
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
              <p className="text-[14px] text-gray-500 ml-1">User Acquisition</p>
            </div>
            <p className="font-gilroy-bold ml-1">{monetization}</p>
          </div>
          <hr style={{ width: '1px', height: '40px', backgroundColor: '#D7D7D7', border: 'none', margin: '0 16px' }} />
          <div>
            <div className="flex items-center">
              <img src="/images/monthlynet.png" alt="icon" className="w-4 h-4 mr-1" />
              <p className="text-[14px] text-gray-500 ml-1">Monthly Net Profit</p>
            </div>
            <p className="font-gilroy-bold ml-1">${monthlyNetProfit}</p>
          </div>
          <hr style={{ width: '1px', height: '40px', backgroundColor: '#D7D7D7', border: 'none', margin: '0 16px' }} />
          <div>
            <div className="flex items-center">
              <img src="/images/monthlynet.png" alt="icon" className="w-4 h-4 mr-1" />
              <p className="text-[14px] text-gray-500 ml-1">Monthly Revenue</p>
            </div>
            <p className="font-gilroy-bold ml-1">${monthlyRevenue}</p>
          </div>
          <hr style={{ width: '1px', height: '40px', backgroundColor: '#D7D7D7', border: 'none', margin: '0 16px' }} />
          <div>
            <div className="flex items-center">
              <img src="/images/monthlynet.png" alt="icon" className="w-4 h-4 mr-1" />
              <p className="text-[14px] text-gray-500 ml-1">Monthly Multiple</p>
            </div>
            <p className="font-gilroy-bold ml-1">${monthlyMultiple}x</p>
          </div>
        </div>
        <div className="flex justify-between mt-4">
          <hr style={{ width: '1170px', height: '1px', backgroundColor: '#D7D7D7', border: 'none' }} />
        </div>
        <div className="flex items-center justify-between mt-4">
          <div className="flex flex-col">
            <div className="bg-black-600 text-[16px] px-2 py-1 rounded-full">
              Estimated Price
            </div>
            <div className="flex items-center mt-2">
              <p className="font-gilroy-bold text-[24px] text-[#7850FF]">${price}</p>
            </div>
          </div>
        
        <div className="flex items-center justify-end mt-4">
          <button className="bg-[#190041] text-white px-8 py-3 rounded-full font-gilroy-bold flex items-center justify-center ] text-base"
          onClick={() => handleClick(params.id)}>
            View Listing <span className="ml-2 ">&#8594;</span>
          </button>
        </div>
        </div>
      </div>
    </div>
    
  );
};

export default ListingCard;