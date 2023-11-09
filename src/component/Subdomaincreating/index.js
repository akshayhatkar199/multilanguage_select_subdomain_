import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

const Subdomaincreating = () => {
  const [subdomain, setSubdomain] = useState("");
  //   const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (subdomain) {
      //   navigate(`http://${subdomain}.localhost:3000`);
      window.location.href = `http://${subdomain}.localhost:3000`;
    }
  };

  const handleChange = (event) => {
    setSubdomain(event.target.value);
  };

  return (
    <div className="container mt-5">
      <h1>
        <b>Subdomain</b>
      </h1>
      <form onSubmit={handleSubmit}>
        <label>
          <b> Subdomain:</b>
          <br />
          <input type="text" value={subdomain} onChange={handleChange} />
        </label>
        <br />
        <br />
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
        &nbsp; &nbsp;
        <Link to="/Fromstore">
          <button type="button" class="btn btn-primary">
            FormStore
          </button>
        </Link>
        &nbsp; &nbsp;
        <Link to="/Home">
          <button type="button" class="btn btn-primary">
            multilanguage slected
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Subdomaincreating;
