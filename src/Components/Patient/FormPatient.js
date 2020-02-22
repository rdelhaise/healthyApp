import React from "react";
/**
 * <form>
              <div class="form-group"><label for="address"><strong>Address</strong></label><input class="form-control" type="text" placeholder="Sunset Blvd, 38" name="address"></div>
              <div class="form-row">
                  <div class="col">
                      <div class="form-group"><label for="city"><strong>City</strong></label><input class="form-control" type="text" placeholder="Los Angeles" name="city"></div>
                  </div>
                  <div class="col">
                      <div class="form-group"><label for="country"><strong>Country</strong></label><input class="form-control" type="text" placeholder="USA" name="country"></div>
                  </div>
              </div>
              <div class="form-group"><button class="btn btn-primary btn-sm" type="submit">Save&nbsp;Settings</button></div>
          </form>
 */
class FormPatient extends React.Component {
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
                    value={this.props.patient.lastName}
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
                    value={this.props.patient.address}
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
                    value={this.props.patient.city}
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
                    value={this.props.patient.firstName}
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
                    value={this.props.patient.mobile}
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
                    value={this.props.patient.phoneNumber}
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
                    value={this.props.patient.zipCode}
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

export default FormPatient;
