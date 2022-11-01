import { Link } from "react-router-dom";
import styled from "styled-components";
import {media} from '../../../styles/variable.styled'
import {
  fontSize,
  linkReset,
} from "../../../styles/variable.styled";

export const SWrapper = styled.nav`
  display: none;
  align-items: center;
  justify-content: flex-end;
  width: 100%;

  @media ${media.md}{
    display: flex;
  }
`;

export const SNavItems = styled(Link)`
  ${linkReset}
  margin: 0 1rem;
`;
export const SLabel = styled.label`
  text-transform: uppercase;
  letter-spacing: ${fontSize.mdLetterSpacing};
  font-weight: 500;
  cursor: pointer;
  transition: 0.2s linear;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;
