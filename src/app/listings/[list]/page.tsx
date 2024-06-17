"use client";
import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import InnerPageListingCard from "@/listPageComponents/InnerPageListingCard";
import InnerPageCard from "@/listPageComponents/InnerPageCard";
import { useRouter, useSearchParams } from "next/navigation";
import { BsExclamationTriangle } from "react-icons/bs";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import Image from "next/image";
import {
  DocumentData,
  Timestamp,
  collection,
  getDocs,
} from "firebase/firestore";
import { db } from "@/firebase";
type Props = {};

interface Listing {
  id: number;
  description: string;
  tags: string;
  monthlyNetProfit: string;
  type: string;
  monthlyRevenue: string;
  monthlyMultiple: string;
  traffic: string;
  monetization: string;
  profit: number;
  revenue: string;
  location: string;
  industry: string;
  startdate: string;
  price: number;
  createdat: string;
  listNumber: number;
  verified: string;
  thumbnailUrl: string;
}
interface CountryNames {
  [key: string]: string;
}
interface FormData {
  businessType: string;
  businessTypeSub: string;
  userAcquisition: string;
  description: string;
  websiteUrl: string;
  location: string;
  startDate: string;
  revenue: string;
  profit: string;
  analytics: string;
  industryType: string;
  paymentType: string;
  countriesTarget: string;
  socialLinks: string;
  risks: string;
  bullet: string;
  detailed: string;
  skills: string;
  support: string;
  askingprice: string;
  adminStatus: string;
  file: string;
  netrevenuepercentage: string;
  netprofitstatus: string;
  netrevenuestatus: string;
  netprofitpercentage: string;
  monthlynetprofit: string;
  monthlyrevenue: string;
  trafficpercentage: string;
  trafficstatus: string;
  monthlymultiple: string;
  image: string;
  name: string;
  email: string;
  phnumber: string;
  isVerified: string;
  tags: string;
}

// Define the initial form data state
const initialFormData: FormData = {
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
  risks: "",
  bullet: "",
  detailed: "",
  skills: "",
  support: "",
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

const page = ({ params }: { params: { list: string } }) => {
  const [loader, setLoader] = useState(true);
  const [dataForm, setDataForm] = useState<Listing[]>([]);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const listings: Listing[] = [
    {
      id: 1,
      description:
        "Electronic commerce (e-commerce) refers to companies and individuals that buy and sell goods and services over the internet. E-commerce operates in different types of market segments and can be conducted over computers, tablets, smartphones.",
      price: 123133222,
      thumbnailUrl: "/images/Rectangle 1316.png",
      verified: true,
      topRated: false,
      isNew: true,
      monthlyNetProfit: 102435,
      monthlyRevenue: 88435,
      monthlyMultiple: 14,
      trafficPercentage: -5,
      type: "eCommerce",
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
      type: "eCommerce",
      industry: "Furniture",
      monetization: "eCommerce",
      location: "Canada",
      profit: "+10%",
      revenue: "-15%",
      traffic: "+10%",
    },
  ];
  const countryNames: CountryNames = {
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
  const getCountryName = (countryCode: string): string => {
    return countryNames[countryCode] || "";
  };
  useEffect(() => {
    const fetchFormData = async (): Promise<void> => {
      try {
        const querySnapshot = await getDocs(collection(db, "admin"));
        const data: Listing[] = [];
        const listings: Listing[] = [];

        querySnapshot.forEach((doc) => {
          const docData = doc.data() as DocumentData;
          const timestamp = docData.createdAt as Timestamp | undefined;
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
          const prop = parseInt(params.list);
          if (docData.listNumber == prop) {
            const imageUrl = `https://firebasestorage.googleapis.com/v0/b/ecomswap-91377.appspot.com/o/${doc.id}.jpg?alt=media&token=33326558-ed33-4627-9c6d-6a2daeb71a6b`;
            setFormData({
              businessType: docData.form1BusinessType || "",
              businessTypeSub: docData.form1BusinessTypeSub || "",
              userAcquisition:
                docData.form1PrimarySourceOfUserAcquisition || "",
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

        // Assuming you have a useState hook for loader and dataForm
        setLoader(false);
        setDataForm(listings);
        console.log(listings);
      } catch (error) {
        console.error("Error fetching data from Firestore:", error);
      }
    };
    fetchFormData();
  }, []);
  return (
    <div>
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
              <div className="font-gilroy-bold text-[#7850FF] text-lg">${formData.monthlyrevenue}</div>
            </div>
            <div className="flex justify-between">
              <div>Monthly Net Profit</div>
              <div className="font-gilroy-bold text-[#7850FF] text-lg">${formData.profit}</div>
            </div>
            <div className="flex justify-between">
              <div>Total revenue Percentage over the past 12 Months</div>
              <div className="font-gilroy-bold text-[#7850FF] text-lg">{formData.revenue}%</div>
            </div>
            <div className="flex justify-between">
              <div>Total profit Percentage over the past 12 Months</div>
              <div className="font-gilroy-bold text-[#7850FF] text-lg">{formData.netprofitpercentage}%</div>
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
              <Image src="/images/bulb.svg" height={25} width={25} alt="logo" />
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
                <Image src="/images/i.svg" height={25} width={25} alt="logo" />
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
  );
};

export default page;
