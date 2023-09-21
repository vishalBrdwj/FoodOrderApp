import { createSlice } from "@reduxjs/toolkit";

const CatagorySlice = createSlice({
    name: "Catagory",
   initialState: {
    catagory : "All" 
   },
   reducers :{
   setCatagory : (state,action)=>{
    state.catagory = action.payload;
   }
   }
});


export const {setCatagory} = CatagorySlice.actions;
export default  CatagorySlice.reducer;