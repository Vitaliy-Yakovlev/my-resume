import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    /* Main colors */
    --primary-color: #2997FF; /* Apple blue */
    --primary-dark: #0077ED;
    --primary-rgb: 41, 151, 255;
    --secondary-color: #86868B; /* Apple gray */
    
    /* Background colors */
    --background-light: #FFFFFF;
    --background-dark: #F5F5F7;
    --background-gradient: linear-gradient(180deg, #FBFBFD 0%, #F5F5F7 100%);
    
    /* Text colors */
    --text-primary: #1D1D1F;
    --text-secondary: #86868B;
    --text-tertiary: #6E6E73;
    
    /* UI colors */
    --success-color: #28CD41;
    --error-color: #FF3B30;
    
    /* Spacing */
    --spacing-xs: 4px;
    --spacing-sm: 8px;
    --spacing-md: 16px;
    --spacing-lg: 24px;
    --spacing-xl: 32px;
    --spacing-xxl: 48px;

    /* Border radius */
    --radius-sm: 8px;
    --radius-md: 12px;
    --radius-lg: 20px;
    
    /* Shadows */
    --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.08);
    --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.12);
    --shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.16);

    /* Transitions */
    --transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    scroll-behavior: smooth;
    scroll-padding-top: 70px;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Helvetica Neue', sans-serif;
    color: var(--text-primary);
    background-color: var(--background-light);
    line-height: 1.47059;
    letter-spacing: -0.022em;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Helvetica Neue', sans-serif;
    font-weight: 600;
    letter-spacing: -0.003em;
  }

  a {
    text-decoration: none;
    color: var(--primary-color);
    transition: color 0.3s cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
      color: var(--primary-dark);
    }
  }

  button {
    font-family: inherit;
    border: none;
    background: none;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  ::selection {
    background: var(--text-primary);
    color: var(--background-light);
  }

  /* Animations */
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-fadeIn {
    animation: fadeIn 0.7s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  }

  /* Scrollbar Styling */
  ::-webkit-scrollbar {
    width: 8px;
    background: transparent;
  }

  ::-webkit-scrollbar-track {
    background: var(--background-dark);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--secondary-color);
    border-radius: 4px;
    border: 2px solid var(--background-dark);
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--text-tertiary);
  }

  /* Typography */
  .text-gradient {
    background: linear-gradient(180deg, var(--text-primary) 0%, var(--text-secondary) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export default GlobalStyles;
