import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    } 

    body {
        margin: 0;
        padding: 0;
        background: ${(props) => props.theme.background};
        color: ${(props) => props.theme.color};
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        width: 100vw;
        overflow-x: hidden;
    }

    h1{
        font-size: calc(1.5rem + 1vmin);
        color: ${(props) => props.theme.color}
    }
`;

export default GlobalStyle;
