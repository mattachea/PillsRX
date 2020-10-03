import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Card from "./Card";
import { connect } from "react-redux";
import {
  getMedicines,
  deleteMedicine,
  toggleCompleted,
} from "../actions/medicineActions";
import "../styles/MedicineList.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";

function MedicineList({
  getMedicines,
  medicines,
  deleteMedicine,
  toggleCompleted,
}) {
  //calls getMedicines() once when component mounts
  useEffect(getMedicines, []);
  //keeps state in this array
  let { medicinesArray } = medicines;
  //sorted
  let sortedMedicinesArray = [...medicinesArray].sort((a, b) =>
    a.time > b.time ? 1 : -1
  );

  return (
    <TransitionGroup className="medicineList__container">
      {sortedMedicinesArray.map((med) => (
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
  );
}

MedicineList.propTypes = {
  medicines: PropTypes.object.isRequired,
  toggleCompleted: PropTypes.func.isRequired,
  getMedicines: PropTypes.func.isRequired,
  deleteMedicine: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  medicines: state.medicines,
});

export default connect(mapStateToProps, {
  getMedicines,
  deleteMedicine,
  toggleCompleted,
})(MedicineList);
