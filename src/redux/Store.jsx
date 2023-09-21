import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./slice/CartSlice";
import CatagorySlice from "./slice/CatagorySlice";
import SearchSlice from "./slice/SearchSlice";

const Store = configureStore({
    reducer :{
        cart : CartSlice,
        catagory : CatagorySlice,
        search : SearchSlice
    }
})

export default Store;