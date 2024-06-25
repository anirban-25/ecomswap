import React from "react";

const AboutEcomswap = () => {
  return (
    <div className="bg-[#190041] py-20 px-10 flex flex-col items-center">
      {/* Header */}
      <div className="text-left w-full max-w-6xl mb-10">
        <h2
          style={{
            fontFamily: 'FONTSPRING DEMO - Lufga SemiBold',
            fontSize: '40px',
            fontWeight: 600,
            lineHeight: '60px',
            color: '#DCFD82',
          }}
        >
          <span style={{ color: '#FFFFFF' }}>About </span>
          <span
            style={{
              fontFamily: 'FONTSPRING DEMO - Lufga SemiBold',
              fontSize: '40px',
              fontWeight: 600,
              lineHeight: '60px',
            }}
          >
            Ecomswap
          </span>
        </h2>
      </div>
      
      <div className="flex flex-row justify-start items-start w-full max-w-6xl space-x-8">
        
        <div className="flex flex-row space-x-4">
          <img
            src="/images/pix1.svg"
            alt="Image 1"
            className="h-40 w-40 object-cover"
          />
          <img
            src="/images/pix2.svg"
            alt="Image 2"
            className="h-40 w-40 object-cover"
          />
          <img
            src="/images/pix3.svg"
            alt="Image 3"
            className="h-40 w-40 object-cover"
          />
        </div>
        
        {/* Text container */}
        <div className="max-w-md text-left text-white" 
        style={{
          width: '36%' ,
          fontFamily: 'FONTSPRING DEMO - Lufga SemiBold',
          marginLeft: '400px' 
        }}>
          <p>
            “At Ecomswap, we cherish our connections with both buyers and sellers, viewing each transaction
            as the inception of a lasting alliance. Our unique approach fosters a dynamic ecosystem where
            buyers often evolve into sellers, and sellers into buyers. We achieve this through a streamlined
            sales process, unwavering communication, and a commitment to the utmost trust and integrity.
            Our clients are not just partners; they are
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutEcomswap;
