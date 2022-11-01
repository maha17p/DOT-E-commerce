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
`;
export const MainCreationContainer = styled.div`
    height: calc( 100vh - ${size.headerHeight});
    background: ${({theme}) => theme.dGray};
    width: 100%;

`;
export const ProductCreationContainer = styled.div`
    width: 80vw;
    margin: 0 auto;
    display: flex;
flex-direction: column;
box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
  background: ${({ theme }) => theme.white};
height: 100%;
    @media ${media.md}{
        width: 50vw;
    }
    @media ${media.lg}{
        width: 40vw;
    }

`;
export const ImageContainer = styled.div`
    flex: 1;
    height: 100%;
margin: 1rem;
background: ${({theme}) => theme.dGray};
border-radius: ${fontSize.borderRadius};
box-shadow: 0 0 1px rgba(0, 0, 0, 0.1);
`;
export const ImageFront = styled.div`
    ${flexCenter}
    height: 100%;
    flex-direction: column;
    position: relative;
    cursor: pointer;
    & > svg {
        font-size: ${fontSize.xlSpacing};
        color: ${({theme}) => theme.primary};
        margin-bottom: ${fontSize.smSpacing};

    }
`;




export const SInputImage = styled.input`

`
export const ImageBack = styled.div`
position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
`;

export const SImg = styled.img`
    height: 100%;
    width: 100%;
    object-fit: contain;
    object-position: center;
`;

export const SCloseIcon = styled.div`
  position: absolute;
  right: 2%;
  top: 2%;
  font-size: ${fontSize.lgSpacing};
  cursor: pointer;
  transition: 0.2s linear;
  &:hover {
  }
`;

export const SUpload = styled.p`
    text-transform: uppercase;
    letter-spacing: ${fontSize.smLetterSpacing};

`;



export const ProductFormContainer = styled.form`
    flex: 2;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow-y:scroll;

`;
export const SForm = styled.div`
    ${flexCenter}
    height: 100%;
    flex: 1;
    margin-top: 7rem ;


`;

export const SMainItem = styled.div`
    padding: 1rem;
    width: 100%;

`;
export const SInput = styled.input`
    display: block;
    ${btnReset}
    background-color: ${({ theme }) => theme.dGray};
    width: 100%;
    border-radius: ${fontSize.borderRadius};
    margin: 0.5rem 0;
    font-family: ${fontName.roboto};
    letter-spacing: ${fontSize.smLetterSpacing};
    padding: 0.5rem 0.75rem;
  &::placeholder {
    text-transform: uppercase;
    font-family: ${fontName.poppins};
    letter-spacing: ${fontSize.mdLetterSpacing};
    font-size: ${fontSize.smtfSpacing};
    
  }
`;

export const STextArea = styled.textarea`
      display: block;
    ${btnReset}
    background-color: ${({ theme }) => theme.dGray};
    width: 100%;
    border-radius: ${fontSize.borderRadius};
    margin: 0.5rem 0;
    font-family: ${fontName.roboto};
    letter-spacing: ${fontSize.smLetterSpacing};
    padding: 0.5rem 0.75rem;
  &::placeholder {
    text-transform: uppercase;
    font-family: ${fontName.poppins};
    letter-spacing: ${fontSize.mdLetterSpacing};
    font-size: ${fontSize.smtfSpacing};
    
  }
`

export const CategoryItem = styled.div``;
export const SLabel = styled.label`
    text-transform: uppercase;
    letter-spacing: ${fontSize.smLetterSpacing};
    font-family: ${fontName.roboto};
    font-weight: 500;
    margin-left: ${fontSize.xsmSpacing};

`;
export const SSelect = styled.select`
 display: block;
    ${btnReset}
    background-color: ${({ theme }) => theme.dGray};
    color: ${({ theme }) => theme.lGray};
    width: 100%;
    border-radius: ${fontSize.borderRadius};
    margin: 0.5rem 0;
    padding: 0.5rem 0.75rem;
    text-transform: uppercase;
    letter-spacing: ${fontSize.mdLetterSpacing};
    font-size: ${fontSize.smtfSpacing};
`;
export const SOption = styled.option`
    letter-spacing: ${fontSize.mdsLetterSpacing};

    color: ${({theme}) => theme.black};
`;




export const BtnContainer = styled.div`
    width: 100%;
    margin: 0.25rem auto 1rem;
`;
export const SBtnSubmit = styled.button`
    ${btnReset}
    border-radius: 0.25rem;
    font-family: ${fontName.roboto};
    font-weight: 600;
    font-size: ${fontSize.smtfSpacing};
    width: 100%;
    padding: 0.75rem 0;
    text-transform: uppercase;
    letter-spacing: ${fontSize.mdLetterSpacing};
    background: ${({theme}) =>theme.primary};
`;
// export const Container = styled.div``;
// export const Container = styled.div``;
