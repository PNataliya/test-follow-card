import { css } from "@emotion/react";
import { theme } from "./theme";

export const GlobalStyles = css`
  html {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-style: normal;
    font-family: ${theme.fonts.body};
    background: ${theme.colors.background};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin-top: 0;
  }
  ul,
  ol {
    list-style: none;
    padding-left: 0;
    margin: 0;
  }
  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
  button {
    padding: 0;
    border: none;
    font: inherit;
    color: inherit;
    background-color: transparent;
    cursor: pointer;
  }
  .blackButton {
    background-color: black;
    color: white;
  }

  .whiteButton {
    background-color: white;
    color: black;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }
`;
