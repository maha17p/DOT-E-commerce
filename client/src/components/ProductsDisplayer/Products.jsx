import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../app/feature/products/productSlice";
import Loading from "../../common/Loading";

import styled from 'styled-components';
import MainProducts from "./MainProducts";
import SideBarProducts from "./SideBarProducts";
import PaginationContainer from "../PaginationContainer";
import { media } from "../../styles/variable.styled";

const Products = () => {
  const dispatch = useDispatch();
  const { category, isLoading, name, numOfPages, page, products, sort } =
    useSelector((store) => store.products);
  useEffect(() => {
    dispatch(getAllProducts());
  }, [page]);

  if (isLoading) return <Loading />;
  return (
    <Wrapper>
      <SProductsContainer>
        <SSideBarContainer>
          <SideBarProducts />
        </SSideBarContainer>
        <SMainProductsContainer>
          <MainProducts products={products} />
        </SMainProductsContainer>
      </SProductsContainer>
      <PaginationContainer />
    </Wrapper>
  );
};

export const Wrapper = styled.section`
  margin: 1rem 0;
width: 100%;
`

export const SProductsContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: space-between;
`;
export const SSideBarContainer = styled.div`
  width: 225px;
 background: ${({theme}) => theme.white};
 display: none;
 
 @media ${media.sm}{
  display: block;
 }
`;

export const SMainProductsContainer = styled.div`
width: 100%;
padding:  2rem;
background: ${({theme}) => theme.white};
  @media ${media.sm}{
    width: calc(100% - 225px);
 }
 & div {
 
 }
`;

export default Products;
