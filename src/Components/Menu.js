import React from "react";
import "../Assets/Menu/Menu.css";
import history from "../Components/history";
import { Link } from "react-router-dom";

export const Menu = (props) => {
  const storage = JSON.parse(localStorage.getItem("authenticate"));
  return (
    <>
      <header>
        <nav className="navbar-custom primary">
          <div className="navItem navLogoContainer">
            <Link className="navbar-brand" to="/">
              Home
            </Link>
          </div>

          {storage.role !== "1" ? (
            !props.haveDietitian ? (
              <div className="navItem">
                <Link className="nav-link" to="/dietitians">
                  Dietitians list
                </Link>{" "}
              </div>
            ) : (
              <div className="navItem">
                <Link
                  className="nav-link"
                  to={{
                    pathname: "/patient/dietitian",
                    state: { idDietitian: props.idDietitian, view: true },
                  }}
                >
                  My dietitian
                </Link>{" "}
              </div>
            )
          ) : null}
          {storage.role === "1" && (
            <div className="navItem">
              <Link
                className="nav-link"
                to={{
                  pathname: "/dietitian/" + storage.id + "/patients",
                }}
              >
                My patient's list
              </Link>
            </div>
          )}
          <div className="navItem">
            <Link
              className="nav-link"
              to={{
                pathname:
                  storage.role === "1"
                    ? "/dietitian/" + storage.id // chopper l'id du diétitien
                    : storage.role === "2"
                    ? "/patient/" + storage.id // chopper l'id du patient
                    : "",
                state: { view: false },
              }}
            >
              My profile
            </Link>
          </div>

          <div className="navItem navEndItem">
            <button
              onClick={() => {
                localStorage.removeItem("authenticate");
                history.push("/login");
              }}
              className="log-out btn primary"
            >
              Log out
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Menu;
