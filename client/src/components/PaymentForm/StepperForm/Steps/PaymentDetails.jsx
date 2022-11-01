import React from "react";
import styled from "styled-components";
import {
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import StepperControl from "../../StepperControl/StepperControl";
import {
  BtnContainer,
  NextBtn,
  PrevBtn,
} from "../FormContainer/FormContainer.styled";
import { fontName, fontSize } from "../../../../styles/variable.styled";
import { useSelector,useDispatch } from "react-redux";
import axios from "axios";
import { createOrder } from "../../../../app/feature/orderSlice";

const PaymentDetails = ({ step, handleClick }) => {
  const dispatch = useDispatch()
  const stripe = useStripe();
  const elements = useElements();
  const { cartItems, shippingInfo } = useSelector((store) => store.cart);
  const {token} = useSelector(store => store.token)
  const { user } = useSelector((store) => store.authUser);
  const orderInfo = JSON.parse(sessionStorage.getItem("Price Details"));
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const cartOrderItems = cartItems.map( item => {
    let orderObj = {}
     orderObj["name"] = item.name
     orderObj["image"] = item.images
     orderObj["price"] = item.price
     orderObj["quantity"] = item.cartQuantity
     orderObj["product"] = item._id;
     return orderObj
   
   })
console.log(cartOrderItems);

  const orderDetails = {
    shippingInfo,
    orderItems:cartOrderItems,
    itemsPrice:orderInfo.total,
    taxPrice:orderInfo.taxPrice,
    shippingPrice:orderInfo.shippingPrice,
    totalPrice: orderInfo.totalPrice


  }

  const paymentData = {
    amount:Math.round(orderInfo.totalPrice * 100)
  }

  const sumbitFormHandler = async () => {
    handleClick("next") 

    try {
      const { data } = await axios.post("/api/v1/payment",  {
        amount:orderInfo.totalPrice
      });
      const client_secret = data.client_secret; 
      if (!stripe || !elements) return;
      const result = await stripe.confirmCardPayment(client_secret, {
        payment_method: {
          card: elements.getElement(CardNumberElement),
          billing_details: {
            name: user.name,
            email: user.email,
            address: {
              line1: shippingInfo.address,
              city: shippingInfo.city,
              state: shippingInfo.state,
              postal_code: shippingInfo.pinCode,
              country: shippingInfo.country,
            },
          },
        },
      });
      if (result.error) {
        alert(result.error.message);
      } else {
        if (result.paymentIntent.status === "succeeded") {
         orderDetails.paymentInfo = {
          id:result.paymentIntent.id,
          status:result.paymentIntent.status
        }
          dispatch(createOrder({orderDetails,token}))
          console.log("submit");
          handleClick("next");
        }else{
          alert("There is some issue while processing payment")
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Wrapper>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          sumbitFormHandler();
        }}
      >
        <CardDetails>
          <CardNumberElement />
        </CardDetails>
        <CardDetails>
          <CardExpiryElement />
        </CardDetails>
        <CardDetails>
          <CardCvcElement />
        </CardDetails>

        <BtnContainer step={step}>
          <PrevBtn type="button" step={step} onClick={() => handleClick()}>
            Back
          </PrevBtn>
          <NextBtn type="submit">
            {step === 1
              ? "Submit Address"
              : step === 2
              ? "Place Order"
              : step === 3
              ? "Proceed Payment"
              : "Submit"}
          </NextBtn>
        </BtnContainer>
        {/* <StepperControl step={step} handleClick={handleClick} /> */}
      </Form>
    </Wrapper>
  );
};

export const Wrapper = styled.div``;
export const Form = styled.form``;
export const CardDetails = styled.div`
  & > input {
    outline: none;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: ${fontSize.borderRadius};
    width: 100%;
    padding: ${fontSize.smSpacing};

    &::placeholder {
      text-transform: uppercase;
      font-size: ${fontSize.smtfSpacing};
      letter-spacing: ${fontSize.mdLetterSpacing};
      font-family: ${fontName.poppins};
    }
  }
`;

export default PaymentDetails;
