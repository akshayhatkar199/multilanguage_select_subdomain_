import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setFormData } from "../formDataSlice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FormStore = () => {
  const [formData, setFormDataState] = useState({ name: "" });
  const [id, setId] = useState(1);
  const dispatch = useDispatch();

  const generateId = () => {
    setId((prevId) => prevId + 1);
    return id;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newId = generateId(); // Generate id here
    const dataWithId = { ...formData, id: newId };
    dispatch(setFormData(dataWithId));
    console.log("submitted", dataWithId);
    toast.success("Form submitted successfully and check the redux", {
      position: toast.POSITION.TOP_RIGHT,
    });
    setFormDataState({ name: "" });
  };

  const handleChange = (event) => {
    setFormDataState({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="container mt-5">
      <h1>
        <b>FormStore Using Redux</b>
      </h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <br />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <button type="submit" className="btn btn-success">
          Submit
        </button>
        <br />
        <br />
        &nbsp; &nbsp;
        <Link to="/">
          <button type="button" class="btn btn-primary">
            Subdomain
          </button>
        </Link>
        &nbsp; &nbsp;
        <Link to="/Home">
          <button type="button" class="btn btn-primary">
            multilanguage slected
          </button>
        </Link>
      </form>
      <ToastContainer />
    </div>
  );
};

export default FormStore;
