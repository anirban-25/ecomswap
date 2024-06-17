"use client";
import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase";
import { Box, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

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
  createdat: string;
}

const HomePageListings = () => {
  // Use the interface to type the state
  const [listings, setListings] = useState<Listing[]>([]);

  // Fetch selected listings from Firestore
  const fetchListings = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "homepageListings"));
      const data: Listing[] = querySnapshot.docs.map(doc => {
        const docData = doc.data();
        console.log("Fetched document data:", docData);
        return {
          id: doc.id,
          listNumber: docData.listNumber,
          type: docData.type,
          TTR: docData.TTR,
          location: docData.location,
          industry: docData.industry,
          askingprice: docData.askingprice,
          status: docData.status,
          createdat: docData.createdat,
        };
      });
      console.log("Formatted data for state:", data);
      setListings(data);
    } catch (error) {
      console.error("Error fetching homepage listings:", error);
    }
  };

  useEffect(() => {
    fetchListings();
  }, []);

  const columns: GridColDef[] = [
    { field: "listNumber", headerName: "List Number", width: 130 },
    { field: "type", headerName: "Business Type", width: 170 },
    { field: "TTR", headerName: "TTR", width: 130 },
    { field: "location", headerName: "Location", width: 130 },
    { field: "industry", headerName: "Industry", width: 170 },
    { field: "askingprice", headerName: "Asking Price", width: 110 },
    { field: "status", headerName: "Status", width: 100 },
    { field: "createdat", headerName: "Created at", width: 130 },
  ];

  return (
    <Box sx={{ flexGrow: 1, bgcolor: "background.default", p: 5 }}>
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
          pageSizeOptions={[5, 10, 20]}
        />
      </Box>
    </Box>
  );
};

export default HomePageListings;
