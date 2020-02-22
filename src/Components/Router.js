import React from "react";
import Login from "../Views/Login";
import { Router, Route, Switch } from "react-router-dom";
import history from "./history";
import Dietitian from "../Views/Dietitian/Dietitian";
import Error404 from "../Views/Error404";
import Home from "./Home";

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
            path="/dietitian/:id/:type"
            render={({ match }) => {
              if (match.params.id && match.params.type) {
                if (match.params.type === "edit") {
                  return (
                    <Dietitian type={"edit"} idDietitian={match.params.id} />
                  );
                } else if (match.params.type === "view") {
                  return (
                    <Dietitian type={"view"} idDietitian={match.params.id} />
                  );
                } else {
                  return <Error404 />;
                }
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
