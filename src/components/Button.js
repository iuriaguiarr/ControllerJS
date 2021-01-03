import styled from "styled-components";

const Button = styled.button`
  background-color: var(--white);
  margin-top: 2rem;
  padding: 1.2rem 0;
  width: calc(80% - 2rem);
  border-radius: 0.8rem;
  font-size: 1.7rem;
  color: var(--black);
  text-transform: uppercase;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export default Button;
