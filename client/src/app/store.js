import {configureStore} from '@reduxjs/toolkit';
import formModelReducer from './feature/formModelSlice';
import authReducer from './feature/authSlice';
import tokenReducer from './feature/tokenSlice';
import categoryReducer from './feature/categorySlice';
import productDetailsReducer from './feature/productDetailsSlice';
import orderReducer from './feature/orderSlice';
import cartReducer from './feature/cartSlice';
import productReducer from './feature/products/productSlice'

export const store = configureStore({
    reducer:{
        formModel:formModelReducer,
        authUser:authReducer,
        token:tokenReducer,
        products:productReducer,
        category:categoryReducer, 
        productDetails:productDetailsReducer,
        cart:cartReducer,
        order:orderReducer
    }
});

