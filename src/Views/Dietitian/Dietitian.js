import React from "react";
import FormDietitian from "../../Components/Dietitian/FormDietitian";
import Menu from "../../Components/Menu";
import DietitianService from "../../Services/Dietitian/DietitianService";
import Loader from "../../Components/Loader";
import history from "../../Components/history";
import {
  NotificationContainer,
  NotificationManager
} from "react-notifications";
import Modal from "../../Components/Modal";

class Dietitian extends React.Component {
  initialState = {
    isLoaded: false,
    dietitian: "",
    show: false
  };

  constructor(props) {
    super(props);
    this.state = this.initialState;
    this.handleChange = this.handleChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.showModal = this.showModal.bind(this);
  }
  showModal = e => {
    console.log("1");
    this.setState({
      show: !this.state.show
    });
  };
  createNotification = (type, message) => {
    // eslint-disable-next-line default-case
    switch (type) {
      case "success":
        return NotificationManager.success(message);
      case "error":
        return NotificationManager.error(message);
    }
  };

  componentDidMount() {
    const idDietitian = history.location.state
      ? history.location.state.idDietitian
        ? history.location.state.idDietitian
        : this.props.idDietitian
      : this.props.idDietitian;
    DietitianService.getDietitianById(idDietitian).then(json => {
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
    DietitianService.updateDietitian(this.state.dietitian).then(response => {
      console.log(response);
      if (response.status === 201) {
        this.createNotification(
          "success",
          "L'enregistrement a bien été sauvegardé."
        );
      } else {
        this.createNotification("error", "Une erreur est survenue.");
      }
    });
  };

  render() {
    return (
      <>
        <Menu
          haveDietitian={
            history.location.state
              ? !!history.location.state.idDietitian
              : false
          }
        />
        <div>
          {this.state.isLoaded ? (
            this.state.dietitian ? (
              <FormDietitian
                dietitian={this.state.dietitian}
                handleChange={this.handleChange}
                handleSave={this.handleSave}
                openModal={this.showModal}
                haveDietitian={
                  history.location.state
                    ? !!history.location.state.idDietitian
                    : false
                }
              />
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
          <Modal
            onClose={this.showModal}
            show={this.state.show}
            title="Voulez-vous choisir ce diététitien ? "
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
            deserunt corrupti, ut fugit magni qui quasi nisi amet repellendus
            non fuga omnis a sed impedit explicabo accusantium nihil doloremque
            consequuntur.
          </Modal>
        </div>
        <NotificationContainer />
      </>
    );
  }
}

export default Dietitian;
