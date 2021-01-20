import { Main, axios, Input, Button, Title, Welcome } from "../components";
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
      <Title margin={true}>
        Controller<strong>JS</strong>
      </Title>

      <form onSubmit={handleSignIn}>
        <Welcome>
          Ola caro jogador(a), seja bem-vindo(a) ao <span>ControllerJS</span>.
          Insira o seu nome e comece ja a sua gameplay!
        </Welcome>
        <Input
          valor={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <Button valor={username} type="submit">
          Comecar Gameplay!
        </Button>
      </form>
    </Main>
  );
}
