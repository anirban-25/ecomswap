import Header from "@/components/Header";
import Image from "next/image";
import React from "react";
import HeroSection from "@/sellYourSiteComponents/HeroSection"
import WhyChooseUs from "@/sellYourSiteComponents/WhyChooseUs"
import { FaArrowRight } from "react-icons/fa";
import Footer from "@/components/Footer";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="">
      <div className="px-2 py-2 lg:py-7 lg:px-10">
        <Header />
      </div>
      <div
        className="relative w-full py-10 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/Frame226.png')" }}
      >
        <div>
          <div className=" w-full flex justify-center mt-5">
            <Image src="/images/bag.png" width={50} height={50} alt="bag" />
          </div>
          <div className="flex justify-center mt-7 ">
            <div className="font-gilroy-bold text-center max-w-[45rem] text-5xl text-white capitalize">
              Sell your <span className="text-[#DCFD82]">business</span>
              &nbsp;fast and for the highest price.
            </div>
          </div>
          <div className="flex justify-center mt-7 ">
            <div className="font-gilroy-light text-center max-w-[45rem] text-sm  text-[#E5DDFF] capitalize">
              Exit in as little as 30 days. Leading SaaS acquisition marketplace
              with 500k buyers. Expert tooling and support. Total privacy.
            </div>
          </div>
          <div className="flex justify-center mt-10 mb-5">
            <div className="flex  justify-between min-w-[30rem] max-w-[30rem]">
              <div>
                <div className="bg-white p-4 py-6 rounded-2xl">
                  <div className="text-center text-black font-gilroy-bold text-xl">
                    Valuation Tool
                  </div>
                  <div className="text-[#475467] max-w-[20rem] mt-4 text-center font-gilroy-medium">
                    See what your online business is worth today with this tool.
                  </div>
                  <div>
                    <div className="flex justify-center mt-5">
                      <div className="bg-[#190041] p-2 rounded-full px-4 flex justify-center">
                        <div className="flex items-center text-white space-x-2 ">
                          <div className="font-gilroy-medium ">
                            Try Valuation Tool
                          </div>
                          <div className="text-[#DCFD82]">
                            <FaArrowRight />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-white p-4 py-6 rounded-2xl">
                <div className="text-center text-black font-gilroy-bold text-xl">
                  List Your Online Business
                </div>
                <div className="text-[#475467] max-w-[20rem] mt-4 text-center font-gilroy-medium">
                  List your online business and reach thousands of hungry,
                  qualified buyers.
                </div>
                <div>
                  <div className="flex justify-center mt-5">
                    <div className="bg-[#7850FF] p-2 rounded-full px-4 flex justify-center">
                      <div className="flex items-center text-white space-x-2 ">
                        <div className="font-gilroy-medium ">
                          List Your Business
                        </div>
                        <div className="text-white">
                          <FaArrowRight />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <HeroSection/>
      </div>
      <div>
        <WhyChooseUs/>
      </div>
      <Footer/>
    </div>
  );
};

export default page;
