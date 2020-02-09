import React from "react";
import "../Assets/Menu/Menu.css";

class Menu extends React.Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg sticky-top navbar-light primary">
          <a className="navbar-brand" href="https://www.google.fr/">
            Healthy App
          </a>
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
                <a className="nav-link" href="#">
                  Dietitian's list
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  My dietitian
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  My profile
                </a>
              </li>
            </ul>
          </div>
          <ul className="nav justify-content-end">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Log out
              </a>
            </li>
          </ul>
        </nav>
      </>
    );
  }
}
export default Menu;
