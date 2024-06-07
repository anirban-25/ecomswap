"use client";
import Image from "next/image";
import React, { useState } from "react";
import { TbWorldWww } from "react-icons/tb";
import { FaArrowAltCircleUp } from "react-icons/fa";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const FillForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [clicked, setClicked] = useState(false);
  const [selectedBusiness, setSelectedBusiness] = useState("");
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedSource, setSelectedSource] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [checkUrl, setCheckUrl] = useState("");
  const [error, setError] = useState("");
  const [date, setDate] = useState(null);
  const [selectedIndustry, setSelectedIndustry] = useState("");

  const handleIndustryChange = (event) => {
    setSelectedIndustry(event.target.value);
    console.log(`Selected industry: ${event.target.value}`);
  };

  const handleDateChange = (selectedDate) => {
    setDate(selectedDate);
  };

  const handleWebsiteChange = (e) => {
    setCheckUrl(e.target.value);
    const inputValue = e.target.value;
    const isValidUrl = /^(ftp|http|https):\/\/[^ "]+$/.test(inputValue);
    if (isValidUrl || inputValue === "") {
      setUrl(inputValue);
      setError("");
    } else {
      setError("Please enter a valid website URL");
    }
  };
  const handleChange = (e) => {
    setDescription(e.target.value);
  };
  const handleSourceChange = (e) => {
    setSelectedSource(e.target.value);
  };
  const handleSelection = (e) => {
    setSelectedBusiness(e.target.value);
  };

  const handleOptionChange = (e) => {
    const { value, checked } = e.target;
    setSelectedOptions((prevOptions) =>
      checked
        ? [...prevOptions, value]
        : prevOptions.filter((option) => option !== value)
    );
  };

  const isEcommerceVisible =
    selectedBusiness === "Shopify" || selectedBusiness === "E-commerce";
  return (
    <div>
      <div className="flex items-center justify-center">
        <div className=" p-8  min-w-[55rem] ">
          <form onSubmit={() => {}} className="space-y-4 w-full justify-center">
            <div className=" items-center w-full space-x-3 bg-white shadow-lg p-5 rounded-xl border-[1px] border-gray-700">
              <div
                className="flex  w-full cursor-pointer items-center justify-between"
                onClick={() => setClicked(!clicked)}
              >
                <div className="flex space-x-3">
                  <Image
                    src="/images/one.png"
                    height={30}
                    width={30}
                    alt="number"
                  />
                  <div className="text-2xl font-gilroy-bold text-gray-500 ">
                    {" "}
                    Business Overview
                  </div>
                </div>
                <div>
                  <FaArrowAltCircleUp size={30} />
                </div>
              </div>
              {true && (
                <div className="mt-7">
                  <div>
                    <div className=" font-semibold text-lg">Business Type</div>
                    <ul className="grid w-full gap-4 md:grid-cols-3 ratio-list mt-5">
                      {[
                        "Shopify",
                        "E-commerce",
                        "Amazon-FBA",
                        "SaaS",
                        "Content",
                        "Others",
                      ].map((type) => (
                        <li key={type} className="relative">
                          <input
                            type="radio"
                            id={type}
                            name="type_of_business"
                            value={type}
                            className="hidden peer"
                            required
                            onChange={handleSelection}
                          />
                          <label
                            htmlFor={type}
                            className=" text-gray-600  font-gilroy-medium block p-2 px-4 border cursor-pointer peer-checked:bg-[#FFFBF5] peer-checked:font-gilroy-bold peer-checked:border-black rounded-2xl peer-checked:text-black transition-colors duration-300"
                          >
                            <div className="w-full">{type}</div>
                          </label>
                        </li>
                      ))}
                    </ul>
                    <div className="w-full flex justify-center">
                      {isEcommerceVisible && (
                        <div className="flex min-w-[40rem] max-w-[40rem] justify-center">
                          <div className="   mt-4 p-4 rounded-lg bg-white">
                            <h3 className="text-base font-semibold text-center">
                              How do you make money?
                            </h3>
                            <p className="text-center mb-2 font-gilroy-light">
                              Check any that apply
                            </p>

                            <div className="space-y-4">
                              {[
                                {
                                  id: "option1",
                                  value: "Shipping physical products",
                                  imgSrc: "/images/box.png",
                                  title: "Shipping physical products",
                                  description:
                                    "Orders are fulfilled and shipped from your home, business, warehouse, or distribution center.",
                                },
                                {
                                  id: "option2",
                                  value: "Shipping digital products",
                                  imgSrc: "/images/product.png",
                                  title: "Shipping digital products",
                                  description:
                                    "Products are digital (eBooks, courses, etc.).",
                                },
                                {
                                  id: "option3",
                                  value: "Dropshipping",
                                  imgSrc: "/images/dropshipping.png",
                                  title: "Dropshipping",
                                  description:
                                    "Orders are fulfilled and shipped directly from a third-party logistics company (3PL), including Amazon FBA.",
                                },
                                {
                                  id: "option4",
                                  value: "Print-on-demand",
                                  imgSrc: "/images/printer.png",
                                  title: "Print-on-demand",
                                  description:
                                    "Orders are fulfilled and shipped from a printing company such as Printify or Amazon.",
                                },
                              ].map((option) => (
                                <div
                                  key={option.id}
                                  className={`flex p-2 rounded-md items-center border transition-shadow hover:shadow-md duration-500 ${
                                    selectedOptions.includes(option.value)
                                      ? "bg-[#FFFBF5] border-black transition-all duration-300"
                                      : ""
                                  }`}
                                >
                                  <input
                                    type="checkbox"
                                    id={option.id}
                                    name="ecommerce-option"
                                    value={option.value}
                                    className="mr-2"
                                    onChange={handleOptionChange}
                                  />
                                  <label
                                    htmlFor={option.id}
                                    className="flex items-center cursor-pointer w-full"
                                  >
                                    <img
                                      src={option.imgSrc}
                                      alt={option.title}
                                      className="w-10 h-10 mr-2"
                                    />
                                    <div>
                                      <h3 className="text-base font-gilroy-medium">
                                        {option.title}
                                      </h3>
                                      <div className="text-sm font-gilroy-regular">
                                        {option.description}
                                      </div>
                                    </div>
                                  </label>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
              <div>
                <li className="mt-8 list-none">
                  <h3 className="text-base font-semibold pb-3">
                    Primary Source of User Acquisition
                  </h3>
                  <ul className="grid w-full gap-4 md:grid-cols-3 checkbox-list">
                    {[
                      { id: "SEO", label: "SEO" },
                      { id: "Social-Media", label: "Social Media" },
                      { id: "Paid-Ads", label: "Paid Ads" },
                      {
                        id: "Affiliate-Marketing",
                        label: "Influencer Marketing",
                      },
                    ].map((source) => (
                      <li key={source.id}>
                        <input
                          type="radio"
                          id={source.id}
                          value={source.id}
                          className="hidden peer"
                          name="user_acquisition_source"
                          checked={selectedSource === source.id}
                          onChange={handleSourceChange}
                        />
                        <label
                          htmlFor={source.id}
                          className={`block p-2 px-4 rounded-2xl font-gilroy-medium border transition-colors duration-300 cursor-pointer ${
                            selectedSource === source.id
                              ? "font-gilroy-bold bg-[#FFFBF5] border-black "
                              : ""
                          }`}
                        >
                          <div className="w-full">{source.label}</div>
                        </label>
                      </li>
                    ))}
                  </ul>
                </li>
              </div>

              <div>
                <li className="mt-8 list-none">
                  <h3 className="text-base font-semibold pb-3 mt-4">
                    Brief Description of your Business
                  </h3>
                  <textarea
                    id="message"
                    rows="4"
                    className="w-full p-3 rounded-xl border-2 border-gray-300 resize-y focus:border-blue-500 focus:outline-none"
                    placeholder="Describe in about 200 words.."
                    value={description}
                    onChange={handleChange}
                  ></textarea>
                </li>
              </div>

              <div>
                <li className="mt-8 list-none">
                  <h3
                    htmlFor="input-group-1"
                    className="text-base font-semibold pb-3 mt-8"
                  >
                    Website URL
                  </h3>
                  <div className=" mb-6 rounded-xl flex space-x-1  items-center  border-2 border-gray-300 focus:border-blue-500 focus:shadow-md">
                    <div className="pl-3">
                      <TbWorldWww size={22} />
                    </div>
                    <input
                      type="text"
                      id="input-group-1"
                      className="w-full p-2 focus:outline-none"
                      placeholder="http://"
                      value={checkUrl}
                      onChange={handleWebsiteChange}
                    />
                  </div>
                  {error && <p className="text-red-500">{error}</p>}
                </li>
              </div>
              <div className="flex space-x-3 justify-around">
                <li className="mt-8 list-none">
                  <h3
                    htmlFor="date-input"
                    className="text-base px-2 font-semibold pb-3"
                  >
                    When was the business first started?
                  </h3>
                  <div className=" rounded-xl ">
                    <DatePicker
                      selected={date}
                      onChange={handleDateChange}
                      placeholderText="Select date"
                      className="px-3 py-2 rounded-xl border min-w-[20rem] border-gray-400 focus:outline-blue-500 w-full pl-10"
                      dateFormat="yyyy/MM/dd"
                    />
                  </div>
                </li>
                <li className="list-none ">
                  <h3
                    className="text-base px-2 font-semibold pb-3 mt-8"
                    htmlFor="industry"
                  >
                    Choose an Industry
                  </h3>
                  <select
                    id="industry"
                    className="px-3 py-2  cursor-pointer rounded-xl border border-gray-300 focus:outline-blue-500 min-w-[20rem] w-full"
                    onChange={handleIndustryChange}
                  >
                    <option value="Automotive" className="">Automotive</option>
                    <option value="Business">Business</option>
                    <option value="Design and Style">Design and Style</option>
                    <option value="Education">Education</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Food and Drink">Food and Drink</option>
                    <option value="General Knowledge">General Knowledge</option>
                    <option value="Health and Beauty">Health and Beauty</option>
                    <option value="Hobbies and Games">Hobbies and Games</option>
                    <option value="Home and Garden">Home and Garden</option>
                    <option value="Internet">Internet</option>
                    <option value="Lifestyle">Lifestyle</option>
                    <option value="Sports and Outdoor">
                      Sports and Outdoor
                    </option>
                    <option value="Travel">Travel</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5.293 7.293L10 12l4.707-4.707-1.414-1.414L10 9.172 6.707 5.879 5.293 7.293z"/></svg>
        </div>
                </li>
              </div>
            </div>

            <div></div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FillForm;
