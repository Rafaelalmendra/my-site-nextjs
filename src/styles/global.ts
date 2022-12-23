import { createGlobalStyle } from "styled-components";
import { ThemeProps } from "types";

export default createGlobalStyle<ThemeProps>`
  :root {
    --blue: #32C5FF;
    --hover-blue: #2EB2E5;
    --yellow: #FFD818;

    --white: #FFFFFF;
    --black: #131219;
    --grey: #9B9C9C;
    --dark-grey: #242a32;
  }

  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    vertical-align: baseline;
    font-size: 100%;
    font: inherit;
    list-style: none;
    text-decoration: none;
    color: inherit;
  }

  html {
    scroll-behavior: smooth;
    scroll-padding-top: 16rem;

    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body, input, textarea, button  {
    font-size: 1rem;
    font-family: 'Manrope', sans-serif;

    color: ${(props) => props.theme.text};
    background: ${(props) => props.theme.background};

    border: none;
    -webkit-font-smoothing: antialiased;

    &:focus {
      border: 0 none;
      outline: 0;
    }
  }

  h1, h2, h3, h4, h5, h6, p, span, ul, li, a, i {
    color: ${(props) => props.theme.text};
  }

  button {
    border: none;
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  img {
    width: 100%;
  }

  ::-webkit-scrollbar {
    width: 0.34rem;
  }

  ::-webkit-scrollbar-track {
    background-color: ${(props) => props.theme.background};
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.text};
  }

  //style to set navbar active when scrolling down
  .active {
    background: ${(props) => props.theme.background};
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);
  }
`;
