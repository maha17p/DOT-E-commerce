import styled from 'styled-components';
import { btnReset, fontName, fontSize } from '../../../styles/variable.styled';

export const Wrapper = styled.div``;
export const BtnContainer = styled.div`
    color: white;
    display: ${({step}) => step ===4 ? "none":""};
    & > button {
        ${btnReset}
        padding: ${fontSize.smSpacing} ${fontSize.mdtfSpacing};
        background: ${({theme}) => theme.primary};
        margin: 0 ${fontSize.xsmSpacing};
        border-radius: ${fontSize.xsmSpacing};
        color:${({theme}) => theme.black};
        font-family: ${fontName.roboto};
        letter-spacing: ${fontSize.mdLetterSpacing};
        text-transform: uppercase;
    }
`;
export const PrevBtn = styled.button`
    opacity: ${({step}) => step === 1 ? "50%" : ""  };
`;
export const NextBtn = styled.button``;
