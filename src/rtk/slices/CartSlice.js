import { createSlice } from "@reduxjs/toolkit";
const findProduct = (state, action) => {
  const product = state.find((product) => product.id === action.payload.id);
  return product;
};
const initState = JSON.parse(localStorage.getItem("cart")) || [];
const addToLocal = (state) => {
  localStorage.setItem("cart", JSON.stringify(state));
};



export const Cart = createSlice({
  name: "Cart",
  initialState: initState,
  reducers: {
    addItem: (state, action) => {
      const product = findProduct(state, action);
      if (product) {
        product.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
      addToLocal(state);
    },
    removeItem: (state, action) =>{
      state= state.filter((item) => item.id !== action.payload.id)
      addToLocal(state)
      return state
    },
    clearCart: (state, action) => {
      state = [];
      addToLocal(state);
      return state
    },
    increaseQuantity: (state, action) => {
      const product = findProduct(state, action);
      product.quantity += 1;
      addToLocal(state);
    },
    decreaseQuantity: (state, action) => {
      const product = findProduct(state, action);
      product.quantity -= 1;
      addToLocal(state);
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
