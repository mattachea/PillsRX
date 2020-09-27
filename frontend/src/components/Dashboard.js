import React from "react";
// import MyModal from "./MyModal";
import MedicineList from "./MedicineList";
import "../styles/Dashboard.css";

function Dashboard() {
  const date = new Date();
  const dayMonth = date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="dashboard__container">
      <div className="dashboard__title">
        <h1>Dashboard</h1>
        <h2>{dayMonth}</h2>
      </div>

      <div className="dashboard__medicines">
        <div className="dashboard__medicine__header">
          <h2>Medicines</h2>
        </div>
        <MedicineList />
      </div>
    </div>
  );
}

export default Dashboard;
