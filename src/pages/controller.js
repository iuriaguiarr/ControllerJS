import { Main, axios, Input, uuid, Button, Title } from "../components";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function index() {
  useEffect(async () => {
    document.addEventListener("keydown", (event) => {
      const keyPressed = event.key;
      axios.get("/api/movimento");
    });
  }, []);

  return <Main></Main>;
}
