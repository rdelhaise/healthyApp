import React from "react";

class FormDietitian extends React.Component {
  render() {
    return (
      <>
        <div className="container">
          <form className="py-4">
            <div className="row ">
              <div className="col-xs-12 form-group form-inline">
                <div className="col-xs-6">
                  <input type="text" className="input form-control"></input>
                </div>
                <div className="col-xs-6">
                  <input type="text" className="input form-control"></input>
                </div>
                <div className="col-xs-6">
                  <input type="text" className="input form-control"></input>
                </div>
              </div>
              <div className="col-xs-6">
                <div className="col-xs-6">
                  <input type="text" className="input form-control"></input>
                </div>
                <div className="col-xs-6">
                  <input type="text" className="input form-control"></input>
                </div>
              </div>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default FormDietitian;
