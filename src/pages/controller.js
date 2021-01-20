import {
  Main,
  axios,
  acceptedKeys,
  ConfigButton,
  Title,
  Welcome,
  key,
} from "../components";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function controller() {
  const [username, setUsername] = useState("");
  const [keys, setKeys] = useState(key);
  useEffect(async () => {
    const nome = await localStorage.getItem(`username`);
    setUsername(nome);
  });

  useEffect(async () => {
    function move(keyPressed, action) {
      if (acceptedKeys.indexOf(keyPressed) !== -1) {
        axios.post("/api/moveController", {
          userId: parseInt(localStorage.getItem("userId")),
          username: localStorage.getItem("username"),
          keyPressed,
          action,
        });
      }
    }
    document.addEventListener(`keydown`, (event) => {
      move(event.key, `down`);
      var beforeKeys = keys;
      beforeKeys[event.key] = true;
      setKeys({ ...keys, beforeKeys });
    });
    document.addEventListener(`keyup`, (event) => {
      move(event.key, `up`);
      var beforeKeys = keys;
      beforeKeys[event.key] = false;
      setKeys({ ...keys, beforeKeys });
    });
  }, []);

  return (
    <Main>
      <Title margin={false}>
        C<strong>JS</strong>
      </Title>
      <div className="set setbg white">
        <nav className="o-pad">
          <span className={`up ${keys[`w`]} ${keys[`ArrowUp`]}`}></span>
          <span className={`right ${keys[`d`]} ${keys[`ArrowRight`]}`}></span>
          <span className={`down ${keys[`s`]} ${keys[`ArrowDown`]}`}></span>
          <span className={`left ${keys[`a`]} ${keys[`ArrowLeft`]}`}></span>
        </nav>
      </div>

      <motion.div
        className="axis"
        drag
        dragConstraints={{
          top: -50,
          left: -50,
          right: 50,
          bottom: 50,
        }}
      />
    </Main>
  );
}
