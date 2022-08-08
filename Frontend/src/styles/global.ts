import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #f5f5f5;
    font-size: 14px;
    font-family: "Mukta", sans-serif;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  a{
    text-decoration: none;
  }
`;
