import React from "react";
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import History from "./components/History";
import Profile from "./components/Profile";
import Landing from "./components/Landing";

function App() {
  let isAuth = useSelector((state) => state.users.isAuthenticated);

  const AuthRoute = ({ component: Component, ...rest }) => {
    return (
      <Route
        {...rest}
        render={(props) =>
          isAuth === true ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: props.location },
              }}
            />
          )
        }
      />
    );
  };

  return (
    <Router className="App">
      <div className="app__container">
        {isAuth && <Sidebar />}
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <AuthRoute exact path="/dashboard" component={Dashboard} />
          <AuthRoute exact path="/history" component={History} />
          <AuthRoute exact path="/profile" component={Profile} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
