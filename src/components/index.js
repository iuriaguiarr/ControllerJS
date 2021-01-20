import Image from "next/image";
import Input from "./Input";
import axios from "axios";
import Main from "./Main";
import Button from "./Button";
import Title from "./Title";
import Welcome from "./Welcome";
const controllers = [];
const acceptedKeys = [
  `ArrowUp`,
  `ArrowDown`,
  `ArrowLeft`,
  `ArrowRight`,
  `w`,
  `a`,
  `s`,
  `d`,
  `j`,
  `k`,
  `l`,
  ` `,
  `Escape`,
  `u`,
  `p`,
  `i`,
  `o`,
  `Enter`,
  `Backspace`,
  `h`,
  `ç`,
];

const key = {
  ArrowUp: false,
  ArrowDown: false,
  ArrowLeft: false,
  ArrowRight: false,
  w: false,
  a: false,
  s: false,
  d: false,
  j: false,
  k: false,
  l: false,
  " ": false,
  Escape: false,
  u: false,
  p: false,
  i: false,
  o: false,
  Enter: false,
  Backspace: false,
  h: false,
  ç: false,
};

export {
  key,
  axios,
  Image,
  Input,
  Main,
  Button,
  Title,
  controllers,
  Welcome,
  acceptedKeys,
};
