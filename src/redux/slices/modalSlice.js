import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  title: "",
  category: "",
};

const shareSlice = createSlice({
  name: "share",
  initialState,
  reducers: {
    openShareModal: (state, action) => {
      state.isOpen = true;
      state.title = action.payload.title;
      state.category = action.payload.category;
    },
    closeShareModal: (state) => {
      state.isOpen = false;
      state.title = "";
      state.category = "";
    },
  },
});

export const { openShareModal, closeShareModal } = shareSlice.actions;
export default shareSlice.reducer;
