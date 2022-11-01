import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  shippingInfo: localStorage.getItem("shippingInfo")
    ? JSON.parse(localStorage.getItem("shippingInfo"))
    : [],
  cartNotify: false,
  cartOpen: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    getCartItems: (state) => {
      state.cartItems = localStorage.getItem("cartItems")
        ? JSON.parse(localStorage.getItem("cartItems"))
        : [];
    },
    addToCart: (state, { payload }) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item._id === payload._id
      );

      if (itemIndex >= 0) {
        if (payload.stock <= state.cartItems[itemIndex].cartQuantity) return;
        state.cartItems[itemIndex].cartQuantity += 1;
      } else {
        if (payload.stock >= 1) {
          const tempProduct = { ...payload, cartQuantity: 1 };
          state.cartItems.push(tempProduct);
        }
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    decreaseCart: (state, { payload }) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item._id === payload._id
      );
      if (itemIndex >= 0 && state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity = state.cartItems[
          itemIndex
        ].cartQuantity -= 1;
      }
    },
    removeCart: (state, { payload }) => {
      console.log("payload", payload);
      const itemIndex = state.cartItems.findIndex(
        (item) => item._id === payload._id
      );
      if (itemIndex >= 0 && state.cartItems[itemIndex].cartQuantity >= 1) {
        const filteredItems = state.cartItems.filter(
          (item) => item._id !== payload._id
        );
        state.cartItems = filteredItems;
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));

      }
    },

    addShippingDetails:(state,{payload}) => {
      state.shippingInfo = payload;
      localStorage.setItem("shippingInfo", JSON.stringify(state.shippingInfo));

    },




    openCartNotify: (state) => {
      state.cartNotify = true;
    },
    closeCartNotify: (state) => {
      state.cartNotify = false;
    },
    cartBarOpen: (state) => {
      state.cartOpen = true;
    },
    cartBarClose: (state) => {
      state.cartOpen = false;
    },
  },
});

export const {
  getCartItems,
  addToCart,
  decreaseCart,
  removeCart,
  openCartNotify,
  closeCartNotify,
  cartBarClose,
  cartBarOpen,
  addShippingDetails
} = cartSlice.actions;
export default cartSlice.reducer;
