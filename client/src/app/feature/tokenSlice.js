import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token:""
};

const tokenSlice = createSlice({
    name:"token",
    initialState,
    reducers:{
        getAccessToken:(state,{payload}) => {
            state.token = payload;
        }
    }
})

export const {getAccessToken} = tokenSlice.actions;
export default tokenSlice.reducer;