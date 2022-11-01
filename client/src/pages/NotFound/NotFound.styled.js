import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  btnReset,
  flexCenter,
  fontName,
  fontSize,
  linkReset,
} from "../../styles/variable.styled";

export const SNotFound = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 999;
  background: ${({ theme }) => theme.banner};
`;

export const SNotFoundContext = styled.div`
  ${flexCenter}
  height: 100vh;
  flex-direction: column;
`;

export const SError = styled.p`
  font-size: calc(2 * ${fontSize.xlSpacing});
  font-weight: 500;
  font-family: ${fontName.roboto};
  margin-right: 1.5rem;
`;
export const SZero = styled.span`
  color: ${({ theme }) => theme.primary};
`;
export const SErrorMsg = styled.p`
  font-weight: 500;
  font-family: ${fontName.roboto};
  letter-spacing: ${fontSize.mdLetterSpacing};
  margin: 1rem 0;
`;

export const HomeBtn = styled.button`
  ${btnReset}
  background: ${({ theme }) => theme.primary};
  margin-top: ${fontSize.nlSpacing};
  border-radius: ${fontSize.borderRadius};
  margin-right: 1.5rem;
  color: ${({ theme }) => theme.white};

  padding: ${fontSize.smSpacing} ${fontSize.mdSpacing};
`;
export const HomeLink = styled(Link)`
  font-weight: 500;
  font-family: ${fontName.roboto};
  letter-spacing: ${fontSize.mdLetterSpacing};
  text-transform: uppercase;
  ${linkReset}
  transition: .2s linear;
  &:hover {
    letter-spacing: ${fontSize.lgLetterSpacing};
  }
`;
