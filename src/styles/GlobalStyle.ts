import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Poppins", sans-serif;
    background-color: black;
    color: white;
  }

  p {
    font-size: 1.25vw;
    font-style: normal;
    font-weight: 400;
  }
`;

export default GlobalStyle;
