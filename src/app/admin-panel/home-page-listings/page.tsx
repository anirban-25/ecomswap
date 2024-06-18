"use client";
import React, { useEffect, useState } from "react";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  setDoc,
} from "firebase/firestore";
import { db } from "@/firebase";
import {
  AppBar,
  Box,
  Button,
  CssBaseline,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import {
  DataGrid,
  GridActionsCellItem,
  GridColDef,
  GridRowSelectionModel,
} from "@mui/x-data-grid";
import {
  Edit,
  ExitToApp,
  ListAlt,
  Person,
  Settings,
} from "@mui/icons-material";

// Define the interface to match the data structure
interface Listing {
  id: string;
  listNumber: number;
  type: string;
  TTR: number;
  location: string;
  industry: string;
  askingprice: number;
  status: string;
  monthlyIncome: number;
}
const HomePageListings = () => {
  const routes = ["/admin-panel/home-page-listings", "/admin-panel", "#", "#"];

  const [dataFrom, setDataFrom] = useState<Listing[]>([]);

  const [selectedRows, setSelectedRows] = useState<GridRowSelectionModel>([]);
  // Use the interface to type the state
  const [listings, setListings] = useState<Listing[]>([]);

  const handleAddToHomepage = async () => {
    console.log(selectedRows);
    
    const querySnapshot = await getDocs(collection(db, "admin"));

    // Iterate through each document in the collection
    querySnapshot.forEach(async (queryDocSnapshot) => {
      const docId = queryDocSnapshot.id; // Get the document ID
      const docRef = doc(db, "admin", docId); // Get the document data

      // Check if the document's ID is in the selectedRows array
      if (selectedRows.includes(docId)) {
        // Update document where ID is in selectedRows to set homePageSelection: true
        await setDoc(docRef, { homePageSelection: true }, { merge: true });
      } else {
        // Update other documents to set homePageSelection: false
        await setDoc(docRef, { homePageSelection: false }, { merge: true });
      }
    });
    try {
      const querySnapshot = await getDocs(collection(db, "homepageListings"));

      querySnapshot.forEach(async (doc) => {
        await deleteDoc(doc.ref);
      });

      const homepageCollection = collection(db, "homepageListings");
      for (const rowId of selectedRows) {
        const selectedListing = dataFrom.find((item) => item.id === rowId);
        console.log(selectedListing);
        if (selectedListing) {
          await setDoc(
            doc(homepageCollection, selectedListing.id),
            selectedListing
          );
        }
      }
      alert("added");
    } catch (error) {
      console.error("Error adding listings to homepage:", error);
    }
  };

  // Fetch selected listings from Firestore

  const fetchListings = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "admin"));
      const data: Listing[] = querySnapshot.docs.map((doc) => {
        const docData = doc.data();
        const Id = doc.id;
        console.log("Fetched document data:", docData);
        if (docData.homePageSelection === true) {
          // console.log(docData)
          setSelectedRows((prev) => [...prev, Id]);
        }
        return {
          id: doc.id,
          listNumber: docData.listNumber,
          type: docData.form1BusinessType,
          TTR: docData.form2trailingTotalRevenue,
          location: docData.form1LocationOfBusiness,
          industry: docData.form1selectedIndustry,
          askingprice: docData.form5askingPrice,
          status: docData.adminStatus,
          monthlyIncome: docData.monthlynetprofit,
        };
      });
      console.log("Formatted data for state:", data);
      setListings(data);
      setDataFrom(data);
    } catch (error) {
      console.error("Error fetching homepage listings:", error);
    }
  };

  useEffect(() => {
    fetchListings();
  }, []);

  const columns = [
    { field: "listNumber", headerName: "List Number", width: 130 },
    { field: "type", headerName: "Business Type", width: 170 },
    { field: "TTR", headerName: "TTR", width: 130 },
    { field: "location", headerName: "Location", width: 130 },
    { field: "industry", headerName: "Industry", width: 200 },
    { field: "askingprice", headerName: "Asking Price", width: 170 },
    { field: "status", headerName: "Status", width: 100 },
  ];

  return (
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
            {["HomePage Listings","All Listings", "Offers", "Logout"].map((text, index) => (
              <ListItem component="a" href={routes[index]} key={text}>
                <ListItemIcon>
                  {index === 0 ? <ListAlt /> : null}
                  {index === 1 ? <ListAlt /> : null}
                  {index === 2 ? <Settings /> : null}
                  {index === 3 ? <ExitToApp /> : null}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      <Box
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 5, marginTop: 10 }}
      >
        <Typography variant="h4" gutterBottom>
          Homepage Listings
        </Typography>
        <Box sx={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={listings}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            className=" overflow-auto"
            pageSizeOptions={[5, 10, 20]}
            checkboxSelection
            onRowSelectionModelChange={(
              newSelection: GridRowSelectionModel
            ) => {
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
  );
};

export default HomePageListings;
