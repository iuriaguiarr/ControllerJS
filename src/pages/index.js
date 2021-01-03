import { Main, axios, Input, uuid, Button, Title } from "../components";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function index() {
  const [username, setUsername] = useState("");
  const [userId, setUserId] = useState(uuid.v4());
  const history = useRouter();

  function handleSignIn(e) {
    e.preventDefault();

    if (username !== "") {
      localStorage.setItem("username", username);
      localStorage.setItem("userId", userId);
      history.push("/controller");
    } else {
      return;
    }
  }

  return (
    <Main>
      <form onSubmit={handleSignIn}>
        <Title>Insira o seu nome</Title>
        <Input
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <Button type="submit">Entrar</Button>
      </form>
    </Main>
  );
}
