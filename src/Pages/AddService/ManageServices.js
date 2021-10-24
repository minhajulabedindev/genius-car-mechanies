import React, { useEffect, useState } from "react";

const ManageServices = (props) => {
  const [services, setService] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/services`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  const handleDelete = (id) => {
    const url = `http://localhost:5000/services/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          alert("Success delete ");
          const remaining = services.filter((service) => service._id !== id);
          setService(remaining);
        }
      });
  };

  return (
    <>
      <h2>Manage Service</h2>

      {services.map((service) => (
        <div key={service._id}>
          <h1>{service.name}</h1>
          <button onClick={() => handleDelete(service._id)}>delete</button>
        </div>
      ))}
    </>
  );
};

export default ManageServices;
