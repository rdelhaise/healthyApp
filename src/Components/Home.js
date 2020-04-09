import React, { Component } from "react";
import Menu from "./Menu";
import UserService from "../Services/User/UserService";
import Loader from "./Loader";

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
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
          Home
        </div>
      </div>
    );
  }
}

export default Home;
