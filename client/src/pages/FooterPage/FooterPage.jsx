import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserOrder } from "../../app/feature/orderSlice";
import EmptyNavbar from "../../components/EmptyNavbar/EmptyNavbar";
import { SHeaderHeight } from "../../components/ProductsDisplayer/Products.styled";
import {
  Details,
  FilterContainer,
  Img,
  MainContainer,
  Notify,
  OrderCenter,
  OrderContainer,
  OrderDetailsContainer,
  OrderEnd,
  OrderStart,
  Price,
  Quantity,
  Status,
  TotalPrice,
  Wrapper,
} from "./ViewOrders.styled";

const ViewOrders = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((store) => store.token);
  const { userOrder } = useSelector((store) => store.order);
  console.log(userOrder);
  useEffect(() => {
    dispatch(getUserOrder(token));
  }, [token]);

  return (
    <Wrapper>
      <EmptyNavbar />
      <SHeaderHeight />
      <MainContainer>
        <FilterContainer>
          {/* <FilterHeader>Filter</FilterHeader>
            <FilterYear></FilterYear>
            <FilterStatus></FilterStatus> */}
        </FilterContainer>
        <OrderDetailsContainer>
          {userOrder &&
            userOrder.map(({ orderItems,totalPrice, orderStatus }, index) =>
              orderItems.map(
                ({ name, image, price, product, quantity }, index) => {
                  return (
                    <OrderContainer key={index}>
                      <OrderStart>
                        <Img src={image.url} alt="Image" />
                        <Details>
                          {name}
                        </Details>
                      </OrderStart>
                      <OrderCenter>
                        <Price>Price: {price}</Price>
                        <Quantity>Qty: {quantity}</Quantity>
                        <TotalPrice>{totalPrice}</TotalPrice>
                      </OrderCenter>
                      <OrderEnd>
                        <Status>{orderStatus}</Status>
                        <Notify>Delivery at 17may</Notify>
                      </OrderEnd>
                    </OrderContainer>
                  );
                }
              )
            )}
        </OrderDetailsContainer>
      </MainContainer>
    </Wrapper>
  );
};

export default ViewOrders;
