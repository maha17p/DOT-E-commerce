import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  category: [],
  isLoading:false,
  isEdit:false,
  setId:""
};

export const getCategories = createAsyncThunk(
  "category/getCategories",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get("/api/v1/category");
      return data.category;
    } catch (error) {
      thunkAPI.rejectWithValue("Something went wrong");
    } 
  }
);

const categorySlice = createSlice({
  name: "categorySlice",
  initialState,
  reducers: {
    updateCategory:(state,{payload}) => {
      return {...state,isEdit:true,setId:payload}
    }
  },
  extraReducers:{
    [getCategories.pending]:state =>  {
      state.isLoading = true;
    },
    [getCategories.fulfilled]:(state,{payload}) => {
      state.isLoading = false;
      state.category = payload
    },
    [getCategories.rejected]:state => {
      state.isLoading = false;
    }
  }
});

export const { updateCategory } = categorySlice.actions;
export default categorySlice.reducer;
