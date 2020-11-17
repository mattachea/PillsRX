import React, { useState } from "react";
import { connect, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import CloseIcon from "@material-ui/icons/Close";
import ReorderIcon from "@material-ui/icons/Reorder";
import "../styles/Navbar.css";
import { logout } from "../actions/userActions";

function Navbar(props) {
  const [isOpen, setOpen] = useState(false);

  const toggleOpen = () => setOpen(!isOpen);
  const closeOnClick = () => setOpen(false);

  const isAuthenticated = useSelector((state) => state.users.isAuthenticated);

  const logout = () => {
    closeOnClick();
    props.logout();
  };

  return (
    <div className="navbar">
      <div className="title">
        <Link
          key="title"
          className="item"
          to="dashboard"
          onClick={closeOnClick}
        >
          RemindRx
        </Link>
        <div className="icon menu-icon" onClick={toggleOpen}>
          {isOpen ? <CloseIcon /> : <ReorderIcon />}
        </div>
      </div>

      <div className={isOpen ? "menu active" : "menu"}>
        {isAuthenticated && (
          <Link
            className={isOpen ? "item active" : "item"}
            to={"dashboard"}
            onClick={closeOnClick}
          >
            Dashboard
          </Link>
        )}
        {isAuthenticated ? (
          <Link
            className={isOpen ? "item active" : "item"}
            to={""}
            onClick={logout}
          >
            Logout
          </Link>
        ) : (
          <Link
            className={isOpen ? "item active" : "item"}
            to={"login"}
            onClick={closeOnClick}
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
}
Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
};
const mapStateToProps = () => ({});
export default connect(mapStateToProps, { logout })(Navbar);
