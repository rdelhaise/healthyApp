import React from "react";
import Login from "../Views/Login";
import { Router, Route, Switch } from "react-router-dom";
import history from "../Components/history";
import Dietitian from "../Views/Dietitian/Dietitian";
import Error404 from "../Views/Error404";
import Home from "./Home";
import Patient from "../Views/Patient/Patient";
import Dietitians from "../Views/Dietitian/Dietitians";
import Patients from "../Views/Patient/Patients";
import Register from "../Views/Register";

class Routers extends React.Component {
  constructor(props) {
    super(props);
    console.log(history);
  }

  render() {
    if (
      !localStorage.getItem("authenticate") &&
      history.location.pathname !== "/register"
    ) {
      history.push("/login");
    }
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/dietitians" component={Dietitians} />
          <Route
            exact
            path="/dietitian/:id/patients"
            render={({ match }) => {
              if (match.params.id) {
                return <Patients idDietitian={match.params.id} />;
              }
            }}
          />
          <Route
            path="/dietitian/:id"
            render={({ match }) => {
              if (match.params.id) {
                return <Dietitian idDietitian={match.params.id} />;
              }
            }}
          ></Route>
          <Route exact path="/patient/dietitian" component={Dietitian}></Route>
          <Route
            path="/patient/:id"
            render={({ match }) => {
              if (match.params.id) {
                return <Patient idPatient={match.params.id} />;
              }
            }}
          ></Route>

          <Route component={Login} exact path="/login" />
          <Route component={Register} exact path="/register" />
          <Route path={"*"} component={Error404} />
        </Switch>
      </Router>
    );
  }
}

export default Routers;
