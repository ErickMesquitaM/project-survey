import { createGlobalStyle } from 'styled-components';
import { colors } from './vars';
 
export const GlobalStyle = createGlobalStyle`

  *, *::before, *::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    color: ${colors.black};
    
    font-weight: 500;

    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  h1, h2, h3, h4, h5, h6{
    font-weight: 600;
    font-size: 16px;
  }

  button, a{
    font-weight: 600;
    font-size: 16px;

    border: none;
    background: transparent;
    color: black;
    text-decoration: none;
    cursor: pointer;

    *{
      font-weight: 600;
      font-size: 16px;
    }
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