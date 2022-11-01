import { useState } from "react";
import { useEffect } from "react";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { cartBarClose, getTotal } from "../../../app/feature/cartSlice";
import EmptyCartContainer from "../../EmptyCartContainer";
import {
  OrderItemContainer,
  Image,
  ItemDetails,
  SName,
  SPrice,
  PriceDetails,
  OrderSummary,
  SSubTotal,
  SShippingPrice,
  STaxPrice,
  STotalAmount,
} from "../../PaymentForm/StepperForm/Steps/OrderDetails";
import {
  AlignCart,
  BtnContainer,
  CartContainer,
  Checkout,
  ClearItems,
  Title,
  Main,
  SCloseCartIcon,
  SImage,
  SLabel,
  SMainItem,
  SQuantity,
  STotal,
  TopContainer,
  Wrapper,
  EmptyCard,
} from "./CartItemContainer.styled";

const CartItemContainer = ({ cartOpen }) => {
  const { cartItems, cartTotalQuantity, cartTotalAmount } = useSelector(
    (store) => store.cart
  );
  const [total, setTotal] = useState();
  const navigate = useNavigate();

  const checkoutHandler = () => {
    navigate("/payment");
    dispatch(cartBarClose());
  };

  useEffect(() => {
    const { quantity, subTotal } = cartItems.reduce(
      (prev, curr) => {
        prev.quantity += curr.cartQuantity;
        prev.subTotal += curr.price * curr.cartQuantity;
        return prev;
      },
      { quantity: 0, subTotal: 0 }
    );
    setTotal(subTotal);
  }, [cartTotalAmount, cartTotalQuantity, cartItems]);
  const dispatch = useDispatch();
  return (
    <Main cartOpen={cartOpen}>
      <AlignCart>
        <TopContainer>
          <SCloseCartIcon>
            <MdOutlineKeyboardBackspace
              onClick={() => dispatch(cartBarClose())}
            />
          </SCloseCartIcon>
          <Title>Cart</Title>
          <ClearItems>Clear</ClearItems>
        </TopContainer>
        {cartItems.map((item, index) => {
          return (
            <OrderItemContainer key={index}>
              <Image>
                <img alt="child" />
              </Image>
              <ItemDetails>
                <SName>{item.name}</SName>
                <SPrice>{item.price}</SPrice>
              </ItemDetails>
              {/* <QuantityCalculation singleProductDetails={item} /> */}
              <PriceDetails>{item.price * item.cartQuantity}</PriceDetails>
            </OrderItemContainer>
          );
        })}
        {/* {cartItems.map((item,index) => {
              return(
                <SMainItem key={index}>
            
                  <SImage>{item.name} <SLabel>{item.price}</SLabel> </SImage>
                  <SQuantity>{item.cartQuantity}</SQuantity>
                  <PriceDetails>{item.price * item.cartQuantity}</PriceDetails>
                </SMainItem>
              )
            })} */}
        {cartItems.length === 0 ? (
          <EmptyCard>
            <EmptyCartContainer />
          </EmptyCard>
        ) : (
          <OrderSummary>
            <Title>Order Summary</Title>
            <SSubTotal>
              <p>Sub Total</p>
              <span>{total}</span>
            </SSubTotal>
            {/* <SShippingPrice>
                <p>Shipping Price</p>
                <span>{shippingPrice}</span>
              </SShippingPrice>
              <STaxPrice>
                <p>GSTl</p>
                <span>{taxPrice}</span>
              </STaxPrice> */}
            <STotalAmount>
              <p>Total Price</p>
              <span>{total}</span>
            </STotalAmount>
          </OrderSummary>
        )}
        {cartItems.length > 0 && (
          <BtnContainer>
            <Checkout onClick={checkoutHandler}>Checkout</Checkout>
          </BtnContainer>
        )}
      </AlignCart>
    </Main>
  );
};

export default CartItemContainer;
