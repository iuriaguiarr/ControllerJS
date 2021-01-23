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
  
    return (
      <Main>
        <Title margin={false}>
          C<strong>JS</strong>
        </Title>
       
      </Main>
    );
  }
  