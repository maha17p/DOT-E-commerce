import styled,{createGlobalStyle} from 'styled-components';
import {fontName,fontSize} from './variable.styled'


const GlobalStyle = createGlobalStyle`
    *, ::after , ::before {
        box-sizing: border-box;
        padding: 0;
        margin: 0;

    }

    body {
        background:${({theme}) => theme.dGray} ;
        color: ${({theme}) => theme.black};
        font-size: ${fontSize.nlSpacing};
        font-family: ${fontName.poppins};
    }

    h1,h2,h3,h4 {
        font-family: ${fontName.roboto};
    }
`;

export default GlobalStyle;