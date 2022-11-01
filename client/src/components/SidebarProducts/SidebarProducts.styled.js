import styled from "styled-components";
import { fontName, fontSize } from "../../styles/variable.styled";

export const SWrapper = styled.div``;
export const SBoxContainer = styled.div``;
export const SItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
export const SSideProductsItem = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: ${fontSize.xsmSpacing} 0;

`;
export const SFrontICon = styled.span`
  font-size: ${fontSize.mdSpacing};
  vertical-align: middle;

`;
export const STitle = styled.p`
  text-transform: uppercase;
  margin-right: ${fontSize.lgSpacing};
  margin-left: ${fontSize.nlSpacing};
  letter-spacing: ${fontSize.mdLetterSpacing};
  font-weight: 400;
`;
export const SBackIcon = styled.span`
  & > svg {
    vertical-align: middle;
    font-size: ${fontSize.lgSpacing};

  }
`;

export const SSubSideContainer = styled.div`
  position: fixed;
  left: 5rem;
  right: 5rem;
  top: 20rem;
  bottom: 3rem;
  z-index: 999;
  color: ${({ theme }) => theme.black};
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
  background: ${({ theme }) => theme.primary};
  border-radius: ${fontSize.borderRadius};
  padding: ${fontSize.nlSpacing} ${fontSize.lgSpacing};
`;

export const SCloseIcon = styled.span`
  font-size: ${fontSize.lgSpacing};
  position: absolute;
  right: 0;
  top: 0;
  cursor: pointer;
  transition: .2s ease-in-out;

  &:hover{
        
  }

`;


export const SMainContent = styled.div``;

export const SMainSideContainer = styled.div`
  position: relative;
`