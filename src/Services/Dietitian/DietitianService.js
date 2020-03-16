import apiUrl from "../../config/api.js";
const apiUrlDietitian = apiUrl + "dietitian/";
class DietitianService {
  getDietitians = () => {
    let myHeaders = {
      Accept: "application/json",
      "Content-Type": "application/json"
    };

    return fetch(apiUrlDietitian + "all", {
      method: "GET",
      headers: myHeaders
    })
      .then(response => {
        return response.json();
      })
      .catch(err => console.log(err));
  };
  getPatientsByDietitianId = dietitianId => {
    let myHeaders = {
      Accept: "application/json",
      "Content-Type": "application/json"
    };

    return fetch(apiUrlDietitian + "dietitian/patients/" + dietitianId, {
      method: "GET",
      headers: myHeaders
    })
      .then(response => {
        return response.json();
      })
      .catch(err => console.log(err));
  };
  getDietitianById = dietitianId => {
    let myHeaders = {
      Accept: "application/json",
      "Content-Type": "application/json"
    };

    return fetch(apiUrlDietitian + dietitianId, {
      method: "GET",
      headers: myHeaders
    })
      .then(response => {
        return response.json();
      })
      .catch(err => console.log(err));
  };

  getDietitianByUserId = userId => {
    let myHeaders = {
      Accept: "application/json",
      "Content-Type": "application/json"
    };

    return fetch(apiUrlDietitian + "user/" + userId, {
      method: "GET",
      headers: myHeaders
    }).catch(err => console.log(err));
  };

  updateDietitian = dietitian => {
    let myHeaders = {
      Accept: "application/json",
      "Content-Type": "application/json"
    };

    return fetch(apiUrlDietitian + "/save", {
      method: "post",
      headers: myHeaders,
      body: JSON.stringify(dietitian)
    })
      .then(response => {
        return response;
      })
      .catch(err => console.log(err));
  };
  createDietitian = dietitian => {
    let myHeaders = {
      Accept: "application/json",
      "Content-Type": "application/json"
    };

    return fetch(apiUrlDietitian + "/saveDto", {
      method: "post",
      headers: myHeaders,
      body: JSON.stringify(dietitian)
    })
      .then(response => {
        return response;
      })
      .catch(err => console.log(err));
  };
}

const instance = new DietitianService();
Object.freeze(instance);

export default instance;
