import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { size,flexCenter,Container,media,linkReset,fontSize } from '../../styles/variable.styled';


export const SHeaderFixed = styled.div`
  height: ${size.headerHeight};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  background: #fff;
  width: 100%;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.3);
`;

export const SHeader = styled.div`
  max-width: ${size.maxWidth};
  margin: 0 auto;
  height: 100%;
  width: 100%;
  ${Container}
  ${flexCenter} /* & > div {
    flex: 1;
  } */
`;

export const SCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  
`;
export const SCenterLogo = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  ${linkReset}

 
`;