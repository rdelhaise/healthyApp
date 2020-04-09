import React from "react";
import history from "../../Components/history";
class FormDietitian extends React.Component {
  render() {
    const storage = JSON.parse(localStorage.getItem("authenticate"));

    return (
      <>
        <div className="container h-100&">
          <div className="row my-2">
            {storage.role === "2" ? (
              this.props.haveDietitian ? (
                <button
                  className={"btn btn-primary"}
                  type="submit"
                  onClick={() =>
                    history.push(
                      "/patient/" +
                        JSON.parse(localStorage.getItem("authenticate")).id
                    )
                  }
                >
                  Retour
                </button>
              ) : !this.props.haveDietitian ? (
                <button
                  className={"btn btn-primary"}
                  type="submit"
                  onClick={this.props.openModal}
                >
                  Choisir ce diététitien
                </button>
              ) : null
            ) : (
              <button
                className={"btn btn-primary"}
                type="submit"
                onClick={() => history.push("/")}
              >
                Retour
              </button>
            )}
          </div>
          <form className="py-4">
            <div className="form-row">
              <div className="col-4">
                <div className="form-group">
                  <label> Last Name </label>
                  <input
                    type="text"
                    className="input form-control"
                    onChange={this.props.handleChange}
                    name="lastName"
                    placeholder="Last Name"
                    value={this.props.dietitian.lastName}
                    disabled={
                      history.location.state
                        ? history.location.state.view
                        : history.location.state.view
                    }
                  ></input>
                </div>
              </div>
              <div className="col-4">
                <div className="form-group">
                  <label> Address </label>

                  <input
                    type="text"
                    className="input form-control"
                    onChange={this.props.handleChange}
                    name="address"
                    placeholder="Address"
                    value={this.props.dietitian.address}
                    disabled={
                      history.location.state
                        ? history.location.state.view
                        : history.location.state.view
                    }
                  ></input>
                </div>
              </div>
              <div className="col-4">
                <div className="form-group">
                  <label> City </label>

                  <input
                    type="text"
                    className="input form-control"
                    onChange={this.props.handleChange}
                    name="city"
                    placeholder="City"
                    value={this.props.dietitian.city}
                    disabled={
                      history.location.state
                        ? history.location.state.view
                        : history.location.state.view
                    }
                  ></input>
                </div>
              </div>

              <div className="col-4">
                <div className="form-group">
                  <label> First Name </label>
                  <input
                    type="text"
                    className="input form-control"
                    onChange={this.props.handleChange}
                    name="firstName"
                    placeholder="Firstname"
                    value={this.props.dietitian.firstName}
                    disabled={
                      history.location.state
                        ? history.location.state.view
                        : history.location.state.view
                    }
                  ></input>
                </div>
              </div>
              <div className="col-4">
                <div className="form-group">
                  <label> Mobile </label>

                  <input
                    type="text"
                    className="input form-control"
                    onChange={this.props.handleChange}
                    name="mobile"
                    placeholder="Mobile"
                    value={this.props.dietitian.mobile}
                    disabled={
                      history.location.state
                        ? history.location.state.view
                        : history.location.state.view
                    }
                  ></input>
                </div>
              </div>
              <div className="col-4">
                <div className="form-group">
                  <label> Phone </label>

                  <input
                    type="text"
                    className="input form-control"
                    onChange={this.props.handleChange}
                    name="phoneNumber"
                    placeholder="Phone Number"
                    value={this.props.dietitian.phoneNumber}
                    disabled={
                      history.location.state
                        ? history.location.state.view
                        : history.location.state.view
                    }
                  ></input>
                </div>
              </div>
              <div className="col-4">
                <div className="form-group">
                  <label> Zip </label>
                  <input
                    type="text"
                    className="input form-control"
                    onChange={this.props.handleChange}
                    name="zipCode"
                    placeholder="ZipCode"
                    value={this.props.dietitian.zipCode}
                    disabled={
                      history.location.state
                        ? history.location.state.view
                        : history.location.state.view
                    }
                  ></input>
                </div>
              </div>
            </div>
            <div className="row float-right">
              {!history.location.state ? (
                <button
                  className={"btn btn-success"}
                  type="submit"
                  onClick={this.props.handleSave}
                >
                  Enregistrer
                </button>
              ) : null}
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default FormDietitian;
