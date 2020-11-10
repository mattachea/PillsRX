import React, { useEffect } from "react";
import "../styles/Dashboard.css";
import DateTitle from "./DateTitle";
import MedicineList from "./MedicineList";
import AddModal from "./AddModal";
import { connect, useSelector } from "react-redux";
import { getMedicines, toggleCompleted } from "../actions/medicineActions";

function Dashboard({ medicines, getMedicines, toggleCompleted }) {
  const user = useSelector((state) => state.users.user); // get user from redux store
  useEffect(() => getMedicines(user._id), [getMedicines, user._id]); // get medicines from database
  let { medicinesArray } = medicines; //keep medicines in this array

  //updating the completed field: if last update was yesterday and completed is true, then reset completed to false
  let currentDate = new Date().toDateString();

  medicinesArray.forEach((medicine, index) => {
    let lastUpdateDate = new Date(medicine.updatedAt).toDateString();
    if (currentDate !== lastUpdateDate && medicine.completed === true) {
      toggleCompleted(medicine._id, medicine.completed); //change in database and redux
      medicinesArray[index].completed = false; //change locally
    }
  });

  let upcomingArray = medicinesArray
    .filter((medicine) => medicine.completed === false)
    .sort((a, b) => (a.time > b.time ? 1 : -1));

  let completedArray = medicinesArray
    .filter((medicine) => medicine.completed === true)
    .sort((a, b) => (a.time > b.time ? 1 : -1));

  return (
    <div className="dashboard__container">
      <h1>Dashboard</h1>
      <DateTitle />

      <div className="dashboard__medicines">
        <div className="dashboard__medicine__header">
          <h3>Medicines</h3>
          <AddModal />
        </div>
        {upcomingArray.length !== 0 && (
          <MedicineList label="Upcoming" medicinesArray={upcomingArray} />
        )}
        {completedArray.length !== 0 && (
          <MedicineList label="Completed" medicinesArray={completedArray} />
        )}
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  medicines: state.medicines,
});

export default connect(mapStateToProps, {
  getMedicines,
  toggleCompleted,
})(Dashboard);
