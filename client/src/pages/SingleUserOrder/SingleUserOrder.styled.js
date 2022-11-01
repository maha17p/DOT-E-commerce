import styled from "styled-components";
import {
  flexCenter,
  fontSize,
  fontName,
  flexEnd,
  media,
} from "../../styles/variable.styled";

export const Wrapper = styled.div`
  ${flexCenter}
`;

export const MainContainer = styled.div`
  display: flex;
  gap: ${fontSize.xsmSpacing};
  flex-direction: column;
  width: 90vw;
  margin-top: 5rem;
  @media ${media.md} {
    flex-direction: row;
  }
`;
export const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${fontSize.xsmSpacing};

  & > div {
    background: ${({ theme }) => theme.white};
    padding: ${fontSize.mdSpacing};
    border-radius: ${fontSize.xsmSpacing};
    box-shadow: ${({ theme }) => theme.smBoxShadow};
  }
`;


export const OrderItemDetails = styled.div`
  background: ${({ theme }) => theme.white};
  padding: ${fontSize.mdSpacing};
  border-radius: ${fontSize.xsmSpacing};
  box-shadow: ${({ theme }) => theme.smBoxShadow};

  @media ${media.md} {
    flex: 1;
  }
`;

export const OrderItemIteration = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-transform: uppercase;
    font-size: ${fontSize.smtfSpacing};
    letter-spacing: ${fontSize.smLetterSpacing};
    margin: 0.15rem 0 .25rem;
    font-weight: 500;

`;
export const Image = styled.div``;
export const NameDetails = styled.div``;
export const PriceDetails = styled.div``;
export const Img = styled.img``;
export const Name = styled.p``;
export const Quantity = styled.p``;
export const Price = styled.p``;

export const OrderItemPrice = styled.div``;

export const OrderSummary = styled.div`
  min-height: 200px;
  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  & > div:not(:last-child) > p {
    text-transform: uppercase;
    font-size: ${fontSize.smtfSpacing};
    letter-spacing: ${fontSize.smLetterSpacing};
    margin: 0.15rem 0.25rem;
    font-weight: 500;
  }
  & > div:not(:last-child) > span{
  text-transform: uppercase;
    font-size: ${fontSize.smtfSpacing};
    letter-spacing: ${fontSize.smLetterSpacing};
    margin: 0.15rem 0 .25rem;
    font-weight: 500;
  }
  @media ${media.md} {
    max-height: 300px;
    width: 300px;
  }
`;
export const Title = styled.p`
  font-weight: 600;
  font-family: ${fontName.roboto};
  letter-spacing: ${fontSize.smLetterSpacing};
  text-transform: uppercase;
  margin: 0.5rem 0;
  font-size: 0.925rem;

`;
export const SSubTotal = styled.div`
`;
export const SShippingPrice = styled.div``;
export const STaxPrice = styled.div``;
export const STotalAmount = styled.div`
    border-top: 1px solid rgba(0,0,0,0.025);
    margin: 0.5rem 0;
    font-weight: 600;
    text-transform: uppercase;
    font-size: ${fontSize.smtfSpacing};

    letter-spacing: ${fontSize.smLetterSpacing};

    & > p {
    margin: 0.15rem 0.25rem;
    
    }
`;
