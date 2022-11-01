import styled from "styled-components";
import { fontSize,media } from "../../styles/variable.styled";


export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    margin: 1rem auto;
    padding: 1.5rem ;
    background: ${({theme}) => theme.white};
    border-radius: ${fontSize.xsmSpacing};
    box-shadow: ${({theme}) => theme.smBoxShadow};
    & > div {
        flex: 1;
    }
`

export const EditingDetails =  styled.div`
     background: ${({ theme }) => theme.white};
  padding: ${fontSize.mdSpacing};
  border-radius: ${fontSize.xsmSpacing};
  box-shadow: ${({ theme }) => theme.smBoxShadow};

  @media ${media.md} {
    flex: 1;
  }

`; 