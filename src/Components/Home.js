import React, { Component } from "react";
import Menu from "./Menu";
import UserService from "../Services/User/UserService";
import Loader from "./Loader";
import "../Assets/Home/Home.css";

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      patient: [],
    };
  }

  componentDidMount() {
    const storage = JSON.parse(localStorage.getItem("authenticate"));
    if (storage.role === "0") {
      UserService.getUsers().then((data) => {
        this.setState((state) => (state.users = data));
      });
    }
  }

  render() {
    return (
      <div>
        <Menu />
        <div className="container-xl container-sm container-md">
          {JSON.parse(localStorage.getItem("authenticate")).role === "0" && (
            <>
              {this.state.users.length > 0 ? (
                <table className="table table-hover ">
                  <thead>
                    <tr>
                      <th scope="col">Username</th>
                      <th scope="col">password</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.users.map((user) => (
                      <tr key={user.id} style={{ cursor: "pointer" }}>
                        <td>{user.email}</td>
                        <td>{user.password}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <div className="row">
                  <div className="mx-auto">
                    <Loader />
                  </div>
                </div>
              )}
            </>
          )}

          <div className="dashboard-wrapper">
            <div className="col-xl-12 col-lg-6 col-sm-6 my-5">
              <h3 className="text-center">Dashboard </h3>
            </div>
            <hr />

            <div className="row my-5">
              <div className="col-xl-4 col-lg-6 col-sm-6">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Date du jour</h4>
                    <div className="shedule-list d-xl-flex align-items-center justify-content-between mb-3">
                      <h3>11 Avril 2020</h3>
                    </div>
                  </div>
                </div>
              </div>

              {JSON.parse(localStorage.getItem("authenticate")).role === "2" ? (
                <>
                  <div className="col-xl-4 col-lg-6 col-sm-6">
                    <div className="card">
                      <div className="card-body">
                        <div className="float-left">
                          <h4 className="card-title text-secondary">
                            Dernier poids
                          </h4>
                          <div className="shedule-list d-xl-flex align-items-center justify-content-between mb-3">
                            <h3 className="text-secondary font-weight-bold">
                              74 kg
                            </h3>
                          </div>
                        </div>
                        <div className="float-right">
                          <h4 className="card-title text-success">Objectif</h4>
                          <div className="shedule-list d-xl-flex align-items-center justify-content-between mb-3">
                            <h3 className="text-success font-weight-bold">
                              70 kg
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : null}
              {JSON.parse(localStorage.getItem("authenticate")).role ===
                "1" && (
                <>
                  <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 ">
                    <div className="card">
                      <div className="card-body ">
                        <h4 className="card-title">
                          <i className="fas fa-user-friends fa-1x"></i>
                          <span className="mx-4">Patients</span>
                        </h4>
                        <div className="shedule-list d-xl-flex align-items-center justify-content-start mb-3 ">
                          <h3 className="text-right">63</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
              <div className={"col-xl-4 col-lg-6 col-sm-6"}>
                <div
                  className={
                    JSON.parse(localStorage.getItem("authenticate")).role ===
                    "1"
                      ? "card click-card"
                      : "card"
                  }
                >
                  <div className="card-body">
                    <h4 className="card-title">Prochain rendez-vous</h4>
                    <div className="shedule-list d-xl-flex align-items-center justify-content-between mb-3">
                      <h3 className="text-success">09 Mai 2020</h3>
                    </div>
                  </div>
                  {JSON.parse(localStorage.getItem("authenticate")).role ===
                    "1" && (
                    <div className="card-footer shedule-list d-xl-flex align-items-center justify-content-center ">
                      <span className="">
                        Accéder au patient du rendez-vous
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="row my-5"></div>
          </div>
          {JSON.parse(localStorage.getItem("authenticate")).role === "2" && (
            <>
              <div className="col-xl-12 col-lg-6 col-sm-6 my-5">
                <h3 className="text-center">Meals </h3>
              </div>
              <table className="table">
                <thead>
                  <th>Test</th>
                  <th>Test</th>
                  <th>Test</th>
                  <th>Test</th>
                </thead>{" "}
                <tbody>
                  <tr>
                    <td>Test</td>
                    <td>Test</td>
                    <td>Test</td>
                    <td>Test</td>
                  </tr>
                </tbody>
              </table>
            </>
          )}
        </div>
      </div>
    );
  }
}

export default Home;
