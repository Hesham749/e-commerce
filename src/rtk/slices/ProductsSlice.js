import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// fetching data
export const fetchProducts = createAsyncThunk("products/allProducts",async () => {
  const res = await fetch('https://fakestoreapi.com/products');
  const data = await res.json();
  return data;
});

export const ProductsSlice = createSlice({
  initialState: [],
  name: "products",

  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      return  action.payload
    });
  },
});

// export const { getProducts } = ProductsSlice.actions;
export default ProductsSlice.reducer;
