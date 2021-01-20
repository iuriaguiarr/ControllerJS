import styled from "styled-components";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

const TitleWrapper = styled.h1`
  font-family: "Cubic";
  font-size: 4rem;
  color: var(--white);
  font-weight: lighter;
  position: relative;
  margin-top: 8rem;
  cursor: pointer;

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
  const history = useRouter();
  if (props.margin) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <TitleWrapper onClick={() => history.push(`/`)}>
          {props.children}
        </TitleWrapper>
      </motion.div>
    );
  } else {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <TitleWrapper onClick={() => history.push(`/`)} className="noMargin">
          {props.children}
        </TitleWrapper>{" "}
      </motion.div>
    );
  }
}

export default Title;
