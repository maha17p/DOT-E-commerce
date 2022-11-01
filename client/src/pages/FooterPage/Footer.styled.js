import styled from "styled-components";
import { flexStart, fontSize, media } from "../../styles/variable.styled";

export const Wrapper = styled.div`
  width: 100%;
`;
export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1rem;

  @media ${media.md} {
    flex-direction: row;
  }
`;
export const FilterContainer = styled.div`
  background: ${({ theme }) => theme.white};

    @media ${media.md}{
        min-width: 20vw;

    }
`;
export const OrderDetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 1rem;

`
export const OrderContainer = styled.div`
  padding: ${fontSize.smtfSpacing};
  background: ${({ theme }) => theme.white};
  border-radius: ${fontSize.xsmSpacing};
  box-shadow: ${({ theme }) => theme.smBoxShadow};
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > div {
    flex: 1;
    ${flexStart}
  }
`;

export const OrderStart = styled.div`
   gap: 2rem;
`;
export const OrderCenter = styled.div`
    display: flex;
    flex-direction: column;
`;

export const OrderEnd = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Img = styled.img``;
export const Details = styled.p``;
export const Price = styled.p``;
export const TotalPrice = styled.p``;
export const Quantity = styled.p``;
export const Status = styled.p``;
export const Notify = styled.p``;
