import { createSlice } from "@reduxjs/toolkit";

const heroSlice = createSlice({
  name: "hero",
  initialState: {
    image: "",
    title: "",
    description: ""
  },

  reducers: {
    setHeroData: (state, action) => {
      state.image = action.payload.image;
      state.title = action.payload.title;
      state.description = action.payload.description;
    }
  }
});

export const { setHeroData } = heroSlice.actions;
export default heroSlice.reducer;
