import styled from "styled-components";
import { fontSize, size, media, btnReset } from "../../styles/variable.styled";


export const SOfferCarousel = styled.div`
  overflow: hidden;
  position: relative;
`;
export const SOfferCarouselInner = styled.div`
  white-space: nowrap;
  transition: 0.2s linear;
`;
export const SOfferCarouselItem = styled.div`
  display: inline-block;
  width: 100%;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
  background: ${({ theme }) => theme.white};
  border-radius: ${fontSize.borderRadius};
  padding: 0.5rem;
  height: 10rem;
  @media ${media.sm}{
    height: 12rem;
  }
  @media ${media.md}{
    height: 14rem;
  }
  @media ${media.lg}{
    height: 16rem;
  }
`;
export const SImg = styled.img`
  background: #d9888f;
  width: 100%;

  height: 100%;
  object-fit: contain;
  object-position: center;
`;

export const SIconContainer = styled.div`
  & > button {
    ${btnReset}
    position: absolute;
    transform: translateY(-50%);
    padding: 0.05rem 0.25rem;
    background: ${({theme}) => theme.white};
    border-radius: 0.25rem;
    & > span {
      font-size: ${fontSize.mdtfSpacing};
      color: ${({theme}) => theme.primary};
    }
  }
`;
export const SPrevBtn = styled.button`
  top: 50%;
  left: 2%;
`;
export const SForwardBtn = styled.button`
  top: 50%;
  right: 2%;
`;

export const SIndicateContainer = styled.div`
    position: absolute;
    bottom: 1rem;
    left: 50%;
    transform: translateX(-50%);
`;
export const SIndicator = styled.div`
    
`;
export const SIndicateItem = styled.button`
    ${btnReset}
    width: 0.5rem;
    margin: 0.25rem;
    height: 0.5rem;
    background: ${({theme}) => theme.white} ;
    border-radius: ${fontSize.halfBorderRadius};
`;