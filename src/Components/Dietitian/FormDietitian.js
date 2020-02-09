import React from "react";

class FormDietitian extends React.Component {
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
                    value={this.props.dietitian.lastName}
                  ></input>
                  <input
                    type="text"
                    className="input form-control"
                    onChange={this.props.handleChange}
                    name="address"
                    placeholder="Address"
                    value={this.props.dietitian.address}
                  ></input>
                  <input
                    type="text"
                    className="input form-control"
                    onChange={this.props.handleChange}
                    name="city"
                    placeholder="City"
                    value={this.props.dietitian.city}
                  ></input>
                  <input
                    type="text"
                    className="input form-control"
                    onChange={this.props.handleChange}
                    name="country"
                    placeholder="Country"
                    value={this.props.dietitian.country}
                  ></input>
                  <input
                    type="text"
                    className="input form-control"
                    onChange={this.props.handleChange}
                    name="firstName"
                    placeholder="Firstname"
                    value={this.props.dietitian.firstName}
                  ></input>
                  <input
                    type="text"
                    className="input form-control"
                    onChange={this.props.handleChange}
                    name="mobile"
                    placeholder="Mobile"
                    value={this.props.dietitian.mobile}
                  ></input>
                  <input
                    type="text"
                    className="input form-control"
                    onChange={this.props.handleChange}
                    name="phoneNumber"
                    placeholder="Phone Number"
                    value={this.props.dietitian.phoneNumber}
                  ></input>
                  <input
                    type="text"
                    className="input form-control"
                    onChange={this.props.handleChange}
                    name="zipCode"
                    placeholder="ZipCode"
                    value={this.props.dietitian.zipCode}
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

export default FormDietitian;
