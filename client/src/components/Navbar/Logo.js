import React from "react";
import styled from "styled-components";
import { flexCenter, fontSize,fontName, media } from "../../styles/variable.styled";



const Logo = () => {
  return (
      <SLogo>
        d<SZero>0</SZero>t
      </SLogo>
  );
};


export const SLogo = styled.div`
  ${flexCenter}

  letter-spacing: ${fontSize.xlLetterSpacing};
  font-size: ${fontSize.nlSpacing};
  font-weight: 600;
  font-family: ${fontName.roboto};
  ${flexCenter}
  text-transform: capitalize;
  z-index: 1000;
  /* @media ${media.md} {
    margin-right: ${fontSize.xlSpacing};
    display: flex;
  } */
`;
export const SZero = styled.span`
  color: ${({ theme }) => theme.primary};
  font-size: ${fontSize.xxlSpacing};
  text-transform: uppercase;
  ${flexCenter}/* &:hover {
    color: ${({ theme }) => theme.secondary};
  } */
`;


export default Logo;
