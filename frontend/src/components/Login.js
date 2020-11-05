import React, { useState } from "react";
import PropTypes from "prop-types";
import { login } from "../actions/userActions";
import { connect } from "react-redux";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { useHistory } from "react-router-dom";
import "../styles/Login.css";

function Login(props) {
  // for navigating to different routes
  let history = useHistory();

  // state for the form
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  //update the form state
  const updateField = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  // submit the form, call login function, clear form, redirect
  const submitForm = (e) => {
    e.preventDefault();
    props.login({ ...form });
    setForm({ username: "", password: "" });
    history.push("/dashboard");
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

        <Button>Submit</Button>
      </Form>
    </div>
  );
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  users: state.users,
});

export default connect(mapStateToProps, { login })(Login);
