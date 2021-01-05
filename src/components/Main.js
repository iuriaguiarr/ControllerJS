import styled from "styled-components";

const Main = styled.main`
  width: 100vw;
  height: 100vh;
  background-color: var(--black);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position:relative;

  form {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
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

export default Main;
