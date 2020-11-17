import React from "react";
import { useHistory } from "react-router-dom";

export default function Landing() {
  let history = useHistory();
  return (
    <div className="landing">
      <div className="text">
        <h1>Keep track of prescriptions.</h1>
      </div>
      <img className="image"></img>
      {/* <button onClick={() => history.push("/login")}>Login</button>
      <button onClick={() => history.push("/register")}>Register</button> */}
    </div>
  );
}
