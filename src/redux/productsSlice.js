import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (page) => {
    const resp = await fetch(
      `https://api.storerestapi.com/products?limit=4&page=${page}`
    );
    const newData = await resp.json();

    return newData;
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState: { items: [], page: 1 },
  extraReducers: {
    [getProducts.fulfilled]: ({ items }, { payload }) => {
      const { data, metadata } = payload;
      const { nextPage } = metadata;

      return { items: [...items, ...data], page: nextPage };
    },
  },
});

export default productsSlice.reducer;
