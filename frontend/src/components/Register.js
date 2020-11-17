import React, { useState } from "react";
import { addUser } from "../actions/userActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import "../styles/Register.css";

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
    const newUser = { ...form };
    props.addUser(newUser);
    setForm({ name: "", email: "", password: "" });
  };
  return (
    <div className="register">
      <div className="myborder">
        <h2>Sign up</h2>
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

Register.propTypes = {
  addUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  users: state.users,
});

export default connect(mapStateToProps, { addUser })(Register);
