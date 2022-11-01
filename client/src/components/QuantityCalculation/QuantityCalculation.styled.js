import styled from "styled-components";
import { btnReset, fontName, fontSize } from "../../styles/variable.styled";

export const CartCalculation = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const SQuantity = styled.div`
    display: flex;
    align-items: center;
    & > div > svg {
        background: ${({theme}) => theme.primary};
        padding: 0.2rem;
        font-size: ${fontSize.mdtfSpacing};
        border-radius: ${fontSize.halfBorderRadius};
        background: ${({theme}) => theme.primary};
    }
`;
export const SMinus = styled.div`
    & > svg {
        
    }
`;
export const SMain = styled.p`
    margin: 0 0.5rem;
    letter-spacing: ${fontSize.smLetterSpacing};
    font-size: 0.7rem;
    font-weight: 500;

    & > span {
        margin-left: 0.25rem;
    text-transform: uppercase;
    font-family: ${fontName.roboto};

    }

`;
export const SPlus = styled.div``;


export const RemoveCartItem = styled.div`
    
`;


export const RemoveCartBtn = styled.button`
    ${btnReset}
    color: ${({theme}) => theme.primary};
  font-weight: 500;
    font-size: 0.75rem;
    letter-spacing: ${fontSize.smLetterSpacing};
    text-transform: capitalize;
    font-family: ${fontName.roboto};

`;


export const AddCartItem = styled.div``;

export const AddCartBtn = styled.button``;