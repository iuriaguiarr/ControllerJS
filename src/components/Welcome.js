import { motion } from "framer-motion";
import styled from "styled-components";

const WelcomeWrapper = styled.p`
  font-family: "Aldo";
  font-size: 2rem;
  color: var(--white);

  font-weight: lighter;
  text-align: center;
  margin: 0 4rem;
  margin-bottom: 8rem;
`;

function Welcome(props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <WelcomeWrapper>{props.children}</WelcomeWrapper>
    </motion.div>
  );
}

export default Welcome;
