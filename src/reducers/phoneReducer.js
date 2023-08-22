import { createSlice } from "@reduxjs/toolkit";
import { getMobileList } from "../services/mobileAction";

const initialState = {
    phoneList: []
}
const phoneReducer = createSlice({
    name: 'phone',
    initialState,
    extraReducers : ( builder) => {
        builder.addCase( getMobileList.fulfilled, (state, action ) => {
            state.phoneList = action.payload.data.products

        })
    }
});

export default phoneReducer.reducer;


