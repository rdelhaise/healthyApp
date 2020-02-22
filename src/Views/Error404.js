import React from "react";
import { Link } from "react-router-dom";
const Error404 = () => {
  return (
    <div
      className="container"
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
      <Link to="/home">
        <img
          src="/img/pistache_jedi.png"
          className="rounded mx-auto d-block"
          style={{ cursor: "pointer" }}
          height="500"
          alt="404"
        />
      </Link>
    </div>
  );
};

export default Error404;
