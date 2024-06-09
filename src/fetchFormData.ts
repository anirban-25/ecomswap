import { getDocs, collection } from "firebase/firestore";
import { db } from "@/firebase";

type AdminFormData = {
  id: string;
  form1BusinessType: string;
  form1BusinessTypeSub: string;
  form1PrimarySourceOfUserAcquisition: string;
  form1BriefDescription: string;
  form1WebsiteUrl: string;
  form1BusinessStarted: string; 
  form1LocationOfBusiness: string;
  form1selectedIndustry: string;
  form2trailingTotalRevenue: string; 
  form2netProfit: string; 
  form3GoogleAnalytics: string;
  form3paymentProcessors: string;
  form4detailedBusinessDescription: string;
  form4bulltedPointstoDescribe: string;
  form4Risks: string;
  form4skillsRequired: string;
  form4supportYoucanOffer: string;
  form4CountriesToTarget: string;
  form4SocialMedias: string;
  form5askingPrice: string; 
  form6name: string;
  form6email: string;
  form6phoneNumber: string;
};


export const fetchFormData = async (): Promise<AdminFormData[]> => {
  try {
    const querySnapshot = await getDocs(collection(db, "admin"));
    const formData: AdminFormData[] = querySnapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        form1BusinessType: data.form1BusinessType || "",
        form1BusinessTypeSub: data.form1BusinessTypeSub || "",
        form1PrimarySourceOfUserAcquisition: data.form1PrimarySourceOfUserAcquisition || "",
        form1BriefDescription: data.form1BriefDescription || "",
        form1WebsiteUrl: data.form1WebsiteUrl || "",
        form1BusinessStarted: data.form1BusinessStarted || "",
        form1LocationOfBusiness: data.form1LocationOfBusiness || "",
        form1selectedIndustry: data.form1selectedIndustry || "",
        form2trailingTotalRevenue: data.form2trailingTotalRevenue || "",
        form2netProfit: data.form2netProfit || "",
        form3GoogleAnalytics: data.form3GoogleAnalytics || "",
        form3paymentProcessors: data.form3paymentProcessors || "",
        form4detailedBusinessDescription: data.form4detailedBusinessDescription || "",
        form4bulltedPointstoDescribe: data.form4bulltedPointstoDescribe || "",
        form4Risks: data.form4Risks || "",
        form4skillsRequired: data.form4skillsRequired || "",
        form4supportYoucanOffer: data.form4supportYoucanOffer || "",
        form4CountriesToTarget: data.form4CountriesToTarget || "",
        form4SocialMedias: data.form4SocialMedias || "",
        form5askingPrice: data.form5askingPrice || "",
        form6name: data.form6name || "",
        form6email: data.form6email || "",
        form6phoneNumber: data.form6phoneNumber || "",
      };
    });
    return formData;
  } catch (error) {
    console.error("Error fetching data from Firestore:", error);
    throw error;
  }
};
