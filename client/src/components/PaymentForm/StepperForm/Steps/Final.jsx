import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  btnReset,
  flexCenter,
  fontName,
  fontSize,
  linkReset,
} from "../../../../styles/variable.styled";
const Final = () => {
  return (
    <Wrapper>
      <MainContainer>
        <Content>
          <img src="" alt="" />
          <p>Thanks for ordering</p>
        </Content>
        <ViewOrder to="/orders">
          <button>View Orders</button>
        </ViewOrder>
      </MainContainer>
    </Wrapper>
  );
};

export const Wrapper = styled.div`
  ${flexCenter}
`;
export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
`;
export const Content = styled.div`
  & > p {
    font-size: ${fontSize.xxlSpacing};
    letter-spacing: ${fontSize.mdLetterSpacing};
    font-weight: 600;
    font-family: ${fontName.roboto};
  }
`;
export const ViewOrder = styled(Link)`
  ${linkReset}
  & button {
    ${btnReset}
    padding: ${fontSize.smtfSpacing} ${fontSize.mdtfSpacing};
    background: ${({ theme }) => theme.primary};
    letter-spacing: ${fontSize.mdLetterSpacing};
    font-family: ${fontName.roboto};
    border-radius: ${fontSize.borderRadius};
    text-transform: uppercase;
    
  }
`;

export default Final;
