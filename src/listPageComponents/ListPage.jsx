"use client";

import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import Filters from "@/listPageComponents/Filters";
import Listings from "@/listPageComponents/Listings";
import BusinessesForSale from "@/listPageComponents/BusinessesForSale";
import Footer from "@/components/Footer";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase";
const listings = [
  {
    id: 1,
    description:
      "Electronic commerce (e-commerce) refers to companies and individuals that buy and sell goods and services over the internet. E-commerce operates in different types of market segments and can be conducted over computers, tablets, smartphones.",
    price: 10,
    thumbnailUrl: "/images/Rectangle 1316.png",
    verified: true,
    topRated: false,
    isNew: true,
    monthlyNetProfit: 102435,
    monthlyRevenue: 88435,
    monthlyMultiple: 14,
    trafficPercentage: -5,
    revenueMultiple: 65,
    profitMultiple: 70,
    type: "Saas",
    industry: "Home and Garden",
    monetization: "ecommerce",
    location: "United States",
    profit: "+25%",
    revenue: "+25%",
    traffic: "-5%",
  },
  {
    id: 2,
    description: "lorem lorem lorem",
    price: 10,
    thumbnailUrl: "/images/furniture.png",
    verified: true,
    topRated: true,
    isNew: false,
    monthlyNetProfit: 152435,
    monthlyRevenue: 98435,
    monthlyMultiple: 10,
    trafficPercentage: 10,
    revenueMultiple: 25,
    profitMultiple: 40,
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
    verified: true,
    topRated: true,
    isNew: false,
    monthlyNetProfit: 182435,
    monthlyRevenue: 99435,
    monthlyMultiple: 20,
    trafficPercentage: 30,
    revenueMultiple: 95,
    profitMultiple: 10,
    type: "eCommerce",
    industry: "Furniture",
    monetization: "eCommerce",
    location: "Canada",
    profit: "+10%",
    revenue: "-15%",
    traffic: "+10%",
  },
];

