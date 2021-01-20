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

export {
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
