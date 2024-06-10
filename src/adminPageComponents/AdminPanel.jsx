"use client";

import {db} from "@/firebase";
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
  Button,
  TextField,
  InputAdornment,
} from "@mui/material";
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
} from "@mui/icons-material";
import { collection, getDocs } from "firebase/firestore";
import { useRouter } from "next/navigation";

const AdminPanel = () => {
  const router = useRouter();
  const [dataFrom, setDataFrom] = useState([]);

  const fetchFormData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "admin"));
      const data = [];
      querySnapshot.forEach((doc) => {
        const docData = doc.data();
        data.push({
          id: doc.id,
          type: docData.form1BusinessType || "",
          useracquisition: docData.form1PrimarySourceOfUserAcquisition || "",
          location: docData.form1LocationOfBusiness || "",
          industry: docData.form1selectedIndustry || "",
          startdate: docData.form1BusinessStarted || "",
          askingprice: docData.form5askingPrice || "",
          status: docData.status || "",
          createdat: docData.createdat || "",
        });
      });
      setDataFrom(data);
    } catch (error) {
      console.error("Error fetching data from Firestore:", error);
    }
  };

  useEffect(() => {
    fetchFormData();
  }, []);

  const handleEditClick = (id) => {
    router.push(`/admin-panel/${id}`);
  };

  const columns = [
    { field: "id", headerName: "Listing ID", width: 100 },
    { field: "type", headerName: "Business Type", width: 170 },
    { field: "useracquisition", headerName: "User Acquisition", width: 150 },
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
  ];

  return (
    <div>
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
            <img src='/images/logo.svg' alt="icon" style={{ marginLeft: 25, marginTop: 10  }} />
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
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 5 }}>
          <Toolbar />
          <Box display="flex" justifyContent="space-between" alignItems="center" mt={3}>
            <Typography variant="h5">Recent Listings</Typography>
            <Button variant="contained" startIcon={<Person />}>
              Add Listing
            </Button>
          </Box>
          <Box mt={2} mb={4} sx={{ maxWidth: 300, maxHeight: 30, height: 30 }}>
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
              paginationModel={{ pageSize: 5, page: 0 }}
              pageSizeOptions={[5, 10, 20]}
              checkboxSelection
              disableRowSelectionOnClick
              sx={{
                "& .MuiDataGrid-row": {
                  borderBottom: "1px solid rgba(224, 224, 224, 1)",
                },
                "& .MuiDataGrid-columnHeaders": {
                  borderBottom: "1px solid rgba(224, 224, 224, 1)",
                },
              }}
            />
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default AdminPanel;
