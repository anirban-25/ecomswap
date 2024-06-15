import ListPage from "@/listPageComponents/ListPage"
"use client";
import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import Filters from "@/listPageComponents/Filters";
import Listings from "@/listPageComponents/Listings";
import BusinessesForSale from "@/listPageComponents/BusinessesForSale";
import Footer from "@/components/Footer";

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
  recurring: number;
  trafficPercentage: number;
  revenueMultiple: number;
  profitMultiple: number;
  type: string;
  industry: string;
  monetization: string;
  location: string;
  profit: string;
  revenue: string;
  traffic: string;
};

const listings: Listing[] = [
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
    recurring: 90,
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
    recurring:40,
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
    recurring:10,
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

const Page = () => {

  return (
    
    <div>
      <ListPage/>
    </div>
  );
};

export default Page;
