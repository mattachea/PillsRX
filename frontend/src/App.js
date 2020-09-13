import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "./components/Sidebar";
import Sidebar from "./components/Sidebar";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ColorizeIcon from "@material-ui/icons/Colorize";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const items = [
  { name: "dashboard", label: "Dashboard", icon: <DashboardIcon /> },
  { name: "medicines", label: "Medicines", icon: <ColorizeIcon /> },
  { name: "profile", label: "Profile", icon: <AccountCircleIcon /> },
];

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Sidebar items={items} />
          <Route path="/dashboard"></Route>
          <Route path="/profile"></Route>
          <Route path="/medicines">
            <h1>Medicines</h1>
          </Route>
          <Route path="/"></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
