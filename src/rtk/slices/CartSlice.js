import { createSlice } from "@reduxjs/toolkit";
import { Bounce, Zoom, toast } from "react-toastify";

const findProduct = (state, action) => {
  const product = state.find((product) => product.id === action.payload.id);
  return product;
};
const initState = JSON.parse(localStorage.getItem("cart")) || [];
const addToLocal = (state) => {
  localStorage.setItem("cart", JSON.stringify(state));
};

const popup = (product) =>
  toast.success(`${product.split(' ').slice(0,2).join(' ')} added to Cart`, {
    position: "bottom-left",
    autoClose: 500,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,

    progress: undefined,


  });
const increasePopup = (product) =>
  toast.info(`${product.split(' ').slice(0,2).join(' ')} quantity +1`, {
    position: "bottom-left",
    autoClose: 500,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    theme:'colored',
    progress: undefined,


  });
const removePopup = (product) => toast.error(`${product.split(' ').slice(0,2).join(' ')} removed from Cart`, {
  position: "bottom-left",
  autoClose: 500,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: true,
  theme:'colored',
  progress: undefined,


});

export const Cart = createSlice({
  name: "Cart",
  initialState: initState,
  reducers: {
    addItem: (state, action) => {
      const product = findProduct(state, action);
      if (product) {
        product.quantity += 1;
        increasePopup(action.payload.title)
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
      localStorage.removeItem('cart')
      return state;
    },
    increaseQuantity: (state, action) => {
      const product = findProduct(state, action);
      product.quantity += 1;
      addToLocal(state);
      increasePopup(action.payload.title)
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
