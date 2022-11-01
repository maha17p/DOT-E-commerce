import styled from "styled-components";
import {Link} from 'react-router-dom'
import { flexCenter, fontSize, linkReset, media, size } from "../../styles/variable.styled";

export const SIconContainer = styled.div`
  height: calc(2 * ${size.headerHeight});
  width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
  z-index: 999;
  background: ${({theme}) => theme.white};
  border-radius: ${fontSize.borderRadius};
  margin:  2.5rem 0 1rem;
  padding: 0 0.5rem;
  gap: 1rem;

  @media ${media.sm}{
    gap: 2rem;

  }

  @media ${media.md}{
    gap: 3rem;
    margin:  1rem 0 1rem;
  }

  @media ${media.lg}{
    gap: 2rem;
  }

`;
export const ProductsCategory = styled(Link)`
  ${linkReset}
`
export const SRectangular = styled.div`
  height: 6rem;
  width: 4.5rem;
  @media ${media.sm}{
    width: 5rem;

  }



  background: ${({ theme }) => theme.card};
  box-shadow: ${({ theme }) => theme.mdBoxShadow};
  border-radius: ${fontSize.borderRadius};
  cursor: pointer;
  ${flexCenter}
  transition: .3s ease-in-out;

  &:hover {
    background: ${({ theme }) => theme.primary};
    & > div {
      color: ${({ theme }) => theme.card};

      & > div {
        background: ${({ theme }) => theme.card};
      }
    }
  }
`;
export const SIcon = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const SCircle = styled.div`
  ${flexCenter}
  background: ${({ theme }) => theme.primary};
  height: 2.5rem;
  width: 2.5rem;
  border-radius: ${fontSize.halfBorderRadius};

  & > svg {
    font-size: ${fontSize.lgSpacing};
  }
`;

export const SLabel = styled.label`
  display: block;
  text-transform: uppercase;
  letter-spacing: ${fontSize.mdLetterSpacing};
  font-size: ${fontSize.tfSpacing};
  font-weight: 500;
`;
