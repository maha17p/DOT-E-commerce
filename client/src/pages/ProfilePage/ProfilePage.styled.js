import styled from 'styled-components';
import { flexCenter, fontName, fontSize, media,size } from '../../styles/variable.styled';

export const ProfileContainer = styled.div`
    width: 90vw;
    height: calc(100vh  - 2* ${size.headerHeight} );
    margin:2rem  auto;
    display: flex;
    gap: 0.25rem;
   
    & > div {
    }

`;


export const PersonContainer = styled.div`
    /* ${flexCenter} */
    flex:1 ;
    height: 100%;
    width: 100%;

`;
export const Profile = styled.div``;
export const OtherProfileDetails = styled.div``;
export const PersonalContainer = styled.div`
    background: ${({theme}) => theme.white};
    display: none;
   @media ${media.md}{
    display: flex;
    flex: 2;

   }

`;
export const EditingProfile = styled.div`
    width: 75%;
    margin:0 auto;
    padding: 1rem 2rem;
`;


export const Title = styled.p`
    text-align: center;
    font-weight: 600;
    margin: 1rem 0;
    font-family: ${fontName.roboto};
    font-size: ${fontSize.mdSpacing};
    letter-spacing: ${fontSize.mdLetterSpacing};
    text-transform:uppercase;

`;

export const ExtraInfo = styled.div`
  display: none;
   @media ${media.md}{
    display: flex;
    flex: 1;
    
   }
`