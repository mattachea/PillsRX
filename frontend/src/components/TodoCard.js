import React from "react";
import "../styles/TodoCard.css";
import { IconButton } from "@material-ui/core";
import { Button } from "reactstrap";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

export default function TodoCard(props) {
  return (
    <div className="card__container">
      <div className="card__info">
        <div className="card__info__time">
          <div style={{ paddingRight: "5px" }}>{<AccessTimeIcon />}</div>
          {props.time}
        </div>
        <h4>{props.name}</h4>
        {props.dosage}
      </div>

      <div className="card__buttons">
        <Button color="primary" className="single_button">
          edit
        </Button>
        {props.isDesktop ? (
          <Button
            color="success"
            className="single_button"
            onClick={props.onClickCompleted}
          >
            Mark as Completed
          </Button>
        ) : (
          <IconButton
            className="single_button"
            onClick={props.onClickCompleted}
          >
            <CheckCircleIcon style={{ color: "#5cb85c" }} />
          </IconButton>
        )}
      </div>
    </div>
  );
}
