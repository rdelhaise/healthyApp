import React from "react";
import "../Assets/Menu/Menu.css";
import history from "../Components/history";
import { Link } from "react-router-dom";

export const Menu = props => {
  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top navbar-light primary">
        <Link className="navbar-brand" to="/home">
          Healthy App
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fa fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Dietitians list
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                My dietitian
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                My profile
              </Link>
            </li>
          </ul>
        </div>
        <ul className="nav justify-content-end">
          <li className="nav-item">
            <button
              onClick={() => {
                localStorage.removeItem("authenticate");
                history.push("/login");
              }}
              className="no-border-button btn"
            >
              Log out
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Menu;
