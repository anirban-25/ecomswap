import React from 'react';
import Header from "@/components/Header";
import Filters from '@/listPageComponents/Filters';
import Listings from '@/listPageComponents/Listings'; 
import BusinessesForSale from '@/listPageComponents/BusinessesForSale';

const listings = [
  {
    id: 1,
    title: 'E-commerce | Home and Garden',
    price: 123133222,
    thumbnailUrl: "/images/Rectangle 1316.png",
    verified: true,
    topRated: false,
    monthlyNetProfit: 102435,
    monthlyRevenue: 88435,
    trafficPercentage: -5,
    type: 'eCommerce',
    industry: 'Home and Garden',
    monetization: 'eCommerce'
  },
  {
    id: 2,
    title: 'E-commerce | Furniture',
    price: 334133222,
    thumbnailUrl: "/images/furniture.png",
    verified: false,
    topRated: true,
    monthlyNetProfit: 152435,
    monthlyRevenue: 98435,
    trafficPercentage: -5,
    type: 'eCommerce',
    industry: 'Furniture',
    monetization: 'eCommerce'
  },
];

const Page = () => {
  return (
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
    </div>
  );
};

export default Page;
