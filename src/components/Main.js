import styled from "styled-components";
import { useState, useEffect } from "react";

const MainWrapper = styled.main`
  min-width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  .joystick {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    width: 90vw;
    margin: auto;
    margin-top: 0;
  }

  &.bg1 {
    background: url("/background1.gif") center;
  }
  &.bg2 {
    background: url("/background2.gif") center;
  }
  &.bg3 {
    background: url("/background3.gif") center;
  }
  &.bg4 {
    background: url("/background4.gif") center;
  }
  &.bg5 {
    background: url("/background5.gif") center;
  }

  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  position: relative;

  .mainWrapper {
    min-width: 100vw;
    min-height: 100vh;

    background-color: rgba(0, 0, 0, 0.9);

    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;

    position: relative;
  }

  form {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: auto 0;
  }

  .set {
    overflow: hidden;
    padding: 30px;
    text-align: center;

    .o-pad {
      display: inline-block;
    }
  }

  .o-pad {
    position: relative;
    background: var(--dpad-fg);
    width: 20rem;
    height: 20rem;
    border-radius: 50%;
    overflow: hidden;
    &:after {
      content: "";
      position: absolute;
      z-index: 2;
      width: 20%;
      height: 20%;
      top: 50%;
      left: 50%;
      background: #ddd;
      border-radius: 50%;
      transform: translate(-50%, -50%);
      display: none;
      transition: all 0.25s;
      cursor: pointer;
    }
    &:hover:after {
      width: 30%;
      height: 30%;
    }
    span {
      display: block;
      position: absolute;
      -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
      width: 50%;
      height: 50%;
      text-align: center;
      transform: rotate(45deg);
      border: 1px solid rgba(0, 0, 0, 0.2);
      &:before {
        content: "";
        position: absolute;
        width: 60%;
        height: 60%;
        top: 50%;
        left: 50%;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 50%;
        transform: translate(-50%, -50%);
        transition: all 0.25s;
        cursor: pointer;
        display: none;
      }
      &:after {
        content: "";
        position: absolute;
        width: 0;
        height: 0;
        border-radius: 5px;
        border-style: solid;
        transform: translate(-50%, -50%) rotate(-45deg);
        transition: all 0.25s;
      }
    }
    span.up {
      bottom: 50%;
      left: 50%;
      transform: translate(-50%, -20%) rotate(45deg);
      border-top-left-radius: 50%;
      z-index: 1;
      &:hover,
      &.true {
        background: linear-gradient(
          315deg,
          rgba(255, 255, 255, 0) 15%,
          rgba(255, 255, 255, 0.4) 100%
        );
      }
      &:before {
        left: 57%;
        top: 57%;
      }
      &:after {
        left: 53%;
        top: 53%;
        border-width: 0 var(--tri-lrg-a) var(--tri-lrg-b) var(--tri-lrg-a);
        border-color: transparent transparent var(--arrowcolor) transparent;
      }
      &:active:after,
      &.true:after {
        border-bottom-color: #333;
      }
    }

    span.down {
      top: 50%;
      left: 50%;
      transform: translate(-50%, 20%) rotate(45deg);
      border-bottom-right-radius: 50%;
      z-index: 1;
      &:hover,
      &.true {
        background: linear-gradient(
          135deg,
          rgba(255, 255, 255, 0) 15%,
          rgba(255, 255, 255, 0.4) 100%
        );
      }
      &:before {
        left: 43%;
        top: 43%;
      }
      &:after {
        left: 47%;
        top: 47%;
        border-width: var(--tri-lrg-b) var(--tri-lrg-a) 0px var(--tri-lrg-a);
        border-color: var(--arrowcolor) transparent transparent transparent;
      }
      &:active:after,
      &.true:after {
        border-top-color: #333;
      }
    }

    span.left {
      top: 50%;
      right: 50%;
      transform: translate(-20%, -50%) rotate(45deg);
      border-bottom-left-radius: 50%;
      border: none;
      &:hover,
      &.true {
        background: linear-gradient(
          225deg,
          rgba(255, 255, 255, 0) 15%,
          rgba(255, 255, 255, 0.4) 100%
        );
      }
      &:before {
        left: 57%;
        top: 43%;
      }
      &:after {
        left: 53%;
        top: 47%;
        border-width: var(--tri-lrg-a) var(--tri-lrg-b) var(--tri-lrg-a) 0;
        border-color: transparent var(--arrowcolor) transparent transparent;
      }
      &:active:after,
      &.true:after {
        border-right-color: #333;
      }
    }

    span.right {
      top: 50%;
      left: 50%;
      transform: translate(20%, -50%) rotate(45deg);
      border-top-right-radius: 50%;
      border: none;
      &:hover,
      &.true {
        background: linear-gradient(
          45deg,
          rgba(255, 255, 255, 0) 15%,
          rgba(255, 255, 255, 0.4) 100%
        );
      }
      &:before {
        left: 43%;
        top: 57%;
      }
      &:after {
        left: 47%;
        top: 53%;
        border-width: var(--tri-lrg-a) 0 var(--tri-lrg-a) var(--tri-lrg-b);
        border-color: transparent transparent transparent var(--arrowcolor);
      }
      &:active:after,
      &.true:after {
        border-left-color: #333;
      }
    }
    span:hover:after,
    span.true:after {
      left: 50%;
      top: 50%;
    }
  }

  .setbg.white {
    .o-pad {
      background: var(--c);
      span {
        border-color: rgba(255, 255, 255, 0.6);
      }
      &:before,
      span {
        background: var(--c);
      }
      &:after {
        display: block;
        background: #ccc;
      }
      span.up:after {
        border-bottom-color: #2ecc40;
      }
      span.right:after {
        border-left-color: #85144b;
      }
      span.down:after {
        border-top-color: #7fdbff;
      }
      span.left:after {
        border-right-color: #b10dc9;
      }
      span.up:active:after {
        border-bottom-color: var(--c-t-a);
      }
      span.right:active:after {
        border-left-color: var(--c-t-a);
      }
      span.down:active:after {
        border-top-color: var(--c-t-a);
      }
      span.left:active:after {
        border-right-color: var(--c-t-a);
      }
    }
  }

  // set direction active state

  .d-pad.up span.up:before {
    border-bottom-color: #333;
  }
  .d-pad.down span.down:before {
    border-top-color: #333;
  }
  .d-pad.left span.left:before {
    border-right-color: #333;
  }
  .d-pad.right span.right:before {
    border-left-color: #333;
  }

  .o-pad.up span.up:after {
    border-bottom-color: #333;
  }
  .o-pad.down span.down:after {
    border-top-color: #333;
  }
  .o-pad.left span.left:after {
    border-right-color: #333;
  }
  .o-pad.right span.right:after {
    border-left-color: #333;
  }

  .button {
    width: 4rem;
    height: 4rem;

    background-color: transparent;
    position: relative;
    -webkit-text-stroke: 0.07rem var(--black);

    &:hover {
      &::after {
        background-color: #ccc;
      }
    }
    &:active,
    &.true {
      &::after {
        background-color: #bbb;
        top: 0.2rem;
        left: 0.2rem;
      }
    }

    &::after {
      content: attr(valor);
      position: absolute;
      font-size: 2.2rem;
      background-color: var(--white);
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      width: 4rem;
      height: 4rem;
      top: 0;
      left: 0;
      z-index: 2 !important;
      transition: 0.3s;
    }

    &::before {
      content: "";
      position: absolute;
      background-color: var(--yellow);
      border-radius: 50%;
      width: 4rem;
      height: 4rem;
      top: 0.4rem;
      left: 0.4rem;
      z-index: 1 !important;
      transition: 0.3s;
    }
  }

  .buttonGroup {
    position: relative;
    width: 14rem;
    height: 14rem;
    margin: 0 8rem;
    margin-right: 2rem;
    div {
      position: absolute;
    }
    [valor="Y"] {
      background-color: #000;
      top: 0;
      left: 0;
      right: 0;
      margin: 0 auto;
      color: var(--buttonyellow);
      &::before {
        background-color: var(--buttonyellow);
      }
    }
    [valor="X"] {
      top: 0;
      bottom: 0;
      left: 0;
      margin: auto 0;
      color: var(--buttonblue);
      &::before {
        background-color: var(--buttonblue);
      }
    }
    [valor="A"] {
      bottom: 0;
      left: 0;
      right: 0;
      margin: 0 auto;
      color: var(--buttongreen);
      &::before {
        background-color: var(--buttongreen);
      }
    }
    [valor="B"] {
      top: 0;
      bottom: 0;
      right: 0;
      margin: auto 0;
      color: var(--buttonred);
      &::before {
        background-color: var(--buttonred);
      }
    }
    [valor="LT"] {
      top: -3rem;
      left: -3rem;
      color: var(--blue);
      &::before {
        background-color: var(--blue);
      }
    }
    [valor="RT"] {
      top: -3rem;
      right: -3rem;
      color: var(--blue);
      &::before {
        background-color: var(--blue);
      }
    }
    [valor="LB"] {
      bottom: -3rem;
      left: -3rem;
      color: var(--blue);
      &::before {
        background-color: var(--blue);
      }
    }
    [valor="RB"] {
      bottom: -3rem;
      right: -3rem;
      color: var(--blue);
      &::before {
        background-color: var(--blue);
      }
    }
    [valor="L"] {
      bottom: -9rem;
      left: -3rem;
      color: var(--blue);
      &::before {
        background-color: var(--blue);
      }
    }
    [valor="R"] {
      bottom: -9rem;
      right: -3rem;
      color: var(--blue);
      &::before {
        background-color: var(--blue);
      }
    }
  }

  .middleButtons {
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    [valor="START"],
    [valor="BACK"],
    [valor="GUIDE"] {
      color: var(--blue);

      &::before {
        width: 7rem;
        background-color: var(--blue);
      }
      &::after {
        width: 7rem;
      }
    }

    [valor="GUIDE"] {
      margin-top: -8rem;
    }
  }
`;

function Main(props) {
  const [background, setBackground] = useState(`bg1`);
  useEffect(() => {
    setBackground(`bg${Math.floor(Math.random() * 5) + 1}`);
  }, []);

  return (
    <MainWrapper className={`${background}`}>
      <section className="mainWrapper">{props.children}</section>
    </MainWrapper>
  );
}

export default Main;
