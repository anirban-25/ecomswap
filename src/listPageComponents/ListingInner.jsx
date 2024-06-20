"use client";
import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import InnerPageListingCard from "@/listPageComponents/InnerPageListingCard";
import { superballs } from "ldrs";
import InnerPageCard from "@/listPageComponents/InnerPageCard";
import { BsExclamationTriangle } from "react-icons/bs";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import Image from "next/image";
import { collection, getDocs, Timestamp, DocumentData } from "firebase/firestore";
import { db } from "@/firebase";

const initialFormData = {
  businessType: "",
  businessTypeSub: "",
  userAcquisition: "",
  description: "",
  websiteUrl: "",
  location: "",
  startDate: "",
  revenue: "",
  profit: "",
  analytics: "",
  industryType: "",
  paymentType: "",
  countriesTarget: "",
  socialLinks: "",
  risks: "• ",
  bullet: "• ",
  detailed: "",
  skills: "• ",
  support: "• ",
  askingprice: "",
  adminStatus: "Pending",
  file: "",
  netrevenuepercentage: "",
  netprofitstatus: "",
  netrevenuestatus: "",
  netprofitpercentage: "",
  monthlynetprofit: "",
  monthlyrevenue: "",
  trafficpercentage: "",
  trafficstatus: "",
  monthlymultiple: "",
  image: "",
  name: "",
  email: "",
  phnumber: "",
  isVerified: "",
  tags: "",
};

const countryNames = {
  AF: "Afghanistan",
  AL: "Albania",
  DZ: "Algeria",
  // ... other country codes and names
};

const getCountryName = (countryCode) => {
  return countryNames[countryCode] || "";
};

