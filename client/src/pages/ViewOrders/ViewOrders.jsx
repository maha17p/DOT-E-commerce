import React from "react";
import { useEffect } from "react";
import {IoIosArrowForward} from 'react-icons/io'
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
  OrderDate,
  OrderDetailsContainer,
  OrderEnd,
  OrderStart,
  Price,
  Quantity,
  SelectSingleOrder,
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
            userOrder?.map(({ orderItems,paidAt, orderStatus,_id }, index) =>
              orderItems?.map(
                ({ name, image, price, product, quantity }, index) => {
                  return (
                    <OrderContainer key={index}>
                      <OrderStart>
                        <Img src={image.url} alt="Image" />
                      </OrderStart>
                      <OrderCenter>
                      <Status>{orderStatus}</Status>
                      <Details>
                          {name}
                        </Details>
                        <OrderDate>
                            {paidAt}
                        </OrderDate>
                      </OrderCenter>
                      <OrderEnd>
                        <SelectSingleOrder to={`/orders/${_id}`}>
                        <IoIosArrowForward />

                        </SelectSingleOrder>
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
