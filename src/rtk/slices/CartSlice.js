import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import icon from '../../assets/info-icon-2048x2048-tcgtx810.png'

const findProduct = (state, action) => {
  const product = state.find((product) => product.id === action.payload.id);
  return product;
};
const initState = JSON.parse(localStorage.getItem("cart")) || [];
const addToLocal = (state) => {
  localStorage.setItem("cart", JSON.stringify(state));
};

const popup = (product) =>
  toast.success(`${product.split(" ").slice(0, 2).join(" ")} added to Cart`, {
    duration: "120",
  });
const increasePopup = (product) =>
  toast.success(`${product.split(" ").slice(0, 2).join(" ")} quantity +1`, {
    iconTheme: {
      primary: "#1E429F",
      secondary: "#FFFAEE",
    },
    duration: "120",
  });
const decreasePopup = (product) =>
  toast.success(`${product.split(" ").slice(0, 2).join(" ")} quantity -1`, {

    iconTheme: {
      primary: "#FACA15",
      secondary: "#FFFAEE",
    },
    duration: "120",
  });

const removePopup = (product) =>
  toast.error(`${product.split(" ").slice(0, 2).join(" ")} removed from Cart`, {
    duration: "120",
  });

export const Cart = createSlice({
  name: "Cart",
  initialState: initState,
  reducers: {
    addItem: (state, action) => {
      const product = findProduct(state, action);
      if (product) {
        product.quantity += 1;
        increasePopup(action.payload.title);
      } else {
        state.push({ ...action.payload, quantity: 1 });
        popup(action.payload.title);
      }
      addToLocal(state);
    },
    removeItem: (state, action) => {
      state = state.filter((item) => item.id !== action.payload.id);
      addToLocal(state);
      removePopup(action.payload.title);
      return state;
    },
    clearCart: (state, action) => {
      state = [];
      localStorage.removeItem("cart");
      toast.error("Cart Cleared",{duration:'120'});
      return state;
    },
    increaseQuantity: (state, action) => {
      const product = findProduct(state, action);
      product.quantity += 1;
      addToLocal(state);
      increasePopup(action.payload.title);
    },
    decreaseQuantity: (state, action) => {
      const product = findProduct(state, action);
      product.quantity -= 1;
      addToLocal(state);
      decreasePopup(action.payload.title)
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
