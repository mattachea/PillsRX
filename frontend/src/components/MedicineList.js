import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Card from "./Card";
import { connect } from "react-redux";
import {
  getMedicines,
  deleteMedicine,
  toggleComplete,
} from "../actions/medicineActions";
import "../styles/MedicineList.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";

function MedicineList({
  getMedicines,
  medicines,
  deleteMedicine,
  toggleComplete,
}) {
  //keeps state in this array
  let { medicinesArray } = medicines;

  //calls getMedicines() once when component mounts
  useEffect(getMedicines, []);

  return (
    <TransitionGroup className="medicineList__container">
      {medicinesArray.map((medicine) => (
        <CSSTransition key={medicine._id} timeout={250} classNames="fade">
          <Card
            key={medicine._id}
            onClickComplete={() => {
              toggleComplete(medicine._id);
            }}
            onClickDelete={() => {
              deleteMedicine(medicine._id);
            }}
            name={medicine.name}
            dosage={medicine.dosage}
            time={medicine.time}
            completed={medicine.completed}
          />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
}

MedicineList.propTypes = {
  medicines: PropTypes.object.isRequired,
  toggleComplete: PropTypes.func.isRequired,
  getMedicines: PropTypes.func.isRequired,
  deleteMedicine: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  medicines: state.medicines,
});

export default connect(mapStateToProps, {
  getMedicines,
  deleteMedicine,
  toggleComplete,
})(MedicineList);
