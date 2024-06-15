"use client";
import { db } from "@/firebase";
import React, { useEffect, useState } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import ReactFlagsSelect from "react-flags-select";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Button, TextField, MenuItem } from "@mui/material";
import { Textarea } from "@material-tailwind/react";
import { useRouter } from "next/navigation";
import {
  getStorage,
  ref,
  listAll,
  getDownloadURL,
  uploadBytes,
} from "firebase/storage";
import DatePicker from "react-datepicker";
import Link from "next/link";
import Select from "react-select";
import { trefoil } from "ldrs";
import "react-datepicker/dist/react-datepicker.css";

const ActionList = ({ Id }) => {
  const router = useRouter();
  const [selectedImage, setSelectedImage] = useState("");
  const processors = [
    { value: "PayPal", label: "PayPal" },
    { value: "Shopify-payments", label: "Shopify-payments" },
    { value: "Klarna", label: "Klarna" },
    { value: "Stripe", label: "Stripe" },
    { value: "Other", label: "Other" },
  ];

  const subs = [
    {
      value: "Shipping physical products",
      label: "Shipping physical products",
    },
    { value: "Shipping digital products", label: "Shipping digital products" },
    { value: "Dropshipping", label: "Dropshipping" },
    { value: "Print-on-demand", label: "Print-on-demand" },
  ];

  const [loader, setLoader] = useState(true);
  const [formData, setFormData] = useState({
    businessType: "",
    businessTypeSub: "",
    userAcquisition: "",
    description: "",
    websiteUrl: "",
    location: "",
    startDate: "",
    revenue: "",
    tags: "",
    profit: "",
    analytics: "",
    industryType: "",
    paymentType: "",
    countriesTarget: "",
    socialLinks: "",
    risks: "",
    bullet: "",
    detailed: "",
    skills: "",
    support: "",
    askingprice: "",
    adminStatus: "Pending",
    file: "",
    netrevenuepercentage: "",
    netprofitstatus: "",
    netrevenuestatus: "",
    netprofitpercentage: "",
    monthlynetprofit: "",
    monthlyrevenue: "",
    trafficpercentage: "",
    trafficstatus: "",
    monthlymultiple: "",
    image: "",
    name: "",
    email: "",
    phnumber: "",
    isVerified: "",
  });
  const handlePaymentChange = (selectedOptions) => {
    setFormData((prev) => ({
      ...prev,
      paymentType: selectedOptions
        ? selectedOptions.map((option) => option.value)
        : [],
    }));
  };
  const handleProcessorsChange = (selectedOptions) => {
    setFormData((prev) => ({
      ...prev,
      businessTypeSub: selectedOptions
        ? selectedOptions.map((option) => option.value)
        : [],
    }));
  };

  useEffect(() => {
    trefoil.register();
    const fetchListingData = async () => {
      if (!Id) return;

      try {
        const docRef = doc(db, "admin", Id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const timestamp = docSnap.data().form1BusinessStarted || "";
          let startDate = "";
          if (timestamp && typeof timestamp.toDate === "function") {
            const date = timestamp.toDate();
            console.log("Converted date:", date);

            const year = date.getFullYear();
            const month = ("0" + (date.getMonth() + 1)).slice(-2);
            const day = ("0" + date.getDate()).slice(-2);
            startDate = `${year}-${month}-${day}`;
          } else {
            console.error("Invalid Firestore Timestamp format");
          }
          setFormData({
            businessType: docSnap.data().form1BusinessType || "",
            businessTypeSub: docSnap.data().form1BusinessTypeSub || "",
            userAcquisition:
              docSnap.data().form1PrimarySourceOfUserAcquisition || "",
            description: docSnap.data().form1BriefDescription || "",
            websiteUrl: docSnap.data().form1WebsiteUrl || "",
            location: docSnap.data().form1LocationOfBusiness,
            startDate: startDate,
            adminStatus: docSnap.data().adminStatus || "",
            netprofitpercentage: docSnap.data().netprofitpercentage || "",
            netrevenuepercentage: docSnap.data().netrevenuepercentage || "",
            monthlynetprofit: docSnap.data().monthlynetprofit || "",
            monthlyrevenue: docSnap.data().monthlyrevenue || "",
            trafficpercentage: docSnap.data().trafficpercentage || "",
            revenue: docSnap.data().form2trailingTotalRevenue || "",
            profit: docSnap.data().form2netProfit || "",
            tags: docSnap.data().tags || "",
            monthlymultiple: docSnap.data().monthlymultiple || "",


            analytics: docSnap.data().form3GoogleAnalytics || "",
            industryType: docSnap.data().form1selectedIndustry || "",
            paymentType: docSnap.data().form3paymentProcessors || "",
            countriesTarget: docSnap.data().form4CountriesToTarget || "",
            socialLinks: docSnap.data().form4SocialMedias || "",
            risks: docSnap.data().form4Risks || "• ",
            bullet: docSnap.data().form4bulltedPointstoDescribe || "• ",
            detailed: docSnap.data().form4detailedBusinessDescription || "",
            skills: docSnap.data().form4supportYoucanOffer || "• ",
            support: docSnap.data().form4skillsRequired || "• ",
            askingprice: docSnap.data().form5askingPrice || "",
            phnumber: docSnap.data().form6phoneNumber || "",
            name: docSnap.data().form6name || "",
            email: docSnap.data().form6email || "",
            isVerified:docSnap.data().isVerified || "",
          });
        } else {
          console.error("No such document!");
        }
        const storage = getStorage();
        const storageRef = ref(storage);
        const fileName = Id + ".xlsx";
        const imageFileName = Id + ".jpg";
        console.log(imageFileName);
        const fileList = await listAll(storageRef);
        try {
          const file = fileList.items.find((item) => item.name === fileName);

          if (!file) {
            throw new Error("File not found");
          }

          const downloadURL = await getDownloadURL(file);
          console.log("Download URL:", downloadURL);
          setFormData((prev) => ({
            ...prev,
            file: downloadURL,
          }));
        } catch (error) {
          console.error("Fetching file failed", error);
        }

        try {
          const fileList = await listAll(storageRef);

          const imgFile = fileList.items.find(
            (item) => item.name === imageFileName
          );

          if (!imgFile) {
            throw new Error("File not found");
          }

          const imgDownloadURL = await getDownloadURL(imgFile);
          console.log(imgDownloadURL);

          setSelectedImage(imgDownloadURL);
        } catch (error) {}
        setLoader(false);
      } catch (error) {
        console.error("Error fetching document:", error);
      }
    };

    fetchListingData();
  }, []);

  const handleChange = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    console.log(name, value);
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && event.target.name === "bullet") {
      event.preventDefault();
      const cursorPosition = event.target.selectionStart;
      const textBefore = event.target.value.substring(0, cursorPosition);
      const textAfter = event.target.value.substring(cursorPosition);
      const newValue = `${textBefore}\n• ${textAfter}`;
      setFormData({ ...formData, bullet: newValue });
    }
  };
  const handleKeyDownforrisks = (event) => {
    if (event.key === "Enter" && event.target.name === "risks") {
      event.preventDefault();
      const cursorPosition = event.target.selectionStart;
      const textBefore = event.target.value.substring(0, cursorPosition);
      const textAfter = event.target.value.substring(cursorPosition);
      const newValue = `${textBefore}\n• ${textAfter}`;
      setFormData({ ...formData, risks: newValue });
    }
  };
  const handleKeyDownforskills = (event) => {
    if (event.key === "Enter" && event.target.name === "skills") {
      event.preventDefault();
      const cursorPosition = event.target.selectionStart;
      const textBefore = event.target.value.substring(0, cursorPosition);
      const textAfter = event.target.value.substring(cursorPosition);
      const newValue = `${textBefore}\n• ${textAfter}`;
      setFormData({ ...formData, skills: newValue });
    }
  };

  const handleKeyDownforsupport = (event) => {
    if (event.key === "Enter" && event.target.name === "support") {
      event.preventDefault();
      const cursorPosition = event.target.selectionStart;
      const textBefore = event.target.value.substring(0, cursorPosition);
      const textAfter = event.target.value.substring(cursorPosition);
      const newValue = `${textBefore}\n• ${textAfter}`;
      setFormData({ ...formData, support: newValue });
    }
  };
  const handleSave = async () => {
    try {
      const docRef = doc(db, "admin", Id);
      const storage = getStorage();
      try {
        const fileName = `${Id}.jpg`;
        console.log(fileName);
        if (formData.image && formData.image.length > 0) {
          const fileref = ref(storage, fileName);
          const snapshot = await uploadBytes(fileref, formData.image[0]);
          const url = await getDownloadURL(snapshot.ref);
          console.log("Image URL is: ", url);
          // You can also update your Firestore document with the URL here
          // await updateDoc(docRef, { imageUrl: url });
        } else {
          console.log("no");
        }
      } catch (error) {
        console.error("Upload failed", error);
      }
      await updateDoc(docRef, {
        form1BusinessType: formData.businessType,
        form1BusinessTypeSub: formData.businessTypeSub,
        form1PrimarySourceOfUserAcquisition: formData.userAcquisition,
        form1BriefDescription: formData.description,
        form1WebsiteUrl: formData.websiteUrl,
        form1LocationOfBusiness: formData.location,
        form1BusinessStarted: formData.startDate,
        form2trailingTotalRevenue: formData.revenue,
        form2netProfit: formData.profit,
        adminStatus: formData.adminStatus,
        netrevenuepercentage: formData.netrevenuepercentage,
        netprofitpercentage: formData.netprofitpercentage,
        monthlynetprofit: formData.monthlynetprofit,
        monthlyrevenue: formData.monthlyrevenue,
        trafficpercentage: formData.trafficpercentage,
        monthlymultiple: formData.monthlymultiple,

        form3GoogleAnalytics: formData.analytics,
        form1selectedIndustry: formData.industryType,
        form3paymentProcessors: formData.paymentType,
        form4CountriesToTarget: formData.countriesTarget,
        form4SocialMedias: formData.socialLinks,
        form4Risks: formData.risks,
        form4bulltedPointstoDescribe: formData.bullet,
        form4detailedBusinessDescription: formData.detailed,
        form4skillsRequired: formData.skills,
        form4supportYoucanOffer: formData.support,
        form5askingPrice: formData.askingprice,
        form6email: formData.email,
        form6name: formData.name,
        form6phoneNumber: formData.phnumber,
        isVerified: formData.isVerified,
      });

      alert("Listing updated successfully!");
      // router.push(`/admin-panel`);
    } catch (error) {
      console.error("error updating document:", error);
    }
  };

  return (
    <div className="p-4">
      {loader ? (
        <div className="flex justify-center items-center h-screen">
          <l-trefoil
            size="40"
            stroke="4"
            stroke-length="0.15"
            bg-opacity="0.1"
            speed="1"
            color="black"
          ></l-trefoil>
        </div>
      ) : (
        <div className="p-6 bg-white border-dashed border border-gray-400 rounded-2xl shadow-lg">
          <div className=" font-gilroy-bold text-2xl mb-10 text-[#7850FF]">
            Edit Listing
          </div>

          <div className=" w-full flex justify-between items-center">
            <div className="  w-[45%]">
              <div className="flex font-gilroy-medium">
                <div className="text-[#402c83]">Business Type</div>
                {formData.businessType && (
                  <div className="text-red-600 font-gilroy-bold">*</div>
                )}
              </div>
              <TextField
                select
                label="Business Type"
                name="businessType"
                value={formData.businessType || ""}
                onChange={handleChange}
                margin="normal"
                className=" w-full"
              >
                <MenuItem value="Shopify">Shopify</MenuItem>
                <MenuItem value="E-commerce">E-commerce</MenuItem>
                <MenuItem value="Amazon-FBA">Amazon-FBA</MenuItem>
                <MenuItem value="Saas">Saas</MenuItem>
                <MenuItem value="Content">Content</MenuItem>
                <MenuItem value="Others">Others</MenuItem>
              </TextField>
              <div className="flex font-gilroy-medium mt-5">
                <div className="text-[#402c83]">Source of income </div>
                {formData.businessTypeSub && (
                  <div className="text-red-600 font-gilroy-bold">*</div>
                )}
              </div>
              <Select
                options={subs}
                value={subs.filter((sub) =>
                  formData.businessTypeSub.includes(sub.value)
                )}
                onChange={handleProcessorsChange}
                isMulti
                className="py-2 rounded-xl z-90"
              />
            </div>
            <div className="  w-[45%]">
              <div className="flex font-gilroy-medium">
                <div className="text-[#402c83]">User Acquisition</div>
                {formData.userAcquisition && (
                  <div className="text-red-600 font-gilroy-bold">*</div>
                )}
              </div>
              <TextField
                select
                label="User Acquisition"
                name="userAcquisition"
                value={formData.userAcquisition || ""}
                onChange={handleChange}
                className="
               w-full"
                margin="normal"
              >
                <MenuItem value="SEO">SEO</MenuItem>
                <MenuItem value="Social-Media">Social Media</MenuItem>
                <MenuItem value="Paid-Ads">Paid Ads</MenuItem>
                <MenuItem value="Affiliate-Marketing">
                  Influencer Marketing
                </MenuItem>
              </TextField>
            </div>
          </div>
          <div>
            <div className="flex font-gilroy-medium mt-7">
              <div className="text-[#402c83]">Brief Description</div>
              {formData.description && (
                <div className="text-red-600 font-gilroy-bold">*</div>
              )}
            </div>
            <TextField
              fullWidth
              label="Brief Description (Max - 30 Words)"
              name="description"
              value={formData.description || ""}
              onChange={handleChange}
              margin="normal"
              multiline
              className="z-0"
              rows={3}
            />
          </div>
          <div className="flex justify-between mt-4">
            <div className="w-[45%]">
              <div className="flex font-gilroy-medium mb-2">
                <div className="text-[#402c83]">Website Url </div>
                {formData.websiteUrl && (
                  <div className="text-red-600 font-gilroy-bold">*</div>
                )}
              </div>
              <TextField
                fullWidth
                label="Website URL"
                name="websiteUrl"
                value={formData.websiteUrl || ""}
                onChange={handleChange}
                margin="normal"
              />
            </div>

            <div className=" w-[45%]">
              <div className="flex font-gilroy-medium">
                <div className="text-[#402c83]">Location of the Business</div>
                {formData.location && (
                  <div className="text-red-600 font-gilroy-bold">*</div>
                )}
              </div>

              <ReactFlagsSelect
                label="Location of the Business"
                name="location"
                selected={formData.location}
                onSelect={(code) => {
                  setFormData((prev) => ({
                    ...prev,
                    location: code, // Assuming formData is your current state
                  }));
                }}
                searchable
                searchPlaceholder="Search for a country"
                className=""
              />
            </div>
          </div>
          <div className="flex justify-between mt-4">
            <div className="w-[45%]">
              <div className="flex font-gilroy-medium">
                <div className="text-[#402c83]">Starting Date</div>
                {formData.startDate && (
                  <div className="text-red-600 font-gilroy-bold">*</div>
                )}
              </div>
              <DatePicker
                label="Business first start date"
                name="startDate"
                selected={formData.startDate}
                onChange={(date_first) => {
                  setFormData((prev) => ({
                    ...prev,
                    startDate: date_first, // Assuming formData is your current state
                  }));
                }}
                className="px-3 py-2 rounded-md cursor-pointer border min-w-[20rem] border-gray-400 focus:outline-blue-500 w-full pl-10"
                dateFormat="yyyy/MM/dd"
              />
            </div>
            <div className="w-[45%]">
              <div className="flex font-gilroy-medium">
                <div className="text-[#402c83]">Industry</div>
                {formData.industryType && (
                  <div className="text-red-600 font-gilroy-bold">*</div>
                )}
              </div>
              <TextField
                fullWidth
                select
                label="Industry"
                name="industryType"
                value={formData.industryType || ""}
                onChange={handleChange}
                margin="normal"
              >
                <MenuItem value="Automotive">Automotive</MenuItem>
                <MenuItem value="Business">Business</MenuItem>
                <MenuItem value="Design and Style">Design and Style</MenuItem>
                <MenuItem value="Education">Education</MenuItem>
                <MenuItem value="Electronics">Electronics</MenuItem>
                <MenuItem value="Entertainment">Entertainment</MenuItem>
                <MenuItem value="Food and Drink">Food and Drink</MenuItem>
                <MenuItem value="General Knowledge">General Knowledge</MenuItem>
                <MenuItem value="Health and Beauty">Health and Beauty</MenuItem>
                <MenuItem value="Hobbies and Games">Hobbies and Games</MenuItem>
                <MenuItem value="Home and Garden">Home and Garden</MenuItem>
                <MenuItem value="Internet">Internet</MenuItem>
                <MenuItem value="Lifestyle">Lifestyle</MenuItem>
                <MenuItem value="Sports and Outdoor">
                  Sports and Outdoor
                </MenuItem>
                <MenuItem value="Travel">Travel</MenuItem>
              </TextField>
            </div>
          </div>
          <div className="flex justify-between mt-4">
            <div className="w-[45%]">
              <div className="flex font-gilroy-medium mb-2">
                <div className="text-[#402c83]">TTM</div>
                {formData.revenue && (
                  <div className="text-red-600 font-gilroy-bold">*</div>
                )}
              </div>
              <TextField
                fullWidth
                label="Total Revenue (TTM) in the Last 12 Months"
                name="revenue"
                value={formData.revenue || ""}
                onChange={handleChange}
                margin="normal"
                type="number"
                className="z-0"
              />
            </div>
            <div className="w-[45%]">
              <div className="flex font-gilroy-medium">
                <div className="text-[#402c83]">Net Profit</div>
                {formData.profit && (
                  <div className="text-red-600 font-gilroy-bold">*</div>
                )}
              </div>
              <TextField
                fullWidth
                label="Net Profit in the Last 12 Months"
                name="profit"
                value={formData.profit || ""}
                onChange={handleChange}
                margin="normal"
                type="number"
              />
            </div>
          </div>
          <div className="flex justify-between mt-4">
            <div className="w-[45%]">
              <div className="flex font-gilroy-medium">
                <div className="text-[#402c83]">Google Analytics</div>
                {formData.analytics && (
                  <div className="text-red-600 font-gilroy-bold">*</div>
                )}
              </div>
              <TextField
                fullWidth
                select
                label="Google Analytics or Clicky installed?"
                name="analytics"
                value={formData.analytics || ""}
                onChange={handleChange}
                margin="normal"
                className="z-0"
              >
                <MenuItem value="Yes">Yes</MenuItem>
                <MenuItem value="No">No</MenuItem>
              </TextField>
            </div>
            <div className="w-[45%]">
              <div className="flex font-gilroy-medium">
                <div className="text-[#402c83]">Payment Processor</div>
                {formData.paymentType != "" && (
                  <div className="text-red-600 font-gilroy-bold">*</div>
                )}
              </div>
              <Select
                options={processors}
                value={processors.filter((option) =>
                  formData.paymentType.includes(option.value)
                )}
                onChange={handlePaymentChange}
                isMulti
                className="py-2 rounded-xl"
              />
            </div>
          </div>
          <div>
            <div className="flex font-gilroy-medium mb-2 mt-5">
              <div className="text-[#402c83] ">Targetted Countries</div>
              {formData.countriesTarget && (
                <div className="text-red-600 font-gilroy-bold">*</div>
              )}
            </div>
            <Textarea
              fullWidth
              label="Countries Target"
              name="countriesTarget"
              value={formData.countriesTarget || ""}
              onChange={handleChange}
              margin="normal"
            />
          </div>
          <div className="mt-5">
            <div className="flex font-gilroy-medium">
              <div className="text-[#402c83]">Social media links</div>
              {formData.socialLinks && (
                <div className="text-red-600 font-gilroy-bold">*</div>
              )}
            </div>
            <TextField
              label="Social media"
              name="socialLinks"
              value={formData.socialLinks || ""}
              onChange={handleChange}
              margin="normal"
              rows={2}
            />
          </div>
          <div>
            <div className="flex font-gilroy-medium mt-5 mb-2">
              <div className="text-[#402c83] ">Risks</div>
              {formData.risks && (
                <div className="text-red-600 font-gilroy-bold">*</div>
              )}
            </div>
            <Textarea
              fullWidth
              label="Risks"
              name="risks"
              value={formData.risks || ""}
              onChange={handleChange}
              onKeyDown={handleKeyDownforrisks}
              margin="normal"
              multiline
              rows={3}
            />
          </div>
          <div>
            <div className="flex font-gilroy-medium mt-5 mb-2">
              <div className="text-[#402c83]">Bullet Points</div>
              {formData.bullet && (
                <div className="text-red-600 font-gilroy-bold">*</div>
              )}
            </div>
            <Textarea
              fullWidth
              label="Bulleted points"
              name="bullet"
              value={formData.bullet || ""}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              margin="normal"
              multiline
              rows={6}
            />
          </div>
          <div>
            <div className="flex font-gilroy-medium mt-5 ">
              <div className="text-[#402c83]">Detailed Description</div>
              {formData.detailed && (
                <div className="text-red-600 font-gilroy-bold">*</div>
              )}
            </div>
            <TextField
              fullWidth
              label="Detailed Description"
              name="detailed"
              value={formData.detailed || ""}
              onChange={handleChange}
              margin="normal"
              multiline
              rows={3}
            />
          </div>
          <div>
            <div className="flex font-gilroy-medium mt-5 mb-2">
              <div className="text-[#402c83]">Skills Required</div>
              {formData.bullet && (
                <div className="text-red-600 font-gilroy-bold">*</div>
              )}
            </div>
            <Textarea
              fullWidth
              label="Skills Required"
              name="skills"
              value={formData.skills || ""}
              onChange={handleChange}
              onKeyDown={handleKeyDownforskills}
              margin="normal"
              multiline
              rows={3}
            />
          </div>
          <div>
            <div className="flex font-gilroy-medium mt-5 mb-2">
              <div className="text-[#402c83]">Support you can offer</div>
              {formData.support && (
                <div className="text-red-600 font-gilroy-bold">*</div>
              )}
            </div>
            <Textarea
              fullWidth
              label="Support you can offer"
              name="support"
              value={formData.support || ""}
              onChange={handleChange}
              onKeyDown={handleKeyDownforsupport}
              margin="normal"
              multiline
              rows={3}
            />
          </div>

          <div className="flex justify-between">
            <div className="w-[45%]">
              <div className="flex font-gilroy-medium mt-5 ">
                <div className="text-[#402c83]">Asking Price</div>
                {formData.askingprice && (
                  <div className="text-red-600 font-gilroy-bold">*</div>
                )}
              </div>
              <TextField
                fullWidth
                label="Asking Price"
                name="askingprice"
                value={formData.askingprice || ""}
                onChange={handleChange}
                margin="normal"
                type="number"
              />
            </div>
            <div className="w-[45%]">
              <div className="flex font-gilroy-medium mt-5 ">
                <div className="text-[#402c83]">Admin Status</div>
                {formData.adminStatus && (
                  <div className="text-red-600 font-gilroy-bold">*</div>
                )}
              </div>
              <TextField
                select
                label="Admin Status"
                name="adminStatus"
                value={formData.adminStatus || ""}
                onChange={handleChange}
                margin="normal"
                className="w-full"
              >
                <MenuItem value="Approved">Approved</MenuItem>
                <MenuItem value="Pending">Pending</MenuItem>
              </TextField>
            </div>
          </div>

          <div className="w-[45%] mt-10">
            <div className="flex font-gilroy-medium">
              <div className="text-[#402c83] mb-2">User Uploaded File</div>
              {formData.file && (
                <div className="text-red-600 font-gilroy-bold">*</div>
              )}
            </div>
            {formData.file && (
              <Link href={formData.file} target="_blank">
                <div className="text-blue-700 underline">
                  Click here to open the file
                </div>
              </Link>
            )}
          </div>

          <div className="flex justify-between">
            <div className="w-[45%]">
              <div className="flex font-gilroy-medium mt-5 ">
                <div className="text-[#402c83]">
                  Net Profit Percentage(1 Yr)
                </div>
                {formData.netprofitpercentage && (
                  <div className="text-red-600 font-gilroy-bold">*</div>
                )}
              </div>
              <TextField
                label="Net Profit Percentage(%)(1 Yr)"
                name="netprofitpercentage"
                value={formData.netprofitpercentage || ""}
                onChange={handleChange}
                margin="normal"
                className="w-full"
                type="number"
              />
            </div>

            <div className="w-[45%]">
              <div className="flex font-gilroy-medium mt-5 ">
                <div className="text-[#402c83]">
                  Net Revenue Percentage(1 Yr)
                </div>
                {formData.netrevenuepercentage && (
                  <div className="text-red-600 font-gilroy-bold">*</div>
                )}
              </div>
              <TextField
                label="Net Revenue Percentage(%)(1 Yr)"
                name="netrevenuepercentage"
                value={formData.netrevenuepercentage || ""}
                onChange={handleChange}
                margin="normal"
                className="w-full"
                type="number"
              />
            </div>
          </div>

          <div className="flex justify-between">
          <div className="w-[45%]">
              <div className="flex font-gilroy-medium mt-5 ">
                <div className="text-[#402c83]">
                  Monthly Multiple
                </div>
                {formData.monthlymultiple && (
                  <div className="text-red-600 font-gilroy-bold">*</div>
                )}
              </div>
              <TextField
                label="Monthly Multiple"
                name="monthlymultiple"
                value={formData.monthlymultiple || ""}
                onChange={handleChange}
                margin="normal"
                className="w-full"
                type="number"
              />
            </div>
        
          </div>

          <div className="flex justify-between">
            <div className="w-[45%]">
              <div className="flex font-gilroy-medium mt-5 ">
                <div className="text-[#402c83]">Monthly Net Profit</div>
                {formData.monthlynetprofit && (
                  <div className="text-red-600 font-gilroy-bold">*</div>
                )}
              </div>
              <TextField
                fullWidth
                label="Monthly Net Profit"
                name="monthlynetprofit"
                value={formData.monthlynetprofit || ""}
                onChange={handleChange}
                margin="normal"
                type="number"
              />
            </div>
            <div className="w-[45%]">
              <div className="flex font-gilroy-medium mt-5 ">
                <div className="text-[#402c83]">Monthly Revenue</div>
                {formData.monthlyrevenue && (
                  <div className="text-red-600 font-gilroy-bold">*</div>
                )}
              </div>
              <TextField
                label="Net Revenue Percentage(%)(1 Yr)"
                name="monthlyrevenue"
                value={formData.monthlyrevenue || ""}
                onChange={handleChange}
                margin="normal"
                className="w-full"
                type="number"
              />
            </div>
          </div>
          <div className="flex justify-between">
            <div className="w-[45%]">
              <div className="flex font-gilroy-medium mt-5 ">
                <div className="text-[#402c83]">Traffic Percentage(1 Yr)</div>
                {formData.trafficpercentage && (
                  <div className="text-red-600 font-gilroy-bold">*</div>
                )}
              </div>
              <TextField
                label="Traffic Percentage(%)(1 Yr)"
                name="trafficpercentage"
                value={formData.trafficpercentage || ""}
                onChange={handleChange}
                margin="normal"
                className="w-full"
                type="number"
              />
            </div>
            <div className="w-[45%]">
              <div className="flex font-gilroy-medium mt-5 ">
                <div className="text-[#402c83] mb-2">Contact Number</div>
                {formData.phnumber && (
                  <div className="text-red-600 font-gilroy-bold">*</div>
                )}
              </div>
              <PhoneInput
                value={formData.phnumber || ""}
                onChange={(value) => {
                  setFormData((prev) => ({
                    ...prev,
                    phnumber: value,
                  }));
                }}
                placeholder="Enter phone number"
                containerClass="w-full mb-4 "
                inputClass="w-[20rem] border border-gray-300 p-5 rounded-lg"
              />
            </div>
          </div>
          <div className="flex justify-between">
            <div className="w-[45%]">
              <div className="flex font-gilroy-medium mt-5 ">
                <div className="text-[#402c83]">Name</div>
                {formData.name && (
                  <div className="text-red-600 font-gilroy-bold">*</div>
                )}
              </div>
              <TextField
                label="Name"
                name="name"
                value={formData.name || ""}
                onChange={handleChange}
                margin="normal"
                className="w-full"
              />
            </div>
            <div className="w-[45%]">
              <div className="flex font-gilroy-medium mt-5 ">
                <div className="text-[#402c83]">Mail ID</div>
                {formData.email && (
                  <div className="text-red-600 font-gilroy-bold">*</div>
                )}
              </div>
              <TextField
                label="Email"
                name="email"
                value={formData.email || ""}
                onChange={handleChange}
                margin="normal"
                className="w-full"
              />
            </div>
          </div>
          <div className="flex justify-between">
            <div className="w-[45%]">
              <div className="font-gilroy-bold mt-4">Upload the image</div>
              <input
                type="file"
                accept=".jpg,.jpeg, .png"
                onChange={(e) => {
                  setFormData((prev) => ({
                    ...prev,
                    image: e.target.files,
                  }));
                }}
                className="block mt-4 w-full  bg-[#221d33] text-white border border-gray-300 rounded-lg font-gilroy-medium text-base cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200 ease-in-out"
              />
              {selectedImage && (
                <div>
                  <div className="text-[#402c83]">
                    Selected Image:
                    <a href={selectedImage} target="_blank">
                      <span className="font-gilroy-bold underline text-indigo-500  cursor-pointer">
                        Image
                      </span>
                    </a>
                  </div>
                </div>
              )}
            </div>
            <div className="w-[45%]">
                <div className="flex font-gilroy-medium mt-4">
                  <div className="text-[#402c83] ">Mark this Listing as Verified or Not</div>
                  {formData.isVerified && (
                    <div className="text-red-600 font-gilroy-bold">*</div>
                  )}
                </div>
                <TextField
                  fullWidth
                  select
                  label="isVerified"
                  name="isVerified"
                  value={formData.isVerified || ""}
                  onChange={handleChange}
                  margin="normal"
                >
                  <MenuItem value="Yes">Yes</MenuItem>
                  <MenuItem value="No">No</MenuItem>
                </TextField>
              </div>
          </div>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSave}
            sx={{ marginTop: 2 }}
          >
            Save
          </Button>
        </div>
      )}
    </div>
  );
};

export default ActionList;
