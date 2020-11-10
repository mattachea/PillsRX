import React from "react";
import Card from "./Card";
import { connect } from "react-redux";
import { deleteMedicine, toggleCompleted } from "../actions/medicineActions";
import "../styles/MedicineList.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";

function MedicineList({
  label,
  medicinesArray,
  deleteMedicine,
  toggleCompleted,
}) {
  return (
    <div className="main__container">
      <p>{label}</p>
      <TransitionGroup className="medicineList__container">
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
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
}

export default connect(null, {
  deleteMedicine,
  toggleCompleted,
})(MedicineList);
