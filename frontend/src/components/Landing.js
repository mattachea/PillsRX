import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "reactstrap";
import "../styles/Landing.css";

export default function Landing() {
  let history = useHistory();
  return (
    <div className="landing">
      <div className="content">
        <div className="text">
          <h1>Keep track of prescriptions.</h1>
          <p>Set specific dosages, times and dates for each prescription.</p>
          <p>Set repeating prescriptions on specific days.</p>
        </div>

        <Button
          style={{ backgroundColor: "#2F80ED" }}
          className="button"
          onClick={() => history.push("/register")}
        >
          Get started
        </Button>
      </div>

      <img
        className="image"
        src={`assets/images/landingImage.png`}
        alt="prescription"
      />
    </div>
  );
}
