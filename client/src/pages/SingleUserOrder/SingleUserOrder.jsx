import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import {
  ShippingAddress,
  MainContainer,
  Wrapper,
  OrderItemDetails,
  OrderItemPrice,
  OrderSummary,
  Title,
  SSubTotal,
  SShippingPrice,
  STaxPrice,
  STotalAmount,
  OrderItemIteration,
  Image,
  NameDetails,
  Img,
  Name,
  Quantity,
  PriceDetails,
  Price,
  UserName,
  Address,
  AddressName,
  CityName,
  Country,
  PhoneNumber,
  PinCode,
  StateName,
  SubContainer,
} from "./SingleUserOrder.styled";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUserSingleOrder } from "../../app/feature/orderSlice";
import { SHeaderHeight } from "../../components/ProductsDisplayer/Products.styled";
import EmptyNavbar from "../../components/EmptyNavbar/EmptyNavbar";
import ShippingUserAddress from "../../components/ShippingUserAddress/ShippingUserAddress";

const SingleUserOrder = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { token } = useSelector((store) => store.token);
  const { userSingleOrder } = useSelector((state) => state.order);
  useEffect(() => {
    dispatch(getUserSingleOrder({ id, token }));
  }, [id, token]);
  console.log(userSingleOrder);
  return (
    <Wrapper>
      <EmptyNavbar />

      <MainContainer>
        {userSingleOrder && (
          <>
            <SubContainer>
              <ShippingUserAddress userSingleOrder={userSingleOrder} />
              <OrderSummary>
                <Title>Order Summary</Title>
                <SSubTotal>
                  <p>Sub Total</p>
                  <span>500</span>
                </SSubTotal>
                <SShippingPrice>
                  <p>Shipping Price</p>
                  <span>{userSingleOrder.shippingPrice}</span>
                </SShippingPrice>
                <STaxPrice>
                  <p>GST</p>
                  <span>{userSingleOrder.taxPrice}</span>
                </STaxPrice>
                <STotalAmount>
                  <p>Total Price</p>
                  <span>{userSingleOrder.totalPrice}</span>
                </STotalAmount>
              </OrderSummary>
            </SubContainer>
            <OrderItemDetails>
              {userSingleOrder?.orderItems?.map(
                ({ image, name, price, quantity }, index) => {
                  return (
                    <OrderItemIteration key={index}>
                      <Image>
                        <Img src={image} alt="image" />
                      </Image>
                      <NameDetails>
                        <Name>{name}</Name>
                        <Quantity>QTY: {quantity}</Quantity>
                      </NameDetails>
                      <PriceDetails>
                        <Price>{price}</Price>
                      </PriceDetails>
                    </OrderItemIteration>
                  );
                }
              )}
            </OrderItemDetails>
          </>
        )}
      </MainContainer>
    </Wrapper>
  );
};

export default SingleUserOrder;
