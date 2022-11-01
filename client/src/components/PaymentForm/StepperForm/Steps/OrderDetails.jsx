import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { getCartItems } from "../../../../app/feature/cartSlice";
import { child, emptyCart } from "../../../../assets";
import {
  btnReset,
  flexBetween,
  flexCenter,
  flexEnd,
  flexStart,
  fontName,
  fontSize,
  linkReset,
} from "../../../../styles/variable.styled";
import QuantityCalculation from "../../../QuantityCalculation/QuantityCalculation";
import StepperControl from "../../StepperControl/StepperControl";
import {
  BtnContainer,
  NextBtn,
  PrevBtn,
} from "../FormContainer/FormContainer.styled";
import EmptyCartContainer from "../../../EmptyCartContainer";
const OrderDetails = ({ step, handleClick }) => {
  const [total, setTotal] = useState("");

  const { cartItems, cartTotalQuantity, cartTotalAmount } = useSelector(
    (store) => store.cart
  );
  console.log("step", step);
  const dispatch = useDispatch();

  const { singleProductDetails } = useSelector((store) => store.productDetails);
  const { token } = useSelector((store) => store.token);

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

  const taxPrice = (10 * total) / 100;
  const shippingPrice = total <= 1000 ? 50 : 0;
  const totalPrice = total + taxPrice + shippingPrice;
  const submitHandler = () => {
    const data = {
      total,
      taxPrice,
      shippingPrice,
      totalPrice,
    };
    sessionStorage.setItem("Price Details",JSON.stringify(data))
    console.log(data);
    handleClick("next");
  };

  return (
    <Wrapper>
      <Title>Shipping Address</Title>

      <ShippingHeader>

        <ShippingAdress>
          <Name>
            Shipping to : <span>maha</span>
          </Name>
          <Address>
            Bus stop,Marathahalli,Bangalore-
            <span>623403</span> <span>|</span>
            <PhoneNumber>
              PH:<span>922323232</span>
            </PhoneNumber>
          </Address>
        </ShippingAdress>
        <ChangeAdressBtn>
          <button>Change</button>
        </ChangeAdressBtn>
      </ShippingHeader>

      {cartItems.length === 0 ? (
       <EmptyCartContainer />
      ) : (
        <OrderContainer>
              <Title>Cart Items</Title>

          {cartItems.map((item, index) => {
            return (
              <OrderItemContainer key={index}>
                <Image>
                  <img src={child} alt="child" />
                </Image>
                <ItemDetails>
                  <SName>{item.name}</SName>
                  <SPrice>{item.price}</SPrice>
                </ItemDetails>
                <QuantityCalculation singleProductDetails={item} />
                <PriceDetails>{item.price * item.cartQuantity}</PriceDetails>
              </OrderItemContainer>
            );
          })}

          {cartItems.length >= 1 && (
            <OrderSummary>
              <Title>Order Summary</Title>
              <SSubTotal>
                <p>Sub Total</p>
                <span>{total}</span>
              </SSubTotal>
              <SShippingPrice>
                <p>Shipping Price</p>
                <span>{shippingPrice}</span>
              </SShippingPrice>
              <STaxPrice>
                <p>GSTl</p>
                <span>{taxPrice}</span>
              </STaxPrice>
              <STotalAmount>
                <p>Total Price</p>
                <span>{totalPrice}</span>
              </STotalAmount>
            </OrderSummary>
          )}
        </OrderContainer>
      )}

      <BtnContainer step={step}>
        <PrevBtn type="button" step={step} onClick={() => handleClick()}>
          Back
        </PrevBtn>
        <NextBtn type="submit" onClick={submitHandler}>
          {step === 1
            ? "Submit Address"
            : step === 2
            ? "Place Order"
            : step === 3
            ? "Proceed Payment"
            : "Submit"}
        </NextBtn>
      </BtnContainer>
    </Wrapper>
  );
};

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  font-family: ${fontName.roboto};
  position: relative;
`;
export const ShippingHeader = styled.div`
  min-height: 20%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: ${({ theme }) => theme.lBoxShadow};
  margin-bottom: 0.5rem;
`;

export const ChangeAdressBtn = styled.div`
  & > button {
    ${btnReset}
    color: ${({ theme }) => theme.primary};
    font-weight: 500;
    margin-left: 0.25rem;
    letter-spacing: ${fontSize.mdLetterSpacing};
    text-transform: uppercase;
  }
`;
export const ShippingAdress = styled.div`
  margin-bottom: 0.5rem;
  letter-spacing: ${fontSize.smLetterSpacing};
`;
export const Name = styled.div`
  & > span {
    font-weight: 500;
    letter-spacing: ${fontSize.smLetterSpacing};
    text-transform: uppercase;
  }
`;
export const PhoneNumber = styled.span``;

export const Address = styled.div``;

export const OrderContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const OrderItemContainer = styled.div`
  ${flexBetween}
  margin: 1rem 0;

  & > div {
    ${flexCenter}
  }
`;


export const Image = styled.div`
  & > img {
    height: 50px;
    width: 55px;
    object-fit: contain;
    object-position: center;
  }
`;

export const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  & > span {
    letter-spacing: ${fontSize.smLetterSpacing};
    font-family: ${fontName.roboto};
    text-transform: uppercase;
    font-size: ${fontSize.smtfSpacing};
  }
`;
export const SName = styled.span`
  font-weight: 500;
  margin-bottom: 2px;
`;
export const SPrice = styled.span`
  font-weight: 500;
  opacity: 0.7;
`;
export const PriceDetails = styled.div``;

export const SubTotal = styled.div`
  ${flexEnd}
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding: 1rem 0;
  margin: 1rem 0;
  & > p {
    margin-right: 3rem;
    letter-spacing: ${fontSize.smLetterSpacing};
    font-family: ${fontName.roboto};
    text-transform: uppercase;
    font-weight: 500;
  }

  & > span {
    letter-spacing: ${fontSize.smLetterSpacing};
    font-family: ${fontName.roboto};
    text-transform: uppercase;
    font-weight: 500;
  }
`;

export const OrderSummary = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding: 1rem 0;
  margin: 1rem 0;

  & > div {
    display: flex;
    margin-top: 0.5rem;
    text-transform: uppercase;
  letter-spacing: ${fontSize.smLetterSpacing};
  font-family: ${fontName.roboto};
  font-size: ${fontSize.smtfSpacing};
    & > p {
      flex: 1;
      ${flexEnd}  
    }
    & > p:nth-last-child(){
  font-weight: 500;

    }
    & > span {
      flex: 1;
      ${flexEnd}
    }
  }
`;
export const Title = styled.p`
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: ${fontSize.smLetterSpacing};
  font-family: ${fontName.roboto};
  font-weight: 600;
`;
export const SSubTotal = styled.div``;
export const SShippingPrice = styled.div``;
export const STaxPrice = styled.div``;
export const STotalAmount = styled.div`
  font-weight: 600;
  
`;

export default OrderDetails;
