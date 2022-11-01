import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  flexCenter,
  flexEnd,
  flexStart,
  fontSize,
  media,
  fontName,
  btnReset,
  linkReset,
} from "../../styles/variable.styled";

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.2);
`;

export const SLayer = styled.div`
  margin: 1rem 0;
`;

export const SMainLayer = styled.div`
  width: 90vw;
  margin: auto;
  height: calc(100vh - 2rem);
  background: ${({ theme }) => theme.white};
  border-radius: ${fontSize.borderRadius};
  box-shadow: ${({ theme }) => theme.mdBoxShadow};
  display: flex;
  padding: ${fontSize.lgSpacing};
  position: relative;

  @media ${media.md} {
    width: 60vw;
  }
`;
// Image
export const SImageContainer = styled.div`
  display: none;
  background: ${({theme}) => theme.banner};
  box-shadow: ${({theme}) => theme.smBoxShadow};
  @media ${media.md} {
    display: flex;
    flex: 1;
  }
`;
export const SImage = styled.img`
  width: 100%;
  height: 100%;
  padding: 2rem;
`;
export const SImageContext = styled.label`
  text-align: center;
`;
//Form
export const SFormContainer = styled.div`
  flex: 2;
  ${flexCenter}
`;

export const SForm = styled.form`
  width: 100%;
  @media ${media.md} {
    padding: 1rem 2rem;
  }
`;
export const STitle = styled.label`
  text-transform: uppercase;
  letter-spacing: ${fontSize.mdLetterSpacing};
  font-size: ${fontSize.lgSpacing};
  ${flexCenter}
  font-family:${fontName.roboto};
`;
export const SBox = styled.div`
  margin: 1rem 0;
`;
export const SInput = styled.input`
  width: 100%;
  ${btnReset}
  background-color: ${({ theme }) => theme.dGray};
  margin: 0.5rem 0;
  padding: 1rem;
  border-radius: ${fontSize.borderRadius};
  font-family: ${fontName.roboto};
  letter-spacing: ${fontSize.smLetterSpacing};

  &::placeholder {
    letter-spacing: ${fontSize.mdLetterSpacing};
    text-transform: uppercase;
    font-family: ${fontName.poppins};
  }
`;
export const SBtnContainer = styled.div``;

export const SLoginBtn = styled.button`
  width: 100%;
  ${btnReset}
  background: ${({ theme }) => theme.primary};
  padding: 0.5rem 0;
  text-transform: uppercase;
  letter-spacing: ${fontSize.mdLetterSpacing};
  font-size: ${fontSize.mdSpacing};
  border-radius: ${fontSize.borderRadius};
`;

export const SForgot = styled.div`
  text-transform: capitalize;
  margin: 0.5rem 0;
`;

export const SForgotLabel = styled(Link)`
  ${linkReset}
  letter-spacing: ${fontSize.smLetterSpacing};
  margin: 0.5rem 0;
  color: ${({ theme }) => theme.primary};
  transition: 0.3s ease-in-out;
  font-weight: 500;
  &:hover {
    letter-spacing: ${fontSize.mdLetterSpacing};
  }
`;

export const SNaviagate = styled.div`
  margin: 1rem 0;
  ${flexCenter}
  letter-spacing: ${fontSize.mdLetterSpacing};
  font-family: ${fontName.roboto};
`;
export const SLabel = styled.label`
  font-size: ${fontSize.nlSpacing};
`;
export const SNLink = styled(Link)`
  margin-left: 0.5rem;
  ${linkReset}
  color: ${({ theme }) => theme.primary};
  transition: 0.3s ease-in-out;
  font-weight: 500;
  &:hover {
    letter-spacing: ${fontSize.lgLetterSpacing};
  }
`;

//closeIcon
export const SCloseIcon = styled.div`
  position: absolute;
  right: 5%;
  font-size: ${fontSize.lgSpacing};
  cursor: pointer;
  transition: 0.2s linear;
  &:hover {
  }
`;
