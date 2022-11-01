import React from "react";
import { FiShoppingBag } from "react-icons/fi";
import { useSelector,useDispatch } from "react-redux";
import { cartBarOpen } from "../../../app/feature/cartSlice";
import { SAmount, SCartIconContainer, SContainerRight, SIcon, SLabel } from "../../Navbar/Navbar.styled";
import CartItemContainer from "../CartItemContainer/CartItemContainer";

const CartItem = () => {
  const {cartItems,cartOpen} = useSelector(store => store.cart)


  const dispatch = useDispatch()
  return (
    <>
      <SContainerRight  onClick={() => dispatch(cartBarOpen())}>
        <SCartIconContainer>
          <SAmount>{cartItems.length}</SAmount>
          <SIcon>
            <FiShoppingBag />
          </SIcon>
          <SLabel>cart</SLabel>
        </SCartIconContainer>
      </SContainerRight>
      <CartItemContainer cartOpen={cartOpen} />


    </>
  );
};



export default CartItem;
