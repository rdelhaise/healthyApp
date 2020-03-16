import React, { Component } from "react";
import apiUrl from "../config/api";
import DietitianService from "../Services/Dietitian/DietitianService";
import PatientService from "../Services/Patient/PatientService";
import history from "../Components/history";
export class Register extends Component {
  ERROR_TYPE = "Your email or your password are not equals";
  initialState = {
    username: "",
    usernameRetype: "",
    password: "",
    passwordRetype: "",
    role: "1",
    error: ""
  };
  constructor(props) {
    super(props);
    this.state = this.initialState;
  }
  handleChange = e => {
    e.persist();
    this.setState(state => (state[e.target.name] = e.target.value));
  };
  checkInput = e => {
    if (
      this.state.username !== this.state.usernameRetype ||
      this.state.password !== this.state.passwordRetype
    ) {
      this.setState(state => (state.error = this.ERROR_TYPE));
    } else {
      this.setState(state => (state.error = ""));
    }
  };
  handleRegister = e => {
    e.preventDefault();
    if (this.state.error === "" && this.state.role !== "0") {
      let myHeaders = {
        Accept: "application/json",
        "Content-Type": "application/json"
      };

      return fetch(apiUrl + "user/save", {
        method: "post",
        headers: myHeaders,
        body: JSON.stringify({
          email: this.state.username,
          password: this.state.password,
          role: this.state.role
        })
      })
        .then(response => {
          if (response.status !== 200) {
            this.setState(state => (state.error = "Une erreur est survenue"));
          } else {
            return response.json();
          }
        })
        .then(data => {
          if (this.state.role === "1") {
            DietitianService.createDietitian({ userId: data.id }).then(
              response => {
                if (response.status !== 201) {
                  this.setState(
                    state => (state.error = "Une erreur est survenue.")
                  );
                } else {
                  return history.push({
                    pathname: "/login",
                    state: { isRegistered: true }
                  });
                }
              }
            );
          } else if (this.state.role === "2") {
            PatientService.createPatient({ userId: data.id }).then(response => {
              if (response.status !== 201) {
                this.setState(
                  state => (state.error = "Une erreur est survenue.")
                );
              } else {
                return history.push({
                  pathname: "/login",
                  state: { isRegistered: true }
                });
              }
            });
          }
        });
    }
  };
  render() {
    return (
      <>
        <div className={"container loginForm"}>
          <div className={"login col-xl-4 col-md-6 mx-auto p-4"}>
            <div className={"text-center text-primary"}>
              <h4>Register</h4>
            </div>
            <div className="text-danger text-center">{this.state.error}</div>
            <form className={" form-group pt-5"} id={"login-form"}>
              <input
                type={"text"}
                className={"form-control mb-3"}
                name="username"
                value={this.state.username}
                placeholder={"Email"}
                onChange={this.handleChange}
                onKeyUp={this.checkInput}
              />
              <input
                type={"text"}
                className={"form-control mb-3"}
                name="usernameRetype"
                value={this.state.usernameRetype}
                placeholder={"Retype your Email"}
                onChange={this.handleChange}
                onKeyUp={this.checkInput}
              />
              <input
                type={"password"}
                className={"form-control mb-3"}
                name={"password"}
                value={this.state.password}
                placeholder={"Password"}
                onChange={this.handleChange}
                onKeyUp={this.checkInput}
              />
              <input
                type={"password"}
                className={"form-control mb-3"}
                name={"passwordRetype"}
                value={this.state.passwordRetype}
                placeholder={"Retype your password"}
                onChange={this.handleChange}
                onKeyUp={this.checkInput}
              />
              <select
                className="form-control mb-3"
                id="role"
                name="role"
                onChange={this.handleChange}
              >
                <option value="1">You are a dietitian</option>
                <option value="2">You are a patient</option>
              </select>
              <div className={"row "}>
                <button
                  type={"submit"}
                  formTarget={"login-form"}
                  className={"btn btn-success col-5 m-auto"}
                  onClick={this.handleRegister}
                >
                  {" "}
                  Register{" "}
                </button>
                <div className="col-2"></div>
                <button
                  type={"button"}
                  formTarget={"login-form"}
                  className={"btn btn-primary col-5 m-auto"}
                  onClick={() => history.push("/login")}
                >
                  {" "}
                  Log in{" "}
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default Register;
