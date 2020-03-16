import React, { Component } from "react";
import Menu from "./Menu";

export class Home extends Component {
  render() {
    return (
      <div>
        <Menu />
        <div className="container-xl container-sm container-md">Home</div>
      </div>
    );
  }
}

export default Home;
