import React from "react";
import FormPatient from "../../Components/Patient/FormPatient";
import Menu from "../../Components/Menu";
import history from "../../Components/history";
import Loader from "../../Components/Loader";
import PatientService from "../../Services/Patient/PatientService";
import {
  NotificationManager,
  NotificationContainer
} from "react-notifications";

class Patient extends React.Component {
  initialState = {
    isLoaded: false,
    patient: ""
  };
  createNotification = (type, message) => {
    // eslint-disable-next-line default-case
    switch (type) {
      case "success":
        return NotificationManager.success(message);
    }
  };

  constructor(props) {
    super(props);
    this.state = this.initialState;
    this.handleChange = this.handleChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  componentDidMount() {
    PatientService.getPatientById(this.props.idPatient).then(json => {
      this.setState(state => {
        state.isLoaded = true;
        state.patient = json;
        return state;
      });
    });
  }

  handleChange = e => {
    e.persist();
    this.setState(state => (state.patient[e.target.name] = e.target.value));
  };

  handleSave = e => {
    e.preventDefault();
    PatientService.updatePatient(this.state.patient).then(() => {
      this.createNotification(
        "success",
        "L'enregistrement a bien été sauvegardé."
      );
    });
  };

  render() {
    return (
      <>
        <Menu />

        {this.state.isLoaded ? (
          this.state.patient ? (
            <FormPatient
              patient={this.state.patient}
              handleChange={this.handleChange}
              handleSave={this.handleSave}
            />
          ) : (
            <div className="row">
              <p className="mx-auto">Aucune data</p>
            </div>
          )
        ) : (
          <div className="row">
            <div className="mx-auto">
              <Loader />
            </div>
          </div>
        )}
        <NotificationContainer />
      </>
    );
  }
}

export default Patient;
