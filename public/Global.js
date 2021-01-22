import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root{
    --black: #222831;
    --blue: #30475e;
    --orange: #f2a365;
    --white: #ececec;
    --purple:#3faef5;
    --yellow:#e3b000;
    --buttonyellow:#f9c74f;
    --buttongreen:#90be6d;
    --buttonblue:#277da1;
    --buttonred:#f94144;

    --dpad-radius: 17%;
    --dpad-radius-in: 20%;
    --dpad-fg: #ddd;
    --dpad-fg-hover: #eee;
    --dpad-bg: #fff;
    --arrowcolor: #aaa;
    --tri-sml-a: 13px;
    --tri-sml-b: 19px;
    --tri-lrg-a: 13px;
    --tri-lrg-b: 19px;
    --dpad-arrow-shift: 5px;
    --dpad-arrow-move: 35%;

    --c: #fff;
    --c-t: rgba(0,0,0,.1);
    --c-t-a: rgba(0,0,0,.6);
    --c-h: #143cb9;
 
}

@font-face {
    font-family: "Cubic";
    src: url("/cubic.ttf") format("truetype");
}
@font-face {
    font-family: "Aldo";
    src: url("/aldo.ttf") format("truetype");
}

  * {
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    text-rendering: optimizeLegibility;
    font-family: "Aldo";
    text-decoration: none;
    -webkit-user-select: initial;
    -khtml-user-select: initial;
    -moz-user-select: initial;
    -ms-user-select: initial;
    user-select: initial;
    list-style: none;
    box-shadow: none;
    outline: none;
    padding: 0;
    margin: 0;  
    border: 0;
    &::selection {
      background-color:  var(--green);
      color: var(--background);
    }
    &::-webkit-scrollbar {
        width: 0.4rem;
      }
      &::-webkit-scrollbar-track {
        background: transparent;
        
        border-radius: 1rem;
      }
      &::-webkit-scrollbar-thumb {
        background: var(--black2);
        border-radius: 1rem;
      }
  }
  html,
  body {
    scroll-behavior: smooth;
    background:var(--black);
    font-size: 62.5%;
    
  }
  
`;

export default GlobalStyle;
