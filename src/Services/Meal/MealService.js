import apiUrl from "../../config/api.js";
const apiUrlMeal = apiUrl + "meal/";
class PatientService {
  getMeals = () => {
    let myHeaders = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };

    return fetch(apiUrlMeal + "all", {
      method: "GET",
      headers: myHeaders,
    })
      .then((response) => {
        return response.json();
      })
      .catch((err) => console.log(err));
  };

  getMealById = (mealId) => {
    let myHeaders = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };

    return fetch(apiUrlMeal + mealId, {
      method: "GET",
      headers: myHeaders,
    })
      .then((response) => {
        return response.json();
      })
      .catch((err) => console.log(err));
  };

  updateMeal = (meal) => {
    let myHeaders = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };

    return fetch(apiUrlMeal + "save", {
      method: "post",
      headers: myHeaders,
      body: JSON.stringify(meal),
    })
      .then((response) => {
        return response;
      })
      .catch((err) => console.log(err));
  };
  getMealByPatientId = (patientId) => {
    let myHeaders = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };

    return fetch(apiUrlMeal + "patient/" + patientId, {
      method: "get",
      headers: myHeaders,
    })
      .then((response) => {
        return response;
      })
      .catch((err) => console.log(err));
  };
}

const instance = new PatientService();
Object.freeze(instance);

export default instance;
