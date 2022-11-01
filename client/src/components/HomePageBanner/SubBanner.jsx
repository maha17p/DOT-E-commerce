import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../app/feature/productSlice";
import SingleProductCard from "../SingleProductCard";


const SubBanner = ({ title }) => {
  const dispatch = useDispatch();
  const { products, value, isLoading } = useSelector((store) => store.product);

  useEffect(() => {
    dispatch(getProducts(value));
  }, [value]);
  return (
    <>
  
        <Wrapper>
          <Title>{title}</Title>
          <MainProductContainer>
            <ProductContainer>
              {products?.map( product => {
                return <SingleProductCard key={product._id} {...product}/>;
              })}
            </ProductContainer>
          </MainProductContainer>
        </Wrapper>
    </>
  );
};




export const Wrapper = styled.div`
  width: 100%;
`;

export const Title = styled.p`
  font-weight: 500;
  text-align: center;
  margin: 1rem 0;
  text-transform: uppercase;
  letter-spacing: 0.25rem;
`;

export const MainProductContainer = styled.div`
  width: 100%;
  position: relative;
  overflow-x: hidden;
  height: 350px;
`;
const marquee = keyframes`
from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }

`;

export const ProductContainer = styled.div`
  display: flex;
  gap: 1rem;
  position: absolute;
  white-space: nowrap;
  will-change: transform;
  animation: ${marquee} 15s linear infinite;

  &:hover {
    animation-play-state: paused;
  }
  & > a {
    height: 300px;
   width: 200px;
  }
`;




export default SubBanner;
