import React from "react";
import "../styles/Card.css";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

function Card() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(true);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div className="card__container">
      <div className="card__title__checkbox">
        <h3> Card 1</h3>
        <Checkbox
          checked={checked}
          onChange={handleChange}
          inputProps={{ "aria-label": "primary checkbox" }}
        />
      </div>

      <p3>
        a asdf asdf asdfasd fas dfa sdf asdf asd fa f adsfasdf askdljfajs;df
        jasdfl;ajasdfasdf asdfa sdfadfa dsfads fadf ads
      </p3>
      <div className="card__button__container">
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          startIcon={<DeleteIcon />}
        >
          Delete
        </Button>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          startIcon={<EditIcon />}
        >
          Edit
        </Button>
      </div>
    </div>
  );
}

export default Card;
