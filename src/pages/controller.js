import { Main, axios, Button } from "../components";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Draggable from "react-draggable";
import { Joystick } from "react-joystick-component";
import {
  faAngleDown,
  faAngleLeft,
  faAngleRight,
  faAngleUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function controller() {
  const [username, setUsername] = useState("");
  const [userId, setUserId] = useState(0);
  useEffect(async () => {
    setUsername(localStorage.getItem("username"));
    setUserId(parseInt(localStorage.getItem("userId")));
    document.addEventListener(`keydown`, (event) => {
      const keyPressed = event.key;
      if (
        keyPressed === `w` ||
        keyPressed === `a` ||
        keyPressed === `s` ||
        keyPressed === `d` ||
        keyPressed === `j` ||
        keyPressed === `k` ||
        keyPressed === `l` ||
        keyPressed === ` ` ||
        keyPressed === `Escape` ||
        keyPressed === `u` ||
        keyPressed === `p` ||
        keyPressed === `i` ||
        keyPressed === `o` ||
        keyPressed === `Enter` ||
        keyPressed === `Backspace` ||
        keyPressed === `h` ||
        keyPressed === `ç`
      ) {
        console.log(keyPressed);
        axios.post("/api/moveController", {
          userId,
          username,
          keyPressed,
          action: `down`,
        });
      }
    });
  }, []);

  function handleMove(x) {
    axios.post("/api/moveController", { userId, username, axis: x });
  }

  return (
    <Main>
      {/* <Draggable defaultClassName="axis" onStart={() => false}>
        <Joystick
          disabled={true}
          size={100}
          baseColor="#ececec"
          stickColor="#30475e"
          move={handleMove}
          stop={handleMove}
        ></Joystick>
      </Draggable>

      <Draggable defaultClassName="button start">
        <span>START</span>
      </Draggable>
      <Draggable defaultClassName="button back">
        <span>BACK</span>
      </Draggable>
      <Draggable defaultClassName="button guide">
        <span>GUIDE</span>
      </Draggable>
      <Draggable defaultClassName="button ls">
        <span>LS</span>
      </Draggable>
      <Draggable defaultClassName="button rs">
        <span>RS</span>
      </Draggable>
      <Draggable defaultClassName="button lt">
        <span>LT</span>
      </Draggable>
      <Draggable defaultClassName="button rt">
        <span>RT</span>
      </Draggable>
      <Draggable defaultClassName="button lb">
        <span>LB</span>
      </Draggable>
      <Draggable defaultClassName="button rb">
        <span>RB</span>
      </Draggable>
      <Draggable defaultClassName="button up">
        <span>
          <FontAwesomeIcon icon={faAngleUp} />
        </span>
      </Draggable>
      <Draggable defaultClassName="button down">
        <span>
          <FontAwesomeIcon icon={faAngleDown} />
        </span>
      </Draggable>
      <Draggable defaultClassName="button left">
        <span>
          <FontAwesomeIcon icon={faAngleLeft} />
        </span>
      </Draggable>
      <Draggable defaultClassName="button right">
        <span>
          <FontAwesomeIcon icon={faAngleRight} />
        </span>
      </Draggable>

      <Draggable defaultClassName="button y">
        <span>Y</span>
      </Draggable>
      <Draggable defaultClassName="button a">
        <span>A</span>
      </Draggable>
      <Draggable defaultClassName="button x">
        <span>X</span>
      </Draggable>
      <Draggable defaultClassName="button b">
        <span>B</span>
      </Draggable> */}
    </Main>
  );
}
