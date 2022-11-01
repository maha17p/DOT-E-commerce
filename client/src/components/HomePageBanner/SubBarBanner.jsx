import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../app/feature/productSlice";
import SingleProductCard from "../SingleProductCard";
import {
  fontSize,
  media,
  btnReset,
  flexCenter,
  fontName,
} from "../../styles/variable.styled";
const SubBarBanner = ({ title }) => {
  const [currIndex, setCurrIndex] = useState(0);
  const dispatch = useDispatch();
  const { products, value, isLoading } = useSelector((store) => store.product);
  const prevBtnHandler = () => {};
  const forwardBtnHandler = () => {
    // const nextIndex = currIndex === 0 ? currIndex+1:  0 
    // setCurrIndex(nextIndex)
  };

  useEffect(() => {
    dispatch(getProducts(value));
  }, [value]);
  console.log(products);
  return (
    <Wrapper>
      <TitleContainer>
        <Title>{title}</Title>
        <BtnViewAll>view all</BtnViewAll>
      </TitleContainer>
      <ScrollContainer
        style={{
          transform: `translateX(-${currIndex * 100}%)`,
        }}
      >
        {products?.map((product) => (
          <SingleProductCard key={product._id} {...product} />
        ))}
      </ScrollContainer>
      <SIconContainer>
        {currIndex > 0 && (
          <SPrevBtn onClick={prevBtnHandler}>
            <span>&#60;</span>
          </SPrevBtn>
        )}
        <SForwardBtn onClick={forwardBtnHandler}>
          <span>&#62;</span>
        </SForwardBtn>
      </SIconContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  overflow: hidden;
  position: relative;
  margin: 2rem 0;
`;

const TitleContainer = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
`;
const Title = styled.p`
  flex: 1;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.25rem;
  font-family: ${fontName.roboto};
`;
const BtnViewAll = styled.button`
  ${btnReset}
  font-size: ${fontSize.smtfSpacing};
  padding: 4px 8px;
  cursor: pointer;
  background: ${({ theme }) => theme.white};
  color: ${({ theme }) => theme.primary};
  text-transform: uppercase;
  letter-spacing: ${fontSize.smLetterSpacing};
  font-weight: 500;
  border-radius: 0.25rem;
`;

const ScrollContainer = styled.div`
  white-space: nowrap;
  transition: 0.2s linear;
  & > a {
    width: 50%;

    @media ${media.sm} {
      width: 33%;
    }
    @media ${media.md} {
      width: 25%;
    }
    @media ${media.lg} {
      width: 20%;
    }
  }
`;

export const SIconContainer = styled.div`
  & > button {
    ${btnReset}
    position: absolute;
    transform: translateY(-50%);
    padding: 0.05rem 0.25rem;
    background: ${({ theme }) => theme.primary};
    border-radius: 0.25rem;
    & > span {
      font-size: ${fontSize.mdtfSpacing};
      color: ${({ theme }) => theme.white};
    }
  }
`;
export const SPrevBtn = styled.button`
  top: 50%;
  left: 0;
`;
export const SForwardBtn = styled.button`
  top: 50%;
  right: 0;
`;

export default SubBarBanner;
