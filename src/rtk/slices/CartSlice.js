import { createSlice } from "@reduxjs/toolkit";
const findProduct = (state, action) => {
  const product = state.find((product) => product.id === action.payload.id);
  return product;
};
export const Cart = createSlice({
  name: "Cart",
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      const product = findProduct(state, action)
      product
        ? (product.quantity += 1)
        : state.push({ ...action.payload, quantity: 1 });
    },
    removeItem: (state, action) =>
      state.filter((item) => item.id !== action.payload.id),
    clearCart: (state, action) => [],
    increaseQuantity: (state, action) => {
      const product = findProduct(state, action);
      product.quantity += 1;
    },
    decreaseQuantity: (state, action) => {
      const product = findProduct(state, action);
      product.quantity -= 1;
    },
  },
});

export const {
  addItem,
  removeItem,
  clearCart,
  increaseQuantity,
  decreaseQuantity,
} = Cart.actions;
export default Cart.reducer;
