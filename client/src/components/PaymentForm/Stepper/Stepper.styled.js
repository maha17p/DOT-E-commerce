import styled from 'styled-components';
import { flexBetween, flexCenter, fontName, fontSize } from '../../../styles/variable.styled';


export const Wrapper = styled.div`
    ${flexBetween}
    margin:0 ${fontSize.xsmSpacing};
    padding: ${fontSize.xsmSpacing};

`;
export const StepDisplayWrapper = styled.div`
    display: flex;
    align-items: center;
`
export const StepperContent = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;

  

`

export const StepNumber = styled.div`
    border: 1px solid ${({step}) => step.selected ? "#FD535B":"#707070"};
    border-radius: ${fontSize.halfBorderRadius};
    height: calc( 2 * ${fontSize.mdtfSpacing});
    width:calc( 2 * ${fontSize.mdtfSpacing});
    transition: .5s ease-in-out;
    ${flexCenter}
    padding: ${fontSize.smtfSpacing};
    background: ${({step}) => step.selected ? "#FD535B":""};


`

export const Description = styled.p`
    margin: ${fontSize.smSpacing};
    text-transform: uppercase;
    letter-spacing: ${fontSize.smLetterSpacing};
    font-size: ${fontSize.smtfSpacing};
    font-family: ${fontName.roboto};
    font-weight: ${({step}) => step.selected ? "600":"400"};
`
export const Label = styled.span`
    font-size: ${fontSize.mdtfSpacing};
    font-weight: bold;
`
export const StepCompleted = styled.div`
    border-top: 2px solid red;
    flex: auto;
    width: 100%;

`;