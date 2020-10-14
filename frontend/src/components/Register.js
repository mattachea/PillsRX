import React, { useState } from "react";
import { addUser } from "../actions/userActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { Button, Form, FormGroup, Label, Input } from "reactstrap";

function Register(props) {
  //form state
  const [form, setForm] = useState({
    name: "",
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

    const newUser = {
      ...form,
    };
    props.addUser(newUser);
  };
  return (
    <div>
      <h1>Register</h1>
      <Form onSubmit={submitForm}>
        <FormGroup>
          <Label>
            Name:
            <Input value={form.name} name="name" onChange={updateField} />
          </Label>
          <br />
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

Register.propTypes = {
  addUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  users: state.users,
});

export default connect(mapStateToProps, { addUser })(Register);
