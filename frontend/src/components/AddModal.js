import React, { useState } from "react";
import { addMedicine } from "../actions/medicineActions";
import PropTypes from "prop-types";
import { connect, useSelector } from "react-redux";
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

function AddModal(props) {
  const user = useSelector((state) => state.users.user);
  //modal state
  const [open, setOpen] = useState(false);
  const toggleModal = () => setOpen(!open);

  //form state
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
      userId: user._id,
    };
    props.addMedicine(newMedicine); //call addMedicine action
    setForm({ name: "", dosage: "", time: "", completed: false }); //make form blank
    toggleModal(); //close the modal
  };

  return (
    <div>
      <IconButton onClick={toggleModal}>
        <AddCircleIcon />
      </IconButton>

      <Modal isOpen={open} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Add Medicine</ModalHeader>
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

AddModal.propTypes = {
  addMedicine: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  medicines: state.medicines,
});

export default connect(mapStateToProps, { addMedicine })(AddModal);
