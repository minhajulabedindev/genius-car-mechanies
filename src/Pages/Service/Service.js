import React from "react";
import { Button, Container } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

const Service = (props) => {
  const { name, price, description, img, _id } = props.service;
  const history = useHistory();
  const url = `/booking/${_id}`;
  const btnHandler = () => {
    history.push(url);
  };
  return (
    <div>
      <div className="border border-primary p-4 rounded-3 mb-5">
        <div className=" text-start">
          <h3>Name:{name}</h3>
          <h4>Price:{price}</h4>
          <p>{description}</p>
          <img className="rounded" src={img} alt="" />
        </div>

        <Button onClick={btnHandler} className="mt-4 rounded-pill">
          Book {name.toLowerCase()}
        </Button>
      </div>
    </div>
  );
};

export default Service;
