import styled from "styled-components";
import { Container, size } from "../../styles/variable.styled";

export const SLayout = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
`;
export const SMain = styled.div`
`;
export const SMainContainer = styled.div`
  ${Container}
  max-width: ${size.maxWidth};
  margin: 0 auto;
  height: 100%;
  width: 100%;
`;
