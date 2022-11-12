import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { User } from "./userModel";
import userServices from "./userServices";

export interface userState {

}

const initialState: userState = {

};


export const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      
        
    },
  });
  
  export default userSlice.reducer;