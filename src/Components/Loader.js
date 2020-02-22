import React, { Component } from "react";
import "../Assets/Loader/Loader.css";
export class Loader extends Component {
  render() {
    return (
      <div>
        <div className="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }
}

export default Loader;
