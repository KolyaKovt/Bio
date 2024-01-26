import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: "PalanquinDark", sans-serif;
    background-color: var(--primary-bg-color);
    color: var(--text-color);
    transition: var(--theme-transition-properties);
  }
`
