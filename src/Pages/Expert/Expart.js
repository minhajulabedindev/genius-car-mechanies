import React from "react";
import { Container } from "react-bootstrap";

const Expart = (props) => {
  const { name, work, img } = props.expert;
  return (
    <div id="expert" className="col-lg-4 col-md-6 col-sm-12">
      <h3>Name: {name}</h3>
      <h5>works: {work}</h5>
      <img className="rounded" src={img} alt="" />
    </div>
  );
};

export default Expart;
