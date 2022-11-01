import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  formModel: false,
  profile: true,
};

export const formModelSlice = createSlice({
  name: "formModelSlice",
  initialState,
  reducers: {
    closeFormModel: (state) => {
      state.formModel = true;
    },
    openFormModel: (state) => {
      state.formModel = false;
    },
    showProfile:state => {
      return {...state, profile:false}
    },
    defaultProfile:state => {
      return {...state, profile:true}
    }
  },
});

export const { closeFormModel, openFormModel,showProfile , defaultProfile} = formModelSlice.actions;
export default formModelSlice.reducer;
