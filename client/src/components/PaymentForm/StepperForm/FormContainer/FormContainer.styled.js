import styled from "styled-components";
import {
  fontName,
  fontSize,
  btnReset,
} from "../../../../styles/variable.styled";

export const Wrapper = styled.div`
  height: 100%;
`;
export const Form = styled.form`
  width: 100%;
`;
export const Title = styled.span`
  display: block;
  text-align: center;
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: ${fontSize.mdLetterSpacing};
  font-size: ${fontSize.mdSpacing};
`;

export const Box = styled.div`
  margin: 0.5rem;
`;
export const Label = styled.label`
  display: block;
  text-transform: uppercase;
  font-weight: 500;
  font-family: ${fontName.roboto};
  letter-spacing: ${fontSize.smLetterSpacing};
  margin: ${fontSize.xsmSpacing} 0;
`;
export const Input = styled.input`
  outline: none;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: ${fontSize.borderRadius};
  width: 100%;
  padding: ${fontSize.smSpacing};

  &::placeholder {
    text-transform: uppercase;
    font-size: ${fontSize.smtfSpacing};
    letter-spacing: ${fontSize.mdLetterSpacing};
    font-family: ${fontName.poppins};
  }
`;

export const BtnContainer = styled.div`
  color: white;
  display: ${({ step }) => (step === 4 ? "none" : "")};
  & > button {
    ${btnReset}
    padding: ${fontSize.smSpacing} ${fontSize.mdtfSpacing};
    background: ${({ theme }) => theme.primary};
    margin: 0 ${fontSize.xsmSpacing};
    border-radius: ${fontSize.xsmSpacing};
    color: ${({ theme }) => theme.black};
    font-family: ${fontName.roboto};
    letter-spacing: ${fontSize.mdLetterSpacing};
    text-transform: uppercase;
  }
`;
export const PrevBtn = styled.button`
  opacity: ${({ step }) => (step === 1 ? "50%" : "")};
`;
export const NextBtn = styled.button``;

export const SubmitAddress = styled.button`
  ${btnReset}
  padding: ${fontSize.smSpacing} ${fontSize.mdtfSpacing};
  background: ${({ theme }) => theme.primary};
  margin: 0 ${fontSize.xsmSpacing};
  border-radius: ${fontSize.xsmSpacing};
  color: ${({ theme }) => theme.black};
  font-family: ${fontName.roboto};
  letter-spacing: ${fontSize.mdLetterSpacing};
  text-transform: uppercase;
`;
