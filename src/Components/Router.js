import React from "react";
import Login from "../Views/Login";
import { Router, Route, Switch } from "react-router-dom";
import history from "./history";
import Dietitian from "../Views/Dietitian/Dietitian";
import Error404 from "../Views/Error404";
import Home from "./Home";
import Patient from "../Views/Patient/Patient";

class Routers extends React.Component {
  render() {
    if (!localStorage.getItem("authenticate")) {
      history.push("/login");
    }
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/home" onEnter={this.requireAuth}>
            <Home />
          </Route>
          <Route
            path="/dietitian/:id"
            render={({ match }) => {
              if (match.params.id) {
                return <Dietitian idDietitian={match.params.id} />;
              }
            }}
            onEnter={this.requireAuth}
          ></Route>
          <Route
            path="/patient/:id"
            render={({ match }) => {
              if (match.params.id) {
                return <Patient idPatient={match.params.id} />;
              }
            }}
            onEnter={this.requireAuth}
          ></Route>
          <Route component={Login} exact path="/login" />

          <Route path={"*"} component={Error404} />
        </Switch>
      </Router>
    );
  }
}

export default Routers;