const ListingInner = () => {
  const [loader, setLoader] = useState(true);
  const [dataForm, setDataForm] = useState([]);
  const [formData, setFormData] = useState(initialFormData);
  const listings = [
    {
      id: 1,
      description: "Electronic commerce (e-commerce) refers to companies and individuals that buy and sell goods and services over the internet...",
      price: 123133222,
      thumbnailUrl: "/images/Rectangle 1316.png",
      topRated: false,
      isNew: true,
      trafficPercentage: -5,
      type: "eCommerce",
      industry: "Home and Garden",
      monetization: "ecommerce",
      location: "United States",
      revenue: "+25%",
      traffic: "-5%",
    },
    {
      id: 2,
      description: "lorem lorem lorem",
      price: 10,
      thumbnailUrl: "/images/furniture.png",
      topRated: true,
      isNew: false,
      trafficPercentage: 10,
      type: "eCommerce",
      industry: "Furniture",
      monetization: "eCommerce",
      location: "Canada",
      profit: "+19%",
      revenue: "-15%",
      traffic: "-10%",
    },
    {
      id: 3,
      description: "shik shak shook",
      price: 35,
      thumbnailUrl: "/images/Rectangle 1316.png",
      topRated: true,
      isNew: false,
      trafficPercentage: 30,
      type: "eCommerce",
      industry: "Furniture",
      monetization: "eCommerce",
      location: "Canada",
      profit: "+10%",
      revenue: "-15%",
      traffic: "+10%",
    },
  ];

  useEffect(() => {
    superballs.register();

    const fetchFormData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "admin"));
        const listings = [];

        querySnapshot.forEach((doc) => {
          const docData = doc.data();
          const timestamp = docData.createdAt;
          let createdat = "";

          if (timestamp && typeof timestamp.toDate === "function") {
            const date = timestamp.toDate();
            const year = date.getFullYear();
            const month = ("0" + (date.getMonth() + 1)).slice(-2);
            const day = ("0" + date.getDate()).slice(-2);
            createdat = `${year}-${month}-${day}`;
          } else {
            console.error("Invalid Firestore Timestamp format");
          }

          if (docData.listNumber === parseInt(params.list)) {
            const imageUrl = `https://firebasestorage.googleapis.com/v0/b/ecomswap-91377.appspot.com/o/${doc.id}.jpg?alt=media&token=33326558-ed33-4627-9c6d-6a2daeb71a6b`;
            setFormData({
              businessType: docData.form1BusinessType || "",
              businessTypeSub: docData.form1BusinessTypeSub || "",
              userAcquisition: docData.form1PrimarySourceOfUserAcquisition || "",
              description: docData.form1BriefDescription || "",
              websiteUrl: docData.form1WebsiteUrl || "",
              location: getCountryName(docData.form1LocationOfBusiness) || "",
              startDate: docData.form1BusinessStarted || "",
              revenue: docData.form2trailingTotalRevenue || "",
              profit: docData.form2netProfit || "",
              analytics: docData.form3GoogleAnalytics || "",
              industryType: docData.form1selectedIndustry || "",
              paymentType: docData.form3paymentProcessors || "",
              countriesTarget: docData.form4CountriesToTarget || "",
              socialLinks: docData.form4SocialMedias || "",
              risks: docData.form4Risks || "• ",
              bullet: docData.form4bulltedPointstoDescribe || "• ",
              detailed: docData.form4detailedBusinessDescription || "",
              skills: docData.form4supportYoucanOffer || "• ",
              support: docData.form4skillsRequired || "• ",
              askingprice: docData.form5askingPrice || "",
              adminStatus: docData.adminStatus || "Pending",
              file: "",
              netrevenuepercentage: docData.netrevenuepercentage || "",
              netprofitstatus: docData.netprofitstatus || "",
              netrevenuestatus: docData.netrevenuestatus || "",
              netprofitpercentage: docData.netprofitpercentage || "",
              monthlynetprofit: docData.monthlynetprofit || "",
              monthlyrevenue: docData.monthlyrevenue || "",
              trafficpercentage: docData.trafficpercentage || "",
              trafficstatus: docData.trafficstatus || "",
              monthlymultiple: docData.monthlymultiple || "",
              image: imageUrl,
              name: docData.form6name || "",
              email: docData.form6email || "",
              phnumber: docData.form6phoneNumber || "",
              isVerified: docData.isVerified || "",
              tags: docData.tags || "",
            });
          }
        });

        setLoader(false);
        setDataForm(listings);
      } catch (error) {
        console.error("Error fetching data from Firestore:", error);
      }
    };
    fetchFormData();
  }, []);

  return (
    <div>
      {loader && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-white bg-opacity-75 z-50">
          <div className=" text-black ">

<l-superballs
  size="40"
  speed="1.4" 
  color="black" 
></l-superballs>
        </div>
        </div>
      )}
      <div className={`relative ${loader ? "blur-sm" : ""}`}>
        <div className="px-10 py-7">
          <Header />
        </div>
        <div className="mt-10 flex px-10 items-stretch">
          <div className="   w-full h-full">
            <InnerPageListingCard formData={formData} />
          </div>
        </div>
        <div className="px-10">
          <div className="mt-10 border-[#D8D8D8] border bg-white shadow-md p-5 rounded-2xl">
            <div className=" font-gilroy-bold text-black text-xl">
              Listing Details
            </div>
            <div className="mt-3  font-gilroy-medium">{formData.detailed}</div>
          </div>
          <div className="mt-10 border-[#D8D8D8] border bg-white shadow-md p-5 rounded-2xl">
            <div className=" font-gilroy-bold text-black text-xl">
              Profit and Loss
            </div>
            <div className="mt-5 px-5 ">
              <div className="flex justify-between">
                <div>Monthly Revenue</div>
                <div className="font-gilroy-bold text-[#7850FF] text-lg">
                  ${formData.monthlyrevenue}
                </div>
              </div>
              <div className="flex justify-between">
                <div>Monthly Net Profit</div>
                <div className="font-gilroy-bold text-[#7850FF] text-lg">
                  ${formData.profit}
                </div>
              </div>
              <div className="flex justify-between">
                <div>Total revenue Percentage over the past 12 Months</div>
                <div className="font-gilroy-bold text-[#7850FF] text-lg">
                  {formData.revenue}%
                </div>
              </div>
              <div className="flex justify-between">
                <div>Total profit Percentage over the past 12 Months</div>
                <div className="font-gilroy-bold text-[#7850FF] text-lg">
                  {formData.netprofitpercentage}%
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 border-[#D8D8D8] border bg-white shadow-md p-5 rounded-2xl">
            <div className="flex items-center space-x-2">
              <div className="text-black">
                <Image
                  src="/images/opportunity1.svg"
                  height={25}
                  width={25}
                  alt="logo"
                />
              </div>
              <div className=" font-gilroy-bold text-black text-xl flex items-center">
                Opportunities
              </div>
            </div>
            <div className="mt-3  font-gilroy-medium">{formData.detailed}</div>
          </div>
          <div className="mt-10 border-[#D8D8D8] border bg-white shadow-md p-5 rounded-2xl">
            <div className="flex items-center space-x-2">
              <div className="text-black">
                <BsExclamationTriangle size={25} />
              </div>
              <div className=" font-gilroy-bold text-black text-xl flex items-center">
                Risks
              </div>
            </div>
            <div className="mt-3  font-gilroy-medium">{formData.risks}</div>
          </div>
          <div className="mt-10 border-[#D8D8D8] border bg-white shadow-md p-5 rounded-2xl">
            <div className="flex items-center space-x-2">
              <div className="text-black">
                <Image
                  src="/images/bulb.svg"
                  height={25}
                  width={25}
                  alt="logo"
                />
              </div>
              <div className=" font-gilroy-bold text-black text-xl flex items-center">
                Skills Required
              </div>
            </div>
            <div className="mt-3  font-gilroy-medium">{formData.skills}</div>
          </div>
          <div className="mt-10 border-[#D8D8D8] border bg-white shadow-md p-5 rounded-2xl">
            <div className="flex items-center space-x-2">
              <div className="text-black">
                <TfiHeadphoneAlt size={25} />
              </div>
              <div className=" font-gilroy-bold text-black text-xl flex items-center">
                Seller Support
              </div>
            </div>
            <div className="mt-3  font-gilroy-medium">{formData.support}</div>
          </div>
          <div className="mt-10 border-[#D8D8D8] border bg-white shadow-md p-5 rounded-2xl">
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-2">
                <div className="text-black">
                  <Image
                    src="/images/i.svg"
                    height={25}
                    width={25}
                    alt="logo"
                  />
                </div>
                <div className=" font-gilroy-bold text-black text-xl flex items-center">
                  Other Information
                </div>
              </div>
            </div>
            <div className="mt-3  font-gilroy-medium">{formData.bullet}</div>
          </div>
          <div className="mt-10 mb-7 border-[#D8D8D8] border bg-white shadow-md p-5 rounded-2xl">
            <div className=" items-center font-gilroy-bold text-4xl text-center">
              More Listings
            </div>
            <div className=" items-center font-gilroy-medium text-lg text-center">
              here are more businesses that you can look at
            </div>
            <div className="mt-3  font-gilroy-medium flex justify-between">
              {listings.map((list) => (
                <div className="w-1/3">
                  <InnerPageCard
                    type={list.type}
                    industry={list.industry}
                    description={list.description}
                    verified={list.verified}
                    location={list.location}
                    price={list.price}
                    thumbnailUrl={list.thumbnailUrl}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingInner;