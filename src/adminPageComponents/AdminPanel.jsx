"use client";

import { db } from "@/firebase";
import React, { useEffect, useState } from "react";
import {
  Box,
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
  InputAdornment,
} from "@mui/material";
import { Button } from "@material-tailwind/react";
import {
  DataGrid,
  GridColDef,
  GridRowsProp,
  GridActionsCellItem,
} from "@mui/x-data-grid";
import {
  Settings,
  ListAlt,
  ExitToApp,
  Person,
  Search,
  Edit,
  Delete,
} from "@mui/icons-material";
import {
  addDoc,
  collection,
  getDocs,
  serverTimestamp,
} from "firebase/firestore";
import { useRouter } from "next/navigation";
import SignUp from "@/adminPageComponents/SignUp";
import Link from "next/link";
const AdminPanel = () => {
  const [loader, setLoader] = useState(false);
  const router = useRouter();
  const [addList, setAddList] = useState("");
  const [dataFrom, setDataFrom] = useState([]);
  const [signedIn, setSignedIn] = useState("");
  const [selectedRows, setSelectedRows] = useState([]);
  const fetchFormData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "admin"));
      const data = [];
      const countryNames = {
        AF: "Afghanistan",
        AL: "Albania",
        DZ: "Algeria",
        AS: "American Samoa",
        AD: "Andorra",
        AO: "Angola",
        AI: "Anguilla",
        AG: "Antigua and Barbuda",
        AR: "Argentina",
        AM: "Armenia",
        AW: "Aruba",
        AU: "Australia",
        AT: "Austria",
        AZ: "Azerbaijan",
        BS: "Bahamas",
        BH: "Bahrain",
        BD: "Bangladesh",
        BB: "Barbados",
        BY: "Belarus",
        BE: "Belgium",
        BZ: "Belize",
        BJ: "Benin",
        BM: "Bermuda",
        BT: "Bhutan",
        BO: "Bolivia, Plurinational State of",
        BA: "Bosnia and Herzegovina",
        BW: "Botswana",
        BR: "Brazil",
        IO: "British Indian Ocean Territory",
        BG: "Bulgaria",
        BF: "Burkina Faso",
        BI: "Burundi",
        KH: "Cambodia",
        CM: "Cameroon",
        CA: "Canada",
        CV: "Cape Verde",
        KY: "Cayman Islands",
        CF: "Central African Republic",
        TD: "Chad",
        CL: "Chile",
        CN: "China",
        CO: "Colombia",
        KM: "Comoros",
        CG: "Congo",
        CD: "Democratic Republic of the Congo",
        CK: "Cook Islands",
        CR: "Costa Rica",
        CI: "Côte d'Ivoire",
        HR: "Croatia",
        CU: "Cuba",
        CW: "Curaçao",
        CY: "Cyprus",
        CZ: "Czech Republic",
        DK: "Denmark",
        DJ: "Djibouti",
        DM: "Dominica",
        DO: "Dominican Republic",
        EC: "Ecuador",
        EG: "Egypt",
        SV: "El Salvador",
        GQ: "Equatorial Guinea",
        ER: "Eritrea",
        EE: "Estonia",
        ET: "Ethiopia",
        FK: "Falkland Islands (Malvinas)",
        FO: "Faroe Islands",
        FJ: "Fiji",
        FI: "Finland",
        FR: "France",
        PF: "French Polynesia",
        GA: "Gabon",
        GM: "Gambia",
        GE: "Georgia",
        DE: "Germany",
        GH: "Ghana",
        GI: "Gibraltar",
        GR: "Greece",
        GL: "Greenland",
        GD: "Grenada",
        GU: "Guam",
        GT: "Guatemala",
        GG: "Guernsey",
        GN: "Guinea",
        GW: "Guinea-Bissau",
        HT: "Haiti",
        HN: "Honduras",
        HK: "Hong Kong",
        HU: "Hungary",
        IS: "Iceland",
        IN: "India",
        ID: "Indonesia",
        IR: "Iran, Islamic Republic of",
        IQ: "Iraq",
        IE: "Ireland",
        IM: "Isle of Man",
        IL: "Israel",
        IT: "Italy",
        JM: "Jamaica",
        JP: "Japan",
        JE: "Jersey",
        JO: "Jordan",
        KZ: "Kazakhstan",
        KE: "Kenya",
        KI: "Kiribati",
        KP: "North Korea",
        KR: "South Korea",
        KW: "Kuwait",
        KG: "Kyrgyzstan",
        LA: "Lao People's Democratic Republic",
        LV: "Latvia",
        LB: "Lebanon",
        LS: "Lesotho",
        LR: "Liberia",
        LY: "Libya",
        LI: "Liechtenstein",
        LT: "Lithuania",
        LU: "Luxembourg",
        MO: "Macao",
        MK: "Republic of Macedonia",
        MG: "Madagascar",
        MW: "Malawi",
        MY: "Malaysia",
        MV: "Maldives",
        ML: "Mali",
        MT: "Malta",
        MH: "Marshall Islands",
        MQ: "Martinique",
        MR: "Mauritania",
        MU: "Mauritius",
        MX: "Mexico",
        FM: "Micronesia, Federated States of",
        MD: "Republic of Moldova",
        MC: "Monaco",
        MN: "Mongolia",
        ME: "Montenegro",
        MS: "Montserrat",
        MA: "Morocco",
        MZ: "Mozambique",
        MM: "Myanmar",
        NA: "Namibia",
        NR: "Nauru",
        NP: "Nepal",
        NL: "Netherlands",
        NZ: "New Zealand",
        NI: "Nicaragua",
        NE: "Niger",
        NG: "Nigeria",
        NU: "Niue",
        NF: "Norfolk Island",
        MP: "Northern Mariana Islands",
        NO: "Norway",
        OM: "Oman",
        PK: "Pakistan",
        PW: "Palau",
        PS: "Palestinian Territory",
        PA: "Panama",
        PG: "Papua New Guinea",
        PY: "Paraguay",
        PE: "Peru",
        PH: "Philippines",
        PN: "Pitcairn",
        PL: "Poland",
        PT: "Portugal",
        PR: "Puerto Rico",
        QA: "Qatar",
        RO: "Romania",
        RU: "Russia",
        RW: "Rwanda",
        KN: "Saint Kitts and Nevis",
        LC: "Saint Lucia",
        WS: "Samoa",
        SM: "San Marino",
        ST: "Sao Tome and Principe",
        SA: "Saudi Arabia",
        SN: "Senegal",
        RS: "Serbia",
        SC: "Seychelles",
        SL: "Sierra Leone",
        SG: "Singapore",
        SX: "Sint Maarten",
        SK: "Slovakia",
        SI: "Slovenia",
        SB: "Solomon Islands",
        SO: "Somalia",
        ZA: "South Africa",
        SS: "South Sudan",
        ES: "Spain",
        LK: "Sri Lanka",
        SD: "Sudan",
        SR: "Suriname",
        SZ: "Swaziland",
        SE: "Sweden",
        CH: "Switzerland",
        SY: "Syria",
        TW: "Taiwan",
        TJ: "Tajikistan",
        TZ: "Tanzania",
        TH: "Thailand",
        TG: "Togo",
        TK: "Tokelau",
        TO: "Tonga",
        TT: "Trinidad and Tobago",
        TN: "Tunisia",
        TR: "Turkey",
        TM: "Turkmenistan",
        TC: "Turks and Caicos Islands",
        TV: "Tuvalu",
        UG: "Uganda",
        UA: "Ukraine",
        AE: "United Arab Emirates",
        GB: "United Kingdom",
        US: "United States",
        UY: "Uruguay",
        UZ: "Uzbekistan",
        VU: "Vanuatu",
        VE: "Venezuela, Bolivarian Republic of",
        VN: "Viet Nam",
        VI: "Virgin Islands",
        YE: "Yemen",
        ZM: "Zambia",
        ZW: "Zimbabwe",
      };
      const getCountryName = (countryCode) => {
        return countryNames[countryCode] || "";
      };

      querySnapshot.forEach((doc) => {
        const docData = doc.data();

        const timestamp = docData.createdAt || "";
        let createdat = "";
        if (timestamp && typeof timestamp.toDate === "function") {
          const date = timestamp.toDate();

          const year = date.getFullYear();
          const month = ("0" + (date.getMonth() + 1)).slice(-2);
          const day = ("0" + date.getDate()).slice(-2);
          createdat = `${year}-${month}-${day}`;
        } else {
          console.error("Invalid Firestore Timestamp format");
        }
        data.push({
          id: doc.id,
          type: docData.form1BusinessType || "",
          TTR: parseInt(docData.form2trailingTotalRevenue, 10) || "",
          location: getCountryName(docData.form1LocationOfBusiness) || "",
          industry: docData.form1selectedIndustry || "",
          startdate: docData.form1BusinessStarted || "",
          askingprice: parseInt(docData.form5askingPrice, 10) || "",
          status: docData.status || "",
          createdat: docData.createdAt || "",
          status: docData.adminStatus || "Pending",
          createdat: createdat,
          listNumber: docData.listNumber || 800,
        });
      });

      setDataFrom(data);
    } catch (error) {
      console.error("Error fetching data from Firestore:", error);
    }
  };
  const handleAddListing = async () => {
    setLoader(true);
    const querySnapshot = await getDocs(collection(db, "admin"));
    let maxListNumber = 800; // Default to 800 if no entries exist

    querySnapshot.forEach((doc) => {
      const listNumber = doc.data().listNumber || 800; // Default to 800 if listNumber is undefined
      maxListNumber = Math.max(maxListNumber, listNumber);
    });

    const newListNumber = maxListNumber + 1;
    const docRef = await addDoc(collection(db, "admin"), {
      form1BusinessType: "",
      form1BusinessTypeSub: "",
      form1PrimarySourceOfUserAcquisition: "",
      form1BriefDescription: "",
      form1WebsiteUrl: "",
      form1BusinessStarted: "",
      form1LocationOfBusiness: "",
      form1selectedIndustry: "",
      form2trailingTotalRevenue: "",
      form2netProfit: "",
      form3GoogleAnalytics: "",
      form3paymentProcessors: "",
      form4detailedBusinessDescription: "",
      form4bulltedPointstoDescribe: "",
      form4Risks: "",
      form4skillsRequired: "",
      form4supportYoucanOffer: "",
      form4CountriesToTarget: "",
      form4SocialMedias: "",
      form5askingPrice: "",
      form6name: "",
      form6email: "",
      form6phoneNumber: "",
      listNumber: newListNumber,
      createdAt: serverTimestamp(),
    });
    setAddList(docRef.id);
    router.push(`admin-panel/${docRef.id}`);
    setLoader(false);
  };
  useEffect(() => {
    fetchFormData();
  }, []);

  const handleEditClick = (id) => {
    router.push(`/admin-panel/${id}`);
  };
  const handleAddToHomepage = async () => {
    console.log(selectedRows);
    try {
      const homepageCollection = collection(db, "homepageListings");
      for (const rowId of selectedRows) {
        const selectedListing = dataFrom.find((item) => item.id === rowId);
        if (selectedListing) {
          await setDoc(
            doc(homepageCollection, selectedListing.id),
            selectedListing
          );
        }
      }
      alert("Selected rows added to homepage!");
    } catch (error) {
      console.error("Error adding listings to homepage:", error);
    }
  };

  const handleDeleteClick = async (id) => {
    try {
      await deleteDoc(doc(db, "admin", id));
      setDataFrom((prevData) => prevData.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error deleting document:", error);
    }
  };
  const columns = [
    { field: "listNumber", headerName: "List Number", width: 130 },
    { field: "type", headerName: "Business Type", width: 170 },
    { field: "TTR", headerName: "TTR", width: 130 },
    { field: "location", headerName: "Location", width: 130 },
    { field: "industry", headerName: "Industry", width: 170 },
    { field: "askingprice", headerName: "Asking Price", width: 110 },
    { field: "status", headerName: "Status", width: 100 },
    { field: "createdat", headerName: "Created at", width: 130 },
    {
      field: "action",
      headerName: "Action",
      width: 120,
      renderCell: (params) => (
        <GridActionsCellItem
          icon={<Edit />}
          label="Edit"
          onClick={() => handleEditClick(params.id)}
        />
      ),
    },
    {
      field: "delete",
      headerName: "Delete",
      width: 100,
      renderCell: (params) => (
        <GridActionsCellItem
          icon={<Delete />}
          label="Delete"
          onClick={() => handleDeleteClick(params.id)}
        />
      ),
    },
  ];

  return (
    <div className=" w-full h-full ">
      {signedIn ? (
        <div className=" h-full items-center flex justify-center">
          <SignUp />
        </div>
      ) : (
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <AppBar position="fixed" sx={{ zIndex: 1300 }}>
            <Toolbar>
              <Typography variant="h6" noWrap component="div">
                Admin Panel
              </Typography>
            </Toolbar>
          </AppBar>
          <Drawer
            variant="permanent"
            sx={{
              width: 180,
              flexShrink: 0,
              [`& .MuiDrawer-paper`]: { width: 180, boxSizing: "border-box" },
            }}
          >
            <Toolbar />
            <Box sx={{ overflow: "auto" }}>
              <img
                src="/images/logo.svg"
                alt="icon"
                style={{ marginLeft: 25, marginTop: 10 }}
              />
              <List>
                {["Listings", "Offers", "Logout"].map((text, index) => (
                  <ListItem component="a" href="#" key={text}>
                    <ListItemIcon>
                      {index === 0 ? <ListAlt /> : null}
                      {index === 1 ? <Settings /> : null}
                      {index === 2 ? <ExitToApp /> : null}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                ))}
              </List>
            </Box>
          </Drawer>
          <Box
            component="main"
            sx={{ flexGrow: 1, bgcolor: "background.default", p: 5 }}
          >
            <Toolbar />
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              mt={3}
            >
              <Typography variant="h5">Recent Listings</Typography>
              <Button
                variant="contained"
                startIcon={<Person />}
                onClick={() => handleAddListing()}
                loading={loader}
              >
                Add Listing
              </Button>
            </Box>
            <Box
              mt={2}
              mb={4}
              sx={{ maxWidth: 300, maxHeight: 30, height: 30 }}
            >
              <TextField
                variant="outlined"
                placeholder="Search..."
                fullWidth
                sx={{ height: 40 }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search />
                    </InputAdornment>
                  ),
                  sx: { height: "100%" },
                }}
              />
            </Box>
            <Box sx={{ height: 400, width: "100%" }}>
              <DataGrid
                rows={dataFrom}
                columns={columns}
                initialState={{
                  pagination: {
                    paginationModel: {
                      pageSize: 5,
                    },
                  },
                }}
                pageSizeOptions={[5, 10, 20]}
                checkboxSelection
                onRowSelectionModelChange={(newSelection) => {
                  console.log("Selected rows:", newSelection);
                  setSelectedRows(newSelection);
                }}
                rowSelectionModel={selectedRows}
              />
            </Box>
            <Button
              variant="contained"
              startIcon={<Person />}
              onClick={handleAddToHomepage}
            >
              Add to Homepage
            </Button> 
          </Box>
        </Box>
      )}
    </div>
  );
};

export default AdminPanel;
