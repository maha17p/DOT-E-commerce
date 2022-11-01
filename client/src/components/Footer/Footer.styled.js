import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  flexCenter,
  flexStart,
  fontName,
  fontSize,
  linkReset,
  media,
} from "../../styles/variable.styled";

export const Wrapper = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.white};
  margin-top: 2rem;
  padding: 2rem 0;
`;

export const WrapperContainer = styled.div`
  width: 95vw;
  margin: auto;
`;
export const ItemContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Breaker = styled.br`
 
`;
export const KeepInTouch = styled.div`
  padding: 0 1rem;
`;
export const Title = styled.p`
  text-transform: uppercase;
  color: ${({ theme }) => theme.primary};
  font-weight: 500;
  letter-spacing: ${fontSize.mdLetterSpacing};
  font-family: ${fontName.roboto};
  position: relative;
  &::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: -0.5rem;
    background: ${({ theme }) => theme.dGray};
    height: 2px;
    box-sizing: border-box;
    width: 50px;
  }
`;

export const SocialContainer = styled.div`
  display: flex;
  margin-top: 1.5rem;
`;
export const IconContainer = styled.div`
  height: 2rem;
  width: 2rem;
  background: ${({ theme }) => theme.dGray};
  border-radius: ${fontSize.halfBorderRadius};
  &:not(:last-child) {
    margin-right: 1rem;
  }

  &:hover {
    background: ${({ theme }) => theme.lGray};
  }
`;
export const IconLink = styled(Link)`
  font-size: ${fontSize.mdSpacing};
  ${linkReset}
  height: 100%;
  width: 100%;
  transition: all 0.3s ease-in-out;
  font-weight: 400;
  ${flexCenter}
  &:hover {
    font-size: ${fontSize.mdtfSpacing};
    font-weight: 500;
    color: ${({ theme }) => theme.dGray};
  }
`;
export const RightsContainer = styled.div`
padding: 0 1rem;

`;
export const Rights = styled.p``;
export const Content = styled.p`
  margin-top: 1.5rem;
  display: flex;
  align-items: center;

  & > svg {
    font-size: ${fontSize.mdSpacing};
    margin-right: 0.25rem;
}

& > span {
      font-size: ${fontSize.smtfSpacing};
      letter-spacing: ${fontSize.smLetterSpacing};
    
  }
`;
