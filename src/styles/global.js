import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0px;
        padding: 0px;
        outline: 0px;
        box-sizing: border-box;
    }

    html, body, #root {
        min-height: 100%;
    }

    body {
        -webkit-font-smoothing: antialiased !important;
        background-color: #fff;
    }

    body, input, button {
        color: #000;
        font-size: 16px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    button {
        cursor: pointer;
    }

`;
