import React from "react";
import "../Assets/Login/Login.css";
import history from "../Components/history";
import apiUrl from "../config/api";
class Login extends React.Component {
  initialState = {
    username: "",
    password: "",
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

  handleLogin = event => {
    event.preventDefault();
    let myHeaders = {
      Accept: "application/json",
      "Content-Type": "application/json"
    };

    return fetch(apiUrl + "/user/login", {
      method: "post",
      headers: myHeaders,
      body: JSON.stringify({
        email: this.state.username,
        password: this.state.password
      })
    })
      .then(response => {
        if (response.status !== 200) {
          this.setState(
            state => (state.error = "Vos identifiants sont incorrects.")
          );
        } else {
          return response.json();
        }
      })
      .then(data => {
        localStorage.setItem(
          "authenticate",
          JSON.stringify({
            role: data.role,
            id: data.id,
            logged: true
          })
        );
        history.push("/home");
      })
      .catch(err => console.log(err));
    /*
    if (this.state.username === "admin" && this.state.password === "admin") {
      localStorage.setItem(
        "authenticate",
        JSON.stringify({ logged: true, role: 1 })
      );

      history.push("/home");
    }*/
  };
  render() {
    return (
      <>
        <div className={"container loginForm"}>
          <div className={"login col-4 mx-auto p-4"}>
            <div className={"text-center text-primary"}>
              <h4>Welcome to Healthy App !</h4>
            </div>
            <div className="text-danger text-center">{this.state.error}</div>
            <form className={" form-group pt-5"} id={"login-form"}>
              <input
                type={"text"}
                className={"form-control mb-3"}
                name="username"
                value={this.state.username}
                placeholder={"Username"}
                onChange={this.handleChange}
              />
              <input
                type={"password"}
                className={"form-control mb-3"}
                name={"password"}
                value={this.state.password}
                placeholder={"Password"}
                onChange={this.handleChange}
              />
              <div className={"row "}>
                <button
                  type={"submit"}
                  formTarget={"login-form"}
                  className={"btn btn-success col-5 m-auto"}
                  onClick={this.handleLogin}
                >
                  {" "}
                  Log in{" "}
                </button>
                <div className="col-2"></div>
                <button
                  type={"button"}
                  formTarget={"login-form"}
                  className={"btn btn-primary col-5 m-auto"}
                  onClick={this.handleLogin}
                >
                  {" "}
                  Register{" "}
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default Login;
