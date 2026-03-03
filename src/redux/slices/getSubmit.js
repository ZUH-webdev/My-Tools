import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: ""
};

const getSubmit = createSlice({
  name: "getSubmitData",
  initialState,
  reducers: {
    setProduct: (state, action) =>
        {
            state.product = action.payload;
        }
  }
});

export const { setProduct, setPackage } = getSubmit.actions;
export default getSubmit.reducer;