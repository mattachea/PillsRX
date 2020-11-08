import React, { useState } from "react";
import "../styles/Login.css";
import { login } from "../actions/userActions";
import { connect, useSelector } from "react-redux";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Redirect, useHistory } from "react-router-dom";

function Login(props) {
  let history = useHistory();

  // get if user logged in from redux store
  let authError = useSelector((state) => state.users.error);

  const [form, setForm] = useState({ username: "", password: "" });

  //update the form state
  const updateField = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // submit the form, call login function, clear form, go to dashboard
  const submitForm = (e) => {
    e.preventDefault();

    props.login({ ...form }, () => {
      history.push("/dashboard");
    });
    setForm({ username: "", password: "" });
  };

  return (
    <div className="login">
      <h1>Login</h1>
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
        <Button>Submit</Button>
      </Form>
    </div>
  );
}

export default connect(null, { login })(Login);
