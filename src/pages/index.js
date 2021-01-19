import { Main, axios, Input, Button, Title } from "../components";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function index() {
  const [username, setUsername] = useState("");
  const [userId, setUserId] = useState(Math.floor(1000 + Math.random() * 9000));
  const history = useRouter();

  useEffect(() => {
    if (!localStorage.getItem("userId")) {
      localStorage.setItem("userId", userId);
    } else {
      setUserId(localStorage.getItem("userId"));
    }
  }, []);

  async function handleSignIn(e) {
    e.preventDefault();

    if (username) {
      try {
        localStorage.setItem("username", username);
        await axios.post("/api/createController", {
          userId: parseInt(userId),
          username,
        });
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
