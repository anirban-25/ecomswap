import React from 'react';
import Header from "@/components/Header";
import Filters from '@/listPageComponents/Filters';
import Listings from '@/listPageComponents/Listings'; 
import BusinessesForSale from '@/listPageComponents/BusinessesForSale';
import Footer from '@/components/Footer';

const listings = [
  {
    id: 1,
    title: 'E-commerce | Home and Garden',
    description: 'Electronic commerce (e-commerce) refers to companies and individuals that buy and sell goods and services over the internet. E-commerce operates in different types of market segments and can be conducted over computers, tablets, smartphones.',
    price: 123133222,
    thumbnailUrl: "/images/Rectangle 1316.png",
    verified: true,
    topRated: false,
    isNew: true,
    monthlyNetProfit: 102435,
    monthlyRevenue: 88435,
    monthlyMultiple:14,
    trafficPercentage: -5,
    type: 'eCommerce',
    industry: 'Home and Garden',
    monetization: 'eCommerce',
    location: 'United States',
    profit: '+25%',
    revenue: '+25%',
    traffic: '-5%'
  },
  {
    id: 2,
    title: 'E-commerce | Furniture',
    description:'anirban is a hater',
    price: 334133222,
    thumbnailUrl: "/images/furniture.png",
    verified: true,
    topRated: true,
    isNew: false,
    monthlyNetProfit: 152435,
    monthlyRevenue: 98435,
    monthlyMultiple:10,
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
    title: 'Automotive | Cars and Mechanics',
    description:'anirban is a loser',
    price: 334133222,
    thumbnailUrl: "/images/Rectangle 1316.png",
    verified: true,
    topRated: true,
    isNew: false,
    monthlyNetProfit: 182435,
    monthlyRevenue: 99435,
    monthlyMultiple:20,
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

const Page = () => (
  <div className='py-7'>
    <div className='px-10'>
      <Header />
    </div>
    <BusinessesForSale />
    <div className='px-20'>
      <Filters />
    </div>
    <div className='px-20'>
      <Listings listings={listings} />
    </div>
    <div className='px-10'>
      <Footer />
    </div>

  </div>
);

export default Page;
