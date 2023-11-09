// formDataSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const formDataSlice = createSlice({
  name: "formData",
  initialState: {
    data: [],
  },
  reducers: {
    setFormData: (state, action) => {
      state.data.push(action.payload);
    },
  },
});

export const { setFormData } = formDataSlice.actions;

export default formDataSlice.reducer;
