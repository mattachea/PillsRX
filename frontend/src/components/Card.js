import React from "react";
import PropTypes from "prop-types";
import "../styles/Card.css";
import { IconButton } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

function Card(props) {
  return (
    <div className="card__container">
      <div className="">
        {/* <Checkbox
          color="primary"
          checked={props.completed}
          onChange={props.onClickCheckbox}
        /> */}

        <h4>{props.name}</h4>
      </div>

      <div className="card__info">
        {props.dosage}
        <div className="card__info__time">
          <div style={{ paddingRight: "5px" }}>{<AccessTimeIcon />}</div>
          {props.time}
        </div>
      </div>

      <div className="card__buttons">
        <IconButton onClick={props.onClickCompleted}>
          <CheckCircleOutlineIcon />
        </IconButton>

        <IconButton onClick={props.onClickDelete}>
          <HighlightOffIcon />
        </IconButton>
      </div>
    </div>
  );
}

Card.propTypes = {
  onClickCompleted: PropTypes.func.isRequired,
  onClickDelete: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  dosage: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
};

export default Card;
