import React, { useState } from "react";
import { login } from "../actions/userActions";
import { connect, useSelector } from "react-redux";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { useHistory } from "react-router-dom";
import "../styles/Login.css";

function Login(props) {
  //history for react router
  let history = useHistory();

  // get if user logged in from redux store
  let authError = useSelector((state) => state.users.error);

  //form state
  const [form, setForm] = useState({ username: "", password: "" });
  const updateField = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // submit the form, call login function, clear form, go to dashboard
  const submitForm = (e) => {
    e.preventDefault();
    setForm({ username: "", password: "" });
    props.login({ ...form }, () => {
      history.push("/dashboard");
    });
  };

  return (
    <div className="login">
      <div className="myborder">
        <h2>Login</h2>
        <Form onSubmit={submitForm}>
          <FormGroup>
            <Label>
              Username:
              <Input
                value={form.username}
                name="username"
                type="string"
                onChange={updateField}
              />
            </Label>
            <br />
            <Label>
              Password:
              <Input
                value={form.password}
                name="password"
                type="password"
                onChange={updateField}
              />
            </Label>
          </FormGroup>
          {authError && <p>{authError}</p>}
          <Button style={{ backgroundColor: "#2F80ED" }}>Submit</Button>
        </Form>
      </div>
      <img
        className="image"
        src={`assets/images/landingImage.png`}
        alt="prescription"
      />
    </div>
  );
}
export default connect(null, { login })(Login);
