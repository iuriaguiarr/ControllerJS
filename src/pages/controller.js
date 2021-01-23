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
import { Joystick } from "react-joystick-component";

export default function controller() {
  const [username, setUsername] = useState("");
  const [keys, setKeys] = useState(key);
  useEffect(async () => {
    const nome = await localStorage.getItem(`username`);
    setUsername(nome);
  });

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

  useEffect(async () => {
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
      setTimeout(() => {
        setKeys({ ...keys, beforeKeys });
      }, 100);
    });
  }, []);

  function handleMove(x) {
    axios.post("/api/moveController", {
      userId: parseInt(localStorage.getItem("userId")),
      username: localStorage.getItem("username"),
      axis: x,
    });
  }

  return (
    <Main>
      <Title margin={false}>
        C<strong>JS</strong>
      </Title>
      <div className="joystick">
        {/* <div className="set setbg white">
          <nav className="o-pad">
            <span className={`up ${keys[`w`]} ${keys[`ArrowUp`]}`}></span>
            <span className={`right ${keys[`d`]} ${keys[`ArrowRight`]}`}></span>
            <span className={`down ${keys[`s`]} ${keys[`ArrowDown`]}`}></span>
            <span className={`left ${keys[`a`]} ${keys[`ArrowLeft`]}`}></span>
          </nav>
        </div> */}
        <Joystick
          size={140}
          baseColor="#ececec"
          stickColor="#30475e"
          move={handleMove}
        ></Joystick>

        <div className="middleButtons">
          <div
            onTouchStart={() => move(`Backspace`, `down`)}
            onTouchEnd={() => move(`Backspace`, `up`)}
            className={`button ${keys[`Backspace`]}`}
            valor="BACK"
          ></div>
          <div
            onTouchStart={() => move(`Escape`, `down`)}
            onTouchEnd={() => move(`Escape`, `up`)}
            className={`button ${keys[`Escape`]}`}
            valor="GUIDE"
          ></div>
          <div
            onTouchStart={() => move(`Enter`, `down`)}
            onTouchEnd={() => move(`Enter`, `up`)}
            className={`button ${keys[`Enter`]}`}
            valor="START"
          ></div>
        </div>
        <div className="buttonGroup">
          <div
            onTouchStart={() => move(` `, `down`)}
            onTouchEnd={() => move(` `, `up`)}
            className={`button ${keys[` `]}`}
            valor="A"
          ></div>
          <div
            onTouchStart={() => move(`k`, `down`)}
            onTouchEnd={() => move(`k`, `up`)}
            className={`button ${keys[`k`]}`}
            valor="B"
          ></div>
          <div
            onTouchStart={() => move(`j`, `down`)}
            onTouchEnd={() => move(`j`, `up`)}
            className={`button ${keys[`j`]}`}
            valor="X"
          ></div>
          <div
            onTouchStart={() => move(`l`, `down`)}
            onTouchEnd={() => move(`l`, `up`)}
            className={`button ${keys[`l`]}`}
            valor="Y"
          ></div>

          <div
            onTouchStart={() => move(`u`, `down`)}
            onTouchEnd={() => move(`u`, `up`)}
            className={`button ${keys[`u`]}`}
            valor="LT"
          ></div>
          <div
            onTouchStart={() => move(`p`, `down`)}
            onTouchEnd={() => move(`p`, `up`)}
            className={`button ${keys[`p`]}`}
            valor="RT"
          ></div>

          <div
            onTouchStart={() => move(`i`, `down`)}
            onTouchEnd={() => move(`i`, `up`)}
            className={`button ${keys[`i`]}`}
            valor="LS"
          ></div>
          <div
            onTouchStart={() => move(`o`, `down`)}
            onTouchEnd={() => move(`o`, `up`)}
            className={`button ${keys[`o`]}`}
            valor="RS"
          ></div>
        </div>
      </div>
    </Main>
  );
}
