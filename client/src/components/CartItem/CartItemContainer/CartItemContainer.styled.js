import styled from "styled-components";
import { btnReset, flexCenter, fontName, fontSize, media } from "../../../styles/variable.styled";
import {Link} from 'react-router-dom';

export const Main = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right:${({cartOpen}) => cartOpen ? "0":"-100%"  };
    background: ${({theme}) => theme.white};
    width: 100%;
  box-shadow: ${({ theme }) => theme.mdBoxShadow};
z-index: 999;
  
    transition: right 0.5s ease-in-out;
     @media ${media.sm}{
      width:70%;
    }
    @media ${media.md}{
      width:40%;
    }
    
    @media ${media.lg}{
      width:30%;
    } 
    
`

export const AlignCart = styled.div`
  padding:1rem;
  height: 100%;
  width: 100%;
`;

export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > p {
    /* ${flexCenter} */
  }
`;
export const ClearItems = styled.p`
    letter-spacing: ${fontSize.mdLetterSpacing};
  text-transform: uppercase;
  font-weight: 600;
  
`;

export const Title = styled.p`
  letter-spacing: ${fontSize.mdLetterSpacing};
  text-transform: uppercase;
  font-weight: 600;
`;

export const SMainItem = styled.div`
  margin: 2rem 0 1rem;
  display: flex;
  justify-content: space-around;
`;
export const SImage = styled.div``;
export const SQuantity = styled.div``;
export const PriceDetails = styled.div``;
export const STotal = styled.div``;
export const BtnContainer = styled.div`
  width: 100%;
`;
export const Checkout = styled.button`
  ${btnReset}
  padding: 0.5rem 1rem;
  background: ${({theme}) => theme.primary};
  ${flexCenter}
  color: white;
  letter-spacing: ${fontSize.mdLetterSpacing};
  text-transform: uppercase;
  border-radius: ${fontSize.borderRadius};
  font-family: ${fontName.roboto};
  font-size: ${fontSize.smtfSpacing};

`;

export const SLabel = styled.span`
`;

export const SCloseCartIcon = styled.p`
  font-size: ${fontSize.lgSpacing};
  cursor: pointer;
  &:hover {
    font-weight: 500;
    color:${({theme}) => theme.primary};
    transition:all .3s linear;

  }
`;

export const EmptyCard = styled.div`


`