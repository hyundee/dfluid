import { createGlobalStyle } from "styled-components";

export const GlobalFont = createGlobalStyle`    
     @font-face {
    font-family: "Exo2";
    font-weight: bold;
    src: url("/fonts/Exo2-Bold.woff");
  }
  @font-face {
    font-family: "Exo2";
    font-weight: normal;
    src: url("/fonts/Exo2-Regular.woff");
  }
  @font-face {
    font-family: "Montserrat";
    font-weight: bold;
    src: url("/fonts/Montserrat-Bold.woff");
  }
  @font-face {
    font-family: "Montserrat";
    font-weight: normal;
    src: url("/fonts/Montserrat-Regular.woff");
  }
`;
