import React from 'react';
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const Exit = () => {
  return (
    <div className="bg-purple-900 text-white py-20 px-4 text-center">
      
      <h2 className="text-3xl font-bold mb-4" style={{ color: '#190041', fontFamily: 'FONTSPRING DEMO - Lufga SemiBold', fontSize: '40px',
              fontWeight: 800}}>
        Your next Exit is just around the corner
      </h2>

      
      <p className="text-lg font-semibold mb-4" style={{ color: '#190041', maxWidth: '1000px', margin: '0 auto', fontWeight: 550 }}>
        Selling your business is a long, frustrating experience, full of stops and starts, hard-nosed negotiation, and emotional flare-ups. It&apos;s like going on a string of bad dates to find the right match.&nbsp;
        <span style={{ color: '#7850FF',fontFamily: 'FONTSPRING DEMO - Lufga SemiBold', fontWeight: 700 }}>
          Investment banks are expensive
        </span>
        <span style={{ color: '#190041', fontFamily: 'FONTSPRING DEMO - Lufga SemiBold', fontWeight: 550 }}>
          , due diligence takes months, and even if you do everything right, your startup might still not get acquired.
        </span>
      </p>
      
      
      <p style={{ margin: '24px 0' }}></p>

      
      <p className="text-lg font-semibold mb-8 mt-4" style={{ color: '#190041', maxWidth: '1250px', margin: '0 auto', fontFamily: 'FONTSPRING DEMO - Lufga SemiBold', fontWeight: 550}}>
        I don&apos;t think this is fair, and worse, it might be hindering a whole generation of entrepreneurs from moving forward in their careers. EcomSwap removes the rigmarole and frustration of the acquisition process by connecting startups and acquirers in a single marketplace. With both parties fully vetted, the challenge won&apos;t be in having the right conversations, but choosing which ones to pursue.
      </p>

      
      <div className="mt-8 flex justify-center">
        <img
          src="/images/chart.svg"
          alt="Chart"
          style={{ width: '70%', maxWidth: '500px', height: 'auto' }}
          className="mx-auto"
        />
      </div>
      <p style={{ margin: '100px 0' }}></p>
      <h2 className="text-3xl font-bold mb-4" style={{ color: '#190041', fontFamily: 'FONTSPRING DEMO - Lufga SemiBold', fontSize: '40px',
              fontWeight: 800}}>
        Buy Your New Business Today
      </h2>
      <div className="flex justify-center mt-10">
          <div className="bg-[#190041] p-2 rounded-full px-4 flex justify-center">
            <div className="flex items-center text-white space-x-2 ">
              <Link href="/listings">
                <div className="font-gilroy-bold ">View Listings</div>
              </Link>
              <div>
                <FaArrowRight />
              </div>
            </div>
          </div>
        </div>


    </div>
  );
};

export default Exit;
