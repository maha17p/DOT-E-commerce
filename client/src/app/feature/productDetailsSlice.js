import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  singleProductDetails: [],
  isLoading: false,
  numOfItems:0,
  isOpen:false,
};

export const getProductDetails = createAsyncThunk(
  "productDetails/getProductDetails",
  async ({ id, token }, thunkAPI) => {
    try {
      const { data } = await axios.get(`/api/v1/products/${id}`, {
        headers: { Authorization: token },
      });
      const {products}= data
      return products;
    } catch (error) {
      return thunkAPI.rejectWithValue("Something went wrong");
    }
  }
);

const productDetails = createSlice({
  name: "productDetails",
  initialState,
  reducers: {
  },
  extraReducers: {
    [getProductDetails.pending]: (state) => {
      state.isLoading = true;
    },
    [getProductDetails.fulfilled]: (state, { payload }) => {
      state.singleProductDetails = payload;
      state.isLoading = false;
    },
    [getProductDetails.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const {openCart,closeCart,increaseItem,decreaseItem,defaultCartItem} = productDetails.actions

export default productDetails.reducer;
