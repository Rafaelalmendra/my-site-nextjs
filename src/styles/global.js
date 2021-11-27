import { createGlobalStyle } from "styled-components";

export default createGlobalStyle `
  :root {
    --header-height: 4.5rem;
  
    //colors
    --blue: #32C5FF;
    --hover-blue: #2EB2E5;
    --dark-blue: #597393;
    --light: #DDEAF3;
    --white: #FFFFFF;
    --black: #131219;
    --light-black: #404040;
    --super-light-black: #6D6D6D;
    --gray: #B8B7B9;
    --link: #463FDF;

    //font-size
    --title: 3.5rem;
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

  ul, li, a, i {
    color: ${(props) => props.theme.text};
  }

  button {
    border: none;
    cursor: pointer;
  }

  img {
    width: 100%;
  }

  //--scroll--//
  ::-webkit-scrollbar {
    width: 0.625rem;
  }

  ::-webkit-scrollbar-track {
    background-color: #FFFFFF;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #32C5FF;
  }
  
  .nav-links {
    background: ${(props) => props.theme.background};
  }

  .section {
    padding: calc(4rem + 4rem) 0;
  }

  .divider {
    width: 100%;
    height: 1px;
    background: linear-gradient(270deg, var(--blue) 0%, rgba(204, 244, 230, 0.34) 100%);
  }

  .divider-two {
    width: 100%;
    height: 1px;
    background: linear-gradient(270deg, var(--blue) 0%, rgba(204, 244, 230, 0.34) 100%);
    transform: matrix(-1, 0, 0, 1, 0, 0);
  }

  .margins {
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  }
  
  .margins-nav {
    margin-left: 14rem;
    margin-right: 14rem;
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

    &:hover {
      background-color: #2EB2E5;
      transform: scale(1.05);
    }
  }

  .hamburguer {
    font-size: 1.8rem;
    position: relative;
    cursor: pointer;
    z-index: 1000;
  }

  .close {
    font-size: 2.6rem;
    position: relative;
    cursor: pointer;
    z-index: 1000;
  }

  .nav-links {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    position: fixed;
    top: 0;
    left: 0;

    width: 100vw;
    min-height: 100vh;
    
    transition: 0.2s;
    z-index: 10;
  }

  //--animate-float--//
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

  //--small-devices--//
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

    .hamburguer {
      width: 1.9rem;
    }

    .section {
      padding: calc(4rem + 2rem) 0;
    }

    :root {
      --header-height: 2.8rem;
    }
  }
`