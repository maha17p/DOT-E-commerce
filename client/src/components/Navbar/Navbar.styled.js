import styled from "styled-components";

import {
  Container,
  flexAlignCenter,
  flexCenter,
  flexEnd,
  flexStart,
  fontSize,
  fontName,
  size,
  btnReset,
  linkReset,
  media,
} from "../../styles/variable.styled";
import { Link } from "react-router-dom";

export const SNavbar = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
`;

export const SHeaderFixed = styled.div`
  height: ${size.headerHeight};
  position: fixed;
  top: 0;
  right: 0;
  left:0;
  z-index: 999;
  background: #fff;
  width: 100%;
  box-shadow: ${({ theme }) => theme.mdBoxShadow};
`;
export const SHeader = styled.div`
  max-width: ${size.maxWidth};
  margin: 0 auto;
  height: 100%;
  width: 100%;
  ${Container}
  ${flexCenter} 
`;


export const SMenuIcon = styled.div`
  flex: 1;
  ${flexStart}
  font-size: ${fontSize.lgSpacing};
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  @media ${media.md} {
    display: none;
  }
`;



export const SNavbarLogo = styled(Link)`
  display: flex;
  flex:1;
  justify-content: center;
  
  ${linkReset}
  @media ${media.md} {
    justify-content: flex-start;
flex:0;
  }
`;

export const SLogo = styled.div`

  letter-spacing: ${fontSize.xlLetterSpacing};
  font-size: ${fontSize.nlSpacing};
  font-weight: 600;
  font-family: ${fontName.roboto};
  ${flexCenter}
  text-transform: capitalize;
  @media ${media.md} {
    margin-right: ${fontSize.xlSpacing};
    display: flex;
  }
`;
export const SZero = styled.span`
  color: ${({ theme }) => theme.primary};
  font-size: ${fontSize.xxlSpacing};
  text-transform: uppercase;
  ${flexCenter}/* &:hover {
    color: ${({ theme }) => theme.secondary};
  } */
`;

export const SSearchBar = styled.form`
 position: absolute;
 top: ${size.headerHeight};
 left: 0;
 right: 0;
 ${flexAlignCenter}
  padding: 0 ${fontSize.smtfSpacing};
  background: ${({ theme }) => theme.dGray};
  border-radius: ${fontSize.borderRadius};
  cursor: pointer;
  & > svg {
    font-size: ${fontSize.mdSpacing};
  }

  @media ${media.md} {
    width: 25rem;
    position: static;


  }
`;

export const SSearchInput = styled.input`
  ${btnReset}
  padding: ${fontSize.smtfSpacing} ${fontSize.mdSpacing};
  font-size: ${fontSize.nlSpacing};
  font-family: ${fontName.roboto};
  width: 100%;

  &::placeholder {
    font-size: ${fontSize.smtfSpacing};
    letter-spacing: ${fontSize.mdLetterSpacing};
    text-transform: uppercase;
  }
`;
export const SCenter = styled.div`
  display: none;
  align-items: center;
  flex: 2;

  @media ${media.md} {
    display: flex;
  }
`;



// export const SProfileLabel = styled.label`
//   margin-left: 0.25rem;
//   font-weight: 500;
//   color: ${({ theme }) => theme.primary};
//   letter-spacing: ${fontSize.mdLetterSpacing};
//   font-size: ${fontSize.smtfSpacing};
//   cursor: pointer;
//   text-transform: uppercase;
// `;

export const SRight = styled.div`
  ${flexEnd}
  flex: 1;
  height: 100%;
`;

// export const SSearchIcon = styled.div`
//   margin-right: ${fontSize.mdSpacing};
//   cursor: pointer;
//   font-size: ${fontSize.mdtfSpacing};
//   ${flexCenter}

//   @media ${media.md} {
//     display: none;
//     font-size: ${fontSize.lgSpacing};
//   }
// `;
export const SUserIcon = styled.div`
  cursor: pointer;
  margin-right: ${fontSize.mdSpacing};
  height: 100%;
  ${flexCenter}
`;



export const SIconContainer = styled.div`
  ${flexCenter}
  flex-direction: column;
  height: 100%;
`;




//Cart
export const SContainerRight = styled.div`
  position: relative;
  height: 100%;
  margin-right: ${fontSize.mdSpacing};
  transition: 0.5s ease-in-out;

`;
export const SCartIconContainer = styled.div`
  ${flexCenter}
  flex-direction: column;
  cursor: pointer;
  height: 100%;
`;
export const SIcon = styled.div`
  font-size: ${fontSize.mdtfSpacing};
  ${flexCenter}
  margin-bottom: ${fontSize.xsmSpacing};

  @media ${media.md} {
    font-size: ${fontSize.lgSpacing};
  }
`;
export const SProfileLabel = styled.label`
  letter-spacing: ${fontSize.mdLetterSpacing};
  text-transform: uppercase;
  font-weight: 500;
  font-size: ${fontSize.smSpacing};
  color: ${({theme}) => theme.primary};

`;

export const SLabel = styled.label`
  letter-spacing: ${fontSize.mdLetterSpacing};
  text-transform: uppercase;
  font-weight: 500;
  font-size: ${fontSize.smSpacing};

`;

export const SAmount = styled.label`
  position: absolute;
  left: 30%;
  top: 15%;

  ${flexCenter}
  height: 1.25rem;
  width: 1.25rem;
  font-size: ${fontSize.smtfSpacing};
  border-radius: ${fontSize.halfBorderRadius};
  background: ${({ theme }) => theme.primary};

  @media ${media.md} {
    left: 45%;
    top: 10%;
  }
`;


// export const SNumberOfItem = styled.p``;

// export const SProfileContainer = styled.div``;
// export const SPJJ = styled.div``;

export const MobileNavBar = styled.div`
position: fixed;
top: ${size.headerHeight};
bottom: 0;
right: 0;
left: 100%;
background:#fff;
overflow: hidden;
z-index: 9999;
height: calc( 100vh - ${size.headerHeight});
width: 100vw;
padding: ${fontSize.lgSpacing};
transition: 0.5s ease left;
  @media ${media.md}{
    display: none;

  }
`;