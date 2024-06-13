import React from "react";
import Header from "@/components/Header";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import AdminListing from "@/homePageComponents/AdminListing";
import BuyerSection from "@/homePageComponents/BuyerSection";
import SellerSection from "@/homePageComponents/SellerSection";
import Footer from "@/components/Footer";
import Link from "next/link";
const page = () => {
  const reviewList = [
    {
      image: "/images/person1.png",
      name: "Katy Flax",
      position: "Product Manager",
      positionBeneath: "Apex",
      description:
        "Smooth Business Acquisition Experience I recently purchased a small e-commerce business through a website and I must say, the process was surprisingly smooth.",
      date: "12, Dec 2024",
    },
    {
      image: "/images/person2.png",
      name: "Sherif Mansour",
      position: "Product Manager",
      positionBeneath: "Apex",
      description:
        "I had been looking to acquire a business in the digital marketing space, and I stumbled upon this website that specializes in business sales. The website interface was user-friendly, allowing me to filter businesses based on industry, revenue, and location.",
      date: "12, Dec 2024",
    },
    {
      image: "/images/person3.png",
      name: "Darrel Bond",
      position: "Product Manager",
      positionBeneath: "Apex",
      description:
        "Buying a business online was a new experience for me, but this website made it surprisingly easy. I was able to explore various business listings, read detailed descriptions, and analyze financials before making a decision.",
      date: "12, Dec 2024",
    },
  ];
  const blogs = [
    {
      readTime: 5,
      title: "The Revolutionary AI Business Analysis Training Librabry",
      image: "/images/blog1.png",
      description:
        "This informative post could delve into the critical aspects of due diligence for prospective buyers. It would emphasize the import....",
    },
    {
      readTime: 12,
      title: "Top Industries for Buying a Small Business in 2024",
      image: "/images/blog2.png",
      description:
        "This blog post could highlight trending industries and sectors that present lucrative opportunities for aspiring business buyers....",
    },
    {
      readTime: 8,
      title: "Case Study: From Listing to Sale - A Success Story",
      image: "/images/blog3.png",
      description:
        "Featuring a real-life success story, this blog post could showcase the journey of a business seller who achieved a successful sale through the website....",
    },
  ];
  const renderReviews = () => {
    return (
      <div className="mt-10 space-y-5 lg:space-y-0 lg:space-x-10 lg:px-20 lg:flex justify-between">
        {reviewList.map((review, i) => (
          <div className=" bg-white h-full border-[1px] border-black rounded-xl p-4">
            <div className="h-[100%]">
              <div className="flex items-center space-x-3">
                <div>
                  <Image
                    src={review.image}
                    width={60}
                    height={60}
                    alt="Person"
                  />
                </div>
                <div className=" font-gilroy-regular text-sm">
                  <div className="font-gilroy-bold">{review.name}</div>
                  <div className=" font-gilroy-medium">{review.position}</div>
                  <div>{review.positionBeneath}</div>
                </div>
              </div>
              <div className="text-sm mt-5 max-w-[22rem] min-h-[8rem] ">
                {review.description}
              </div>
              <div className=" h-full font-gilroy-light flex justify-end px-5 text-sm items-end">
                {review.date}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };
  const renderBlogs = () => {
    return (
      <div>
        <div className="lg:px-16 mt-10  lg:flex lg:justify-between">
          {blogs.map((blog) => (
            <div className="bg-white mt-3 lg:mt-0 rounded-2xl border-[1px]">
              <div className="p-5">
                <div className="flex justify-start">
                  <div className="border-[#A7A5A9]   rounded-xl  border-[1px]">
                    <div className="text-[#A7A5A9] text-xs px-2 p-1">
                      {blog.readTime} min read
                    </div>
                  </div>
                </div>
                <div className="text-lg font-gilroy-bold mt-3 max-w-[20rem]">
                  {blog.title}
                </div>
                <div className="rounded-2xl mt-2 overflow-hidden">
                  <Image
                    src={blog.image}
                    width={350}
                    height={350}
                    alt="imageBlog"
                  />
                </div>
                <div className="mt-4">
                  <div className="max-w-[20rem] font-gilroy-medium">
                    {blog.description}
                  </div>
                </div>
                <div className="flex justify-start mt-4">
                  <div className="  rounded-full flex justify-center">
                    <div className="flex items-center text-white space-x-2 ">
                      <div className=" text-[#190041] font-gilroy-bold">
                        Read Article
                      </div>
                      <div className="text-[#DCFD82] bg-[#190041] p-2 rounded-full">
                        <FaArrowRight />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  return (
    <div className="py-7 px-10">
      <Header />
      <div className="h-screen w-full fixed left-0  -z-20 bg-grid-large-gray-200/[0.6]  flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
      </div>
      <div className="mt-16">
        <div className="flex justify-center">
          <div className="bg-[#DCFD82] flex items-center p-2 rounded-md border-[1px] border-black justify-center font-gilroy-medium space-x-3">
            <div>1000+ successful deals</div>
            <div className="p-2 bg-white border-black border-[1px]  rounded-md">
              <Image
                src="/images/arrow-up-right.png"
                height={20}
                width={20}
                alt="arrow-up-right"
              />
            </div>
          </div>
        </div>
        <div>
          <div className=" flex  justify-center mt-10 ">
            <div className="font-gilroy-bold max-w-[42rem] text-center text-3xl lg:text-5xl">
              The Best Online{" "}
              <span className="text-[#7850FF]">Marketplace</span> To Buy And
              Sell Startps
            </div>
          </div>
          <div className="flex justify-center ">
            <div className="text-center max-w-[40rem] mt-5 font-gilroy-regular">
              Join 200k entrepreneurs closing life changing deals. Buy and sell
              startups in as little as 30 days, supported by the best advisors
              and tech.
            </div>
          </div>
        </div>
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
        <div className="flex justify-center mt-10">
          <div className=" shadow-xl rounded-3xl">
            <Image
              src="/images/Mockup.png"
              height={700}
              width={1000}
              alt="Mockup"
            />
          </div>
        </div>
      </div>

      <div className="mt-20">
        <div className="flex justify-center">
          <div className="text-2xl lg:text-4xl font-gilroy-bold max-w-[40rem] text-center ">
            The World&apos;s Number One Business Acquisition Marketplace
          </div>
        </div>
        <div className="lg:flex relative justify-between  mt-10">
          <div className=" items-center block">
            <Image
              src="/images/card1.png"
              height={350}
              width={350}
              alt="Mockup"
            />
            <div>
              <div className="flex justify-center font-gilroy-bold text-xl lg:text-2xl">
                Sellers
              </div>
              <div className="flex justify-center ">
                <div className="max-w-60 mt-2 font-gilroy-medium text-xs lg:text-base text-center">
                  Create the perfect Listing with expert help from Our Team
                </div>
              </div>
            </div>
          </div>
          <div className="absolute hidden left-[20rem] top-[205px] max-h-48">
            <Image
              src="/images/left-side.png"
              height="10"
              width="240"
              alt="left-side"
            />
          </div>
          <div className="items-center block">
            <Image
              src="/images/card2.png"
              height={350}
              width={350}
              alt="Mockup"
            />
            <div>
              <div className="flex justify-center font-gilroy-bold text-xl lg:text-2xl mt-5">
                Platform
              </div>
              <div className="flex justify-center ">
                <div className="max-w-96 mt-2 text-xs lg:text-base font-gilroy-medium text-center">
                  We connect buyers and sellers, starting the right conversation
                  that lead to an acquisition.
                </div>
              </div>
            </div>
          </div>
          <div className="block items-center">
            <Image
              src="/images/card3.png"
              height={350}
              width={350}
              alt="Mockup"
            />
            <div>
              <div className="flex justify-center font-gilroy-bold text-xl lg:text-2xl">
                Buyer
              </div>
              <div className="flex justify-center ">
                <div className="max-w-60 mt-2 font-gilroy-medium text-xs lg:text-base  text-center">
                  Find your ideal startup and make an offer in minutes.
                </div>
              </div>
            </div>
          </div>
        </div>
        <AdminListing />
        <BuyerSection />
        <SellerSection />
        <div className="mt-24">
          <div className=" flex justify-center">
            <div className="max-w-[60rem]">
              <div className=" font-gilroy-bold text-2xl lg:text-5xl text-center">
                What do founders and buyers say about Ecomswap?
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <div className="max-w-[40rem] text-sm lg:text-base font-gilroy-regular text-center">
            Join 200k entrepreneurs closing life changing deals. Buy and sell
            startups in as little as 30 days, supported by the best advisors and
            tech.
          </div>
        </div>
        {renderReviews()}
        <div className="mt-28">
          <div className="flex justify-center">
            <div className="text-[#7850FF] font-gilroy-bold italic text-2xl">
              Our Blogs
            </div>
          </div>
          <div className="flex justify-center">
            <div className=" font-gilroy-bold text-center text-2xl lg:text-5xl mt-2">
              Get good deals for your Business
            </div>
          </div>
          <div>{renderBlogs()}</div>
        </div>
      </div>

      <div className="bg-white mt-20 py-20">
        <div className="flex justify-center">
          <div className="text-2xl lg:text-4xl font-gilroy-bold max-w-[50rem] capitalize text-center">
            Join 200k+ founders and buyers already doing business on Ecomswap
          </div>
        </div>
        <div>
          <div className="flex justify-center mt-10">
            <div className="bg-[#190041] p-2 rounded-full px-4 flex justify-center">
              <div className="flex items-center text-white space-x-2 ">
                <div className="font-gilroy-medium">Join now</div>
                <div className="text-[#DCFD82]">
                  <FaArrowRight />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 lg:px-36">
          <div className="flex justify-between ">
            <div>
              <Image
                src="/images/notion.png"
                width={60}
                height={60}
                alt="sponsorlogo"
              />
            </div>
            <div>
              <Image
                src="/images/slack.png"
                width={70}
                height={70}
                alt="sponsorlogo"
              />
            </div>
            <div>
              <Image
                src="/images/drive.png"
                width={70}
                height={70}
                alt="sponsorlogo"
              />
            </div>
            <div>
              <Image
                src="/images/icon_homepage1.png"
                width={70}
                height={70}
                alt="sponsorlogo"
              />
            </div>
            <div>
              <Image
                src="/images/icon_homepage2.png"
                width={70}
                height={70}
                alt="sponsorlogo"
              />
            </div>
            <div>
              <Image
                src="/images/icon_homepage3.png"
                width={70}
                height={70}
                alt="sponsorlogo"
              />
            </div>
            <div>
              <Image
                src="/images/icon_homepage4.png"
                width={70}
                height={70}
                alt="sponsorlogo"
              />
            </div>
            <div>
              <Image
                src="/images/icon_homepage5.png"
                width={70}
                height={70}
                alt="sponsorlogo"
              />
            </div>
            <div>
              <Image
                src="/images/figma.png"
                width={70}
                height={70}
                alt="sponsorlogo"
              />
            </div>
            <div>
              <Image
                src="/images/icon_homepage6.png"
                width={70}
                height={70}
                alt="sponsorlogo"
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default page;
