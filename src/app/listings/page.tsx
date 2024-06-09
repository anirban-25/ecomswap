"use client";
import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Filters from '@/listPageComponents/Filters';
import Listings from '@/listPageComponents/Listings';
import BusinessesForSale from '@/listPageComponents/BusinessesForSale';
import Footer from '@/components/Footer';

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

const listings: Listing[] = [
  {
    id: 1,
    description: 'Electronic commerce (e-commerce) refers to companies and individuals that buy and sell goods and services over the internet. E-commerce operates in different types of market segments and can be conducted over computers, tablets, smartphones.',
    price: 123133222,
    thumbnailUrl: "/images/Rectangle 1316.png",
    verified: true,
    topRated: false,
    isNew: true,
    monthlyNetProfit: 102435,
    monthlyRevenue: 88435,
    monthlyMultiple: 14,
    trafficPercentage: -5,
    type: 'eCommerce',
    industry: 'Home and Garden',
    monetization: 'ecommerce',
    location: 'United States',
    profit: '+25%',
    revenue: '+25%',
    traffic: '-5%'
  },
  {
    id: 2,
    description: 'lorem lorem lorem',
    price: 10,
    thumbnailUrl: "/images/furniture.png",
    verified: true,
    topRated: true,
    isNew: false,
    monthlyNetProfit: 152435,
    monthlyRevenue: 98435,
    monthlyMultiple: 10,
    trafficPercentage: 10,
    type: 'eCommerce',
    industry: 'Furniture',
    monetization: 'eCommerce',
    location: 'Canada',
    profit: '+19%',
    revenue: '-15%',
    traffic: '-10%'
  },
  {
    id: 3,
    description: 'shik shak shook',
    price: 35,
    thumbnailUrl: "/images/Rectangle 1316.png",
    verified: true,
    topRated: true,
    isNew: false,
    monthlyNetProfit: 182435,
    monthlyRevenue: 99435,
    monthlyMultiple: 20,
    trafficPercentage: 30,
    type: 'eCommerce',
    industry: 'Furniture',
    monetization: 'eCommerce',
    location: 'Canada',
    profit: '+10%',
    revenue: '-15%',
    traffic: '+10%'
  }
];

const Page = () => {
  const [filteredListings, setFilteredListings] = useState<Listing[]>(listings);

  const handleApplyFilters = (selectedAssetTypes: string[], minPrice: number, maxPrice: number) => {
    console.log(selectedAssetTypes)
    console.log(minPrice, maxPrice);
    const filtered = listings.filter((listing) => {
      const matchesType = selectedAssetTypes.length === 0 || selectedAssetTypes.includes(listing.type.toLowerCase());
      const matchesPrice = listing.price >= minPrice && listing.price <= maxPrice;
      console.log(matchesType, matchesPrice)
      return matchesType && matchesPrice;
    });
    console.log(filtered)
    setFilteredListings(filtered);
};

useEffect(() => {
  console.log(filteredListings)
}, [filteredListings])

  return (
    <div className="py-7">
      <div className="h-screen w-full fixed left-0  -z-20 bg-grid-large-gray-200/[0.6]  flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
      </div>
      <div className="px-10">
        <Header />
      </div>
      
      <BusinessesForSale />
      <div className="px-20">
        <Filters onApplyFilters={handleApplyFilters} />
      </div>
      <div className="px-20">
        <Listings listings={filteredListings} />
      </div>
      <div className="px-10">
        <Footer />
      </div>
    </div>
  );
};

export default Page;
