"use client"
import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const Filters = () => {
  const [showPriceRange, setShowPriceRange] = useState(false);

  const togglePriceRange = () => {
    setShowPriceRange(!showPriceRange);
  };

  return (
    <div className="flex items-center justify-between space-x-4 font-gilroy-light w-full">
      <div className="flex items-center space-x-4">
        <div className="relative">
          <select
            id="assetType"
            name="assetType"
            className="font-gilroy-bold appearance-none bg-transparent border-2 border-#D8D8D8 rounded-full px-4 py-2 pr-8 focus:outline-none"
          >
            <option value="all">Asset Type</option>
            <option value="website">Website</option>
            <option value="app">App</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <svg
              className="h-4 w-4 text-black"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>

        <div className="relative">
          <div
            className="font-gilroy-bold appearance-none bg-transparent border-2 border-#D8D8D8 rounded-full px-4 py-2 pr-8 focus:outline-none cursor-pointer"
            onClick={togglePriceRange}
          >
            Price
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <svg
                className="h-4 w-4 text-black"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          {showPriceRange && (
            <div className="absolute mt-2 bg-white shadow-lg rounded-lg p-4 w-64 z-10">
              <label htmlFor="minPrice" className="block text-sm font-medium text-gray-700">
                Min asking price
              </label>
              <input
                type="number"
                id="minPrice"
                name="minPrice"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
              <label htmlFor="maxPrice" className="block text-sm font-medium text-gray-700 mt-4">
                Max asking price
              </label>
              <input
                type="number"
                id="maxPrice"
                name="maxPrice"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
              <div className="flex justify-between mt-4">
                <button
                  type="button"
                  className="bg-gray-200 text-gray-700 rounded-full px-4 py-2"
                  onClick={togglePriceRange}
                >
                  Clear
                </button>
                <button
                  type="button"
                  className="bg-[#190041] text-white rounded-full px-4 py-2"
                  onClick={togglePriceRange}
                >
                  Apply
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="relative">
          <select
            id="more"
            name="more"
            className="font-gilroy-bold appearance-none bg-transparent border-2 border-#D8D8D8 rounded-full px-4 py-2 pr-8 focus:outline-none"
          >
            <option value="all">More</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <svg
              className="h-4 w-4 text-black"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <div className="relative">
          <FaSearch className="absolute left-3 top-3 text-gray-500" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent border-2 border-#D8D8D8 rounded-full pl-10 pr-4 py-2 focus:outline-none"
          />
        </div>

        <div className="relative">
          <label htmlFor="sortBy" className="font-gilroy-bold mr-2">Sort By:</label>
          <select
            id="sortBy"
            name="sortBy"
            className="font-gilroy-bold appearance-none bg-transparent border-2 border-#D8D8D8 rounded-full px-4 py-2 focus:outline-none"
          >
            <option value="default">Default</option>
            <option value="newestListed">Date Listed: Newest</option>
            <option value="oldestListed">Date Listed: Oldest</option>
            <option value="lowToHigh">Asking Price: Low to High</option>
            <option value="highToLow">Asking Price: High to Low</option>
            <option value="revLowToHigh">Annual Revenue: Low to High</option>
            <option value="revHighToLow">Annual Revenue: High to Low</option>
            <option value="profitLowToHigh">Annual Profit: Low to High</option>
            <option value="profitHighToLow">Annual Profit: High to Low</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <svg
              className="h-4 w-4 text-black"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
