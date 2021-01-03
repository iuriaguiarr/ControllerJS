import { Main, axios, Input, Button, Title } from "../components";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function index() {
  const [username, setUsername] = useState("");

  const history = useRouter();

  async function handleSignIn(e) {
    e.preventDefault();

    if (username) {
      try {
        const response = await axios.post("/api/controller/create");
        localStorage.setItem("userId", response.data);
        localStorage.setItem("username", username);
        window.navigator.vibrate(100);
        history.push("/controller");
      } catch (error) {
        window.navigator.vibrate([70, 70, 70]);
      }
    } else {
      window.navigator.vibrate([70, 70, 70]);
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
