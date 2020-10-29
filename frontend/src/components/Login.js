import React, { useState } from "react";
import PropTypes from "prop-types";
import { login } from "../actions/userActions";
import { connect } from "react-redux";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import "../styles/Login.css";

function Login(props) {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const updateField = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const submitForm = (e) => {
    e.preventDefault();
    console.log("trying to login " + form);
    const user = { ...form };
    props.login(user);
    setForm({ email: "", password: "" });
  };
  return (
    <div className="login">
      <h1>Login</h1>
      <Form onSubmit={submitForm}>
        <FormGroup>
          <Label>
            Email:
            <Input
              value={form.email}
              name="email"
              type="email"
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