const ListPage = () => {
  const [dataForm, setDataForm] = useState(false);
  useEffect(() => {
    const fetchFormData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "admin"));
        const data = [];
        const countryNames = {
          AF: "Afghanistan",
          AL: "Albania",
          DZ: "Algeria",
          AS: "American Samoa",
          AD: "Andorra",
          AO: "Angola",
          AI: "Anguilla",
          AG: "Antigua and Barbuda",
          AR: "Argentina",
          AM: "Armenia",
          AW: "Aruba",
          AU: "Australia",
          AT: "Austria",
          AZ: "Azerbaijan",
          BS: "Bahamas",
          BH: "Bahrain",
          BD: "Bangladesh",
          BB: "Barbados",
          BY: "Belarus",
          BE: "Belgium",
          BZ: "Belize",
          BJ: "Benin",
          BM: "Bermuda",
          BT: "Bhutan",
          BO: "Bolivia, Plurinational State of",
          BA: "Bosnia and Herzegovina",
          BW: "Botswana",
          BR: "Brazil",
          IO: "British Indian Ocean Territory",
          BG: "Bulgaria",
          BF: "Burkina Faso",
          BI: "Burundi",
          KH: "Cambodia",
          CM: "Cameroon",
          CA: "Canada",
          CV: "Cape Verde",
          KY: "Cayman Islands",
          CF: "Central African Republic",
          TD: "Chad",
          CL: "Chile",
          CN: "China",
          CO: "Colombia",
          KM: "Comoros",
          CG: "Congo",
          CD: "Democratic Republic of the Congo",
          CK: "Cook Islands",
          CR: "Costa Rica",
          CI: "Côte d'Ivoire",
          HR: "Croatia",
          CU: "Cuba",
          CW: "Curaçao",
          CY: "Cyprus",
          CZ: "Czech Republic",
          DK: "Denmark",
          DJ: "Djibouti",
          DM: "Dominica",
          DO: "Dominican Republic",
          EC: "Ecuador",
          EG: "Egypt",
          SV: "El Salvador",
          GQ: "Equatorial Guinea",
          ER: "Eritrea",
          EE: "Estonia",
          ET: "Ethiopia",
          FK: "Falkland Islands (Malvinas)",
          FO: "Faroe Islands",
          FJ: "Fiji",
          FI: "Finland",
          FR: "France",
          PF: "French Polynesia",
          GA: "Gabon",
          GM: "Gambia",
          GE: "Georgia",
          DE: "Germany",
          GH: "Ghana",
          GI: "Gibraltar",
          GR: "Greece",
          GL: "Greenland",
          GD: "Grenada",
          GU: "Guam",
          GT: "Guatemala",
          GG: "Guernsey",
          GN: "Guinea",
          GW: "Guinea-Bissau",
          HT: "Haiti",
          HN: "Honduras",
          HK: "Hong Kong",
          HU: "Hungary",
          IS: "Iceland",
          IN: "India",
          ID: "Indonesia",
          IR: "Iran, Islamic Republic of",
          IQ: "Iraq",
          IE: "Ireland",
          IM: "Isle of Man",
          IL: "Israel",
          IT: "Italy",
          JM: "Jamaica",
          JP: "Japan",
          JE: "Jersey",
          JO: "Jordan",
          KZ: "Kazakhstan",
          KE: "Kenya",
          KI: "Kiribati",
          KP: "North Korea",
          KR: "South Korea",
          KW: "Kuwait",
          KG: "Kyrgyzstan",
          LA: "Lao People's Democratic Republic",
          LV: "Latvia",
          LB: "Lebanon",
          LS: "Lesotho",
          LR: "Liberia",
          LY: "Libya",
          LI: "Liechtenstein",
          LT: "Lithuania",
          LU: "Luxembourg",
          MO: "Macao",
          MK: "Republic of Macedonia",
          MG: "Madagascar",
          MW: "Malawi",
          MY: "Malaysia",
          MV: "Maldives",
          ML: "Mali",
          MT: "Malta",
          MH: "Marshall Islands",
          MQ: "Martinique",
          MR: "Mauritania",
          MU: "Mauritius",
          MX: "Mexico",
          FM: "Micronesia, Federated States of",
          MD: "Republic of Moldova",
          MC: "Monaco",
          MN: "Mongolia",
          ME: "Montenegro",
          MS: "Montserrat",
          MA: "Morocco",
          MZ: "Mozambique",
          MM: "Myanmar",
          NA: "Namibia",
          NR: "Nauru",
          NP: "Nepal",
          NL: "Netherlands",
          NZ: "New Zealand",
          NI: "Nicaragua",
          NE: "Niger",
          NG: "Nigeria",
          NU: "Niue",
          NF: "Norfolk Island",
          MP: "Northern Mariana Islands",
          NO: "Norway",
          OM: "Oman",
          PK: "Pakistan",
          PW: "Palau",
          PS: "Palestinian Territory",
          PA: "Panama",
          PG: "Papua New Guinea",
          PY: "Paraguay",
          PE: "Peru",
          PH: "Philippines",
          PN: "Pitcairn",
          PL: "Poland",
          PT: "Portugal",
          PR: "Puerto Rico",
          QA: "Qatar",
          RO: "Romania",
          RU: "Russia",
          RW: "Rwanda",
          KN: "Saint Kitts and Nevis",
          LC: "Saint Lucia",
          WS: "Samoa",
          SM: "San Marino",
          ST: "Sao Tome and Principe",
          SA: "Saudi Arabia",
          SN: "Senegal",
          RS: "Serbia",
          SC: "Seychelles",
          SL: "Sierra Leone",
          SG: "Singapore",
          SX: "Sint Maarten",
          SK: "Slovakia",
          SI: "Slovenia",
          SB: "Solomon Islands",
          SO: "Somalia",
          ZA: "South Africa",
          SS: "South Sudan",
          ES: "Spain",
          LK: "Sri Lanka",
          SD: "Sudan",
          SR: "Suriname",
          SZ: "Swaziland",
          SE: "Sweden",
          CH: "Switzerland",
          SY: "Syria",
          TW: "Taiwan",
          TJ: "Tajikistan",
          TZ: "Tanzania",
          TH: "Thailand",
          TG: "Togo",
          TK: "Tokelau",
          TO: "Tonga",
          TT: "Trinidad and Tobago",
          TN: "Tunisia",
          TR: "Turkey",
          TM: "Turkmenistan",
          TC: "Turks and Caicos Islands",
          TV: "Tuvalu",
          UG: "Uganda",
          UA: "Ukraine",
          AE: "United Arab Emirates",
          GB: "United Kingdom",
          US: "United States",
          UY: "Uruguay",
          UZ: "Uzbekistan",
          VU: "Vanuatu",
          VE: "Venezuela, Bolivarian Republic of",
          VN: "Viet Nam",
          VI: "Virgin Islands",
          YE: "Yemen",
          ZM: "Zambia",
          ZW: "Zimbabwe",
        };
        const getCountryName = (countryCode) => {
          return countryNames[countryCode] || "";
        };

        querySnapshot.forEach((doc) => {
          const docData = doc.data();

          const timestamp = docData.createdAt || "";
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
          if (docData.adminStatus === "Approved") {
            data.push({
              id: doc.id,
              description: doc.form1BriefDescription || "",
              isNew: true,
              topRated: true,
              monthlyNetProfit: doc.monthlynetprofit || "",
              type: docData.form1BusinessType || "",
              monthlyRevenue: doc.monthlyrevenue || "",
              monthlyMultiple: doc.monthlymultiple || "",
              trafficPercentage: doc.trafficpercentage || "",
              revenueMultiple: doc.monthlyrevenue || "",
              
              TTR: parseInt(docData.form2trailingTotalRevenue, 10) || "",
              location: getCountryName(docData.form1LocationOfBusiness) || "",
              industry: docData.form1selectedIndustry || "",
              startdate: docData.form1BusinessStarted || "",
              price: parseInt(docData.form5askingPrice, 10) || "",
              status: docData.status || "",
              createdat: docData.createdAt || "",
              status: docData.adminStatus || "Pending",
              createdat: createdat,
              listNumber: docData.listNumber || 800,
            });
          }
        });

        setDataForm(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching data from Firestore:", error);
      }
    };

    fetchFormData();
  }, []);

  const [filteredListings, setFilteredListings] = useState(listings);

  const handleApplyFilters = (
    selectedAssetTypes,
    minPrice,
    maxPrice,

    minRevenueMultiple,
    maxRevenueMultiple,
    minProfitMultiple,
    maxProfitMultiple
  ) => {
    console.log(selectedAssetTypes);
    console.log(minPrice, maxPrice);
    const filtered = listings.filter((listing) => {
      const matchesType =
        selectedAssetTypes.length === 0 ||
        selectedAssetTypes.includes(listing.type.toLowerCase());
      const matchesPrice =
        listing.price >= minPrice && listing.price <= maxPrice;
      const matchesRevenue =
        listing.revenueMultiple >= minRevenueMultiple &&
        listing.revenueMultiple <= maxRevenueMultiple;
      const matchesProfit =
        listing.profitMultiple >= minProfitMultiple &&
        listing.profitMultiple <= maxProfitMultiple;
      console.log(
        matchesType,
        matchesPrice,
        matchesRevenue,
        matchesProfit,
        listing.monthlyRevenue,
        minRevenueMultiple,
        maxRevenueMultiple
      );
      return matchesType && matchesPrice && matchesRevenue && matchesProfit;
    });
    console.log(filtered);
    setFilteredListings(filtered);
  };
  const handleSearch = (query) => {
    const filtered = listings.filter((listing) => {
      return (
        listing.description.toLowerCase().includes(query.toLowerCase()) ||
        listing.type.toLowerCase().includes(query.toLowerCase()) ||
        listing.industry.toLowerCase().includes(query.toLowerCase())
      );
    });
    setFilteredListings(filtered);
  };

  return (
    <div>
      <div className="py-5">
        <div className="h-screen w-full fixed left-0  -z-20 bg-grid-large-gray-200/[0.6]  flex items-center justify-center">
          {/* Radial gradient for the container to give a faded look */}
        </div>
        <div className="px-10">
          <Header />
        </div>

        <BusinessesForSale />
        <div className="px-20">
          <Filters
            onApplyFilters={handleApplyFilters}
            onSearch={handleSearch}
          />
        </div>
        <div className="px-20">
          <Listings listings={filteredListings} />
        </div>
        <div className="px-10">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default ListPage;
