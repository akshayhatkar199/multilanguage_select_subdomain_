// store.js
import { configureStore } from "@reduxjs/toolkit";
import formDataReducer from "./formDataSlice";

export default configureStore({
  reducer: {
    userData: formDataReducer, // Add the formDataReducer to the store
  },
});
