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
  `u`,
  `p`,
  `i`,
  `o`,
  `W`,
  `A`,
  `S`,
  `D`,
  `J`,
  `K`,
  `L`,
  `U`,
  `P`,
  `I`,
  `O`,
  ` `,
  `Escape`,
  `Enter`,
  `Backspace`,
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
  W: false,
  A: false,
  S: false,
  D: false,
  J: false,
  K: false,
  L: false,
  U: false,
  P: false,
  I: false,
  O: false,
  " ": false,
  Escape: false,
  u: false,
  p: false,
  i: false,
  o: false,
  Enter: false,
  Backspace: false,
  
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
