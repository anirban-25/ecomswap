"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  FaSearch,
  FaShopify,
  FaStore,
  FaAmazon,
  FaFileAlt,
  FaCloud,
} from "react-icons/fa";
import { MdAddBox } from "react-icons/md";
import PropTypes from "prop-types";
import ReactFlagsSelect from "react-flags-select";
import Slider from "react-slider";

const Filters = ({ onApplyFilters, onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [values, setValues] = useState([0, 100000]);
  const handleChange = (newValues) => setValues(newValues);
  const [revenue, setValuesForRevenue] = useState([0, 100]);
  const handleChangeForRevenue = (newRevenue) =>
    setValuesForRevenue(newRevenue);
  const [profit, setValuesForProfit] = useState([0, 100]);
  const [recurring, setValuesForRecurring] = useState([0, 100]);
  const [age, setAge] = useState([0,20]);
  
  const handleChangeForProfit = (newProfit) => setValuesForProfit(newProfit);
  const handleChangeForRecurring = (newRecurring) => setValuesForRecurring(newRecurring);
  const handleChangeForAge = (newAge) => setAge(newAge);
  const [showAssetTypes, setShowAssetTypes] = useState(false);
  const [selectedAssetTypes, setSelectedAssetTypes] = useState([]);
  const [selectedSortTypes, setSelectedSortTypes] = useState("");
  const [showPriceRange, setShowPriceRange] = useState(false);
  const [showMoreRange, setShowMoreRange] = useState(false);
  
  const [selectedCountry, setSelectedCountry] = useState("");
  const dropdownRef = useRef(null);
  const dropdownRefPrice = useRef(null);
  const dropdownRefMore = useRef(null);
  const dropdownRefSort= useRef(null);
  const [showSortTypes, setShowSortTypes] = useState(false);

  const toggleAssetTypes = () => {
    setShowAssetTypes(!showAssetTypes);
  };

  const toggleSortTypes = () => {
    setShowSortTypes(!showSortTypes);
  };

  const handleAssetTypeClick = (value) => {
    setSelectedAssetTypes((prev) =>
      prev.includes(value)
        ? prev.filter((type) => type !== value)
        : [...prev, value]
    );
  };

  const handleSortTypeClick = (value) => {
    setSelectedSortTypes(value);
      
  };

  const handleClear = () => {
    setSelectedAssetTypes([]);
    setSelectedSortTypes("");
  };
  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent default form submission behavior
      onSearch(searchQuery); // Trigger search
    }
  };
  const handleApply = () => {
    onApplyFilters(
      selectedAssetTypes,
      values[0],
      values[1],
      revenue[0],
      revenue[1],
      profit[0],
      profit[1],
      recurring[0],
      recurring[1],
      age[0],
      age[1],
      selectedSortTypes
    );
    setShowAssetTypes(false);
    setShowPriceRange(false);
    setShowMoreRange(false);
    setShowSortTypes(false)
  };

  const togglePriceRange = () => {
    console.log(showPriceRange);
    setShowPriceRange(!showPriceRange);
  };
  const toggleMoreRange = () => {
    setShowMoreRange(!showMoreRange);
  };
  

  useEffect(() => {
    const handleClickOutsideForPrice = (event) => {
      if (!dropdownRefPrice.current.contains(event.target)) {
        setShowPriceRange(false);
      }
    };
    const handleClickOutside = (event) => {
      if (!dropdownRef.current.contains(event.target)) {
        setShowAssetTypes(false);
      }
    };
    const handleClickOutsideForMore = (event) => {
      if (!dropdownRefMore.current.contains(event.target)) {
        setShowMoreRange(false);
      }
    };
    const handleClickOutsideForSort = (event) => {
      if (!dropdownRefSort.current.contains(event.target)) {
        setShowSortTypes(false);
      }
    };
    document.addEventListener("click", handleClickOutsideForPrice);
    document.addEventListener("click", handleClickOutside);
    document.addEventListener("click", handleClickOutsideForMore);
    document.addEventListener("click", handleClickOutsideForSort);
    return () => {
      document.removeEventListener("click", handleClickOutsideForMore);
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("click", handleClickOutsideForMore);
      document.removeEventListener("click", handleClickOutsideForSort);
    };
  }, []);

  const assetTypes = [
    {
      value: "shopify",
      label: "Shopify Store",
      icon: <FaShopify color="#7850FF" size={30} />,
    },
    {
      value: "ecommerce",
      label: "eCommerce",
      icon: <FaStore color="#7850FF" size={30} />,
    },
    {
      value: "saas",
      label: "SaaS",
      icon: <FaCloud color="#7850FF" size={30} />,
    },
    {
      value: "content",
      label: "Content",
      icon: <FaFileAlt color="#7850FF" size={30} />,
    },
    {
      value: "amazon",
      label: "Amazon FBA",
      icon: <FaAmazon color="#7850FF" size={30} />,
    },
    {
      value: "others",
      label: "Others",
      icon: <MdAddBox color="#7850FF" size={30} />,
    },
  ];
  const sortTypes = [
    { value: "date-newest", label: "Date Listed: Newest" },
    { value: "date-oldest", label: "Date Listed: Oldest" },
    { value: "price-low-high", label: "Asking Price: Low to High" },
    { value: "price-high-low", label: "Asking Price: High to Low" },
    { value: "revenue-low-high", label: "Annual Revenue: Low to High" },
    { value: "revenue-high-low", label: "Annual Revenue: High to Low" },
    { value: "profit-low-high", label: "Annual Profit: Low to High" },
    { value: "profit-high-low", label: "Annual Profit: High to Low" },
  ];

  return (
    <div className="flex items-center justify-between space-x-4 font-gilroy-medium w-full dropdown-container">
      <div className="flex items-center space-x-4">
        <div className="relative" ref={dropdownRef}>
          <div
            className="font-gilroy-bold appearance-none bg-white border border-[#aaa]  rounded-full px-4 py-2 pr-8 focus:outline-none cursor-pointer text-gray-700 "
            onClick={toggleAssetTypes}
          >
            Asset Type
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <svg
                className="h-6 w-6 text-gray-400 inline ml-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </div>
          </div>
          {showAssetTypes && (
            <div className=" transition-all ease-in absolute mt-2 bg-white shadow-lg rounded-lg p-4 w-80 z-10 grid grid-cols-3 gap-2">
              {assetTypes.map((assetType) => (
                <div
                  key={assetType.value}
                  className={`flex flex-col items-center justify-center cursor-pointer border-2 hover:bg-gray-200 transition-all duration-100 rounded-lg p-3 ${
                    selectedAssetTypes.includes(assetType.value)
                      ? "border-[#7850FF] shadow-lg"
                      : "border-gray-200 "
                  }`}
                  onClick={() => handleAssetTypeClick(assetType.value)}
                >
                  {assetType.icon}
                  <span className="text-sm mt-1 text-center ">
                    {assetType.label}
                  </span>
                </div>
              ))}
              <div className="col-span-3 flex justify-between mt-4">
                <button
                  type="button"
                  className="bg-gray-200 text-gray-700 rounded-full px-4 py-2"
                  onClick={handleClear}
                >
                  Clear
                </button>
                <button
                  type="button"
                  className="bg-[#190041] text-white rounded-full px-4 py-2"
                  onClick={handleApply}
                >
                  Apply
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="relative" ref={dropdownRefPrice}>
          <div
            className="font-gilroy-bold appearance-none bg-white border border-[#aaa] rounded-full px-4 py-2 pr-8 focus:outline-none cursor-pointer text-gray-700 "
            onClick={togglePriceRange}
          >
            Price
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <svg
                className="h-6 w-6 text-gray-400 inline ml-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </div>
          </div>

          {showPriceRange && (
            <div className="absolute mt-2 bg-white shadow-lg rounded-lg p-4 w-80 z-10">
              <div
                style={{
                  padding: "10px",
                }}
              >
                <Slider
                  className="slider"
                  value={values}
                  onChange={handleChange}
                  min={0}
                  max={100000}
                  renderTrack={(props, state) => {
                    return (
                      <div
                        {...props}
                        className={`slider-track-${state.index + 1} ${
                          props.className
                        }`}
                      />
                    );
                  }}
                  renderThumb={(props, state) => (
                    <div
                      {...props}
                      className={`slider-thumb ${
                        state.index === 0
                          ? "slider-thumb-left"
                          : "slider-thumb-right"
                      }`}
                    />
                  )}
                />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <div className=" text-center">
                    <label htmlFor="minPrice" className="font-gilroy-medium">
                      Min Asking Price:
                    </label>
                    <input
                      type="number"
                      className=" border-gray-500 border min-w-[5rem] max-w-[8rem] px-3 py-1 rounded-lg"
                      id="minPrice"
                      value={values[0]}
                      max={100000}
                      onChange={(e) =>
                        handleChange([+e.target.value, values[1]])
                      }
                    />
                  </div>
                  <div className=" text-center">
                    <label htmlFor="maxPrice" className="font-gilroy-medium">
                      Max Asking Price:
                    </label>
                    <input
                      type="number"
                      className=" border-gray-500 border min-w-[5rem] max-w-[8rem] px-3 py-1 rounded-lg"
                      id="maxPrice"
                      value={values[1]}
                      max={100000}
                      onChange={(e) =>
                        handleChange([values[0], +e.target.value])
                      }
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-between mt-4">
                <button
                  type="button"
                  className="bg-gray-200 text-gray-700 rounded-full px-4 py-2"
                  onClick={() => {
                    handleChange([0, 100000]);
                  }}
                >
                  Clear
                </button>
                <button
                  type="button"
                  className="bg-[#190041] text-white rounded-full px-4 py-2"
                  onClick={handleApply}
                >
                  Apply
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="relative" ref={dropdownRefMore}>
          <div
            className="font-gilroy-bold appearance-none bg-white border border-[#aaa] rounded-full px-4 py-2 pr-8 focus:outline-none cursor-pointer text-gray-700 "
            onClick={toggleMoreRange}
          >
            More
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <svg
                className="h-6 w-6 text-gray-400 inline ml-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </div>
          </div>

          {showMoreRange && (
            <div className="absolute mt-2 bg-white shadow-lg rounded-lg p-4 w-80 z-10">
              {/* Profit Multiple Slider */}
              <div style={{ padding: "10px" }}>
                <div className="font-gilroy-medium text-[#190041]">
                  Profit Multiple
                </div>
                <Slider
                  className="slider"
                  value={profit}
                  onChange={handleChangeForProfit}
                  min={0}
                  max={100}
                  renderTrack={(props, state) => (
                    <div
                      {...props}
                      className={`slider-track-${state.index + 1} ${
                        props.className
                      }`}
                    />
                  )}
                  renderThumb={(props, state) => (
                    <div
                      {...props}
                      className={`slider-thumb ${
                        state.index === 0
                          ? "slider-thumb-left"
                          : "slider-thumb-right"
                      }`}
                    />
                  )}
                />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <div className="text-center">
                    <label htmlFor="minProfit" className="font-gilroy-medium">
                      Min Profit:
                    </label>
                    <input
                      type="number"
                      className="border-gray-500 border min-w-[5rem] max-w-[8rem] px-3 py-1 rounded-lg"
                      id="minProfit"
                      value={profit[0]}
                      onChange={(e) =>
                        handleChangeForProfit([+e.target.value, profit[1]])
                      }
                    />
                  </div>
                  <div className="text-center">
                    <label htmlFor="maxProfit" className="font-gilroy-medium">
                      Max Profit:
                    </label>
                    <input
                      type="number"
                      className="border-gray-500 border min-w-[5rem] max-w-[8rem] px-3 py-1 rounded-lg"
                      id="maxProfit"
                      value={profit[1]}
                      onChange={(e) =>
                        handleChangeForProfit([profit[0], +e.target.value])
                      }
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-between mt-2">
                <hr
                  style={{
                    width: "280px",
                    height: "1px",
                    backgroundColor: "#D7D7D7",
                    border: "none",
                  }}
                />
              </div>
              <div style={{ padding: "10px" }}>
                <div className="font-gilroy-medium text-[#190041] mt-3">
                  Location
                  <ReactFlagsSelect
                    selected={selectedCountry}
                    onSelect={(code) => setSelectedCountry(code)}
                    searchable
                    searchPlaceholder="Search for a country"
                    className="w-full"
                  />
                </div>
              </div>
              <div className="flex justify-between mt-2">
                <hr
                  style={{
                    width: "280px",
                    height: "1px",
                    backgroundColor: "#D7D7D7",
                    border: "none",
                  }}
                />
              </div>
              <div style={{ padding: "10px" }}>
                <div className="font-gilroy-medium text-[#190041] mt-3">
                 Startup Age
                </div>
                <Slider
                  className="slider"
                  value={age}
                  onChange={handleChangeForAge}
                  min={0}
                  max={20}
                  renderTrack={(props, state) => (
                    <div
                      {...props}
                      className={`slider-track-${state.index + 1} ${
                        props.className
                      }`}
                    />
                  )}
                  renderThumb={(props, state) => (
                    <div
                      {...props}
                      className={`slider-thumb ${
                        state.index === 0
                          ? "slider-thumb-left"
                          : "slider-thumb-right"
                      }`}
                    />
                  )}
                />

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <div>
                    <label htmlFor="minAge" className="font-gilroy-medium">
                      0 months
                    </label>
                  </div>
                  <div className="text-right">
                    <label htmlFor="maxAge" className="font-gilroy-medium">
                      20+ years
                    </label>
                    
                  </div>
                </div>

                </div>




              {/* Action Buttons */}
              <div className="flex justify-between mt-4">
                <button
                  type="button"
                  className="bg-gray-200 text-gray-700 rounded-full px-4 py-2"
                  onClick={() => {
    
                    handleChangeForProfit([0, 100]);
                    handleChangeForAge([0,20]);
                  }}
                >
                  Clear
                </button>
                <button
                  type="button"
                  className="bg-[#190041] text-white rounded-full px-4 py-2"
                  onClick={handleApply}
                >
                  Apply
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center space-x-8 ml-4">
        <div className="relative bg-white border border-[#838383] px-2  rounded-full min-w-[15rem]">
          <FaSearch className="absolute left-3 top-3 mx-2 text-gray-600" />
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearchChange}
            onKeyDown={handleKeyDown}
            className="text-gray-700  font-sans  rounded-full pl-10 pr-4 py-2 focus:outline-none"
          />
        </div>

        <div className="relative" ref={dropdownRefSort}>
          <div
            className="font-gilroy-bold bg-white border border-[#aaa] rounded-full pl-8 px-4 py-2 pr-8 focus:outline-none flex justify-between text-gray-700 cursor-pointer"
            onClick={toggleSortTypes}
          >
            Sort By

            <svg
              className="h-6 w-6 text-gray-500 inline ml-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </div>
          {showSortTypes && (
            <div className=" transition-all ease-in absolute mt-2 bg-white shadow-lg rounded-lg -right-4 p-4 w-64 z-10">
              <div className="space-y-2">
                {sortTypes.map((sort) => (
                  <div 
                  key={sort.value}
                    
                      className={`w-full text-left cursor-pointer hover:bg-gray-400 transition-all duration-150
                        ${selectedSortTypes.includes(sort.value)
                          ? "bg-gray-400 shadow-lg" 
                          : "border-gray-600"
                        }`}
                      onClick={() => handleSortTypeClick(sort.value)}
                    >
                      {sort.label}
                   
                  </div>
                ))}
              </div>
              <div className="flex justify-between mt-4">
                <button
                  type="button"
                  className="bg-gray-200 text-gray-700 rounded-full px-4 py-2"
                  onClick={handleClear}
                >
                  Clear
                </button>
                <button
                  type="button"
                  className="bg-[#190041] text-white rounded-full px-4 py-2"
                  onClick={handleApply}
                >
                  Apply
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
Filters.propTypes = {
  onApplyFilters: PropTypes.func.isRequired,
};

export default Filters;
