import React, { Component } from "react";
import DietitianService from "../../Services/Dietitian/DietitianService";
import Loader from "../../Components/Loader";
import Menu from "../../Components/Menu";
import history from "../../Components/history";
export class Patients extends Component {
  initialState = {
    patients: []
  };
  constructor(props) {
    super(props);
    this.state = this.initialState;
  }

  componentWillMount() {
    DietitianService.getPatientsByDietitianId().then(data => {
      this.setState(state => (state.patients = data));
    });
  }
  handleClick = (event, patientId) => {
    history.push("/patient/" + patientId, { view: true });
  };

  render() {
    return (
      <div>
        <Menu />
        <div className="container">
          {this.state.patients.length > 0 ? (
            <table className="table table-hover ">
              <thead>
                <tr>
                  <th scope="col">Last Name</th>
                  <th scope="col">First Name</th>
                  <th scope="col">Address</th>
                  <th scope="col">City</th>
                </tr>
              </thead>
              <tbody>
                {this.state.patients.map(patient => (
                  <tr
                    onClick={event => this.handleClick(event, patient.id)}
                    key={patient.id}
                    style={{ cursor: "pointer" }}
                  >
                    <td>{patient.lastName}</td>
                    <td>{patient.firstName}</td>
                    <td>{patient.address}</td>
                    <td>{patient.city}</td>
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
        </div>
      </div>
    );
  }
}

export default Patients;
