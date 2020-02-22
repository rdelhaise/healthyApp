import React, { Component } from "react";
import DietitianService from "../../Services/Dietitian/DietitianService";
import Menu from "../../Components/Menu";
import Loader from "../../Components/Loader";
import history from "../../Components/history";
export class Dietitians extends Component {
  initialState = {
    dietitians: []
  };
  constructor(props) {
    super(props);
    this.state = this.initialState;
  }

  componentWillMount() {
    DietitianService.getDietitians().then(data => {
      this.setState(state => (state.dietitians = data));
    });
  }
  handleClick = (event, dietitianId) => {
    history.push("/dietitian/" + dietitianId);
  };

  render() {
    return (
      <div>
        <Menu />
        <div className="container">
          {this.state.dietitians.length > 0 ? (
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
                {this.state.dietitians.map(dietitian => (
                  <tr
                    onClick={event => this.handleClick(event, dietitian.id)}
                    key={dietitian.id}
                    style={{ cursor: "pointer" }}
                  >
                    <td>{dietitian.lastName}</td>
                    <td>{dietitian.firstName}</td>
                    <td>{dietitian.address}</td>
                    <td>{dietitian.city}</td>
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

export default Dietitians;
