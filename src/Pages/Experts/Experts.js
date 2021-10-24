import React from "react";
import { Container } from "react-bootstrap";

import mechanc1 from "../../images/mechanic/mechanic-1.jpg";
import mechanc2 from "../../images/mechanic/mechanic-2.jpg";
import mechanc3 from "../../images/mechanic/mechanic-3.jpg";
import mechanc4 from "../../images/mechanic/mechanic-4.jpg";
import Expart from "../Expert/Expart";

const experts = [
  { name: "Danush", work: "gonjika sabon", img: mechanc1 },
  { name: "fanus", work: "haiper bon", img: mechanc2 },
  { name: "shapik", work: "fita tiyer thik kora s", img: mechanc3 },
  { name: "malam", work: "pump daya ", img: mechanc4 },
];
const Experts = () => {
  return (
    <div className="container">
      <h3>This is our expart</h3>
      <div className="row mt-5">
        {experts.map((expert) => (
          <Expart key={expert.id} expert={expert}></Expart>
        ))}
      </div>
    </div>
  );
};

export default Experts;
