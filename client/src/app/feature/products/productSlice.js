import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { getAllProductsThunk } from "./productThunk";


const filteredState = {
    sort:"latest",
    category:"all",
    name:"all",
    search:""
    
}

const initialState = {
    isLoading:false,
    products:[],
    page:1,
    totalProducts:0,
    numOfPages:1,
    ...filteredState
}


export const getAllProducts = createAsyncThunk("products/getProducts",getAllProductsThunk)


const productSlice = createSlice({
    name:"productSlice",
    initialState,
    reducers:{
        changePage:(state,{payload}) => {
            state.page = payload
        }
    },
    extraReducers:{
        [getAllProducts.pending]: state => {
            state.isLoading = true
        },
        [getAllProducts.fulfilled]:(state,{payload}) => {
            state.isLoading = false;
            state.products = payload.products;
            state.numOfPages  = payload.numOfPages
            state.totalProducts = payload.totalProducts

        },
        [getAllProducts.rejected]:state => {
            state.isLoading = false;

        }
    }
});



export const {changePage} = productSlice.actions;

export default productSlice.reducer