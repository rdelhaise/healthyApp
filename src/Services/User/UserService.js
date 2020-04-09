import apiUrl from "../../config/api.js";
const apiUrlPatient = apiUrl + "user/";
class UserService {
  getUsers = () => {
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
}

const instance = new UserService();
Object.freeze(instance);

export default instance;
