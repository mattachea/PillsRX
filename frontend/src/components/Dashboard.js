import React from "react";
import Card from "./Card";
import "../styles/Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard__container">
      <div className="dashboard__title">
        <h1>Dashboard</h1>
      </div>
      <div className="dashboard__subtitle">
        <h3>Upcoming</h3>
      </div>
      <div className="dashboard__grid">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      {/* <div class="grid-container grid-container--fill">
        <div class="grid-element">1</div>
        <div class="grid-element">2</div>
        <div class="grid-element">3</div>
        <div class="grid-element">4</div>
        <div class="grid-element">5</div>
        <div class="grid-element">6</div>
        <div class="grid-element">7</div>
      </div> */}
    </div>
  );
}

export default Dashboard;
