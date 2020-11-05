import React from "react";
import "../styles/Dashboard.css";
import SideBar from "./Sidebar";
import DateTitle from "./DateTitle";
import MedicineList from "./MedicineList";
import AddModal from "./AddModal";

function Dashboard() {
  return (
    <div className="dashboard__container">
      <h1>Dashboard</h1>
      <DateTitle />

      <div className="dashboard__medicines">
        <div className="dashboard__medicine__header">
          <h3>Medicines</h3>
          <AddModal />
        </div>
        <MedicineList />
      </div>
    </div>
  );
}

export default Dashboard;
