import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import History from "./components/History";
import Profile from "./components/Profile";
import Landing from "./components/Landing";
import Medicines from "./components/Medicines";

function App() {
  let isAuth = useSelector((state) => state.users.isAuthenticated);

  //state to use desktop or mobile version
  const [isDesktop, setDesktop] = useState(window.innerWidth > 960);
  const updateMedia = () => {
    setDesktop(window.innerWidth > 960);
  };
  //window size listener
  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  //authorized route only for logged in users
  const AuthRoute = ({ component: Component, isDesktop, ...rest }) => (
    <Route
      {...rest}
      render={(props) =>
        isAuth === true ? (
          <Component {...props} isDesktop={isDesktop} {...rest} />
        ) : (
          <Redirect to="/Login" />
        )
      }
    />
  );

  return (
    <Router className="App">
      <Navbar isDesktop={isDesktop} />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <AuthRoute
          exact
          path="/dashboard"
          component={Dashboard}
          isDesktop={isDesktop}
        />
        <AuthRoute
          exact
          path="/medicines"
          component={Medicines}
          isDesktop={isDesktop}
        />
        {/* <AuthRoute
          exact
          path="/history"
          component={History}
          isDesktop={isDesktop}
        /> */}
        {/* <AuthRoute exact path="/profile" component={Profile} /> */}
      </Switch>
    </Router>
  );
}

export default App;
