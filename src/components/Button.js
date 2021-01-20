import styled from "styled-components";

const ButtonWrapper = styled.button`
  background-color: var(--yellow);
  margin-top: 2rem;
  padding: 1.2rem 0;
  width: calc(80% - 2rem);
  font-size: 1.9rem;
  letter-spacing: 0.1rem;
  color: var(--white);
  text-transform: lowercase;
  font-weight: lighter;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.7s;
  max-height: 4.8rem;
  margin-bottom: 8rem;

  &:disabled {
    width: 0;
    color: transparent;
  }
`;

function Button(props) {
  if (!props.valor) {
    return <ButtonWrapper disabled>{props.children}</ButtonWrapper>;
  } else {
    return <ButtonWrapper>{props.children}</ButtonWrapper>;
  }
}

export default Button;
