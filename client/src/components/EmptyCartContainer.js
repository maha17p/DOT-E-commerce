import React from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { emptyCart } from '../assets'

import { fontSize, fontName, linkReset,btnReset } from '../styles/variable.styled';

const EmptyCartContainer = () => {
  return (
    <CartContainer>
    <img src={emptyCart} alt="" />
    <p> You don't have any product in your cart </p>
    <RedirectButton to="/">
      <button> Start Purchasing</button>
    </RedirectButton>
  </CartContainer>
  )
}

export const CartContainer = styled.div`
  min-height: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  & > img {
    height: 150px;
    width: 150px;
    object-fit: contain;
    object-position: center;
    margin: 0.5rem;
  }

  & > p {
    margin: 0.5rem;
    letter-spacing: ${fontSize.smLetterSpacing};
    font-family: ${fontName.roboto};
  }
`;
export const RedirectButton = styled(Link)`
  ${linkReset}
  & > button {
    margin: 0.75rem;
    ${btnReset}
    padding: 0.5rem 0.75rem;
    background: transparent;
    border: 1px solid ${({ theme }) => theme.primary};
    text-transform: uppercase;

    border-radius: ${fontSize.borderRadius};
    letter-spacing: ${fontSize.smLetterSpacing};
  }
`;



export default EmptyCartContainer