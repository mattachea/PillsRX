import React from "react";
import { useHistory } from "react-router-dom";

export default function Landing() {
  let history = useHistory();
  return (
    <div>
      <h1>RemindRx</h1>
      <button onClick={() => history.push("/login")}>Login</button>
      <button onClick={() => history.push("/register")}>Register</button>
    </div>
  );
}
