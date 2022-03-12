import { createGlobalStyle } from "styled-components";

export const style = {
  color: {
    background: "#202020",
    foreground: "#ffffff",
  },
  font: {
    family: "monospace",
    size: {
      default: "16px",
    },
  },
};

const Style = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
    box-sizing: border-box;

    &::before, &::after {
      box-sizing: border-box;
    }
  }

  html, body {
    width: 100%;
    height: 100vh;
  }

  body {
    color: ${() => style.color.foreground};
    background: ${() => style.color.background};
    font-size: ${() => style.font.size.default};
    font-family: ${() => style.font.family};
  }

  a, button {
    transition: 0.25s all ease-in-out;
  }
`;

export default Style;
