"use client";
import React from "react";
import Header from "@/components/Header";
import InnerPageListingCard from "@/listPageComponents/InnerPageListingCard";
import { useRouter, useSearchParams } from "next/navigation";
type Props = {};

const page = ({ params }: { params: { list: string } }) => {
  return (
    <div>
      <div className="px-10 py-7">
        <Header />
      </div>
      <div className="mt-10 flex px-10 items-stretch">
        <div className="   w-full h-full">
          <InnerPageListingCard />
        </div>
      </div>
    </div>
  );
};

export default page;
