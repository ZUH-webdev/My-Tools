import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTools = createAsyncThunk(
  "tools/fetchTools",
  async () => {
    const response = await fetch("/data.json");  
    const data = await response.json();
    return data;
  }
);

const toolsSlice = createSlice({
  name: "tools",
  initialState: {
    items: [],
    status: "idle",
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTools.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTools.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = "succeeded";
      });
  },
});

export default toolsSlice.reducer;



