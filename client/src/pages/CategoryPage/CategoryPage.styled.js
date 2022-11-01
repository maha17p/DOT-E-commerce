import styled from "styled-components";
import {
  btnReset,
  flexCenter,
  flexStart,
  fontName,
  fontSize,
  media,
  size,
} from "../../styles/variable.styled";

export const SWrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 999;
  background: ${({ theme }) => theme.banner};
  margin-top: ${size.headerHeight};
`;

export const SCategory = styled.div`
  display: flex;
  background: ${({ theme }) => theme.banner};
  z-index: 1000;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  height: calc(100vh - ${size.headerHeight});

  & > div {
    background: ${({ theme }) => theme.white};
    width: 95vw;
    margin: 0 auto;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
    border-radius: ${fontSize.borderRadius};

    @media ${media.md} {
      width: 50vw;
    }
    @media ${media.lg} {
      width: 40vw;
    }
  }
`;
export const SFormContainer = styled.div`
  padding: ${fontSize.mdSpacing} ${fontSize.lgSpacing};
`;

export const SForm = styled.form`
  width: 100%;
  border-radius: ${fontSize.borderRadius};

  display: flex;
  justify-content: space-between;
`;
export const STitle = styled.p`
  text-align: center;
  text-transform: uppercase;
  letter-spacing: ${fontSize.mdLetterSpacing};
  font-size: ${fontSize.mdSpacing};
  margin-bottom: ${fontSize.nlSpacing} ;
  font-family: ${fontName.roboto};
`;
export const SInput = styled.input`
  ${btnReset}
  width: 100%;
  letter-spacing: ${fontSize.smLetterSpacing};
  background-color: ${({ theme }) => theme.dGray};
  border-radius: ${fontSize.borderRadius};
  font-family: ${fontName.roboto};
  padding: ${fontSize.smSpacing} ${fontSize.smtfSpacing};
  &::placeholder {
    letter-spacing: ${fontSize.mdLetterSpacing};
    text-transform: uppercase;
    font-family: ${fontName.poppins};
    font-size: ${fontSize.smtfSpacing};
  }
`;
export const SSubmitBtnContainer = styled.div``;
export const SSubmitBtn = styled.button`
  ${btnReset}
  background: ${({ theme }) => theme.primary};
  padding: ${fontSize.smSpacing} ${fontSize.smtfSpacing};
  letter-spacing: ${fontSize.mdLetterSpacing};
  text-transform: uppercase;
  border-top-right-radius: ${fontSize.borderRadius};
  border-end-end-radius: ${fontSize.borderRadius};
`;

export const SCategoryContainer = styled.div`
  padding: ${fontSize.smtfSpacing} ${fontSize.lgSpacing};
`;
export const SCategoryItem = styled.div``;
export const SMainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${({ theme }) => theme.white};
  background: ${({ theme }) => theme.dGray};
  border-radius: ${fontSize.borderRadius};
  padding: ${fontSize.xsmSpacing} ${fontSize.smtfSpacing};

  margin: ${fontSize.xsmSpacing} 0;
`;

export const SItem = styled.p`
  flex: 2;
  text-transform: capitalize;
  letter-spacing: ${fontSize.mdLetterSpacing};
  font-family: ${fontName.roboto};
  ${flexStart}
`;
export const SBtnContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-around;
  & > button {
    ${btnReset}

    & > svg {
      font-size: ${fontSize.mdSpacing};
    }
  }
`;
export const SEditBtn = styled.button`
  & > svg {
    color: ${({ theme }) => theme.greenLight};

  }
`;
export const SDeleteBtn = styled.button`
  & > svg {
    color: ${({ theme }) => theme.redLight};
  }
`;
export const SSpan = styled.p`
  letter-spacing: ${fontSize.mdLetterSpacing};
  text-transform: uppercase;
  font-weight: 500;
  font-size: ${fontSize.smSpacing};
`;
