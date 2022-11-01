import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { btnReset,linkReset,fontName,fontSize } from "../styles/variable.styled";



const SingleProducts = ({ item }) => {
  return (
    <Wrapper to={`product_details/${item._id}`}>
      <CardContainer>
        <ImgContainer>
          <img src={item?.images?.url} />
        </ImgContainer>
        <ContentContainer>
          <BrandName>{item.category}</BrandName>
          <ProductName> {item.name}</ProductName>
          <PriceContainer>
            <OfferPrice>&#x20B9;{item?.price}</OfferPrice>
            <OrginalPrice>&#x20B9;{item?.price}</OrginalPrice>
            <OfferPercentage>(50%)</OfferPercentage>
          </PriceContainer>
        </ContentContainer>
      </CardContainer>
    </Wrapper>
  );
};

const Wrapper = styled(Link)`
  height: 300px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.08);
  background: ${({ theme }) => theme.white};
  display: inline-block;
  padding: 0.5rem;
  ${linkReset}
`;

const CardContainer = styled.div`
  height: 100%;
  width: 100%;
`;
const ImgContainer = styled.div`
  height: 75%;
  width: 100%;

  & > img {
    height: 100%;
    width: 100%;
    object-fit: contain;
    object-position: center;
  }
`;
const ContentContainer = styled.div`
  height: 25%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const BrandName = styled.p`
  text-transform: uppercase;
  font-size: ${fontSize.smtfSpacing};
  color: ${({ theme }) => theme.primary};
  font-weight: 500;
  letter-spacing: ${fontSize.smLetterSpacing};
`;
const ProductName = styled.p`
  font-family: ${fontName.roboto};
  text-transform: capitalize;
  letter-spacing: ${fontSize.smLetterSpacing};
`;
const PriceContainer = styled.p`
  & > span {
    font-family: ${fontName.roboto};
  }
`;
const OfferPrice = styled.span`
  font-weight: 500;
  margin-right: 0.25rem;
`;
const OrginalPrice = styled.span`
  font-size: ${fontSize.smtfSpacing};
  margin-right: 4px;
  text-decoration: line-through;
  color: ${({ theme }) => theme.mGray};
`;
const OfferPercentage = styled.span`
  text-transform: uppercase;
  font-size: 0.65rem;
  color: ${({ theme }) => theme.primary};
  font-weight: 500;
  letter-spacing: ${fontSize.smLetterSpacing};
`;

export default SingleProducts;
