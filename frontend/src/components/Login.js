import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { Button, Form, FormGroup, Label, Input } from "reactstrap";

function Login(props) {
  //form state
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
    console.log("trying to login " + form.email + " " + form.password);
  };
  return (
    <div>
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

// Login.propTypes = {
//   // addUser: PropTypes.func.isRequired,
// };

const mapStateToProps = (state) => ({
  users: state.users,
});

export default connect(mapStateToProps)(Login);
