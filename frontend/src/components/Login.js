import React, { useState } from "react";
import "../styles/Login.css";
import { login } from "../actions/userActions";
import { connect, useSelector } from "react-redux";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Redirect } from "react-router-dom";

function Login(props) {
  // get if user logged in from redux store
  let isAuth = useSelector((state) => state.users.isAuthenticated);

  // state for the form
  const [form, setForm] = useState({ username: "", password: "" });

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
  };

  // if user is logged in, redirect to the dashboard
  if (isAuth) return <Redirect to={"/dashboard"} />;

  return (
    <div className="login">
      <h1>Login</h1>
      <Form onSubmit={submitForm}>
        <FormGroup>
          <Label>
            Username:
            <Input
              // value={form.username}
              name="username"
              type="string"
              onChange={updateField}
            />
          </Label>
          <br />
          <Label>
            Password:
            <Input
              // value={form.password}
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

// const mapStateToProps = (state) => ({
//   users: state.users,
// });
// export default connect(mapStateToProps, { login })(Login);

export default connect(null, { login })(Login);
