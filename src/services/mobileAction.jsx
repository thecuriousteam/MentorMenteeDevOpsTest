import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getMobileList = createAsyncThunk(
    'mobile-phone',
    async () => {
        console.log('KKKKKKKKKKKKKKKKKK');
        const res = await axios.get('https://dummyjson.com/products');
        return res;
    }
)