import { useState } from "react";
import s from "./loginationWindow.module.css";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import LOGIN_WITH_LOGIN_PASS from "../../queries/login-with-query";

export default function LoginationWindow() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const [mutateFunction] = useMutation(LOGIN_WITH_LOGIN_PASS, {
    variables: { login: login, password: password },
    onCompleted: (compl) => {
      router.push("/main-page");
      localStorage.setItem("token", `${compl.loginWidthLoginPass}`);
    },
    onError: () => {
      alert("WRONG LOGIN OR PASSWORD");
    },
  });

  return (
    <section className={s.coverLoginationWindow}>
      <div className={s.loginationWindow}>
        <h2>Login</h2>
        <p className={s.inputsHead}>Type your login:</p>
        <input
          type="text"
          placeholder="Login"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />
        <p className={s.inputsHead}>Type your password:</p>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className={s.submitButton}
          onClick={() => {
            mutateFunction();
          }}
        >
          <p>Submit</p>
        </button>
      </div>
    </section>
  );
}
