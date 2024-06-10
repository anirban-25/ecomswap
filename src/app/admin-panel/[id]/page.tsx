"use client";
import { db } from "@/firebase";
import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { doc, getDoc, updateDoc, DocumentData } from "firebase/firestore";
import { Box, Button, TextField, Typography } from "@mui/material";

const EditListing = ({ params }: { params: { id: string } }) => {
  const [formData, setFormData] = useState<DocumentData | null>(null);
  const router  = useRouter();
  
const id = params.id;
  useEffect(() => {
    console.log(params.id)
    if (params.id) {
      const fetchListing = async () => {
        const docRef = doc(db, "admin", id as string);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setFormData(docSnap.data());
          console.log("hi")
        } else {
          console.log("No such document!");
        }
      };
      fetchListing();
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));
  };

  const handleSave = async () => {
    if (formData && id) {
      const docRef = doc(db, "admin", id as string);
      await updateDoc(docRef, formData);
      router.push("/admin-panel");
    }
  };

  if (!formData) return <div> loading</div>;

  return (
    <div>
      No
    </div>
  );
};

export default EditListing;
