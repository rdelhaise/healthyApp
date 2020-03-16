import apiUrl from "../../config/api.js";
const apiUrlPatient = apiUrl + "patient/";
class PatientService {
  getPatients = () => {
    let myHeaders = {
      Accept: "application/json",
      "Content-Type": "application/json"
    };

    return fetch(apiUrlPatient + "all", {
      method: "GET",
      headers: myHeaders
    })
      .then(response => {
        return response.json();
      })
      .catch(err => console.log(err));
  };

  getPatientById = patientId => {
    let myHeaders = {
      Accept: "application/json",
      "Content-Type": "application/json"
    };

    return fetch(apiUrlPatient + patientId, {
      method: "GET",
      headers: myHeaders
    })
      .then(response => {
        return response.json();
      })
      .catch(err => console.log(err));
  };
  getPatientByUserId = userId => {
    let myHeaders = {
      Accept: "application/json",
      "Content-Type": "application/json"
    };

    return fetch(apiUrlPatient + "user/" + userId, {
      method: "GET",
      headers: myHeaders
    }).catch(err => console.log(err));
  };

  updatePatient = patient => {
    let myHeaders = {
      Accept: "application/json",
      "Content-Type": "application/json"
    };

    return fetch(apiUrlPatient + "/save", {
      method: "post",
      headers: myHeaders,
      body: JSON.stringify(patient)
    })
      .then(response => {
        return response;
      })
      .catch(err => console.log(err));
  };
  createPatient = patient => {
    let myHeaders = {
      Accept: "application/json",
      "Content-Type": "application/json"
    };

    return fetch(apiUrlPatient + "/saveDto", {
      method: "post",
      headers: myHeaders,
      body: JSON.stringify(patient)
    }).catch(err => console.log(err));
  };
}

const instance = new PatientService();
Object.freeze(instance);

export default instance;
