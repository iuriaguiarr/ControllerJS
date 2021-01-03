import { Main, axios, Button } from "../components";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function controller() {
  const [username, setUsername] = useState("");
  const [userId, setUserId] = useState(0);
  useEffect(() => {
    setUsername(localStorage.getItem("username"));
    setUserId(parseInt(localStorage.getItem("userId")));
  }, []);
  async function handleClick() {
    axios.post("/api/controller/move", { userId, username });
  }

  return (
    <Main>
      <Button onClick={handleClick}>Clicar</Button>
    </Main>
  );
}
