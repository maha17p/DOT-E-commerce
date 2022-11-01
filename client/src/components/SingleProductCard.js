import React from "react";
import styled from "styled-components";
import { Cloth } from "../assets";
import { fontName, fontSize, linkReset } from "../styles/variable.styled";

const SingleProductCard = ({ images, name, description, category }) => {
  return (
    <Wrapper>
      <CardContainer>
        <ImgContainer>
          <img src={Cloth} alt="cloth" />
        </ImgContainer>
        <ContentContainer>
          <BrandName>{category}</BrandName>
          <ProductName>Checked men shirt</ProductName>
          <PriceContainer>
            <OfferPrice>&#x20B9;500</OfferPrice>
            <OrginalPrice>&#x20B9;1000</OrginalPrice>
            <OfferPercentage>(50%)</OfferPercentage>
          </PriceContainer>
        </ContentContainer>
      </CardContainer>
    </Wrapper>
  );
};

const Wrapper = styled.a`
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
  margin-right:4px;
  text-decoration: line-through;
  color: ${({theme}) => theme.mGray};

`;
const OfferPercentage = styled.span`
  text-transform: uppercase;
  font-size: 0.65rem;
  color: ${({ theme }) => theme.primary};
  font-weight: 500;
  letter-spacing: ${fontSize.smLetterSpacing};
`;

export default SingleProductCard;
