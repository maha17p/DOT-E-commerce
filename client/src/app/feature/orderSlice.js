import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';




const initialState = {
    order:[],
    userOrder:[],
    userSingleOrder:[],
    isLoading:false,

};

export const createOrder = createAsyncThunk(
    "order/createOrder",async({orderDetails,token},thunkAPI) => {
        console.log(orderDetails,token);
        try {
            const {data} = await axios.post("/api/v1/order",orderDetails,{
                headers:{Authorization:token}
            })
            return data.order

        } catch (error) {
            thunkAPI.rejectWithValue("There is something wrong")
        }
    }
)

export const getUserOrder = createAsyncThunk(
    "order/getUserOrder",async(token,thunkAPI) => {
        try {
            const {data} = await axios.get("/api/v1/order/user_order",{
                headers:{Authorization:token}
            })
            return data.singleUserOrder
            console.log(data);
        } catch (error) {
            thunkAPI.rejectWithValue("There is something wrong")            
        }
    }
)

export const getUserSingleOrder = createAsyncThunk(
    "order/getUserSingleOrder", async({id,token},thunkAPI) => {
        try{
            const {data} = await axios.get(`/api/v1/order/${id}`,{
                headers:{Authorization:token}
            });
            return data.singleOrder;
        }catch(error){
            thunkAPI.rejectWithValue("There is something wrong")
        }
    }
)


const orderSlice = createSlice({
    name:"orderSlice",
    initialState,
    reducers:{

    },
    extraReducers:{
        [createOrder.pending]: state => {
            state.isLoading = true;
        },
        [createOrder.fulfilled]:(state,{payload}) => {
            state.isLoading = false;
            state.order = payload            
        },
        [createOrder.rejected]:state => {
            state.isLoading = false;
        },
        [getUserOrder.pending]: state => {
            state.isLoading = true;
        },
        [getUserOrder.fulfilled]:(state,{payload}) => {
            state.isLoading = false;
            state.userOrder = payload            
        },
        [getUserOrder.rejected]:state => {
            state.isLoading = false;
        },
        [getUserSingleOrder.pending]: state => {
            state.isLoading = true;
        },
        [getUserSingleOrder.fulfilled]:(state,{payload}) => {
            state.isLoading = false;
            state.userSingleOrder = payload  ;          
        },
        [getUserSingleOrder.rejected]:state => {
            state.isLoading = false;
        }
    }
});


export const {} = orderSlice.actions;
export default orderSlice.reducer