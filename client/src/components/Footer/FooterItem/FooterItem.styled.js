import styled from "styled-components";
import { Link } from "react-router-dom";
import { flexCenter, flexStart, fontSize, linkReset, media } from "../../../styles/variable.styled";

export const Wrapper = styled.div`
padding: 0 1rem;
width: 100%;
margin-bottom:2rem ;
@media ${media.sm}{
  width: 50%;
}
@media ${media.md}{
  width: 25%;
}

`


export const Title = styled.p`
  text-transform: uppercase;
  font-weight: 500;
  font-size: ${fontSize.mdSpacing};
  letter-spacing: ${fontSize.mdLetterSpacing};
  color: ${({ theme }) => theme.primary};
  margin-bottom: 1rem;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: -0.5rem;
    background: ${({theme }) => theme.dGray};
    height: 2px;
    box-sizing: border-box;
    width: 50px;
  }
`;

export const MainContainer = styled.ul`
  list-style-type: none;
  
`;
export const ItemContainer = styled(Link)`
  ${linkReset}
  font-size: ${fontSize.smtfSpacing};
  display: block;
  letter-spacing: ${fontSize.smLetterSpacing};
  /* color: #bbbbbb; */
  transition: all 0.3s ease;
  font-weight: 400;
  
  &:hover {
    font-weight: 500;
    /* color: #ffffff; */
    padding-left: 0.5rem;

  }
`;
export const Item = styled.li`

  &:not(:last-child){
    margin-bottom: 0.75rem;
  }
`;
