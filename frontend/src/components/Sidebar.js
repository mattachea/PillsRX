import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import HealingIcon from "@material-ui/icons/Healing";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import "../styles/Sidebar.css";
import { logout } from "../actions/userActions";

function Sidebar(props) {
  const items = [
    { to: "dashboard", label: "Dashboard", icon: <DashboardIcon /> },
    { to: "history", label: "Medical History", icon: <HealingIcon /> },
    { to: "profile", label: "Profile", icon: <AccountCircleIcon /> },
    {
      to: "dashboard",
      label: "Log out",
      icon: <ExitToAppIcon />,
      onClick: props.logout,
    },
  ];
  return (
    <div className="sidebar">
      <div className="sidebar__title">
        <h1>RemindRx</h1>
      </div>

      <div className="sidebar__user">
        <div className="sidebar__avatar">
          <Avatar alt="Matthew Chea" src="/static/images/avatar/1.jpg" />
        </div>
        <div className="sidebar__name"> Matthew Chea</div>
      </div>

      <br />
      <br />

      <List>
        {items.map((item) => (
          <Link key={item.to} className="sidebar__button" to={item.to}>
            <ListItem>
              <ListItemText>
                <div
                  className="sidebar__button__container"
                  onClick={item.onClick}
                >
                  {item.icon}
                  <div className="sidebar__button__text">{item.label}</div>
                </div>
              </ListItemText>
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );
}
Sidebar.propTypes = {
  logout: PropTypes.func.isRequired,
};
const mapStateToProps = () => ({});
export default connect(mapStateToProps, { logout })(Sidebar);
