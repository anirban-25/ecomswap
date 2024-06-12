"use client";
import Image from "next/image";
import { db } from "@/firebase";
import { collection, addDoc, getDocs, serverTimestamp } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { TbWorldWww } from "react-icons/tb";
import { lineSpinner } from "ldrs";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

// Default values shown

import ReactPhoneInput from "react-phone-input-2";
import ProgressBar from "@/fillUpFormPageComponents/ProgressBar";
import "react-phone-input-2/lib/style.css";
import {
  FaArrowAltCircleDown,
  FaArrowAltCircleUp,
  FaDollarSign,
} from "react-icons/fa";
import ReactFlagsSelect from "react-flags-select";
import {
  Select,
  Option,
  Input,
  Textarea,
  Button,
} from "@material-tailwind/react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const FillForm = () => {
  useEffect(() => {
    // Ensure that the registration runs only on the client side
    if (typeof window !== "undefined") {
      lineSpinner.register();
    }
  }, []);
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [businessClicked, setbusinessClicked] = useState(true);
  const [businessDescriptionClicked, setBusinessDescriptionClicked] =
    useState(false);
  const [financialClicked, setfinancialClicked] = useState(false);
  const [infoClicked, setinfoClicked] = useState(false);
  const [analyticsClicked, setanalyticsClicked] = useState(false);
  const [risksAssociated, setRisksAssociated] = useState("");

  const [skillsRequired, setSkillsRequired] = useState("");
  const [skillsRequiredError, setSkillsRequiredError] = useState("");
  const [countriesTarget, setCountriesTarget] = useState("");
  const [socialMedias, setSocialMedias] = useState("");
  const [support, setSupport] = useState("");
  const [reasonForSale, setReasonForSale] = useState("");
  const [businessDescClicked, setbusinessDescClicked] = useState(false);
  const [analyticsError, setAnalyticsError] = useState(false);
  const [processorError, setProcessorError] = useState(false);
  const [secondNext, setSecondNext] = useState(false);
  const [thirdNext, setThirdNext] = useState(false);
  const [netProfitError, setNetProfitError] = useState("");
  const [revenueError, setRevenueError] = useState("");
  const [firstNext, setFirstNext] = useState(false);
  const [fourthNext, setFourthNext] = useState(false);
  const [fifthNext, setFifthNext] = useState(false);
  const [sixthNext, setSixthNext] = useState(false);
  const [selectedBusiness, setSelectedBusiness] = useState("");
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedSource, setSelectedSource] = useState("");
  const [detailedBusinessDescription, setDetailedBusinessDescription] =
    useState("");
  const [
    bulletDetailedBusinessDescription,
    setBulletDetailedBusinessDescription,
  ] = useState("");
  const [
    detailedBusinessDescriptionError,
    setDetailedBusinessDescriptionError,
  ] = useState("");
  const [
    bulletDetailedBusinessDescriptionError,
    setBulletDetailedBusinessDescriptionError,
  ] = useState("");
  const [selectedAnalytics, setSelectedAnalytics] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [dateError, setdateError] = useState("");
  const [loader, setLoader] = useState(false);
  const [checkUrl, setCheckUrl] = useState("");
  const [error, setError] = useState("");
  const [askingPrice, setAskingPrice] = useState("");
  const [askingPriceError, setAskingPriceError] = useState("");
  const [askingPriceClicked, setAskingPriceClicked] = useState(false);

  const [sourceError, setSourceError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");
  const [industryError, setIndustryError] = useState("");
  const [businessError, setBusinessError] = useState("");
  const [revenue, setRevenue] = useState("");
  const [netprofit, setNetprofit] = useState("");
  const [date, setDate] = useState(null);
  const [selectedIndustry, setSelectedIndustry] = useState("");
  const [selectedProcessors, setSelectedProcessors] = useState([]);
  const [file, setFile] = useState(null);

 
  const handleSubmit = async (event) => {
    setLoader(true);
    event.preventDefault();
    if (
      !name ||
      !email ||
      !phoneNumber ||
      !selectedBusiness ||
      !selectedIndustry ||
      !skillsRequired ||
      !selectedAnalytics ||
      !date ||
      !selectedProcessors ||
      !revenue ||
      !netprofit ||
      !description ||
      !selectedSource ||
      !detailedBusinessDescription ||
      !bulletDetailedBusinessDescription ||
      !askingPrice
    ) {
      setFormError("Please fill out all required fields.");
    } else {
      try {
        // Fetch the highest existing list number
        const querySnapshot = await getDocs(collection(db, "admin"));
        let maxListNumber = 800; // Default to 800 if no entries exist
  
        querySnapshot.forEach((doc) => {
          const listNumber = doc.data().listNumber || 800; // Default to 800 if listNumber is undefined
          maxListNumber = Math.max(maxListNumber, listNumber);
        });
  
        // Increment the highest list number by 1
        const newListNumber = maxListNumber + 1;
  
        // Add the new document with the generated list number
        const docRef= await addDoc(collection(db, "admin"), {
          form1BusinessType: selectedBusiness,
          form1BusinessTypeSub: selectedOptions,
          form1PrimarySourceOfUserAcquisition: selectedSource,
          form1BriefDescription: description,
          form1WebsiteUrl: url,
          form1BusinessStarted: date,
          form1LocationOfBusiness: selectedCountry,
          form1selectedIndustry: selectedIndustry,
          form2trailingTotalRevenue: revenue,
          form2netProfit: netprofit,
          form3GoogleAnalytics: selectedAnalytics,
          form3paymentProcessors: selectedProcessors,
          form4detailedBusinessDescription: detailedBusinessDescription,
          form4bulltedPointstoDescribe: bulletDetailedBusinessDescription,
          form4Risks: risksAssociated,
          form4skillsRequired: skillsRequired,
          form4supportYoucanOffer: support,
          form4CountriesToTarget: countriesTarget,
          form4SocialMedias: socialMedias,
          form5askingPrice: askingPrice,
          form6name: name,
          form6email: email,
          form6phoneNumber: phoneNumber,
          listNumber: newListNumber,
          createdAt: serverTimestamp(),
        });
        const fileName = docRef.id + '.xlsx'
      if (file) {
        const storage = getStorage();
        const fileref = ref(storage, fileName);
        uploadBytes(fileref, file[0])
          .then((data) => {
            getDownloadURL(data.ref).then((url) => {
              console.log("url is: ", url);
            });
          })
          .catch((error) => {
            console.error("Upload failed", error);
          });
        console.log(fileref);
      }
        alert("Form submitted successfully!!");
        console.log("Form submitted with:", { name, email, phoneNumber });
      } catch (error) {
        console.error("Error submitting form:", error);
        setFormError("Error submitting form. Please try again later.");
      }
    }
    setLoader(false);
  };
  
  const handleProcessorsChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedProcessors([...selectedProcessors, value]);
    } else {
      setSelectedProcessors(
        selectedProcessors.filter((processor) => processor !== value)
      );
    }
  };
  const handleSecondFormChange = () => {
    if (firstNext) {
      setfinancialClicked(!financialClicked);
    }
  };
  const handleThirdFormChange = () => {
    if (secondNext) {
      setanalyticsClicked(!analyticsClicked);
    }
  };
  const handleFourthFormChange = () => {
    if (thirdNext) {
      setbusinessDescClicked(!businessDescClicked);
    }
  };
  const handlePhoneChange = (value) => {
    setPhoneNumber(value);
  };
  const handleFifthFormChange = () => {
    if (fourthNext) {
      setAskingPriceClicked(!askingPriceClicked);
    }
  };
  const handleSixthFormChange = () => {
    if (fifthNext) {
      setinfoClicked(!infoClicked);
    }
  };
  const handleThirdFormFirstChange = (e) => {
    setDetailedBusinessDescription(e.target.value);
  };
  const handleThirdFormSecondChange = (e) => {
    setBulletDetailedBusinessDescription(e.target.value);
  };
  const firstNextClick = () => {

    if (
      selectedBusiness &&
      selectedSource &&
      description &&
      date &&
      selectedIndustry
    ) {
      setFirstNext(true);
      setfinancialClicked(true);
      setbusinessClicked(false);
      setBusinessError("");
      setDescriptionError("");
      setSourceError("");
      setIndustryError("");
      setdateError("");
    } else {
      console.log(
        selectedBusiness,
        selectedSource,
        description,
        selectedIndustry
      );
      if (!selectedBusiness) {
        setBusinessError("Please choose a business type");
      } else {
        setBusinessError("");
      }
      if (!selectedSource) {
        setSourceError("Please select a source");
      } else {
        setSourceError("");
      }
      if (!description) {
        setDescriptionError("This field is required");
      } else {
        setDescriptionError("");
      }
      if (!selectedIndustry) {
        setIndustryError("Please select an Industry");
      } else {
        setIndustryError("");
      }
      if (!date) {
        setdateError("Please choose a date");
      } else {
        setdateError("");
      }
    }
  };
  const secondNextClick = () => {
    if (revenue && netprofit) {
      setSecondNext(true);
      setanalyticsClicked(true);
      setRevenueError("");
      setNetProfitError("");
    } else {
      setSecondNext(false);
      setanalyticsClicked(false); //
      if (!revenue) {
        setRevenueError("Please enter the TTM");
      } else {
        setRevenueError("");
      }
      if (!netprofit) {
        setNetProfitError("Net Profit is required");
      } else {
        setNetProfitError("");
      }
    }
  };
  const thirdNextClick = () => {
    if (selectedAnalytics && selectedProcessors.length > 0) {
      setThirdNext(true);
      setbusinessDescClicked(true);
      setAnalyticsError("");
      setProcessorError("");
    } else {
      if (!selectedAnalytics) {
        setAnalyticsError("Please select either Yes or No");
      } else {
        setAnalyticsError("");
      }
      if (selectedProcessors.length === 0) {
        setProcessorError("Select one or more payment processors");
      } else {
        setProcessorError("");
      }
    }
  };
  const fourthNextClick = () => {
    if (
      bulletDetailedBusinessDescription &&
      detailedBusinessDescription &&
      skillsRequired
    ) {
      setFourthNext(true);
      setAskingPriceClicked(true);
      setBulletDetailedBusinessDescriptionError("");
      setDetailedBusinessDescriptionError("");
      setSkillsRequiredError("");
    } else {
      if (!bulletDetailedBusinessDescription) {
        setBulletDetailedBusinessDescriptionError("This field is required");
      } else {
        setBulletDetailedBusinessDescriptionError("");
      }
      if (!detailedBusinessDescription) {
        setDetailedBusinessDescriptionError("This field is required");
      } else {
        setDetailedBusinessDescriptionError("");
      }
      if (!skillsRequired) {
        setSkillsRequiredError("Please mention the skills required");
      } else {
        setSkillsRequiredError("");
      }
    }
  };
  const fifthNextClick = () => {
    if (askingPrice) {
      setFifthNext(true);
      setinfoClicked(true);
      setAskingPriceError("");
    } else {
      if (!askingPrice) {
        setAskingPriceError("Please enter your asking price");
      } else {
        setAskingPriceError("");
      }
    }
  };
  const sixthNextClick = () => {
    if (name && email && phoneNumber) {
      setSixthNext(true);
      setNameError("");
      setEmailError("");
      setPhoneNumberError("");
    } else {
      if (!name) {
        setNameError("Please enter your name");
      } else {
        setNameError("");
      }
      if (!email) {
        setEmailError("Please enter your email");
      } else {
        setEmailError("");
      }
      if (!phoneNumber) {
        setPhoneNumberError("Please enter your phone number");
      } else {
        setPhoneNumberError("");
      }
    }
  };
  const handleAskingPriceChange = (e) => {
    setAskingPrice(e.target.value);
  };
  const handleNetProfitChange = (e) => {
    setNetprofit(e.target.value);
  };
  const handleRevenueChange = (e) => {
    setRevenue(e.target.value);
  };
  const handleIndustryChange = (value) => {
    setSelectedIndustry(value);
  };
  const [selectedCountry, setSelectedCountry] = useState("US");

  const handleSelectCountry = (code) => {
  

    setSelectedCountry(code);
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
  const handleAnalyticsSelection = (e) => {
    setSelectedAnalytics(e.target.value);
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
  useEffect(() => {
    const fields = [
      selectedBusiness,
      selectedIndustry,
      selectedAnalytics,
      date,
      selectedProcessors,
      revenue,
      netprofit,
      description,
      selectedSource,
      detailedBusinessDescription,
      bulletDetailedBusinessDescription,
      skillsRequired,
      askingPrice,
      name,
      phoneNumber,
      email,
    ];
    const filledFields = fields.filter((field) => {
      if (Array.isArray(field)) {
        return field.length > 0;
      }
      return field !== "" && field !== null;
    });
    console.log(filledFields);
    const progress = (filledFields.length / fields.length) * 100;
    setCount(progress);
    if (!askingPrice) {
      setinfoClicked(false);
      setFifthNext(false);
    }
    if (
      !detailedBusinessDescription ||
      !bulletDetailedBusinessDescription ||
      !skillsRequired
    ) {
      setAskingPriceClicked(false);
      setFourthNext(false);
    }
    if (selectedProcessors.length === 0 || !selectedAnalytics) {
      setbusinessDescClicked(false);
      setThirdNext(false);
    }
    if (!revenue || !netprofit) {
      setanalyticsClicked(false);
      setSecondNext(false);
    }
    if (
      !selectedBusiness ||
      !date ||
      !selectedIndustry ||
      !description ||
      !selectedSource
    ) {
      setfinancialClicked(false);
      setFirstNext(false);
    }
  }, [
    selectedBusiness,
    selectedIndustry,
    selectedAnalytics,
    date,
    selectedProcessors,
    revenue,
    netprofit,
    description,
    selectedSource,
    detailedBusinessDescription,
    bulletDetailedBusinessDescription,
    skillsRequired,
    askingPrice,
    name,
    phoneNumber,
    email,
  ]);
  const [formError, setFormError] = useState("");

  return (
    <div>
      <div className="flex items-center justify-center">
        <div className=" p-8  min-w-[55rem] ">
          <form
            onSubmit={handleSubmit}
            className="space-y-4 w-full justify-center"
          >
            <div className=" items-center w-full space-x-3 bg-white shadow-lg p-5 rounded-xl border-[1px] border-gray-700">
              {/*first form */}
              <div
                className="flex  w-full cursor-pointer items-center justify-between"
                onClick={() => setbusinessClicked(!businessClicked)}
              >
                <div className="flex space-x-3">
                  <Image
                    src="/images/one.png"
                    height={30}
                    width={30}
                    alt="number"
                  />
                  <div
                    className={`text-2xl font-gilroy-bold  ${
                      businessClicked ? "text-black" : "text-gray-500"
                    }`}
                  >
                    {" "}
                    Business Overview
                  </div>
                </div>
                <div>
                  {businessClicked ? (
                    <FaArrowAltCircleUp size={30} />
                  ) : (
                    <FaArrowAltCircleDown size={30} />
                  )}
                </div>
              </div>
              {businessClicked && (
                <div className="mt-7">
                  <div>
                    <div className=" font-semibold text-lg">
                      Business Type
                      <span className="pl-2  items-start text-red-700">*</span>
                    </div>
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
                            className="hidden"
                            required
                            onChange={handleSelection}
                          />
                          <label
                            htmlFor={type}
                            className={`rounded-xl block p-2 px-4 border cursor-pointer ${
                              selectedBusiness === type
                                ? "font-gilroy-bold text-black bg-[#FFFBF5] border-black"
                                : "text-gray-600 font-gilroy-medium border-gray-400"
                            }`}
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
                    {businessError && (
                      <p className="text-red-500 font-gilroy-medium  mt-4">
                        {businessError}
                      </p>
                    )}
                  </div>
                  <div>
                    <li className="mt-8 list-none">
                      <div className="text-base font-semibold pb-3">
                        Primary Source of User Acquisition
                        <span className="pl-2  items-start text-red-700">
                          *
                        </span>
                      </div>
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
                              className={`block p-2 px-4 rounded-2xl  border transition-colors duration-300 cursor-pointer ${
                                selectedSource === source.id
                                  ? "font-gilroy-bold text-black bg-[#FFFBF5] border-black "
                                  : "text-gray-600 font-gilroy-medium border-gray-400"
                              }`}
                            >
                              <div className="w-full">{source.label}</div>
                            </label>
                          </li>
                        ))}
                      </ul>
                    </li>

                    {sourceError && (
                      <p className="text-red-500 font-gilroy-medium  mt-4">
                        {sourceError}
                      </p>
                    )}
                  </div>

                  <div>
                    <li className="mt-8 list-none">
                      <div className="text-base font-semibold pb-3 mt-4 mb-3">
                        Brief Description of your Business
                        <span className="pl-2  items-start text-red-700">
                          *
                        </span>
                      </div>
                      <Textarea
                        color="blue"
                        label="Describe in about 200 words"
                        rows={4}
                        value={description}
                        onChange={handleChange}
                        className="w-full p-3 border-2 border-gray-300 resize-y focus:border-blue-500 focus:outline-none"
                      />
                    </li>

                    {descriptionError && (
                      <p className="text-red-500 font-gilroy-medium  mt-4">
                        {descriptionError}
                      </p>
                    )}
                  </div>
                  <div className="font-semibold mt-7 mb-3">
                    Location of the Business
                  </div>
                  <ReactFlagsSelect
                    selected={selectedCountry}
                    onSelect={handleSelectCountry}
                    searchable
                    searchPlaceholder="Search for a country"
                    
                    className="w-full"
                  />
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
                      <div
                        htmlFor="date-input"
                        className="text-base px-2 font-semibold pb-3 mb-3"
                      >
                        When was the business first started?
                        <span className="pl-2  items-start text-red-700">
                          *
                        </span>
                      </div>
                      <div className=" rounded-xl ">
                        <DatePicker
                          selected={date}
                          onChange={handleDateChange}
                          placeholderText="Select date"
                          className="px-3 py-2 rounded-xl border min-w-[20rem] border-gray-400 focus:outline-blue-500 w-full pl-10"
                          dateFormat="yyyy/MM/dd"
                        />
                      </div>
                      {dateError && (
                        <div>
                          <p className="text-red-500 font-gilroy-medium  mt-4">
                            {dateError}
                          </p>
                        </div>
                      )}
                    </li>
                    {/*industry */}
                    <li className="list-none ">
                      <h3
                        className="text-base px-2 font-semibold pb-3 mt-8 mb-3"
                        htmlFor="industry"
                      >
                        Choose an Industry
                        <span className="pl-2  items-start text-red-700">
                          *
                        </span>
                      </h3>
                      <div className="min-w-[20rem] max-w-[20rem]">
                        <Select
                          color="blue"
                          label="Select Industry"
                          value={selectedIndustry}
                          onChange={handleIndustryChange}
                        >
                          <Option value="Automotive">Automotive</Option>
                          <Option value="Business">Business</Option>
                          <Option value="Design and Style">
                            Design and Style
                          </Option>
                          <Option value="Education">Education</Option>
                          <Option value="Electronics">Electronics</Option>
                          <Option value="Entertainment">Entertainment</Option>
                          <Option value="Food and Drink">Food and Drink</Option>
                          <Option value="General Knowledge">
                            General Knowledge
                          </Option>
                          <Option value="Health and Beauty">
                            Health and Beauty
                          </Option>
                          <Option value="Hobbies and Games">
                            Hobbies and Games
                          </Option>
                          <Option value="Home and Garden">
                            Home and Garden
                          </Option>
                          <Option value="Internet">Internet</Option>
                          <Option value="Lifestyle">Lifestyle</Option>
                          <Option value="Sports and Outdoor">
                            Sports and Outdoor
                          </Option>
                          <Option value="Travel">Travel</Option>
                        </Select>
                      </div>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"></div>
                      {industryError && (
                        <div>
                          <p className="text-red-500 font-gilroy-medium  mt-4">
                            {industryError}
                          </p>
                        </div>
                      )}
                    </li>
                  </div>
                  <div className="w-full mt-8 cursor-pointer flex justify-end px-2 ">
                    <Button
                      variant="gradient"
                      onClick={() => {
                        firstNextClick();
                      }}
                    >
                      Next
                    </Button>
                  </div>
                  <ProgressBar progress={count} />
                </div>
              )}
            </div>
            {/*second form */}
            <div
              className={` items-center w-full space-x-3 bg-white  shadow-lg p-5 rounded-xl border-[1px] border-gray-700 ${
                firstNext ? "opacity-100" : "opacity-50"
              }`}
            >
              <div
                className="flex  w-full cursor-pointer items-center justify-between"
                onClick={() => handleSecondFormChange()}
              >
                <div className="flex space-x-3">
                  <Image
                    src="/images/two.png"
                    height={30}
                    width={30}
                    alt="number"
                  />
                  <div
                    className={`text-2xl font-gilroy-bold  ${
                      financialClicked ? "text-black" : "text-gray-500"
                    }`}
                  >
                    {" "}
                    Financial Information
                  </div>
                </div>
                <div>
                  {financialClicked ? (
                    <FaArrowAltCircleUp size={30} />
                  ) : (
                    <FaArrowAltCircleDown size={30} />
                  )}
                </div>
              </div>
              {financialClicked && (
                <div>
                  <div>
                    <div className=" font-semibold mt-9 text-base mb-7">
                      Trailing Total Revenue (TTM) in the Last 12 Months
                      <span className="pl-2  items-start text-red-700">*</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <FaDollarSign size={20} />
                      <Input
                        color="blue"
                        label="Amount in Dollars"
                        value={revenue}
                        onChange={handleRevenueChange}
                        type="number"
                      />
                    </div>

                    {revenueError && (
                      <p className="text-red-500 font-gilroy-medium  mt-4">
                        {revenueError}
                      </p>
                    )}
                  </div>
                  <div>
                    <div className=" font-semibold mt-9 text-base mb-7">
                      Net Profit in the Last 12 Months
                      <span className="pl-2  items-start text-red-700">*</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <FaDollarSign size={20} />
                      <Input
                        color="blue"
                        value={netprofit}
                        onChange={handleNetProfitChange}
                        label="Amount in Dollars"
                        type="number"
                      />
                    </div>
                    {netProfitError && (
                      <p className="text-red-500 font-gilroy-medium  mt-4">
                        {netProfitError}
                      </p>
                    )}
                  </div>
                  <div>
                    <div className="font-semibold mt-8">
                      Upload your Excel file of Profit and Loss (PnL) in a Given
                      Format{" "}
                      <span className="text-blue-800">(Sample file)</span>
                    </div>
                    <input
                      type="file"
                      accept=".xlsx,.xls"
                      onChange={(e) => setFile(e.target.files)}
                      className="block mt-4 w-full  bg-[#221d33] text-white border border-gray-300 rounded-lg font-gilroy-medium text-base cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200 ease-in-out"
                    />
                  </div>
                  <div className="w-full mt-8 cursor-pointer flex justify-end px-2 ">
                    <Button
                      variant="gradient"
                      onClick={() => {
                        secondNextClick();
                      }}
                    >
                      Next
                    </Button>
                  </div>

                  <ProgressBar progress={count} />
                </div>
              )}
            </div>
            {/*third form */}
            <div
              className={` items-center w-full space-x-3 bg-white  shadow-lg p-5 rounded-xl border-[1px] border-gray-700 ${
                secondNext ? "opacity-100" : "opacity-50"
              }`}
            >
              <div
                className="flex  w-full cursor-pointer items-center justify-between"
                onClick={() => handleThirdFormChange()}
              >
                <div className="flex space-x-3">
                  <Image
                    src="/images/three.png"
                    height={30}
                    width={30}
                    alt="number"
                  />
                  <div
                    className={`text-2xl font-gilroy-bold  ${
                      analyticsClicked ? "text-black" : "text-gray-500"
                    }`}
                  >
                    {" "}
                    Analytics and Tools
                  </div>
                </div>
                <div>
                  {analyticsClicked ? (
                    <FaArrowAltCircleUp size={30} />
                  ) : (
                    <FaArrowAltCircleDown size={30} />
                  )}
                </div>
              </div>
              {analyticsClicked && (
                <div className="mt-7">
                  <div className=" font-semibold">
                    Do you currently have either Google Analytics or Clicky
                    installed?
                    <span className="pl-2  items-start text-red-700">*</span>
                  </div>
                  <ul className="grid w-full gap-4 md:grid-cols-3 ratio-list mt-5">
                    {["Yes", "No"].map((type) => (
                      <li key={type} className="relative">
                        <input
                          type="radio"
                          id={type}
                          name="analytics"
                          value={type}
                          required
                          className="hidden"
                          onChange={handleAnalyticsSelection}
                        />
                        <label
                          htmlFor={type}
                          className={`  rounded-xl block p-2 px-4 border cursor-pointer ${
                            selectedAnalytics === type
                              ? "font-gilroy-bold text-black bg-[#FFFBF5] border-black  transition-colors duration-300"
                              : "text-gray-600 font-gilroy-medium border-gray-400"
                          }`}
                        >
                          <div className="w-full">{type}</div>
                        </label>
                      </li>
                    ))}
                  </ul>
                  {analyticsError && (
                    <div className="text-red-500 font-gilroy-medium  mt-4">
                      {analyticsError}
                    </div>
                  )}
                  {selectedAnalytics == "Yes" && (
                    <div className=" text-sm mt-5 font-gilroy-medium text-gray-600">
                      {" "}
                      <span className="font-gilroy-bold">Note-</span>Please
                      share the view access details with{" "}
                      <a href="http://admin@ecomswap.io" target="_blank">
                        {" "}
                        <span className="text-blue-600 underline">
                          {" "}
                          admin@ecomswap.io
                        </span>
                      </a>{" "}
                      <br />
                      Watch this sample{" "}
                      <a
                        href="https://www.youtube.com/watch?v=_zzPxdERKJg"
                        target="_blank"
                      >
                        <span className="text-blue-600 underline">video</span>
                      </a>
                    </div>
                  )}
                  <div className="p-4">
                    <h3 className="text-lg font-semibold pb-3 mt-8">
                      Which payment processors do you use?
                      <span className="pl-2  items-start text-red-700">*</span>
                    </h3>
                    <ul className="grid w-full gap-4 md:grid-cols-3">
                      {[
                        "PayPal",
                        "Shopify-payments",
                        "Klarna",
                        "Stripe",
                        "Other",
                      ].map((processor) => (
                        <li key={processor}>
                          <input
                            type="checkbox"
                            id={processor}
                            value={processor}
                            className="hidden"
                            onChange={handleProcessorsChange}
                          />
                          <label
                            htmlFor={processor}
                            className={`block rounded-xl p-2 px-2 border border-gray-400  cursor-pointer transition-colors duration-300 ${
                              selectedProcessors.includes(processor)
                                ? "border-black text-black bg-[#FFFBF5] font-gilroy-bold"
                                : " text-gray-600 font-gilroy-medium"
                            }`}
                          >
                            <div className="w-full">{processor}</div>
                          </label>
                        </li>
                      ))}
                    </ul>
                    {processorError && (
                      <div className="text-red-500 font-gilroy-medium  mt-4">
                        {processorError}
                      </div>
                    )}
                    <p className="mt-4 text-sm font-gilroy-medium text-gray-600">
                      <b>Note-</b> Please share the view access details with{" "}
                      <a
                        className="text-primary text-blue-500"
                        href="mailto:admin@ecomswap.io"
                      >
                        admin@ecomswap.io
                      </a>
                    </p>
                  </div>
                  <div className="w-full mt-8 cursor-pointer flex justify-end px-2 ">
                    <Button
                      variant="gradient"
                      onClick={() => {
                        thirdNextClick();
                      }}
                    >
                      Next
                    </Button>
                  </div>

                  <ProgressBar progress={count} />
                </div>
              )}
            </div>
            {/*fourth form */}
            <div
              className={` items-center w-full space-x-3 bg-white  shadow-lg p-5 rounded-xl border-[1px] border-gray-700 ${
                thirdNext ? "opacity-100" : "opacity-50"
              }`}
            >
              <div
                className="flex  w-full cursor-pointer items-center justify-between"
                onClick={() => handleFourthFormChange()}
              >
                <div className="flex space-x-3">
                  <Image
                    src="/images/four.png"
                    height={30}
                    width={30}
                    alt="number"
                  />
                  <div
                    className={`text-2xl font-gilroy-bold  ${
                      businessDescClicked ? "text-black" : "text-gray-500"
                    }`}
                  >
                    {" "}
                    Business Description
                  </div>
                </div>
                <div>
                  {businessDescClicked ? (
                    <FaArrowAltCircleUp size={30} />
                  ) : (
                    <FaArrowAltCircleDown size={30} />
                  )}
                </div>
              </div>
              {businessDescClicked && (
                <div className="mt-7">
                  <div>
                    <div className="font-semibold mb-5">
                      Detailed Business Description (200 words)
                      <span className="pl-2  items-start text-red-700">*</span>
                    </div>
                    <Textarea
                      color="blue"
                      label="Describe in about 200 words"
                      rows={3}
                      value={detailedBusinessDescription}
                      onChange={handleThirdFormFirstChange}
                      className="w-full p-3 border-2 border-gray-300 resize-y focus:border-blue-500 focus:outline-none"
                    />
                  </div>
                  {detailedBusinessDescriptionError && (
                    <div className="text-red-500 font-gilroy-medium  mt-4">
                      {detailedBusinessDescriptionError}
                    </div>
                  )}
                  <div>
                    <div className="font-semibold mb-5 mt-7">
                      Use bullet points to describe future business
                      opportunities
                      <span className="pl-2  items-start text-red-700">*</span>
                    </div>
                    <Textarea
                      color="blue"
                      label="Describe in points"
                      rows={3}
                      value={bulletDetailedBusinessDescription}
                      placeholder="
                    1.Expanding to paid advertisement 
                    2.Improve SEO
                    3.Improve Retention rates"
                      onChange={handleThirdFormSecondChange}
                      className="w-full p-3 pt-8 focus:pt-3 border-2 border-gray-300 resize-y focus:border-blue-500 focus:outline-none"
                    />
                  </div>
                  {bulletDetailedBusinessDescriptionError && (
                    <div className="text-red-500 font-gilroy-medium  mt-4">
                      {bulletDetailedBusinessDescriptionError}
                    </div>
                  )}
                  <div className="font-semibold mb-5 mt-7">
                    Risks associated with business
                  </div>
                  <Textarea
                    color="blue"
                    label="Bullet out the Risks"
                    rows={3}
                    value={risksAssociated}
                    placeholder="1.Due to constant changes in technology, competition, and the market as a whole, the software could become less relevant.
                    2.Subscription services require customer service and the ability to stay on top of the subscribers requests."
                    onChange={(event) => setRisksAssociated(event.target.value)}
                    className="w-full p-3 pt-8 focus:pt-3 border-2 border-gray-300 resize-y focus:border-blue-500 focus:outline-none"
                  />
                  <div className="font-semibold mb-5 mt-7">
                    Skills required to run this business
                    <span className="pl-2  items-start text-red-700">*</span>
                  </div>
                  <Textarea
                    color="blue"
                    label="Describe the skills needed"
                    rows={3}
                    value={skillsRequired}
                    placeholder="1.Completing inventory management
                    2.Managing warehouse employee to fulfil FBM orders"
                    onChange={(event) => setSkillsRequired(event.target.value)}
                    className="w-full p-3 pt-8 focus:pt-3 border-2 border-gray-300 resize-y focus:border-blue-500 focus:outline-none"
                  />
                  {skillsRequiredError && (
                    <div className="text-red-500 font-gilroy-medium  mt-4">
                      {skillsRequiredError}
                    </div>
                  )}
                  <div className="font-semibold mb-5 mt-7">
                    What support can you offer the new owner after the sale?
                  </div>
                  <Textarea
                    color="blue"
                    label="Your support in brief"
                    rows={3}
                    value={support}
                    placeholder="1.The Seller is willing to offer at least 30 days of email support and/or calls to ensure a smooth transition for the Buyer."
                    onChange={(event) => setSupport(event.target.value)}
                    className="w-full p-3 pt-8 focus:pt-3 borderr-2 border-gray-300 resize-y focus:border-blue-500 focus:outline-none"
                  />

                  <div className="font-semibold mb-5 mt-7">
                    Countries Target
                  </div>
                  <Input
                    color="blue"
                    value={countriesTarget}
                    onChange={(e) => setCountriesTarget(e.target.value)}
                    label="Countires :"
                    placeholder="Example: USA, Canada etc.."
                    type="text"
                  />
                  <div className="font-semibold mb-5 mt-7">Social Medias</div>
                  <Input
                    color="blue"
                    value={socialMedias}
                    onChange={(e) => setSocialMedias(e.target.value)}
                    label="Social Media Links :"
                    placeholder="Social Media Profile Links"
                    type="text"
                  />

                  <div className="w-full mt-8 cursor-pointer flex justify-end px-2 ">
                    <Button
                      variant="gradient"
                      onClick={() => {
                        fourthNextClick();
                      }}
                    >
                      Next
                    </Button>
                  </div>

                  <ProgressBar progress={count} />
                </div>
              )}
            </div>
            {/*fifth form */}
            <div
              className={` items-center w-full space-x-3 bg-white  shadow-lg p-5 rounded-xl border-[1px] border-gray-700 ${
                fourthNext ? "opacity-100" : "opacity-50"
              }`}
            >
              <div
                className="flex  w-full cursor-pointer items-center justify-between"
                onClick={() => handleFifthFormChange()}
              >
                <div className="flex space-x-3">
                  <Image
                    src="/images/five.png"
                    height={30}
                    width={30}
                    alt="number"
                  />
                  <div
                    className={`text-2xl font-gilroy-bold  ${
                      askingPriceClicked ? "text-black" : "text-gray-500"
                    }`}
                  >
                    {" "}
                    Asking Price
                  </div>
                </div>
                <div>
                  {askingPriceClicked ? (
                    <FaArrowAltCircleUp size={30} />
                  ) : (
                    <FaArrowAltCircleDown size={30} />
                  )}
                </div>
              </div>
              {askingPriceClicked && (
                <div className="mt-7">
                  <div className=" font-semibold ">
                    What&apos;s your expected Asking Price?
                  </div>
                  <div className="flex items-center space-x-3 mt-5">
                    <FaDollarSign size={20} />
                    <Input
                      color="blue"
                      value={askingPrice}
                      onChange={handleAskingPriceChange}
                      label="Amount in Dollars"
                      type="number"
                    />
                  </div>
                  {askingPriceError && (
                    <p className="text-red-500 font-gilroy-medium  mt-4">
                      {askingPriceError}
                    </p>
                  )}
                  <div className=" font-gilroy-medium text-gray-600 max-w-[40rem] mt-5">
                    Note: Please note that the amount you're asking for may not
                    be the same as the amount we will list your startup for. We
                    will contact you in case of any changes.
                  </div>
                  <div className="w-full mt-8 cursor-pointer flex justify-end px-2 ">
                    <Button
                      variant="gradient"
                      onClick={() => {
                        fifthNextClick();
                      }}
                    >
                      Next
                    </Button>
                  </div>

                  <ProgressBar progress={count} />
                </div>
              )}
            </div>
            {/*sixth form */}
            <div
              className={` items-center w-full space-x-3 bg-white  shadow-lg p-5 rounded-xl border-[1px] border-gray-700 ${
                fifthNext ? "opacity-100" : "opacity-50"
              }`}
            >
              <div
                className="flex  w-full cursor-pointer items-center justify-between"
                onClick={() => handleSixthFormChange()}
              >
                <div className="flex space-x-3">
                  <Image
                    src="/images/six.png"
                    height={30}
                    width={30}
                    alt="number"
                  />
                  <div
                    className={`text-2xl font-gilroy-bold  ${
                      infoClicked ? "text-black" : "text-gray-500"
                    }`}
                  >
                    {" "}
                    Personal Information
                  </div>
                </div>
                <div>
                  {infoClicked ? (
                    <FaArrowAltCircleUp size={30} />
                  ) : (
                    <FaArrowAltCircleDown size={30} />
                  )}
                </div>
              </div>
              {infoClicked && (
                <div>
                  <div className=" font-semibold mt-7">
                    Personal Information
                  </div>
                  <div className="mt-5 mb-3 font-gilroy-medium text-gray-500">
                    Name
                    <span className="pl-2  items-start text-red-700">*</span>
                  </div>
                  <Input
                    color="blue"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    label="Enter your Name"
                    type="text"
                  />
                  {nameError && (
                    <div className="text-red-500 font-gilroy-medium  mt-4">
                      {nameError}
                    </div>
                  )}
                  <div className="flex justify-between">
                    <div>
                      <div className="mt-5 mb-3 font-gilroy-medium text-gray-500">
                        Email ID
                        <span className="pl-2  items-start text-red-700">
                          *
                        </span>
                      </div>
                      <Input
                        color="blue"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        label="Enter your Email Address"
                        className="min-w-[20rem]"
                        type="email"
                      />
                      {emailError && (
                        <div className="text-red-500 font-gilroy-medium  mt-4">
                          {emailError}
                        </div>
                      )}
                    </div>
                    <div>
                      <div className="mt-5 mb-3 font-gilroy-medium text-gray-500">
                        Phone Number
                        <span className="pl-2  items-start text-red-700">
                          *
                        </span>
                      </div>
                      <div className="w-full">
                        {selectedCountry && (
                          <ReactPhoneInput
                            country={selectedCountry.toLowerCase()}
                            value={phoneNumber}
                            onChange={handlePhoneChange}
                            placeholder="Enter phone number"
                            containerClass="w-full mb-4 "
                            inputClass="w-full border border-gray-300 p-2 rounded-md"
                            dropdownClass="country-dropdown"
                          />
                        )}
                      </div>
                      {phoneNumberError && (
                        <div className="text-red-500 font-gilroy-medium  mt-4">
                          {phoneNumberError}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="w-full mt-8 cursor-pointer flex justify-end px-2 ">
                    <Button
                      variant="gradient"
                      onClick={() => {
                        sixthNextClick();
                      }}
                    >
                      Next
                    </Button>
                  </div>

                  <ProgressBar progress={count} />
                </div>
              )}
            </div>
            {sixthNext && (
              <div>
                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  {!loader ? (
                    <div>Submit</div>
                  ) : (
                    <div>
                      <div className="w-full flex justify-center">
                        <l-line-spinner
                          size="30"
                          stroke="3"
                          speed="1"
                          color="white"
                        ></l-line-spinner>
                      </div>
                    </div>
                  )}
                </button>
              </div>
            )}
            {formError && (
              <p className="text-red-500 text-sm font-gilroy-bold italic">
                {formError}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default FillForm;
