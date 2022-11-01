import styled from 'styled-components';
import { flexCenter } from '../../../styles/variable.styled';

export const SWrapper = styled.div`
    position: fixed;
    inset: 0 0 0 0;
    background: rgba(0,0,0,0.2);
    height: 100vh;
`;
export const SContainer = styled.div`
    ${flexCenter}
    height: 100%;
    flex-direction: column;
`;
export const SContent = styled.div``;
export const SBtnContainer = styled.div``;
export const SCancel = styled.button``;
export const SRemove = styled.button``;
