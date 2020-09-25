import React from "react";
import Card from "./Card";

import MyModal from "./MyModal";

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

          <MyModal />
        </div>
        <div className="dashboard__grid">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>

      <div className="dashboard__history"></div>
    </div>
  );
}

export default Dashboard;
