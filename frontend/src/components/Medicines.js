import React, { useEffect } from "react";
import { connect, useSelector } from "react-redux";
import AddModal from "./AddModal";
import { getMedicines } from "../actions/medicineActions";
import MedicineCard from "./MedicineCard";
import "../styles/Medicines.css";

function Medicines({ getMedicines, medicines }) {
  const user = useSelector((state) => state.users.user);
  useEffect(() => getMedicines(user._id), []);
  let { medicinesArray } = medicines;

  //sorts alphabetically
  let sortedArray = medicinesArray.sort();

  return (
    <div className="medicines_page">
      <div className="medicines_header">
        <h3> Medicines</h3>
        <AddModal />
      </div>

      <div className="medicines_list">
        {sortedArray.map((med) => (
          <MedicineCard name={med.name} />
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  medicines: state.medicines,
});

export default connect(mapStateToProps, {
  getMedicines,
})(Medicines);
