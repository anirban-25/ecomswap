"use client";

import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import Filters from "@/listPageComponents/Filters";
import Listings from "@/listPageComponents/Listings";
import BusinessesForSale from "@/listPageComponents/BusinessesForSale";
import Footer from "@/components/Footer";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase";
import { lineSpinner } from "ldrs";

const listings = [];

const ListPage = () => {
  const [loader, setLoader] = useState(true);
  const [dataForm, setDataForm] = useState(false);
  useEffect(() => {
    lineSpinner.register();
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
            const imageUrl =
              "https://firebasestorage.googleapis.com/v0/b/ecomswap-91377.appspot.com/o/" +
              doc.id +
              ".jpg?alt=media&token=33326558-ed33-4627-9c6d-6a2daeb71a6b";
            console.log(docData);
            const seenIds = new Set(listings.map((item) => item.id));
            if (!seenIds.has(docData.listNumber)) {
              listings.push({
                id: docData.listNumber,
                description: docData.form1BriefDescription || "",
                tags: docData.tags || "",
                monthlyNetProfit: docData.monthlynetprofit || "",
                type: docData.form1BusinessType || "",
                monthlyRevenue: docData.monthlyrevenue || "",
                monthlyMultiple: docData.monthlymultiple || "",
                traffic: docData.trafficpercentage || "",
                monetization: docData.form1PrimarySourceOfUserAcquisition || "",
                profit: parseInt(docData.netprofitpercentage, 10) || "",
                revenue: docData.netrevenuepercentage || "",
                location: getCountryName(docData.form1LocationOfBusiness) || "",
                industry: docData.form1selectedIndustry || "",
                startdate: docData.form1BusinessStarted || "",
                price: parseInt(docData.form5askingPrice, 10) || "",
                createdat: docData.createdAt || "",
                listNumber: docData.listNumber || 800,
                verified: docData.isVerified || "",
                thumbnailUrl: imageUrl || "",
              });
            }
          }
          setLoader(false);
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
        {loader ? (
          <div className="flex mt-10  justify-center ">
            <l-line-spinner
              size="40"
              stroke="4"
              speed="1"
              color="black"
            ></l-line-spinner>
          </div>
        ) : (
          <div className="px-20">
            <Listings listings={filteredListings} />
          </div>
        )}
        <div className="px-10">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default ListPage;
