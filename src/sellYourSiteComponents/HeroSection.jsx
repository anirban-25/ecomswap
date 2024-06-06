import Image from "next/image";
import React from "react";
import { TiTick } from "react-icons/ti";
const HeroSection = () => {
  return (
    <div className="mt-20">
      <div className="capitalize text-3xl font-gilroy-bold text-center mb-5">
        The easy way to sell your SaaS startup
      </div>
      <div className=" "/>
      <div className="mt-10 w-full">
        <div className="flex items-center  ">
          <div className=" ">
            <Image
              src="/images/Hero1.png"
              height={1100}
              width={1100}
              alt="heroImage"
              className="w-full h-auto"
            />
          </div>
          <div className="flex  w-full flex-grow  justify-center">
            <div className="">
              <div className=" text-xl font-gilroy-bold">
                Prepare your listing
              </div>
              <div className="text-[#475467] font-gilroy-regular">
                Enter basic details about your SaaS startup.
              </div>
              <div className="flex mt-5 items-center space-x-3">
                <div className="bg-white text-[#7850FF] p-1 border-dotted border-gray-600 border-[1px] rounded-full">
                  <TiTick />
                </div>
                <div className=" font-gilroy-medium text-[#475467]">Describe your business</div>
              </div>
              <div className="flex mt-5 items-center space-x-3">
                <div className="bg-white text-[#7850FF] p-1 border-dotted border-gray-600 border-[1px] rounded-full">
                  <TiTick />
                </div>
                <div className=" font-gilroy-medium text-[#475467]">Explain why you're selling</div>
              </div>
              <div className="flex mt-5 items-center space-x-3">
                <div className="bg-white text-[#7850FF] p-1 border-dotted border-gray-600 border-[1px] rounded-full">
                  <TiTick />
                </div>
                <div className=" font-gilroy-medium text-[#475467]">Sync your metrics</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center  ">
          
          <div className="flex w-full flex-grow  justify-center">
            <div className="">
              <div className=" text-xl font-gilroy-bold">
              Get help to sell
              </div>
              <div className="text-[#475467] font-gilroy-regular">Our SaaS experts will optimize your listing and help you sell quickly, easily, and for the highest price.
              </div>
              <div className="flex mt-5 items-center space-x-3">
                <div className="bg-white text-[#7850FF] p-1 border-dotted border-gray-600 border-[1px] rounded-full">
                  <TiTick />
                </div>
                <div className=" font-gilroy-medium text-[#475467]">Create the perfect listing with help from our customer success teams</div>
              </div>
              <div className="flex mt-5 items-center space-x-3">
                <div className="bg-white text-[#7850FF] p-1 border-dotted border-gray-600 border-[1px] rounded-full">
                  <TiTick />
                </div>
                <div className=" font-gilroy-medium text-[#475467]">Attract more buyer interest with multi-channel marketing campaigns</div>
              </div>
              <div className="flex mt-5 items-center space-x-3">
                <div className="bg-white text-[#7850FF] p-1 border-dotted border-gray-600 border-[1px] rounded-full">
                  <TiTick />
                </div>
                <div className=" font-gilroy-medium text-[#475467]">Get expert help throughout the acquisition process to close smoothly</div>
              </div>
            </div>
          </div>
          <div className="">
            <Image
              src="/images/Hero2.png"
              height={1100}
              width={1100}
              alt="heroImage"
              className="w-full h-auto"
            />
          </div>
        </div>
        <div className="flex items-center  ">
          <div className="">
            <Image
              src="/images/Hero3.png"
              height={1100}
              width={1100}
              alt="heroImage"
              className="w-full h-auto"
            />
          </div>
          <div className="flex w-full flex-grow  justify-center">
            <div className="">
              <div className=" text-xl font-gilroy-bold">
              Find your ideal buyer
              </div>
              <div className="text-[#475467] font-gilroy-regular">
              Vet buyers and offers to find the right fit. Negotiate the best deal with expert guidance from our customer success team.
              </div>
              <div className="flex mt-5 items-center space-x-3">
                <div className="bg-white text-[#7850FF] p-1 border-dotted border-gray-600 border-[1px] rounded-full">
                  <TiTick />
                </div>
                <div className=" font-gilroy-medium text-[#475467]">Evaluate buyers on experience and acquisition goals</div>
              </div>
              <div className="flex mt-5 items-center space-x-3">
                <div className="bg-white text-[#7850FF] p-1 border-dotted border-gray-600 border-[1px] rounded-full">
                  <TiTick />
                </div>
                <div className=" font-gilroy-medium text-[#475467]">Prioritize buyers with verified identities and ready funds</div>
              </div>
              <div className="flex mt-5 items-center space-x-3">
                <div className="bg-white text-[#7850FF] p-1 border-dotted border-gray-600 border-[1px] rounded-full">
                  <TiTick />
                </div>
                <div className=" font-gilroy-medium text-[#475467]">Safely close with free escrow from Escrow.com</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
