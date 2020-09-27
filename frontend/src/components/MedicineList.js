import React from "react";
import PropTypes from "prop-types";
import Card from "./Card";
import { connect } from "react-redux";
import { toggleCheckbox } from "../actions/medicineActions";
import "../styles/MedicineList.css";

function MedicineList({ medicines, toggleCheckbox }) {
  return (
    <div className="medicineList__container">
      {medicines.map((medicine) => (
        <Card
          key={medicine.id}
          onClickCheckbox={() => {
            toggleCheckbox(medicine.id);
          }}
          name={medicine.name}
          dosage={medicine.dosage}
          time={medicine.time}
          completed={medicine.completed}
        />
      ))}
    </div>
  );
}

MedicineList.propTypes = {
  medicines: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      onClickCheckbox: PropTypes.func.isRequired,
      name: PropTypes.string.isRequired,
      dosage: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    }).isRequired
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  medicines: state.medicines,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCheckbox: (id) => dispatch(toggleCheckbox(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MedicineList);
