import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --header-height: 4.5rem;
    --blue: #32C5FF;
    --hover-blue: #2EB2E5;
    --yellow: #FFD818;
    --white: #FFFFFF;
    --black: #131219;
    --light-black: #6D6D6D;
    --grey: #ADADAD;
    --link: #463FDF;
    --purple-black: #161B3D;
    --small-title: 2.5rem;
    --subtitle: 1.7rem;
    --small-subtitle: 1.2rem;
    --text: 1rem;
    --small-text: 0.9rem;
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
    font-family: 'Roboto', sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1;
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

  img {
    width: 100%;
  }

  ::-webkit-scrollbar {
    width: 0.625rem;
  }

  ::-webkit-scrollbar-track {
    background-color: ${(props) => props.theme.background};
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--blue);
  }

  .active {
    background: ${(props) => props.theme.background};
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);
  }

  .margins {
    margin-left: 26rem;
    margin-right: 26rem;

    @media (max-width: 1680px) {
      margin-left: 18rem;
      margin-right: 18rem;
    }

    @media (max-width: 1440px) {
      margin-left: 14rem;
      margin-right: 14rem;
    }

    @media (max-width: 1366px) {
      margin-left: 12rem;
      margin-right: 12rem;
    }

    @media (max-width: 1112px) {
      margin-left: 8rem;
      margin-right: 8rem;
    }

    @media (max-width: 991.98px) {
      margin-left: 6rem;
      margin-right: 6rem;
    }

    @media (max-width: 767.98px) {
      margin-left: 4rem;
      margin-right: 4rem;
    }

    @media (max-width: 575.98px) {
      margin-left: 1.5rem;
      margin-right: 1.5rem;
    }
  }

  .margins-blog {
    margin-left: 35rem;
    margin-right: 35rem;

    @media (max-width: 1680px) {
      margin-left: 25rem;
      margin-right: 25rem;
    }

    @media (max-width: 1440px) {
      margin-left: 20rem;
      margin-right: 20rem;
    }

    @media (max-width: 1366px) {
      margin-left: 17rem;
      margin-right: 17rem;
    }

    @media (max-width: 1112px) {
      margin-left: 14rem;
      margin-right: 14rem;
    }

    @media (max-width: 991.98px) {
      margin-left: 12rem;
      margin-right: 12rem;
    }

    @media (max-width: 767.98px) {
      margin-left: 8rem;
      margin-right: 8rem;
    }

    @media (max-width: 575.98px) {
      margin-left: 1.5rem;
      margin-right: 1.5rem;
    }
  }

  .global-button {
    position: relative;
    width: 13rem;
    height: 4rem;
    z-index: 1;
    font-size: 1.7rem;
    font-weight: 500;
    color: #FFFFFF;
    background-color: #32C5FF;
    cursor: pointer;
    border-radius: 0.65rem;
    transition: 0.2s ease-in-out;
    background-color: #2EB2E5;
    transform: scale(1.05);
  }

  .loading {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .lds-ellipsis {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
  }

  .lds-ellipsis div {
    position: absolute;
    top: 33px;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background: var(--blue);
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }

  .lds-ellipsis div:nth-child(1) {
    left: 8px;
    animation: lds-ellipsis1 0.6s infinite;
  }

  .lds-ellipsis div:nth-child(2) {
    left: 8px;
    animation: lds-ellipsis2 0.6s infinite;
  }

  .lds-ellipsis div:nth-child(3) {
    left: 32px;
    animation: lds-ellipsis2 0.6s infinite;
  }

  .lds-ellipsis div:nth-child(4) {
    left: 56px;
    animation: lds-ellipsis3 0.6s infinite;
  }

  @keyframes lds-ellipsis1 {
    0% {
      transform: scale(0);
    }

    100% {
      transform: scale(1);
    }
  }

  @keyframes lds-ellipsis3 {
    0% {
      transform: scale(1);
    }

    100% {
      transform: scale(0);
    }
  }

  @keyframes lds-ellipsis2 {
    0% {
      transform: translate(0, 0);
    }

    100% {
      transform: translate(24px, 0);
    }
  }

  .sk-chase {
    width: 40px;
    height: 40px;
    position: relative;
    animation: sk-chase 2.5s infinite linear both;
  }

  @keyframes float {
    0% {
      transform: translateY(0px);
    }

    50% {
      transform: translateY(-1.4rem);
    }

    100% {
      transform: translateY(0px);
    }
  }

  @media (max-width: 1199.98px) {
    .margins-nav {
      margin-left: 6rem;
      margin-right: 6rem;
    }
  }

  @media (max-width: 850px) {
    .margins-nav {
      margin-left: 5rem;
      margin-right: 5rem;
    }

    .desktop, .link {
      display: none;
    }
  }

  @media (max-width: 575.98px) {
    .margins-nav {
      margin-left: 1.5rem;
      margin-right: 1.5rem;
    }

    .global-button {
      width: 10rem;
      height: 3.4rem;
      border-radius: 0.5rem;

      font-size: 1.2rem;
    }

    .section {
      padding: calc(4rem + 2rem) 0;
    }

    :root {
      --header-height: 2.8rem;
    }
  }
`;
