import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --primary-color: #007bff;
    --secondary-color: #6c757d;
    --accent-color: #28a745;
    --background-light: #ffffff;
    --background-dark: #f8f9fa;
    --text-primary: #212529;
    --text-secondary: #6c757d;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Roboto', sans-serif;
    line-height: 1.6;
    color: var(--text-primary);
    background-color: var(--background-light);
  }

  a {
    text-decoration: none;
    color: var(--primary-color);
  }

  img {
    max-width: 100%;
    height: auto;
  }
`;

export default GlobalStyles;
