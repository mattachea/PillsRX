import React from "react";
import PropTypes from "prop-types";
import "../styles/Card.css";
import Checkbox from "@material-ui/core/Checkbox";
import AccessTimeIcon from "@material-ui/icons/AccessTime";

function Card(props) {
  return (
    <div className="card__container">
      <div className="card__info">
        <h3>{props.name}</h3>
        <Checkbox
          color="primary"
          checked={props.completed}
          onChange={props.onClickCheckbox}
        />
      </div>

      <br />
      <div className="card__info">
        <p>{props.dosage}</p>

        <div className="card__info__time">
          <div style={{ paddingRight: "5px", paddingTop: "5px" }}>
            {<AccessTimeIcon />}
          </div>
          <p>{props.time}</p>
        </div>
      </div>

      {/* <Button
        variant="contained"
        color="primary"
        className={classes.button}
        startIcon={<EditIcon />}
      >
        Edit
      </Button> */}
    </div>
  );
}

Card.propTypes = {
  onClickCheckbox: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  dosage: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
};

export default Card;
