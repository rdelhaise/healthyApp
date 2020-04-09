import React from "react";
import "../Assets/Modal/Modal.css";
import PropTypes from "prop-types";

export default class Modal extends React.Component {
  onClose = e => {
    this.props.onClose && this.props.onClose(e);
  };
  render() {
    return (
      <>
        <div className={this.props.show ? "modal-overlay" : ""}></div>
        <div
          className={
            this.props.show ? "custom-modal view-modal" : "custom-modal"
          }
        >
          <div className="modal-body">
            <div className="custom-modal-title">{this.props.title}</div>
            <div className="line"></div>
            <div className="custom-modal-content">{this.props.children}</div>
            <div className=" buttons-modal">
              <button
                className="btn btn-primary px-5 mx-4"
                onClick={this.onClose}
              >
                Close
              </button>
              <button className="btn btn-success px-5" onClick={this.onClose}>
                Save
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired
};
/**
 * <button
            className="toggle-button btn btn-primary px-5 mx-4"
            onClick={this.onClose}
          >
            Close
          </button>
          <button
            className="toggle-button btn btn-success px-5"
            onClick={this.onClose}
          >
            Save
          </button>
 */
