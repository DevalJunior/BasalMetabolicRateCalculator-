import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0; // usado para garantir acessibilidade quando for passado um valor
    }
    html, body { 
        font-family: 'Roboto', sans-serif;
    }
`;

export default GlobalStyles;
