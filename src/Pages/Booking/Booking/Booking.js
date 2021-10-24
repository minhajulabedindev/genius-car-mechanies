import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import AddService from "../../AddService/AddService";

const Booking = () => {
  const { serviceId } = useParams();

  const [service, setService] = useState();
  useEffect(() => {
    fetch(`http://localhost:5000/services/${serviceId}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
  return (
    <div>
      <h1>This bookis:{serviceId}</h1>
      {/* <h2>{service.name}</h2> */}
      {/* {
      service.map((services) => 
        <AddService services={services}> </AddService>
      )
      } */}
    </div>
  );
};

export default Booking;
