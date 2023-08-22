import { createSlice} from '@reduxjs/toolkit';
export const getSlice = createSlice({
  name: 'counter',
  initialState : [],
  reducers: {
    addData: (state,action) => {
     state.push(action.payload);
    },
  },
})


export const {  addData } = getSlice.actions

export default getSlice.reducer