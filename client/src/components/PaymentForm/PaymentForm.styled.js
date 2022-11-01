import styled from  'styled-components';
import { flexBetween, flexCenter, fontSize, media } from '../../styles/variable.styled';



export const Wrapper = styled.div`
   background: ${({theme}) => theme.dGray};
   width: 100%;

   @media ${media.sm} {
    padding: 1rem;
   }
`;

export const StepperFormContainer = styled.div`
    margin: 0.5rem auto;
    background: ${({theme}) => theme.white};
    border-radius: ${fontSize.xsmSpacing};
    box-shadow: ${({theme}) => theme.smBoxShadow};
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding:${fontSize.mdtfSpacing};
    @media ${media.md}{
        width: 50vw;
    padding:${fontSize.mdtfSpacing} ${fontSize.xxlSpacing};

    }
`
export const StepperForm = styled.div`
    flex: 2;

    margin: 1rem 0;
`
export const DisplayForm = styled.div``