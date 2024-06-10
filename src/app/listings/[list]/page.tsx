"use client";
import React from "react";
import Header from "@/components/Header";
import InnerPageListingCard from "@/listPageComponents/InnerPageListingCard";
import InnerPageCard from "@/listPageComponents/InnerPageCard";
import { useRouter, useSearchParams } from "next/navigation";
import { BsExclamationTriangle } from "react-icons/bs";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import Image from "next/image";
type Props = {};

type Listing = {
  id: number;
  description: string;
  price: number;
  thumbnailUrl: string;
  verified: boolean;
  topRated: boolean;
  isNew: boolean;
  monthlyNetProfit: number;
  monthlyRevenue: number;
  monthlyMultiple: number;
  trafficPercentage: number;
  type: string;
  industry: string;
  monetization: string;
  location: string;
  profit: string;
  revenue: string;
  traffic: string;
};
const page = ({ params }: { params: { list: string } }) => {
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
  return (
    <div>
      <div className="px-10 py-7">
        <Header />
      </div>
      <div className="mt-10 flex px-10 items-stretch">
        <div className="   w-full h-full">
          <InnerPageListingCard />
        </div>
      </div>
      <div className="px-10">
        <div className="mt-10 border-[#D8D8D8] border bg-white shadow-md p-5 rounded-2xl">
          <div className=" font-gilroy-bold text-black text-xl">
            Listing Details
          </div>
          <div className="mt-3  font-gilroy-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
            nulla. Animi voluptate ipsam nostrum voluptas aliquam, laborum nam
            numquam itaque ducimus cupiditate, expedita hic voluptates
            accusantium. Obcaecati, quisquam tempore voluptates earum fuga
            magnam harum. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Similique maxime inventore laboriosam a et ea accusamus? Ipsa
            necessitatibus eos magni. Non eos debitis aut dolore beatae quae,
            quibusdam ipsam doloribus neque cum rem omnis, ea suscipit error.
            Suscipit, exercitationem modi nemo eveniet autem natus assumenda!
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
          <div className="mt-3  font-gilroy-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
            nulla. Animi voluptate ipsam nostrum voluptas aliquam, laborum nam
            numquam itaque ducimus cupiditate, expedita hic voluptates
            accusantium. Obcaecati, quisquam tempore voluptates earum fuga
            magnam harum. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Similique maxime inventore laboriosam a et ea accusamus? Ipsa
            necessitatibus eos magni. Non eos debitis aut dolore beatae quae,
            quibusdam ipsam doloribus neque cum rem omnis, ea suscipit error.
            Suscipit, exercitationem modi nemo eveniet autem natus assumenda!
          </div>
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
          <div className="mt-3  font-gilroy-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
            nulla. Animi voluptate ipsam nostrum voluptas aliquam, laborum nam
            numquam itaque ducimus cupiditate, expedita hic voluptates
            accusantium. Obcaecati, quisquam tempore voluptates earum fuga
            magnam harum. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Similique maxime inventore laboriosam a et ea accusamus? Ipsa
            necessitatibus eos magni. Non eos debitis aut dolore beatae quae,
            quibusdam ipsam doloribus neque cum rem omnis, ea suscipit error.
            Suscipit, exercitationem modi nemo eveniet autem natus assumenda!
          </div>
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
          <div className="mt-3  font-gilroy-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
            nulla. Animi voluptate ipsam nostrum voluptas aliquam, laborum nam
            numquam itaque ducimus cupiditate, expedita hic voluptates
            accusantium. Obcaecati, quisquam tempore voluptates earum fuga
            magnam harum. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Similique maxime inventore laboriosam a et ea accusamus? Ipsa
            necessitatibus eos magni. Non eos debitis aut dolore beatae quae,
            quibusdam ipsam doloribus neque cum rem omnis, ea suscipit error.
            Suscipit, exercitationem modi nemo eveniet autem natus assumenda!
          </div>
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
          <div className="mt-3  font-gilroy-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
            nulla. Animi voluptate ipsam nostrum voluptas aliquam, laborum nam
            numquam itaque ducimus cupiditate, expedita hic voluptates
            accusantium. Obcaecati, quisquam tempore voluptates earum fuga
            magnam harum. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Similique maxime inventore laboriosam a et ea accusamus? Ipsa
            necessitatibus eos magni. Non eos debitis aut dolore beatae quae,
            quibusdam ipsam doloribus neque cum rem omnis, ea suscipit error.
            Suscipit, exercitationem modi nemo eveniet autem natus assumenda!
          </div>
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
          <div className="mt-3  font-gilroy-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
            nulla. Animi voluptate ipsam nostrum voluptas aliquam, laborum nam
            numquam itaque ducimus cupiditate, expedita hic voluptates
            accusantium. Obcaecati, quisquam tempore voluptates earum fuga
            magnam harum. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Similique maxime inventore laboriosam a et ea accusamus? Ipsa
            necessitatibus eos magni. Non eos debitis aut dolore beatae quae,
            quibusdam ipsam doloribus neque cum rem omnis, ea suscipit error.
            Suscipit, exercitationem modi nemo eveniet autem natus assumenda!
          </div>
        </div>
        <div className="mt-10 mb-7 border-[#D8D8D8] border bg-white shadow-md p-5 rounded-2xl">
          <div className=" items-center font-gilroy-bold text-4xl text-center">
            More Listings
          </div>
          <div className=" items-center font-gilroy-medium text-lg text-center">
            here are more businesses that you can look at
          </div>
          <div className="mt-3  font-gilroy-medium flex justify-between">
            {listings.map((list)=>(
              <div className="w-1/3"><InnerPageCard type={list.type} industry={list.industry} description={list.description} verified={list.verified} location={list.location} price={list.price} thumbnailUrl={list.thumbnailUrl} /></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
