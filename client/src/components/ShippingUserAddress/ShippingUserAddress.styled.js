import styled from 'styled-components'
import { media,fontName,fontSize, btnReset } from '../../styles/variable.styled';

export const ShippingAddress = styled.div`
  min-height: 200px;

  @media ${media.md} {
    max-height: 300px;
    width: 300px;
  }
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

        & > div > button {
            letter-spacing: ${fontSize.smLetterSpacing};
            font-family: ${fontName.roboto};
            outline: none;
            border: none;
            background: inherit;
            cursor: pointer;
        }

    `;

export const AddressBtn = styled.div`


`;
export const BtnContainer = styled.div`

`;

export const AddBtn = styled.button`
    color: ${({theme}) => theme.blue};
    font-weight: 500;

`;
export const EditBtn = styled.button`
    margin-right: 0.5rem;
    color: green;
`;
export const DeleteBtn = styled.button`
    color: red;
`;


export const Title = styled.p`
  font-weight: 600;
  font-family: ${fontName.roboto};
  letter-spacing: ${fontSize.smLetterSpacing};
  text-transform: uppercase;
  margin: 0.5rem 0;
  font-size: 0.925rem;

`;

export const UserName = styled.p`
  display: block;
    text-transform: uppercase;
    font-family: ${fontName.roboto};
    letter-spacing: ${fontSize.smLetterSpacing};
    margin: 0.15rem 0.25rem;
    font-weight: 500;
`;
export const Address = styled.div`
  & > p {
    text-transform: uppercase;
    font-size: ${fontSize.smtfSpacing};
    letter-spacing: ${fontSize.smLetterSpacing};
    margin: 0.15rem 0.25rem;
    font-weight: 500;
  }
`;
export const AddressName = styled.p``;
export const CityName = styled.p``;
export const StateName = styled.p``;
export const Country = styled.p``;
export const PhoneNumber = styled.p``;
export const PinCode = styled.p``;