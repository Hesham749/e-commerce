import { configureStore } from "@reduxjs/toolkit";
import products from './slices/ProductsSlice';

const store = configureStore({
  reducer :{products,

  }
})
export default store
