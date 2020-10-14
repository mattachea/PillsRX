import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";

import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import History from "./components/History";
import Profile from "./components/Profile";
import DashboardIcon from "@material-ui/icons/Dashboard";
import HealingIcon from "@material-ui/icons/Healing";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const items = [
  { name: "dashboard", label: "Dashboard", icon: <DashboardIcon /> },
  { name: "history", label: "Medical History", icon: <HealingIcon /> },
  { name: "profile", label: "Profile", icon: <AccountCircleIcon /> },
  { name: "", label: "Log out", icon: <ExitToAppIcon /> },
];

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/register">
            <div className="app__container">
              <Register />
            </div>
          </Route>
          <Route path="/login">
            <div className="app__container">
              <Login />
            </div>
          </Route>
          <Route path="/dashboard">
            <div className="app__container">
              <Sidebar items={items} />
              <Dashboard />
            </div>
          </Route>
          <Route path="/history">
            <div className="app__container">
              <Sidebar items={items} />
              <History />
            </div>
          </Route>
          <Route path="/profile">
            <div className="app__container">
              <Sidebar items={items} />
              <Profile />
            </div>
          </Route>

          <Route path="/">
            <h1>Landing page for pillsRX</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
