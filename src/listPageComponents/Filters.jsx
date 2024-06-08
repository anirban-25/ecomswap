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
import Slider from "react-slider";

const Filters = ({ onApplyFilters }) => {
  const [values, setValues] = useState([0, 100]);
  const handleChange = (newValues) => setValues(newValues);
  const [showAssetTypes, setShowAssetTypes] = useState(false);
  const [selectedAssetTypes, setSelectedAssetTypes] = useState([]);
  const [showPriceRange, setShowPriceRange] = useState(false);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(2000000);
  const dropdownRef = useRef(null);
  const dropdownRefPrice = useRef(null);
  const [showSortOptions, setShowSortOptions] = useState(false);

  const toggleAssetTypes = () => {
    setShowAssetTypes(!showAssetTypes);
  };

  const handleAssetTypeClick = (value) => {
    setSelectedAssetTypes((prev) =>
      prev.includes(value)
        ? prev.filter((type) => type !== value)
        : [...prev, value]
    );
  };

  const handleClear = () => {
    setSelectedAssetTypes([]);
    setMinPrice(0);
    setMaxPrice(2000000);
  };

  const handleApply = () => {
    onApplyFilters(selectedAssetTypes, values[0], values[1]);
    setShowAssetTypes(false);
    setShowPriceRange(false);
  };

  const togglePriceRange = () => {
    console.log(showPriceRange);
    setShowPriceRange(!showPriceRange);
  };

  const handleSliderChange = (event) => {
    const { name, value } = event.target;
    if (name === "minPrice") {
      setMinPrice(Number(value));
    } else {
      setMaxPrice(Number(value));
    }
  };
  const toggleSortOptions = () => {
    setShowSortOptions(!showSortOptions);
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
    document.addEventListener("click", handleClickOutsideForPrice);
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutsideForPrice);
      document.removeEventListener("click", handleClickOutside);
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

  return (
    <div className="flex items-center justify-between space-x-4 font-gilroy-light w-full dropdown-container">
      <div className="flex items-center space-x-4">
        <div className="relative" ref={dropdownRef}>
          <div
            className="font-gilroy-bold appearance-none bg-transparent border-2 border-#D8D8D8 rounded-full px-4 py-2 pr-8 focus:outline-none cursor-pointer"
            onClick={toggleAssetTypes}
          >
            Asset Type
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
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
          </div>
          {showAssetTypes && (
            <div className="absolute mt-2 bg-white shadow-lg rounded-lg p-4 w-80 z-10 grid grid-cols-3 gap-2">
              {assetTypes.map((assetType) => (
                <div
                  key={assetType.value}
                  className={`flex flex-col items-center justify-center cursor-pointer border-2 hover:bg-gray-200 transition-all duration-300 rounded-lg p-3 ${
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
            className="font-gilroy-bold appearance-none bg-transparent border-2 border-#D8D8D8 rounded-full px-4 py-2 pr-8 focus:outline-none cursor-pointer"
            onClick={togglePriceRange}
          >
            Price
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
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
                  max={100}
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
                      Min Price:
                    </label>
                    <input
                      type="number"
                      className=" border-gray-500 border min-w-[5rem] max-w-[8rem] px-3 py-1 rounded-lg"
                      id="minPrice"
                      value={values[0]}
                      onChange={(e) =>
                        handleChange([+e.target.value, values[1]])
                      }
                    />
                  </div>
                  <div className=" text-center">
                    <label htmlFor="maxPrice" className="font-gilroy-medium">
                      Max Price:
                    </label>
                    <input
                      type="number"
                      className=" border-gray-500 border min-w-[5rem] max-w-[8rem] px-3 py-1 rounded-lg"
                      id="maxPrice"
                      value={values[1]}
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
                    handleChange([0, 100]);
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
        </div>
      </div>

      <div className="flex items-center space-x-8 ml-4">
        <div className="relative">
          <FaSearch className="absolute left-3 top-3 text-gray-500" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent border-2 border-#D8D8D8 rounded-full pl-10 pr-4 py-2 focus:outline-none"
          />
        </div>

        <div className="relative">
          <button
            className="font-gilroy-bold bg-transparent border-2 border-#D8D8D8 rounded-full pl-8 px-4 py-2 pr-8 focus:outline-none"
            onClick={toggleSortOptions}
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
          </button>
          {showSortOptions && (
            <div className="absolute mt-2 bg-white shadow-lg rounded-lg p-4 w-64 z-10">
              <ul className="space-y-2">
                <li>
                  <button className="w-full text-left">
                    Date Listed: Newest
                  </button>
                </li>
                <li>
                  <button className="w-full text-left">
                    Date Listed: Oldest
                  </button>
                </li>
                <li>
                  <button className="w-full text-left">
                    Asking Price: Low to High
                  </button>
                </li>
                <li>
                  <button className="w-full text-left">
                    Asking Price: High to Low
                  </button>
                </li>
                <li>
                  <button className="w-full text-left">
                    Annual Revenue: Low to High
                  </button>
                </li>
                <li>
                  <button className="w-full text-left">
                    Annual Revenue: High to Low
                  </button>
                </li>
                <li>
                  <button className="w-full text-left">
                    Annual Profit: Low to High
                  </button>
                </li>
                <li>
                  <button className="w-full text-left">
                    Annual Profit: High to Low
                  </button>
                </li>
              </ul>
              <div className="flex justify-between mt-4">
                <button
                  type="button"
                  className="bg-gray-200 text-gray-700 rounded-full px-4 py-2"
                  onClick={toggleSortOptions}
                >
                  Clear
                </button>
                <button
                  type="button"
                  className="bg-[#190041] text-white rounded-full px-4 py-2"
                  onClick={toggleSortOptions}
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
