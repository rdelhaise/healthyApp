import React from "react";
import history from "../history";
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
class FormMeal extends React.Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="row my-2">
            {JSON.parse(localStorage.getItem("authenticate")).role === "1" && (
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
                  <label> Meat </label>
                  <input
                    type="text"
                    className="input form-control"
                    onChange={this.props.handleChange}
                    name="meat"
                    placeholder="Meat"
                    value={this.props.meal.meat}
                    disabled={
                      !history.location.state.view
                        ? history.location.state.view
                        : false
                    }
                  ></input>
                </div>
              </div>
              <div className="col-4">
                <div className="form-group">
                  <label> Vegetable </label>

                  <input
                    type="text"
                    className="input form-control"
                    onChange={this.props.handleChange}
                    name="vegetable"
                    placeholder="Vegetable"
                    value={this.props.meal.vegetable}
                    disabled={
                      !history.location.state.view
                        ? history.location.state.view
                        : false
                    }
                  ></input>
                </div>
              </div>
              <div className="col-4">
                <div className="form-group">
                  <label> Starchy </label>

                  <input
                    type="text"
                    className="input form-control"
                    onChange={this.props.handleChange}
                    name="starchy"
                    placeholder="Starchy"
                    value={this.props.meal.starchy}
                    disabled={
                      !history.location.state.view
                        ? history.location.state.view
                        : false
                    }
                  ></input>
                </div>
              </div>

              <div className="col-4">
                <div className="form-group">
                  <label> Drink </label>
                  <input
                    type="text"
                    className="input form-control"
                    onChange={this.props.handleChange}
                    name="drink"
                    placeholder="Drink"
                    value={this.props.meal.drink}
                    disabled={
                      !history.location.state.view
                        ? history.location.state.view
                        : false
                    }
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

export default FormMeal;
