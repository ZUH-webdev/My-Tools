// src/redux/cardSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// ✅ Fetch JSON from public folder
export const fetchCards = createAsyncThunk(
  "cards/fetchCards",
  async () => {
    const response = await fetch("/data.json");
    return response.json();
  }
);

const cardSlice = createSlice({
  name: "cards",
  initialState: {
    cards: [],
    status: "idle", // idle | loading | succeeded | failed
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCards.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCards.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.cards = action.payload;
      })
      .addCase(fetchCards.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default cardSlice.reducer;
