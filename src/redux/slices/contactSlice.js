import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "kingfraz@gmail.com",
  subject: "Hello",
  body: "This message is from my Mr.fraz.",
};

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    openMail: (state) => {
      const mailto = `mailto:${state.email}?subject=${encodeURIComponent(
        state.subject
      )}&body=${encodeURIComponent(state.body)}`;

      window.location.href = mailto;
    },

    updateMailContent: (state, action) => {
      const { email, subject, body } = action.payload;
      if (email) state.email = email;
      if (subject) state.subject = subject;
      if (body) state.body = body;
    },
  },
});

export const { openMail, updateMailContent } = contactSlice.actions;
export default contactSlice.reducer;
