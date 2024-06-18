"use client";
import { db } from "@/firebase";
import { collection, getDocs } from "firebase/firestore";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { RxTriangleRight } from "react-icons/rx";
import { miyagi } from "ldrs";
const AdminListing = () => {
  const [lists, setLists] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    miyagi.register();
    const fetchFormData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "homepageListings"));
        const newData = [];

        querySnapshot.forEach((doc) => {
          const docData = doc.data();
          console.log(docData);
          if (docData.status === "Approved") {
            console.log(docData);
            const seenIds = new Set(newData.map((item) => item.listing));
            console.log(seenIds);
            console.log(docData.listNumber);
            if (!seenIds.has(docData.listNumber)) {
              console.log("hey");
              newData.push({
                listing: docData.listNumber,
                type: docData.type || "",
                niche: docData.industry || "",
                monthlyIncome: docData.monthlyIncome || "",
                price: parseInt(docData.askingprice, 10) || "",
              });
            }
          }
        });

        setLists(newData);
        setLoader(false);

        console.log(newData);
      } catch (error) {
        console.error("Error fetching data from Firestore:", error);
      }
    };

    fetchFormData();
  }, []);

  return (
    <div className="mt-16">
      <div className="text-2xl lg:text-4xl font-gilroy-bold text-center">
        Our Latest Listings
      </div>

      <div className=" mt-10 ">
        <div className="">
          <div className=" text-[#8D8D8D] text-lg font-gilroy-bold py-3 mt-3  px-2  grid grid-cols-5 lg:mt-5  text-center  ">
            <div className="  ">Industry</div>
            <div className="  ">Business Type</div>
            <div className="  ">Listing</div>
            <div className="  ">Monthly Net Profit</div>
            <div className="  ">Price</div>
          </div>
        </div>
        {loader ? (
          <div className="flex mt-16  justify-center ">
            <l-miyagi
              size="35"
              stroke="3.5"
              speed="0.9"
              color="black"
            ></l-miyagi>
          </div>
        ) : (
          <div className="">
            {lists.map((list) => (
              <div className="">
                <Link href={`/listings/${list.listing}`} className="">
                  <div className="bg-white relative hover:bg-gray-100  transition-all ease-in-out duration-200">
                    <div className=" py-3 mt-3 border-dotted border-2 px-2  grid grid-cols-5 lg:mt-5  text-center rounded-md shadow-sm items-center">
                      <div className=" text-lg font-gilroy-bold capitalize">
                        {list.type}
                      </div>
                      <div>
                        <div className="text-[#7850FF] p-2 font-gilroy-medium rounded-3xl border-2 border-[#7850FF]">
                          {list.niche}
                        </div>
                      </div>
                      <div>{list.listing}</div>
                      <div className=" font-gilroy-medium">
                        {list.monthlyIncome}
                      </div>
                      <div className="text-[#7850FF] text-lg font-gilroy-bold">
                        ${list.price}
                      </div>
                    </div>
                    <div className=" absolute top-5 right-5 ">
                      <RxTriangleRight size={30} />
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        )}
        <div>
          <div className="flex justify-center mt-10">
            <div className="bg-[#190041] p-2 rounded-full px-4 flex justify-center">
              <div className="flex items-center text-white space-x-2 ">
                <div className="font-gilroy-bold ">View Listings</div>
                <div className="text-[#DCFD82]">
                  <FaArrowRight />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminListing;
