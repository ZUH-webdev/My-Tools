import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,        // Firebase user object
  isLogged: false,   // Whether user is logged in
  loading: true      // Loading state while checking auth
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.isLogged = true;
      state.loading = false;  // user loaded
    },
    clearUser: (state) => {
      state.user = null;
      state.isLogged = false;
      state.loading = false;  // finished checking auth
    },
    setLoading: (state, action) => {
      state.loading = action.payload; // optional manual loading control
    }
  }
});

export const { setUser, clearUser, setLoading } = authSlice.actions;
export default authSlice.reducer;
