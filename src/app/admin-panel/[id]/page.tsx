"use client";
import { db } from "@/firebase";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { Box, Drawer, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { ListAlt, Settings, ExitToApp } from "@mui/icons-material";
import ActionList from "@/adminPageComponents/ActionList"; 

const EditListing = ({ params }: { params: { id: string } }) => {
  const [formData, setFormData] = useState({});
  const router = useRouter();
  const id = params.id;

  useEffect(() => {
    const fetchListing = async () => {
      try {
        const docRef = doc(db, "admin", id as string);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setFormData(docSnap.data());
        } else {
          console.error("No such document!");
        }
      } catch (error) {
        console.error("Error fetching document:", error);
      }
    };

    if (id) {
      fetchListing();
    }
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));
  };

  const handleSave = async () => {
    try {
      if (formData && id) {
        const docRef = doc(db, "admin", id as string);
        await updateDoc(docRef, formData);
        router.push("/admin-panel");
      }
    } catch (error) {
      console.error("Error updating document:", error);
    }
  };

  if (!formData) return <div>Loading...</div>;

  return (
    <div style={{ display: "flex" }}>
      <Drawer
        variant="permanent"
        sx={{
          width: 180,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: 180, boxSizing: "border-box" },
        }}
      >
        <Box sx={{ overflow: "auto" }}>
          <img src='/images/logo.svg'  alt="icon" style={{ marginLeft: 25, marginTop: 10 }} />
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

      <Box sx={{ flexGrow: 1, padding: 2 }}>
        <ActionList
          Id= {id}
        />
      </Box>
    </div>
  );
};

export default EditListing;
