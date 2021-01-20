import styled from "styled-components";
import { useState, useEffect } from "react";

const MainWrapper = styled.main`
  min-width: 100vw;
  min-height: 100vh;
  overflow: hidden;

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

  .button {
    width: 4rem;
    height: 4rem;
    background-color: var(--white);
    color: var(--black);
    border-radius: calc(100% / 2);
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
    text-transform: uppercase;
    font-weight: bold;
    cursor: pointer;
  }

  .axis {
    position: absolute;
    left: 10%;
  }
`;

function Main(props) {
  const [background, setBackground] = useState(`bg1`);
  useEffect(() => {
    setBackground(`bg${Math.floor(Math.random() * 5) + 1}`);
  }, []);

  return (
    <MainWrapper className={background}>
      <section className="mainWrapper">{props.children}</section>
    </MainWrapper>
  );
}

export default Main;
