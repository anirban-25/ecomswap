import React from "react";
import { FaArrowRight, FaDollarSign } from "react-icons/fa";
import { IoPricetags } from "react-icons/io5";
import { IoBagHandleSharp } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { FaShieldVirus } from "react-icons/fa6";
import { FaIndustry } from "react-icons/fa";
import Image from "next/image";

const WhyChooseUs = () => {
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
  const renderReviews = () => {
    return (
      <div className="mt-10 space-y-5 lg:space-y-0 lg:space-x-10 lg:px-20 lg:flex justify-between">
        {reviewList.map((review) => (
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
  return (
    <div className="mt-10">
      <div className="text-4xl font-gilroy-bold text-center">
        Why sell with Ecomswap
      </div>
      <div className="flex mt-10  justify-between space-x-10 px-20">
        <div className=" max-w-[20rem]">
          <div className="flex justify-center">
            <div className="flex justify-center text-[#7850FF] p-2 border-[#7850FF] border-[1px] rounded-xl">
              <FaDollarSign />
            </div>
          </div>
          <div>
            <div className="flex justify-center text-center ">
              <div className=" font-gilroy-bold mt-2">
                You make more money with us than if you sell your website or
                online business on your own
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-center">
              <div className=" text-center text-sm mt-1">
                We typically list a website by taking the average of the last 6
                to 12 months&apos; of net profit and then multiplying that
                figure by a multiple ranging from 20X to 60X+, depending on
                several factors.
              </div>
            </div>
          </div>
        </div>
        <div className=" max-w-[20rem]">
          <div className="flex justify-center">
            <div className="flex justify-center text-[#7850FF] p-2 border-[#7850FF] border-[1px] rounded-xl">
              <IoBagHandleSharp />
            </div>
          </div>
          <div>
            <div className="flex justify-center text-center ">
              <div className=" font-gilroy-bold mt-2">
                Reach thousands of hungry buyers that receive weekly emails when
                we list new sites
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-center">
              <div className=" text-center text-sm mt-1">
                Worried about not being able to close a deal? Every time we send
                out an email, we get more interested buyers and hundreds of
                visitors flood the marketplace. Most listings are unlocked by
                multiple verified buyers.
              </div>
            </div>
          </div>
        </div>
        <div className=" max-w-[20rem]">
          <div className="flex justify-center">
            <div className="flex justify-center text-[#7850FF] p-2 border-[#7850FF] border-[1px] rounded-xl">
              <IoPricetags />
            </div>
          </div>
          <div>
            <div className="flex justify-center text-center ">
              <div className=" font-gilroy-bold mt-2">
                We know our buyers <br /> <br /> <br />
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-center">
              <div className=" text-center text-sm mt-1">
                We already have a connection to interested parties, so we can
                easily help document the information needed to prepare for a
                sale and tailor recommendations to buyers we know are looking
                for a particular type of business.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex mt-10  justify-between space-x-10 px-20">
        <div className=" max-w-[20rem]">
          <div className="flex justify-center">
            <div className="flex justify-center text-[#7850FF] p-2 border-[#7850FF] border-[1px] rounded-xl">
              <IoCall />
            </div>
          </div>
          <div>
            <div className="flex justify-center text-center ">
              <div className=" font-gilroy-bold mt-2">
                You never hear from the tire-kickers and scammers
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-center">
              <div className=" text-center text-sm mt-1">
                We handle all communications between you and the buyer, so you
                have more time to focus on running and growing your business. In
                fact, buyers must unlock a listing before they get specific info
                on your site or business. Inquiries we forward to you are coming
                from serious potential buyers.
              </div>
            </div>
          </div>
        </div>
        <div className=" max-w-[20rem]">
          <div className="flex justify-center">
            <div className="flex justify-center text-[#7850FF] p-2 border-[#7850FF] border-[1px] rounded-xl">
              <FaShieldVirus />
            </div>
          </div>
          <div>
            <div className="flex justify-center text-center ">
              <div className=" font-gilroy-bold mt-2">
                You don’t have to worry about people stealing your business idea
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-center">
              <div className=" text-center text-sm mt-1">
                We hide the URL of your site and never reveal specific
                information to potential buyers who have unlocked your listing.
                This actually benefits both the buyer and you. The problem with
                public sales is that dozens of copycats pop up to cash in on the
                niche and business structure. By hiding the URL, you needn’t
                worry about an influx of new competition.
              </div>
            </div>
          </div>
        </div>
        <div className=" max-w-[20rem]">
          <div className="flex justify-center">
            <div className="flex justify-center text-[#7850FF] p-2 border-[#7850FF] border-[1px] rounded-xl">
              <FaIndustry />
            </div>
          </div>
          <div>
            <div className="flex justify-center text-center ">
              <div className=" font-gilroy-bold mt-2">
                We have the industry&apos;s lowest exclusivity period
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-center">
              <div className=" text-center text-sm mt-1">
                Rather than string you along, we only ask for a 2 month
                exclusivity when listing your business with us. We&apos;re
                confident this gives us enough time to field deals, offers and
                negotiate on your behalf. If your business is not sold after 2
                months, you are free to de-list or list it elsewhere at the same
                time.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="mt-32">
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
    </div>
  );
};

export default WhyChooseUs;
