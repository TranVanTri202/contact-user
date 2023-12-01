import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiFirebase from "../firebase/firebaseConfig";
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore";

export const fetchDataContact = createAsyncThunk("contactUser/fetchDataContact", async () => {
  const quetSnaapDoc = await getDocs(collection(apiFirebase, "contactUser"));
    return quetSnaapDoc.docs.map(
      (item) => ({ id: item.id, ...item.data() } )
    );
});

const initialState = {
  contacts: [],
};

export const addContact = createAsyncThunk(
  "contactUser/addContact",
  async (contact) => {
    const docRef = await addDoc(
      collection(apiFirebase, "contactUser"),
      contact
    );
    return { ...contact, id: docRef.id };
  }
);

export const deleteContact = createAsyncThunk(
  "contactUser/deleteContact",
  async (contactId) => {
    const contactDocRef = doc(apiFirebase, "contactUser", contactId);
    await deleteDoc(contactDocRef);
    return contactId;
  }
);

export const updateContact = createAsyncThunk(
  "contactUser/updateAccount",
  async (contact) => {
    const docRef = doc(collection(apiFirebase, "contactUser"), contact.id);
    await updateDoc(docRef, contact);
    return contact;
  }
);

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder
    .addCase(addContact.fulfilled,(state, action) =>{
      state.contacts = [...state.contacts, action.payload]
    })
    .addCase(fetchDataContact.fulfilled, (state, action) => {
      state.contacts = action.payload; // Thêm dữ liệu vào state
    })
    .addCase(deleteContact.fulfilled, (state, action) =>{
      state.contacts = state.contacts.filter((contact) => contact.id !== action.payload)
    })
    .addCase(updateContact.fulfilled, (state, action) => {
      const index = state.contacts.findIndex(
        (contact) => contact.id === action.payload.id
      );
      if (index !== -1) {
        state.contacts[index] = action.payload;
      }
    })
  },
});
export default contactSlice.reducer;
