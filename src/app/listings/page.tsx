"use client";
import React, { useState } from 'react';
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
    description: 'anirban is a hater',
    price: 334133222,
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
    profit: '+10%',
    revenue: '+15%',
    traffic: '-10%'
  },
  {
    id: 3,
    description: 'anirban is a loser',
    price: 334133222,
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
    if (selectedAssetTypes.length === 0) {
      setFilteredListings(listings);
    } else {
      const filtered = listings.filter((listing) =>
        selectedAssetTypes.includes(listing.type.toLowerCase())
      );
      setFilteredListings(filtered);
    }
    const filtered = listings.filter(
      (listing) => listing.price >= minPrice && listing.price <= maxPrice
    );
    setFilteredListings(filtered);
    
  };

  return (
    <div className="py-7">
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
