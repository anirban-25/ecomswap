import Header from "@/components/Header";
import React from "react";
import { useState } from "react";
import FillForm from "@/fillUpFormPageComponents/FillForm"
const page = () => {

  return (
    <div>
      <div className="h-screen w-full fixed left-0  -z-20 bg-grid-large-gray-200/[0.6]  flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
      </div>
      <div className=" py-7 px-10">
        <Header />
      </div>
      <div className="mt-10">
        <div className=" font-gilroy-bold text-4xl text-center">
          Sell Your Site
        </div>
        <div className="px-20 mt-10 mb-10">
          <div className=" border-dashed w-full border-gray-300  border-[1px] " />
        </div>
        <FillForm/>
      </div>
    </div>
  );
};

export default page;
