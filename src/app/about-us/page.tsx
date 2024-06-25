import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutEcomswap from "@/aboutUsComponents/aboutEcomswap";
import Success from "@/aboutUsComponents/success";
import Help from "@/aboutUsComponents/help";
import Exit from "@/aboutUsComponents/exit";

const Page: React.FC = () => {
  return (
    <div>
      <div className="py-5">
        <div className="h-screen w-full fixed left-0 -z-20 bg-grid-large-gray-200/[0.6] flex items-center justify-center"></div>
        <div className="px-10">
          <Header />
        </div>
        <AboutEcomswap />
        <Success />
        <Help />
        <Exit />
        <Footer />
        


      </div>
    </div>
  );
};

export default Page;
