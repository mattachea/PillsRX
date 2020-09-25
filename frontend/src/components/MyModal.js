import React from "react";
import Modal from "@material-ui/core/Modal";
import "../styles/Dashboard.css";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    // position: "absolute",
    width: 600,
    height: 600,
    backgroundColor: theme.palette.background.paper,
    outline: 0,
    boxShadow: theme.shadows[5],
    borderRadius: "15px",
    padding: theme.spacing(2, 4, 3),
  },
  form: {
    padding: "10px",
  },
}));

function MyModal() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div className={classes.paper}>
      <h2 id="simple-modal-title">Add Medicine</h2>
      <form className={classes.form} noValidate autoComplete="off">
        <TextField label="Name of Medicine" />
        <br />
        <br />
        <TextField label="Dosage" />
        <br />
        <br />
        <TextField id="time" label="Time" type="time" defaultValue="07:30" />
      </form>
    </div>
  );

  return (
    <div>
      <IconButton
        color="primary"
        aria-label="upload picture"
        component="span"
        onClick={handleOpen}
      >
        <AddCircleIcon />
      </IconButton>

      <Modal className={classes.modal} open={open} onClose={handleClose}>
        {body}
      </Modal>
    </div>
  );
}

export default MyModal;
