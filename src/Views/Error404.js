import React from "react";
import history from "../Components/history";
const Error404 = () => {
  /*
    .loginForm {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
    */

  return (
    <div
      className="container primary"
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)"
      }}
    >
      <div className="row ">
        <h4 className="mx-auto">
          Êtes-vous perdu ? Médor peut vous aider ! <br />
          Cliquez lui DESSUS pour retourner à l'accueil.
        </h4>
      </div>
      <img
        src="/img/medor.png"
        className="rounded mx-auto d-block"
        style={{ cursor: "pointer" }}
        height="500"
        alt="404"
        onClick={() => history.push("/")}
      />
    </div>
  );
};

export default Error404;
