import React from "react";
import Card from "./Card";
import { connect } from "react-redux";
import { deleteMedicine, toggleCompleted } from "../actions/medicineActions";
import "../styles/Todo.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";

function Todo({ medicinesArray, deleteMedicine, toggleCompleted, isDesktop }) {
  return (
    <TransitionGroup className="cards">
      {medicinesArray.map((med) => (
        <CSSTransition key={med._id} timeout={250} classNames="fade">
          <Card
            key={med._id}
            onClickCompleted={() => toggleCompleted(med._id, med.completed)}
            onClickDelete={() => deleteMedicine(med._id)}
            name={med.name}
            dosage={med.dosage}
            time={med.time}
            completed={med.completed}
            isDesktop={isDesktop}
          />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
}

export default connect(null, {
  deleteMedicine,
  toggleCompleted,
})(Todo);
