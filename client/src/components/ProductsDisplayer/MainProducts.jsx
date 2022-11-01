import React from "react";
import SingleProducts from "../SingleProducts";
import styled from 'styled-components'
import { media } from "../../styles/variable.styled";

const MainProducts = ({ products }) => {
  return (
    <SMainProduct>
      {products.map((item, index) => {
        return <SingleProducts key={index} item={item} />;
      })}
    </SMainProduct>
  );
};

export const SMainProduct = styled.div`

   display: grid;
  grid-template-columns: repeat(2,1fr);
  @media ${media.sm} {
    grid-template-columns: repeat(2,1fr);
  }
  @media ${media.md} {
    grid-template-columns: repeat(3,1fr);
  }
  @media ${media.lg} {
    grid-template-columns: repeat(4,1fr);
   }
  @media ${media.xl} {
    grid-template-columns: repeat(5,1fr);
   }
  // display: grid;
  // grid-template-columns: repeat(2, 1fr);
  // 

  //
  // @media ${media.md} {
  //   grid-template-columns: repeat(4, minmax(200px, 1fr));
  // }
  // @media ${media.lg} {
  //   grid-template-columns: repeat(5, minmax(200px, 1fr));
  // }
`;

export default MainProducts;
