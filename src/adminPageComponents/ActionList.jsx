"use client";
import { db } from "@/firebase";
import React, { useEffect, useState } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import ReactFlagsSelect from "react-flags-select";
import ReactPhoneInput from "react-phone-input-2";
import { Box, Button, Typography, TextField, MenuItem } from "@mui/material";
import { Textarea } from "@material-tailwind/react";

const ActionList = ({ Id }) => {
  const [formData, setFormData] = useState({
    businessType: "",
    userAcquisition: "",
    description: "",
    websiteUrl: "",
    location: "",
    startDate: "",
    revenue: "",
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
  });

  useEffect(() => {
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
            userAcquisition:
              docSnap.data().form1PrimarySourceOfUserAcquisition || "",
            description: docSnap.data().form1BriefDescription || "",
            websiteUrl: docSnap.data().form1WebsiteUrl || "",
            location: docSnap.data().form1LocationOfBusiness,
            startDate: startDate,
            adminStatus: docSnap.data().adminStatus || "",
            revenue: docSnap.data().form2trailingTotalRevenue || "",
            profit: docSnap.data().form2netProfit || "",
            analytics: docSnap.data().form3GoogleAnalytics || "",
            industryType: docSnap.data().form1selectedIndustry || "",
            paymentType: docSnap.data().form3paymentProcessors || "",
            countriesTarget: docSnap.data().form4CountriesToTarget || "",
            socialLinks: docSnap.data().form4SocialMedias || "",
            risks: docSnap.data().form4Risks || "",
            bullet: docSnap.data().form4bulltedPointstoDescribe || "",
            detailed: docSnap.data().form4detailedBusinessDescription || "",
            skills: docSnap.data().form4supportYoucanOffer || "",
            support: docSnap.data().form4skillsRequired || "",
            askingprice: docSnap.data().form5askingPrice || "",
          });
        } else {
          console.error("No such document!");
        }
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
  const handleCountryChange = (code) => {
    setSelectedCountry(code);
    setFormData((prevData) => ({
      ...prevData,
      form1LocationOfBusiness: code,
    }));
  };

  const handleSave = async () => {
    try {
      const docRef = doc(db, "admin", Id);
      await updateDoc(docRef, {
        form1BusinessType: formData.businessType,
        form1PrimarySourceOfUserAcquisition: formData.userAcquisition,
        form1BriefDescription: formData.description,
        form1WebsiteUrl: formData.websiteUrl,
        form1LocationOfBusiness: formData.location,
        form1BusinessStarted: formData.startDate,
        form2trailingTotalRevenue: formData.revenue,
        form2netProfit: formData.profit,
        adminStatus: formData.adminStatus,
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
      });
      alert("Listing updated successfully!");
    } catch (error) {
      console.error("error updating document:", error);
    }
  };

  return (
    <div className="p-4 font-gilroy-bold">
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
              <MenuItem value="E-commerce">E-commerce</MenuItem>
              <MenuItem value="Shopify">Shopify</MenuItem>
              <MenuItem value="Amazon FBA">Amazon FBA</MenuItem>
              <MenuItem value="Saas">Saas</MenuItem>
              <MenuItem value="Content">Content</MenuItem>
              <MenuItem value="Others">Others</MenuItem>
            </TextField>
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
              <MenuItem value="Afilliate-Marketing">
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
            rows={3}
          />
        </div>
        <div className="flex justify-between mt-4">
          <div className="w-[45%]">
            <div className="flex font-gilroy-medium">
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
            <Typography
              variant="subtitle1"
              sx={{ marginBottom: 1, width: "100%" }}
            ></Typography>
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
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          marginTop={5}
          mb={2}
        >
          <div className="w-[45%]">
            <div className="flex font-gilroy-medium">
              <div className="text-[#402c83]">Starting Date</div>
              {formData.startDate && (
                <div className="text-red-600 font-gilroy-bold">*</div>
              )}
            </div>
            <TextField
              fullWidth
              label="Business first start date"
              name="startDate"
              type="date"
              value={formData.startDate}
              onChange={handleChange}
              margin="normal"
              InputLabelProps={{ shrink: true }}
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
              <MenuItem value="Sports and Outdoor">Sports and Outdoor</MenuItem>
              <MenuItem value="Travel">Travel</MenuItem>
            </TextField>
          </div>
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={2}
        >
          <div className="w-[45%]">
            <div className="flex font-gilroy-medium">
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
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={2}
        >
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
            >
              <MenuItem value="Yes">Yes</MenuItem>
              <MenuItem value="No">No</MenuItem>
            </TextField>
          </div>
          <div className="w-[45%]">
            <div className="flex font-gilroy-medium">
              <div className="text-[#402c83]">Payment Processor</div>
              {formData.paymentType && (
                <div className="text-red-600 font-gilroy-bold">*</div>
              )}
            </div>
            <TextField
              fullWidth
              select
              label="Payment Processor"
              name="paymentType"
              value={formData.paymentType || ""}
              onChange={handleChange}
              margin="normal"
            >
              <MenuItem value="PayPal">PayPal</MenuItem>
              <MenuItem value="Shopify-payments">Shopify-payments</MenuItem>
              <MenuItem value="Klarna">Klarna</MenuItem>
              <MenuItem value="Stripe">Stripe</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </TextField>
          </div>
        </Box>
        <div>
          <div className="flex font-gilroy-medium">
            <div className="text-[#402c83] mb-2 mt-5">Countries Target</div>
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
            <div className="text-[#402c83] mb-2">Social Media</div>
            {formData.socialLinks && (
              <div className="text-red-600 font-gilroy-bold">*</div>
            )}
          </div>
          <Textarea
            label="Social media"
            name="socialLinks"
            value={formData.socialLinks || ""}
            onChange={handleChange}
            margin="normal"
          />
        </div>
        <div>
          <div className="flex font-gilroy-medium mt-5 ">
            <div className="text-[#402c83] ">Risks</div>
            {formData.risks && (
              <div className="text-red-600 font-gilroy-bold">*</div>
            )}
          </div>
          <TextField
            fullWidth
            label="Risks"
            name="risks"
            value={formData.risks || ""}
            onChange={handleChange}
            margin="normal"
          />
        </div>
        <div>
          <div className="flex font-gilroy-medium mt-5 ">
            <div className="text-[#402c83]">Bullet Points</div>
            {formData.bullet && (
              <div className="text-red-600 font-gilroy-bold">*</div>
            )}
          </div>
          <TextField
            fullWidth
            label="Bulleted points"
            name="bullet"
            value={formData.bullet || ""}
            onChange={handleChange}
            margin="normal"
            multiline
            rows={3}
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

        <Button
          variant="contained"
          color="primary"
          onClick={handleSave}
          sx={{ marginTop: 2 }}
        >
          Save
        </Button>
      </div>
    </div>
  );
};

export default ActionList;
