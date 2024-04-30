import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,100..900;1,100..900&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,100..900;1,100..900&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap");
      html,
      body,
      div,
      span,
      applet,
      object,
      iframe,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      p,
      blockquote,
      pre,
      a,
      abbr,
      acronym,
      address,
      big,
      cite,
      code,
      del,
      dfn,
      em,
      img,
      ins,
      kbd,
      q,
      s,
      samp,
      small,
      strike,
      strong,
      sub,
      sup,
      tt,
      var,
      b,
      u,
      i,
      center,
      dl,
      dt,
      dd,
      ol,
      ul,
      li,
      fieldset,
      form,
      label,
      legend,
      table,
      caption,
      tbody,
      tfoot,
      thead,
      tr,
      th,
      td,
      article,
      aside,
      canvas,
      details,
      embed,
      figure,
      figcaption,
      footer,
      header,
      hgroup,
      menu,
      nav,
      output,
      ruby,
      section,
      summary,
      time,
      mark,
      audio,
      input,
      textarea,
      video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
        box-sizing: border-box;
        font-family: NanumGothic;
        color: #000;
        font-style: normal;
        font-weight: 700;
      }
      html {
        font-size: 62.5%;
        font-family: "Noto Sans KR", "sans-serif";
        body {
          font-size: 1.6rem;
        }
      }
      ol,
      ul {
        list-style: none;
      }
      a {
        background-color: transparent;
        text-decoration: none;
        outline: none;
        color: inherit;
        &:active,
        &:hover {
          text-decoration: none;
          color: inherit;
          outline: 0;
        }
      }
      button {
        display: flex;
        align-items: center;
        justify-content: center;
        outline: none;
        border: none;
        background: none;
        padding: 0;
        user-select: none;
        cursor: pointer;
        white-space: nowrap;
        letter-spacing: inherit;
        font: inherit;
        color: inherit;
      }
      input {
        outline: none;
      }
`;

export default GlobalStyle;
