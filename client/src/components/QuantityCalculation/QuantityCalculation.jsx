import React from 'react'
import { AddCartBtn, AddCartItem, CartCalculation, RemoveCartBtn, RemoveCartItem, SMain, SMinus, SPlus, SQuantity } from './QuantityCalculation.styled'
import { HiMinusSm, HiOutlinePlus } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";

import RemoveNotification from '../Notification/RemoveNotification/RemoveNotification';
import { addToCart, decreaseCart, openCartNotify,removeCart } from '../../app/feature/cartSlice';
import { useEffect } from 'react';
import { getProductDetails } from '../../app/feature/productDetailsSlice';

const QuantityCalculation = ({singleProductDetails}) => {

  const {cartItems, cartNotify} = useSelector(store => store.cart)
  const dispatch = useDispatch(); 

  const addItem = (product) => {
    dispatch(addToCart(product))
  }
  const decreaseItem = (product) => {
    dispatch(decreaseCart(product))
  }

  
  const removeItem = (product) => {
    dispatch(removeCart(product))
  }
  return (
    <>
    {cartItems &&  cartItems.filter(item => item._id === singleProductDetails._id).length === 0 ? (
      <AddCartItem onClick={() =>addItem(singleProductDetails)}>
        <AddCartBtn>Add Cart</AddCartBtn>
      </AddCartItem>
    ) : (
      <CartCalculation>
      <SQuantity>
        <SMinus onClick={() => decreaseItem(singleProductDetails)}>
          <HiMinusSm singleProductDetails={singleProductDetails} />
        </SMinus>
        <SMain>
          {cartItems &&
            cartItems.filter((item) => item._id === singleProductDetails._id)[0]
              .cartQuantity}
          <span>In cart</span>
        </SMain>
        <SPlus onClick={() => addItem(singleProductDetails)}>
          <HiOutlinePlus />
        </SPlus>
      </SQuantity>
      <RemoveCartItem>
        <RemoveCartBtn onClick={() => removeItem(singleProductDetails)}>
          Remove
        </RemoveCartBtn>
       
      </RemoveCartItem>
    </CartCalculation>
    )}
    
    </>
    
  )
}

export default QuantityCalculation;

//// // {cartNotify && <RemoveNotification product={singleProductDetails} />}