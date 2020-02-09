import React from "react";
import Login from "../Views/Login";
import { Router, Route, Switch } from "react-router-dom";
import history from "./history";
import Dietitian from "../Views/Dietitian/Dietitian";

class Routers extends React.Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/home">
            <Dietitian type={"edit"} />
          </Route>
          <Route
            exact
            path="/dietitian/:id/:type"
            render={({ match }) => {
              if (match.params.id && match.params.type) {
                if (match.params.type === "edit") {
                  return <Dietitian type={"edit"} />;
                } else if (match.params.type === "view") {
                  return <Dietitian type={"view"} />;
                }
              }
            }}
          ></Route>
        </Switch>
      </Router>
    );
  }
}

export default Routers;
