import styled from 'styled-components';
import { flexCenter, media } from '../../styles/variable.styled';


//  export const PayMentPage = styled.div``;
//  export const TopBar = styled.div`
//     display: flex;
//     justify-content: space-around;
//     align-items:center;
//     `;
//  export const SContent = styled.div``;
//  export const SLabel = styled.p``;
//  export const Mainbar = styled.div`
//     ${flexCenter}
//  `;


// export const StepperForm = styled.div``
// export const BtnContainer = styled.div``
// export const PrevBtn = styled.button``
// export const NextBtn = styled.button``



export const Wrapper = styled.div`
   background: ${({theme}) => theme.dGray};
   width: 100%;

   @media ${media.sm} {
    padding: 1rem;
   }
`;