import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "./slices/contactSlice";
import uiReducer from "./slices/contactSlice";
import authReducer from "./slices/authSlice";
import heroReducer from "./slices/heroSlice";
import shareReducer from "./slices/modalSlice";
import toolsReducer from "./slices/toolsSlice";
import cardReducer from "./slices/cardSlice";
import favouritesReducer from "./slices/favouritesSlice";
import getSubmitReducer from "./slices/getSubmit";

export const store = configureStore({
  reducer: {
    contact: contactReducer,
    ui: uiReducer,
    auth: authReducer,
    hero: heroReducer,
    share: shareReducer,
    tools: toolsReducer,
    cards: cardReducer,
    favourites: favouritesReducer,
    getSubmit: getSubmitReducer,
  },
});

export default store;
