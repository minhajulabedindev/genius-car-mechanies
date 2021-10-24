import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Notfoun = () => {
  return (
    <div>
      <img
        src="https://image.freepik.com/free-vector/404-error-abstract-concept-illustration_335657-2243.jpg"
        alt=""
      />{" "}
      <br />
      <Link to="/home">
        {" "}
        <Button> Go Back</Button>
      </Link>
    </div>
  );
};

export default Notfoun;
