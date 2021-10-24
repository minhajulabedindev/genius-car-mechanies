import axios, { Axios } from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import "./AddService.css";

const AddService = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    axios.post("http://localhost:5000/services", data).then((res) => {
      if (data.insertedId) {
        alert("Successfully");
        reset();
      }
    });
  };
  return (
    <div className="add-service">
      <h1>Please add service</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="Name" type="text" {...register("name")} />
        <textarea
          placeholder="Description"
          // type="textarea"
          {...register("description")}
        />{" "}
        <input placeholder="Price" type="number" {...register("price")} />{" "}
        <input placeholder="Image" {...register("img")} />
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddService;
