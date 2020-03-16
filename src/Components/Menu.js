import React from "react";
import "../Assets/Menu/Menu.css";
import history from "../Components/history";
import { Link } from "react-router-dom";

export const Menu = props => {
  const storage = JSON.parse(localStorage.getItem("authenticate"));
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
            {storage.role === "2" ? (
              <>
                <li
                  className="nav-item active"
                  style={{ display: !props.haveDietitian ? "" : "none" }}
                >
                  <Link className="nav-link" to="/dietitians">
                    Dietitians list
                  </Link>
                </li>

                <li
                  className="nav-item"
                  style={{ display: props.haveDietitian ? "" : "none" }}
                >
                  <Link
                    className="nav-link"
                    to={{
                      pathname: "/patient/dietitian",
                      state: { idDietitian: props.idDietitian }
                    }}
                  >
                    My dietitian
                  </Link>
                </li>
              </>
            ) : null}
            {storage.role === "1" ? (
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to={{
                    pathname: "/dietitian/patients"
                  }}
                >
                  My patient's list
                </Link>
              </li>
            ) : null}

            <li className="nav-item">
              <Link
                className="nav-link"
                to={
                  storage.role === "1"
                    ? "/dietitian/" + storage.id // chopper l'id du diétitien
                    : storage.role === "2"
                    ? "/patient/" + storage.id // chopper l'id du patient
                    : ""
                }
              >
                My profile
              </Link>
            </li>
            <li
              className="nav-item ml-4"
              style={{
                borderLeft: "1px solid white"
              }}
            >
              <button
                onClick={() => {
                  localStorage.removeItem("authenticate");
                  history.push("/login");
                }}
                className="nav-item btn primary"
              >
                Log out
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Menu;
