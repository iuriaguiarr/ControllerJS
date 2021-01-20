import styled from "styled-components";

const TitleWrapper = styled.h1`
  font-family: "Cubic";
  font-size: 4rem;
  color: var(--white);
  font-weight: lighter;
  position: relative;
  margin-top: 8rem;

  &.noMargin {
    margin-top: 2rem;

    &::after {
      width: 50%;
    }
  }

  strong {
    font-family: "Cubic";
    font-size: 5rem;
    font-weight: lighter;
    color: var(--yellow);
  }

  &::after {
    content: "";
    position: absolute;
    top: 25%;
    left: 0;
    height: 8%;
    background-color: var(--yellow);
    width: 88%;
  }
`;

function Title(props) {
  if (props.margin) {
    return <TitleWrapper>{props.children}</TitleWrapper>;
  } else {
    return <TitleWrapper className="noMargin">{props.children}</TitleWrapper>;
  }
}

export default Title;
