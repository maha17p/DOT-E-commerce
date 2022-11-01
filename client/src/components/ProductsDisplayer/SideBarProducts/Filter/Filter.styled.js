import styled from "styled-components";
import {
  flexEnd,
  fontName,
  fontSize,
} from "../../../../styles/variable.styled";

export const SWrapper = styled.div`
  width: 100%;
`;
export const SFormContainer = styled.div``;
export const SHeader = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;
export const SFront = styled.div`
  display: flex;
  align-items: center;
`;

export const SFrontIcon = styled.span`
  & > svg {
    font-size: ${fontSize.mdtfSpacing};
    vertical-align: top;
  }
`;
export const STitle = styled.span`
  text-transform: uppercase;
  letter-spacing: ${fontSize.smLetterSpacing};
  font-family: ${fontName.roboto};
  margin-left: ${fontSize.smSpacing};
  vertical-align: top;
  font-weight: 500;
  font-size: ${fontSize.smtfSpacing};
`;
export const SBackIcon = styled.span`
  & > svg {
    font-size: ${fontSize.mdtfSpacing};
    vertical-align: top;
    cursor: pointer;
  }
`;
export const SDropDown = styled.form``;
export const SCategoryItem = styled.div``;
export const SCategoryName = styled.span`
  /* text-transform: uppercase;
    font-size: ${fontSize.smSpacing};
    letter-spacing: ${fontSize.smLetterSpacing}; */
`;

export const SItemContainer =styled.div`
  margin: ${fontSize.smSpacing}  ${fontSize.lgtfSpacing};
`;

export const SInput = styled.input`
  vertical-align: middle;
margin-right: ${fontSize.xsmSpacing};
`;
export const SLabel = styled.label`
  text-transform: uppercase;
  font-size: 0.65rem;
  letter-spacing: ${fontSize.mdLetterSpacing};
  vertical-align: middle;
  cursor: pointer;

  
`;

export const SSelect = styled.select``;
export const SOption = styled.option``