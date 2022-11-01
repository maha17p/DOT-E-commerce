import styled from "styled-components";
import {Link} from 'react-router-dom'
import {
  btnReset,
  flexAlignCenter,
  flexCenter,
  flexStart,
  fontName,
  fontSize,
  linkReset,
  media,
} from "../../../styles/variable.styled"

export const SProfileBox = styled.div`

  position: ${({profile}) => profile ==="profile"? "static":"absolute"};
  
  top: 100%; 
  width: ${({profile}) => profile ==="profile"? "100%":"12rem"};
  background: ${({theme}) => theme.white};
  box-shadow: 0px 0px 1px 0px  rgba(0,0,0,0.1);
  z-index: 99;

  @media ${media.md}{
    width: ${({profile}) => profile ==="profile"? "100%":"15rem"};
    height: ${({profile}) => profile ==="profile"? "100%":""};

  }

  &::before {
    content: "";
    ${flexCenter}
    height: 3px;
    background-color: ${({ theme }) => theme.primary};
  }
  
`;

export const SIndexProfile = styled.div`
   
   & > :hover {
    background-color: rgba(0,0,0,0.03);
    transition: all 0.3s ease-in-out;
   }


`;


export const EditerProfile = styled.div`
  display:flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem ;
  margin:0.5rem;
  border-radius: ${fontSize.borderRadius};
  background:${({theme}) => theme.dGray};

  & > div {

  }


`;
export const ProfilePicture = styled.div`
 
`;
export const ProfileName= styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  & > p {
    letter-spacing: ${fontSize.smLetterSpacing};
    font-size:${fontSize.smtfSpacing};
    font-family: ${fontName.roboto};

  }
  & :first-child {
    font-weight: 500;
    font-size:${fontSize.mdSpacing};
    margin: 0.25rem 0;

  }

`;
export const ProfileEditBtn= styled.div``;
export const EditBtn= styled.button`
  ${btnReset}
  letter-spacing: ${fontSize.smLetterSpacing};
  font-weight: 500;
  color:${({theme}) => theme.primary};
  font-size:${fontSize.smtfSpacing};
  font-family: ${fontName.roboto};

  text-transform: uppercase;
`;




export const SProfileItems = styled(Link)`
  padding: 1rem;
  ${linkReset}
  ${flexAlignCenter}

  & > svg {
    font-size: 1.15rem;
    color: ${({theme}) => theme.lGray};
  }
`;
export const SProfileContainer = styled.label`
  ${flexStart}
  height: 1px;
  display: block;
  width: 100%;
  background-color: ${({ theme }) => theme.dGray};
`;

export const SProfileLabel = styled.label`
  flex: 1;
  letter-spacing: ${fontSize.mdLetterSpacing};
  font-family: ${fontName.roboto};
  text-transform: capitalize;
  margin-left: 2rem;
  cursor: pointer;

`;
