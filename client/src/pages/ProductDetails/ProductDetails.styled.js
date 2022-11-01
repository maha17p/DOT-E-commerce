import styled from 'styled-components';
import { flexCenter, fontSize, media } from '../../styles/variable.styled';


export const SWrapper = styled.div`
  width: 80vw;
  margin: 0 auto;
`;

export const DetailsContainer = styled.div`
   

    @media ${media.md}{
        display: flex;
        & > div {
        padding: ${fontSize.mdSpacing};
    }
    }
`;
export const ImageContainer = styled.div`
    border: 1px  solid red;
    flex: 1;
`;
export const SImage = styled.div`
    height: 200px;
    width: 200px;
`;
export const SImg = styled.img`
    height: 100%;
    width:100%;
    object-fit: contain;
    object-position: center;
`;
export const MainContainer = styled.div`
    border: 1px  solid green;
    flex: 2;

`
export const ContentContainer = styled.div``;
export const SName = styled.p``;
export const SPrice = styled.p``;
export const SSize = styled.p``;
export const SQuantity = styled.p``;
export  const SMinus = styled.span`
    cursor: pointer;

`;
export const SMain = styled.span``;
export const SInput  = styled.input``;
export const SPlus = styled.span `
    cursor: pointer;

`;
export const SStock = styled.p``;

export const CartCalculation = styled.div``;

export const AddCartItem = styled.div``;
export const RemoveCartItem = styled.div``;

export const AddCartBtn = styled.button`
`;
export const RemoveCartBtn = styled.button``;


