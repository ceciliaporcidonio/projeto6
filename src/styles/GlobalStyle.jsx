const GlobalStyle = createGlobalStyle`
  @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css');
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #fff8f2;
    color: #E66767;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', Arial, sans-serif;
    background-color: #FFF8F2;
    color: #E66767;
    text-decoration: none;
  }

  a {
    text-decoration: none;  /* Remove o sublinhado dos links */
    color: inherit;
  }
`;

export default GlobalStyle;
