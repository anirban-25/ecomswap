"use client";
import { db } from "@/firebase";
import React, { useEffect, useState } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import ReactFlagsSelect from "react-flags-select";
import ReactPhoneInput from "react-phone-input-2";
import { Box, Button, Typography, TextField, MenuItem } from "@mui/material";

const ActionList = ({ Id }) => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [formData, setFormData] = useState({
    businessType: "E-commerce",
    userAcquisition: "",
    description: "",
    websiteUrl: "",
    location: "",
    startDate: "",
    revenue: "",
    profit: "",
    analytics: "",
    tag: "",
  });

  useEffect(() => {
    const fetchListingData = async () => {
      if (!Id) return;

      try {
        const docRef = doc(db, "admin", Id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const timestamp = docSnap.data().form1BusinessStarted || ""; // Assuming form1BusinessStarted is the field containing the timestamp
          console.log("timestampString:", timestamp); // Assuming form1BusinessStarted is the field containing the timestamp
          let startDate = "";
          if (timestamp && typeof timestamp.toDate === "function") {
            // Convert Firestore Timestamp to JavaScript Date
            const date = timestamp.toDate();
            console.log("Converted date:", date); // Log the converted date to debug

            // Get the year, month, and day from the Date object
            const year = date.getFullYear();
            const month = ("0" + (date.getMonth() + 1)).slice(-2);
            const day = ("0" + date.getDate()).slice(-2);
            // Format the date as YYYY-MM-DD
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
        
          setSelectedDate(startDate);

          setSelectedCountry(docSnap.data().form1LocationOfBusiness)
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
    console.log(e.target)
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
    console.log(typeof formData.location);
    console.log(formData.startDate);
    try {
      const docRef = doc(db, "admin", Id);
      await updateDoc(docRef, {
        form1BusinessType: businessType,
        form1PrimarySourceOfUserAcquisition: formData.userAcquisition,
        form1BriefDescription: formData.description,
        form1WebsiteUrl: formData.websiteUrl,
        form1LocationOfBusiness: formData.location,
        form1BusinessStarted: formData.startDate,
        form2trailingTotalRevenue: formData.revenue,
        form2netProfit: formData.profit,
        form3GoogleAnalytics: formData.analytics,
        form1Tag: formData.tag,
        form1selectedIndustry: formData.industryType,
        form3paymentProcessors: formData.paymentType,
        form4CountriesToTarget: formData.countriesTarget,
        form4SocialMedias: formData.socialLinks,
        form4Risks: formData.risks,
        form4bulltedPointstoDescribe: formData.bullet,
        form4detailedBusinessDescription: formData.description,
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
    <Box sx={{ padding: 2 }}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <TextField
          select
          label="Business Type"
          name="businessType"
          value={formData.businessType || ""}
          onChange={handleChange}
          sx={{ width: "45%" }}
          margin="normal"
        >
          <MenuItem value="E-commerce">E-commerce</MenuItem>
          <MenuItem value="Shopify">Shopify</MenuItem>
          <MenuItem value="Amazon FBA">Amazon FBA</MenuItem>
          <MenuItem value="Saas">Saas</MenuItem>
          <MenuItem value="Content">Content</MenuItem>
          <MenuItem value="Others">Others</MenuItem>
        </TextField>

        <TextField
          select
          label="User Acquisition"
          name="userAcquisition"
          value={formData.userAcquisition || ""}
          onChange={handleChange}
          sx={{ width: "45%" }}
          margin="normal"
        >
          <MenuItem value="SEO">SEO</MenuItem>
          <MenuItem value="Social-Media">Social Media</MenuItem>
          <MenuItem value="Paid-Ads">Paid Ads</MenuItem>
          <MenuItem value="Afilliate-Marketing">Influencer Marketing</MenuItem>
        </TextField>
      </Box>

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
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <TextField
          fullWidth
          label="Website URL"
          name="websiteUrl"
          value={formData.websiteUrl || ""}
          onChange={handleChange}
          sx={{ width: "45%" }}
          margin="normal"
        />

        <Box mr={49}>
          <Typography
            variant="subtitle1"
            sx={{ marginBottom: 1, width: "100%" }}
          >
            Location of the Business
          </Typography>
          <ReactFlagsSelect
            label="Location of the Business"
            name="location"
            selected={formData.location}
            onSelect={handleChange}
            searchable
            searchPlaceholder="Search for a country"
            className="w-full"
          />
        </Box>
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <TextField
          fullWidth
          label="Business first start date"
          name="startDate"
          type="date"
          value={formData.startDate}
          onChange={handleChange}
          margin="normal"
          sx={{ width: "20%" }}
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          fullWidth
          select
          label="Industry"
          name="industryType"
          value={formData.industryType || ""}
          onChange={handleChange}
          sx={{ width: "45%" }}
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
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <TextField
          fullWidth
          label="Total Revenue (TTM) in the Last 12 Months"
          name="revenue"
          value={formData.revenue || ""}
          onChange={handleChange}
          margin="normal"
          sx={{ width: "45%" }}
          type="number"
        />

        <TextField
          fullWidth
          label="Net Profit in the Last 12 Months"
          name="profit"
          value={formData.profit || ""}
          onChange={handleChange}
          margin="normal"
          sx={{ width: "45%" }}
          type="number"
        />
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <TextField
          fullWidth
          select
          label="Google Analytics or Clicky installed?"
          name="analytics"
          value={formData.analytics || ""}
          onChange={handleChange}
          sx={{ width: "45%" }}
          margin="normal"
        >
          <MenuItem value="Yes">Yes</MenuItem>
          <MenuItem value="No">No</MenuItem>
        </TextField>
        <TextField
          fullWidth
          select
          label="Payment Processor"
          name="paymentType"
          value={formData.paymentType || ""}
          onChange={handleChange}
          sx={{ width: "45%" }}
          margin="normal"
        >
          <MenuItem value="PayPal">PayPal</MenuItem>
          <MenuItem value="Shopify-payments">Shopify-payments</MenuItem>
          <MenuItem value="Klarna">Klarna</MenuItem>
          <MenuItem value="Stripe">Stripe</MenuItem>
          <MenuItem value="Other">Other</MenuItem>
        </TextField>
      </Box>
      <TextField
        fullWidth
        label="Countries Target"
        name="countriesTarget"
        value={formData.countriesTarget || ""}
        onChange={handleChange}
        margin="normal"
      />
      <TextField
        fullWidth
        label="Social media"
        name="socialLinks"
        value={formData.socialLinks || ""}
        onChange={handleChange}
        margin="normal"
      />

      <TextField
        fullWidth
        label="Risks"
        name="risks"
        value={formData.risks || ""}
        onChange={handleChange}
        margin="normal"
      />
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
      <TextField
        fullWidth
        label="Skills Required"
        name="skills"
        value={formData.skills || ""}
        onChange={handleChange}
        margin="normal"
        multiline
        rows={3}
      />
      <TextField
        fullWidth
        label="Support you can offer"
        name="support"
        value={formData.support || ""}
        onChange={handleChange}
        margin="normal"
        multiline
        rows={3}
      />
      <TextField
        fullWidth
        label="Asking Price"
        name="askingprice"
        value={formData.askingprice || ""}
        onChange={handleChange}
        margin="normal"
        type="number"
      />

      <Button
        variant="contained"
        color="primary"
        onClick={handleSave}
        sx={{ marginTop: 2 }}
      >
        Save
      </Button>
    </Box>
  );
};

export default ActionList;
