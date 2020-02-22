import React from "react";
import FormDietitian from "../../Components/Dietitian/FormDietitian";
import ReaderDietitian from "../../Components/Dietitian/ReaderDietitian";
import Menu from "../../Components/Menu";
import DietitianService from "../../Services/Dietitian/DietitianService";
import history from "../../Components/history";
import Loader from "../../Components/Loader";

class Dietitian extends React.Component {
  initialState = {
    isLoaded: false,
    dietitian: ""
  };

  constructor(props) {
    super(props);
    this.state = this.initialState;
    this.handleChange = this.handleChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  componentDidMount() {
    DietitianService.getDietitianById(this.props.idDietitian).then(json => {
      this.setState(state => {
        state.isLoaded = true;
        state.dietitian = json;
        return state;
      });
    });
  }

  handleChange = e => {
    e.persist();
    this.setState(state => (state.dietitian[e.target.name] = e.target.value));
  };

  handleSave = e => {
    e.preventDefault();
    DietitianService.updateDietitian(this.state.dietitian).then(() => {
      history.push("/");
    });
  };

  render() {
    return (
      <>
        <Menu />

        {this.state.isLoaded ? (
          this.state.dietitian ? (
            this.props.type === "edit" ? (
              <FormDietitian
                dietitian={this.state.dietitian}
                handleChange={this.handleChange}
                handleSave={this.handleSave}
              />
            ) : (
              <ReaderDietitian dietitian={this.state.dietitian} />
            )
          ) : (
            <div className="row">
              <p className="mx-auto">Aucune data</p>
            </div>
          )
        ) : (
          <div className="row">
            <div className="mx-auto">
              <Loader />
            </div>
          </div>
        )}
      </>
    );
  }
}

export default Dietitian;
