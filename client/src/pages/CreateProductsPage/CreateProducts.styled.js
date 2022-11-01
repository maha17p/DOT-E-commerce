import styled from "styled-components";
import {
  flexCenter,
  media,
  size,
  fontSize,
  fontName,
  btnReset,
} from "../../styles/variable.styled";

export const Wrapper = styled.section`
  width: 100%;
`;

export const ProductContainer = styled.div`
  ${flexCenter}
  height: calc(100vh - ${size.headerHeight});
  width: 80vw;
  background-color: ${({ theme }) => theme.dGray};
  overflow: hidden;

  margin: 0 auto;
`;
export const CreateProductContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 65vw;
  margin: 1rem auto;

  @media ${media.md} {
    flex-direction: row;
  }
`;
export const ImageContainer = styled.div`
  border: 1px solid green;
  width: 30vw;
`;
export const FormContainer = styled.div`
  width: 65vw;
  padding: 2rem;
  box-shadow: 1px 3px 1px rgba(0, 0, 0, 0.075);
  background: ${({ theme }) => theme.white};
  border-radius: 0.25rem;
  overflow-y: auto;
  height: 80vh;

`;
export const SForm = styled.form`
  width: 100%;
  ${flexCenter}
  flex-direction: column;
  position: relative;
`;

export const STitle = styled.span``;
export const SMainItem = styled.div`

`;
export const SInput = styled.input`
  width: 100%;
  ${btnReset}
  background-color: ${({ theme }) => theme.dGray};
  margin: 0.5rem 0;
  padding: 0.75rem 1rem;
  border-radius: ${fontSize.borderRadius};
  font-family: ${fontName.roboto};
  letter-spacing: ${fontSize.smLetterSpacing};

  &::placeholder {
    letter-spacing: ${fontSize.mdLetterSpacing};
    text-transform: uppercase;
    font-size: 0.75rem;
    font-family: ${fontName.poppins};
  }
`;
export const CategoryItem = styled.div``;
export const SLabel = styled.label`
  text-transform: uppercase;
  letter-spacing: ${fontSize.mdLetterSpacing};
  font-family: ${fontName.roboto};
  font-weight: 500;
`;
export const SSelect = styled.select`
  width: 100%;
  ${btnReset}
  background-color: ${({ theme }) => theme.dGray};
  margin: 0.5rem 0;
  padding: 0.75rem 1rem;
  border-radius: ${fontSize.borderRadius};
  font-family: ${fontName.roboto};
  letter-spacing: ${fontSize.smLetterSpacing};
  text-transform: uppercase;
  font-size: 0.75rem;
`;
export const SOption = styled.option`
  letter-spacing: ${fontSize.mdLetterSpacing};
  text-transform: uppercase;
  font-size: 0.75rem;
  font-family: ${fontName.poppins};
`;
export const SBtnContainer = styled.div`
position: sticky;
left: 0;
right: 0;
bottom: 0;
width: 100%;
  
`;
export const CreateProductBtn = styled.button`
    
  ${btnReset}
  background: ${({ theme }) => theme.primary};
  padding: 0.5rem 0;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: ${fontSize.mdLetterSpacing};
  font-size: ${fontSize.smtfSpacing};
  border-radius: ${fontSize.borderRadius};
`;
