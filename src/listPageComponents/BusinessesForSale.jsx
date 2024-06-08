"use client"
import React from 'react';
import Image from 'next/image';

const BusinessesForSale = () => {
  return (
    <div
      className="relative"
      style={{
        width: '100%',  
        height: '380px', 
        top: '10px',
        overflow: 'hidden',
      }}
    >
      <Image
        src="/images/background.svg"
        alt="Purple Background with Building"
        layout="fill"
        objectFit="cover"
        style={{
          position: 'absolute',
          top: '-30px',
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <h2
            style={{
              fontFamily: 'FONTSPRING DEMO - Lufga SemiBold',
              fontSize: '48px',
              fontWeight: 600,
              lineHeight: '62.64px',
              color: '#DCFD82', 
            }}
          >
            <span style={{ color: '#FFFFFF' }}>Online </span> 
            <span
              style={{
                fontFamily: 'FONTSPRING DEMO - Lufga SemiBold',
                fontSize: '48px',
                fontWeight: 600,
                lineHeight: '62.64px',
              }}
            >
              Businesses
            </span> 
            <span style={{ color: '#FFFFFF' }}> For Sale</span>
          </h2>
          <p
            style={{
                fontFamily: 'FONTSPRING DEMO - Lufga Light',
                fontSize: '20px',
                fontWeight: 300,
                lineHeight: '26.1px',
                textAlign: 'center',
                color: '#FFFFFF', 
            }}
            >
            Every week new profitable digital businesses, analyzed and pre-filtered by our teams.
            </p>
        </div>
      </div>
    </div>
  );
};

export default BusinessesForSale;
