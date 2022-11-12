import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Doc } from "./docModel";
import docServices from "./docServices";

export interface docState {

}

const initialState: docState = {

};


export const docSlce = createSlice({
    name: "docs",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      
        
    },
  });
  
  export default docSlce.reducer;