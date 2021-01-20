import { motion } from "framer-motion";
import styled from "styled-components";
import Alien from "../../public/alien.svg";

const Input = styled.div`
  width: calc(80% - 2rem);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  input {
    width: 100%;
    padding: 2rem;
    padding-left: 7rem;
    background-color: var(--white);
    font-size: 1.7rem;
    letter-spacing: 0.1rem;
    font-weight: lighter;
    text-transform: uppercase;
  }

  svg {
    fill: var(--black);
    color: var(--black);
    position: absolute;
    left: 2rem;
    top: 0;
    bottom: 0;
    margin: auto 0;
    width: 3rem;
    font-size: 2rem;
    transition: 0.3s;
    opacity: 0.55;
  }

  &:hover,
  &:focus-within,
  &:not([valor=""]) {
    svg {
      color: var(--yellow) !important;
      fill: var(--yellow) !important;
      opacity: 1;
    }
  }
`;

function InputBlock(props) {
  return (
    <motion.div
      style={{
        width: `100%`,
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Input valor={props.valor}>
        <Alien />
        <input
          onChange={props.onChange}
          spellCheck={false}
          autoComplete="off"
          value={props.valor}
          placeholder="Nome de jogador(a) *"
        />
      </Input>
    </motion.div>
  );
}

export default InputBlock;
