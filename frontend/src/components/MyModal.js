import React, { useState } from "react";
import { connect } from "react-redux";
import { addMedicine } from "../actions/medicineActions";
import PropTypes from "prop-types";
import { IconButton } from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

function MyModal(props) {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

  const [form, setForm] = useState({
    name: "",
    dosage: "",
    time: "",
    completed: false,
  });
  const updateField = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const submitForm = (e) => {
    e.preventDefault();

    const newMedicine = {
      ...form,
    };
    props.addMedicine(newMedicine);
    toggle();
  };

  return (
    <div>
      <IconButton onClick={toggle}>
        <AddCircleIcon />
      </IconButton>

      <Modal isOpen={open} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add Medicine</ModalHeader>
        <ModalBody>
          <Form onSubmit={submitForm}>
            <FormGroup>
              <Label>
                Name:
                <Input value={form.name} name="name" onChange={updateField} />
              </Label>
              <br />
              <Label>
                Dosage:
                <Input
                  value={form.dosage}
                  name="dosage"
                  onChange={updateField}
                />
              </Label>
              <br />
              <Label>
                Time:
                <Input
                  value={form.time}
                  name="time"
                  type="time"
                  onChange={updateField}
                />
              </Label>
            </FormGroup>

            <Button>Submit</Button>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
}

MyModal.propTypes = {
  addMedicine: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  medicines: state.medicines,
});

export default connect(mapStateToProps, { addMedicine })(MyModal);
