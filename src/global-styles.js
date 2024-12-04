import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after{
  box-sizing:border-box;
}
  html,
  body {
    // height: 100%;
    // width: 100%;
    margin: 0;
    font-family: 'Roboto', sans-serif;
    scrollbar-color: #f40101 #fff;
  }
  body {
    font-family: 'Roboto', sans-serif;
    overflow-x: hidden;
  }
  body.fontLoaded {
    font-family: 'Roboto', 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }
  #app {
    background-color: #fafafa;
    // min-height: 100%;
    // min-width: 100%;
  }
  p,
  label {
    font-family: 'Roboto', Georgia, Times, 'Times New Roman', serif;
  }
  button:hover {
    cursor: pointer;
    transform: scale(1.01);
    transition: all 200ms linear !important;
  }
  input:focus::placeholder {
    color: transparent;
  }
  textarea:focus::placeholder {
    color: transparent;
  }
`;