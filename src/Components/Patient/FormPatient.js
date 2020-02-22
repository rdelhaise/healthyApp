import React from "react";

class FormPatient extends React.Component {
  render() {
    return (
      <>
        <div className="container">
          <form className="py-4">
            <div className="row ">
              <div className="col-xs-12 form-group form-inline">
                <div className="col-xs-6">
                  <input
                    type="text"
                    className="input form-control"
                    onChange={this.props.handleChange}
                    name="lastName"
                    placeholder="Last Name"
                    value={this.props.patient.lastName}
                  ></input>
                  <input
                    type="text"
                    className="input form-control"
                    onChange={this.props.handleChange}
                    name="address"
                    placeholder="Address"
                    value={this.props.patient.address}
                  ></input>
                  <input
                    type="text"
                    className="input form-control"
                    onChange={this.props.handleChange}
                    name="city"
                    placeholder="City"
                    value={this.props.patient.city}
                  ></input>
                  <input
                    type="text"
                    className="input form-control"
                    onChange={this.props.handleChange}
                    name="country"
                    placeholder="Country"
                    value={this.props.patient.country}
                  ></input>
                  <input
                    type="text"
                    className="input form-control"
                    onChange={this.props.handleChange}
                    name="firstName"
                    placeholder="Firstname"
                    value={this.props.patient.firstName}
                  ></input>
                  <input
                    type="text"
                    className="input form-control"
                    onChange={this.props.handleChange}
                    name="mobile"
                    placeholder="Mobile"
                    value={this.props.patient.mobile}
                  ></input>
                  <input
                    type="text"
                    className="input form-control"
                    onChange={this.props.handleChange}
                    name="phoneNumber"
                    placeholder="Phone Number"
                    value={this.props.patient.phoneNumber}
                  ></input>
                  <input
                    type="text"
                    className="input form-control"
                    onChange={this.props.handleChange}
                    name="zipCode"
                    placeholder="ZipCode"
                    value={this.props.patient.zipCode}
                  ></input>
                  <button
                    className={"btn btn-success"}
                    type="submit"
                    onClick={this.props.handleSave}
                  >
                    Enregistrer
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default FormPatient;
