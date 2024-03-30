import { configureStore } from "@reduxjs/toolkit";
import products from './slices/ProductsSlice';
import  Cart  from './slices/CartSlice';

const store = configureStore({
  reducer :{products,
    Cart
  }
})
export default store
