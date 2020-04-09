import React, { Component } from "react";
import Menu from "./Menu";
import UserService from "../Services/User/UserService";
import Loader from "./Loader";

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      patient: []
    };
  }

  componentDidMount() {
    const storage = JSON.parse(localStorage.getItem("authenticate"));
    if (storage.role === "0") {
      UserService.getUsers().then(data => {
        this.setState(state => (state.users = data));
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
                    {this.state.users.map(user => (
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

      <div className="content-wrapper">
        <div className="row proBanner">
          <div className="col-12">
            <span className="d-flex align-items-center purchase-popup">
              <i className="mdi mdi-close bannerClose" onClick={this.toggleProBanner}></i>
            </span>
          </div>
        </div>
        <div className="col-xl-12 col-lg-6 col-sm-6 grid-margin stretch-card">
          <div className="row my-5">
            <div className="card">
                  <div className="card-body alert-primary">
                  <h3>Bienvenue sur votre HomePage, voici votre tableau de bord </h3>
              </div>
            </div>
          </div>
        </div>

        <div className="row my-5">
          <div className="col-xl-4 col-lg-6 col-sm-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body alert-info border border-dark">
                <h4 className="card-title">Date du jour</h4>
                <div className="shedule-list d-xl-flex align-items-center justify-content-between mb-3">
                  <h3>11 Avril 2020</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-sm-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body alert-info border border-dark">
                <h4 className="card-title">Prochain rendez-vous</h4>
                <div className="shedule-list d-xl-flex align-items-center justify-content-between mb-3">
                  <h3>09 Mai 2020</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row my-5">
          <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 grid-margin stretch-card ">
            <div className="card card-statistics alert-info border border-dark">
              <div className="card-body ">
                <div className="clearfix">
                  <div className="float-left">
                    <i class="fas fa-user-friends fa-4x"></i>
                  </div>
                  <div className="float-right">
                    <p className="mb-0 text-right text-dark">Patients</p>
                    <div className="fluid-container">
                      <h3 className="font-weight-medium text-right mb-0 text-dark">63</h3>
                    </div>
                  </div>
                </div>
                <p className="text-muted mt-3 mb-0">
                  <i className="mdi mdi-alert-octagon mr-1" aria-hidden="true"></i> 65% lower growth </p>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 grid-margin stretch-card">
            <div className="card card-statistics alert-info border border-dark">
              <div className="card-body">
                <div className="clearfix">
                  <div className="float-left">
                    <i className="mdi mdi-receipt text-warning icon-lg"></i>
                  </div>
                  <div className="float-right">
                    <p className="mb-0 text-right text-dark">Objectif</p>
                    <div className="fluid-container">
                      <h3 className="font-weight-medium text-right mb-0 text-dark">70 kg</h3>
                    </div>
                  </div>
                </div>
                <p className="text-muted mt-3 mb-0">
                  <i className="mdi mdi-bookmark-outline mr-1" aria-hidden="true"></i> Product-wise sales </p>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 grid-margin stretch-card">
            <div className="card card-statistics alert-info border border-dark">
              <div className="card-body">
                <div className="clearfix">
                  <div className="float-left">
                    <i className="mdi mdi-poll-box text-success icon-lg"></i>
                  </div>
                  <div className="float-right">
                    <p className="mb-0 text-right text-dark">Sales</p>
                    <div className="fluid-container">
                      <h3 className="font-weight-medium text-right mb-0 text-dark">5693</h3>
                    </div>
                  </div>
                </div>
                <p className="text-muted mt-3 mb-0">
                  <i className="mdi mdi-calendar mr-1" aria-hidden="true"></i> Weekly Sales </p>
              </div>
            </div>
          </div>
        </div>
        </div>
        </div>
      </div>

    );
  }
}

export default Home;
