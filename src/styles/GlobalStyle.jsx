import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css');
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #FFF8F2;
    overflow-x: hidden;
  }

  body {
    font-family: 'Roboto', Arial, sans-serif;
    background-color: #FFF8F2;
    color: #E66767;
    text-decoration: none;
    font-size: 16px;
  }

  a {
    text-decoration: none; 
    color: inherit;
  }

  /* Adicionando responsividade */
  @media (max-width: 768px) {
    body {
      font-size: 14px;
    }

  }

  @media (max-width: 480px) {
    body {
      font-size: 12px;
    }

  }
`;

export default GlobalStyle;
