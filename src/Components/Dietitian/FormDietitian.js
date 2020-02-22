import React from "react";

class FormDietitian extends React.Component {
  render() {
    return (
      <>
        <div className="container">
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
                  ></input>
                </div>
              </div>
            </div>
            <div className="row float-right">
              <button
                className={"btn btn-success"}
                type="submit"
                onClick={this.props.handleSave}
              >
                Enregistrer
              </button>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default FormDietitian;
