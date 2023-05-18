import React, { useState } from "react";

const Postapi = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [jobDescription, setJobDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = { data:{job_title: jobTitle, job_description: jobDescription } };

    fetch("http://localhost:1337/api/cards/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Job Title :
          <input
            type="text"
            value={jobTitle}
            onChange={(event) => setJobTitle(event.target.value)}
          />
        </label>

        <label>
          Job Description :
          <textarea
            value={jobDescription}
            onChange={(event) => setJobDescription(event.target.value)}
          ></textarea>
        </label>

        <button type="submit"> Submit </button>
      </form>
    </>
  );
};

export default Postapi;
