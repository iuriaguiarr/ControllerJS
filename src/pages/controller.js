import {
  Main,
  axios,
  acceptedKeys,
  ConfigButton,
  Title,
  Welcome,
} from "../components";
import { useEffect, useState } from "react";

export default function controller() {
  const [username, setUsername] = useState("");

  useEffect(async () => {
    setUsername(localStorage.getItem(`username`));

    function move(keyPressed, action) {
      if (acceptedKeys.indexOf(keyPressed) !== -1) {
        console.log(keyPressed);
        console.log(acceptedKeys.indexOf(keyPressed));
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
    });
    document.addEventListener(`keyup`, (event) => {
      move(event.key, `up`);
    });
  }, []);

  return (
    <Main>
      {/* https://codepen.io/tswone/pen/GLzZLd */}
      <Title margin={false}>
        C<strong>JS</strong>
      </Title>
    </Main>
  );
}
