import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
  value: "/api/v1/products",
  isLoading: false,
  isCategory: false,
  isFilter: false,
  isSortBy: false,

};

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (value, thunkAPI) => {
    console.log({thiunk:thunkAPI.getState()})
    try {
      console.log("Link", value);
      const { data } = await axios.get(value);
      return data.products;
    } catch (error) {
      thunkAPI.rejectWithValue("Something went wrong");
    }
  }
);


const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {
    getValue: (state, { payload }) => {
      return { ...state, value: payload };
    },
  },
  extraReducers: {
    [getProducts.pending]: (state) => {
      state.isLoading = true;
    },
    [getProducts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
    },
    [getProducts.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { getValue  } = productSlice.actions;
export default productSlice.reducer;
