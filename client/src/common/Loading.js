import React from "react";
import styled, { keyframes } from "styled-components";
import { flexCenter, fontSize } from "../styles/variable.styled";
import Logo from "./Logo";

const Loading = () => {
  return (
    <Wrapper>
      <WrapperContainer>
        <Logo />
      </WrapperContainer>
    </Wrapper>
  );
};

export const Wrapper = styled.div`
  position: absolute;
  background: rgba(0,0,0,0.1);
  inset: 0 0 0 0;
  height: 100vh;
  z-index: 999;
  ${flexCenter}
`;

const rotate = keyframes`
    0% {
        transform: rotate(0);
    }
    100% {
        transform: rotate(360deg);
    }
`;

export const WrapperContainer = styled.div`
  background: ${({ theme }) => theme.white};
  height: 150px;
  width: 150px;
  ${flexCenter}
  border-radius: ${fontSize.halfBorderRadius};
  animation: ${rotate} 2s ease-in-out infinite;

 
`;

export default Loading;
