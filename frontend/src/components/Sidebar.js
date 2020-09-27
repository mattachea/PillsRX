import React from "react";
import { Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import "../styles/Sidebar.css";

function Sidebar({ items }) {
  return (
    <div className="sidebar">
      <div className="sidebar__title">
        <h1>PillsRX</h1>
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
        {items.map(({ label, name, icon }) => (
          <Link key={name} className="sidebar__button" to={`/${name}`}>
            <ListItem button>
              <ListItemText>
                <div className="sidebar__button__container">
                  {icon}
                  <div className="sidebar__button__text">{label}</div>
                </div>
              </ListItemText>
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );
}

export default Sidebar;
