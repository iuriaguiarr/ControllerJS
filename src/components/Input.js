import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const Input = styled.div`
  width: calc(80% - 2rem);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  input {
    width: 100%;
    padding: 2rem;
    padding-left: 5.5rem;
    background-color: var(--white);
    border-radius: 0.8rem;
    font-weight: bold;

    text-transform: uppercase;
  }

  svg {
    position: absolute;
    left: 2rem;
    top: 0;
    bottom: 0;
    margin: auto 0;
    width: 2rem;
    font-size: 2rem;
    color: var(--black);
    opacity: 0.7;
  }
`;

function InputBlock(props) {
  return (
    <Input>
      <FontAwesomeIcon icon={faUser} />
      <input
        onChange={props.onChange}
        spellCheck={false}
        autoComplete="off"
        placeholder="Nome"
      />
    </Input>
  );
}

export default InputBlock;
