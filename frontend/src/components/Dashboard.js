import React, { useState, useEffect } from "react";
import "../styles/Dashboard.css";
import DateTitle from "./DateTitle";
import Todo from "./Todo";
import Medicines from "./Medicines";
import AddModal from "./AddModal";
import { connect, useSelector } from "react-redux";
import { getMedicines, toggleCompleted } from "../actions/medicineActions";

function Dashboard({ medicines, getMedicines, toggleCompleted, isDesktop }) {
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

  // gets not completed medicines and sorts them by time
  let upcomingArray = medicinesArray
    .filter((medicine) => medicine.completed === false)
    .sort((a, b) => (a.time > b.time ? 1 : -1));

  return (
    <div className="dashboard_container">
      <div className="todos_container">
        <div className="dashboard_info">
          <h2>Dashboard</h2>
          <DateTitle />
        </div>

        <div className="todos">
          {upcomingArray.length !== 0 && (
            <Todo medicinesArray={upcomingArray} isDesktop={isDesktop} />
          )}
          <AddModal />
        </div>
      </div>

      {isDesktop && <Medicines className="medicines_container" />}
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
