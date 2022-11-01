import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  user: [],
  isLogged: false, 
  isAdmin: false,
  isLoading: false,
  isEdit:false
};

export const getUserInfo = createAsyncThunk(
  "authUser/getUserInfo",
  async (token, thunkAPI) => {
    try {
      const {data} = await axios.get("/api/v1/user/user_info", { 
        headers: { Authorization: token },
      }); 
      return data.user;
    } catch (error) {
        thunkAPI.rejectWithValue("Something went wrong")
    }
  }
);




export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    loginUser: (state) => {
      state.isLogged = true;
    },
    adminUser: state => {
      state.isAdmin = true;
    }
  },
  extraReducers:{
      [getUserInfo.pending]:state => {
          state.isLoading = true;
      },
      [getUserInfo.fulfilled]:(state,action) => {
          state.isLoading = false;
          state.user = action.payload
      },
      [getUserInfo.rejected]:state => {
          state.isLoading = false;
      }
  }
});

export const { loginUser,adminUser } = authSlice.actions;
export default authSlice.reducer;
