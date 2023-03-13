import { createGlobalStyle } from 'styled-components';
import { colors } from './vars';
 
export const GlobalStyle = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap');

  *, *::before, *::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Lato', sans-serif;
    color: ${colors.black};
  }

  h1, h2, h3, h4, h5, h6{
    font-size: 60px;
    font-weight: 700;
    color: blue;
  }

  button, a{
    border: none;
    background: transparent;
    color: black;
    font-size: 16px;
    text-decoration: none;
    cursor: pointer;
  }

  label{
    cursor: pointer;
  }

  li{
    list-style: none;
  }

  img{
    max-width: 100%;
  }
`;