import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addProduct: (state, { payload }) => [payload, ...state],
    deleteProduct: (state, { payload }) =>
      state.filter(({ slug }) => payload.slug !== slug),
  },
});

export const { addProduct, deleteProduct } = todoSlice.actions;

export default todoSlice.reducer;
