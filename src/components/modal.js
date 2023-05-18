import "./modal.css";
import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import Form from "react-bootstrap/Form";
// import DropDown from "./dropdown";
// import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { CARD_Query_KEY, postCard } from "../api";



export const Modall = (props) => {
  const [company, setCompany] = useState("");
  const [jobrole, setJobRole] = useState("");
  const [jobcheck, setJobCheck] = useState(false);
  const [jobfeature, setJobFeature] = useState(false);
  const [jobposition, setJobPosition] = useState(" ");
  const [joblevel, setJobLevel] = useState(" ");
  const [postedtime, setPostedTime] = useState("");
  const [contract, setContract] = useState("");
  const [joblocation, setJobLocation] = useState("");

  const [show, setShow] = useState(false);

  // const [updated, setUpdated] = useState("");
  // const [error, setError] = useState("");
  // const [language, setLanguage] = useState([]);
  const [languagechange, setLanguagechange] = useState("");
  // const [inputError, setInputError] = useState(false);
  const [posted, setPosted] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // onSuccess: () => {
  //   queryClient.invalidateQueries('todos')
  //   queryClient.invalidateQueries('reminders')
  // },


  const queryClient = useQueryClient();

  const mutation = useMutation(postCard, {
    onSuccess: () => {
      queryClient.invalidateQueries(CARD_Query_KEY);
    handleClose()

    },
  });

  if (mutation.isSuccess) {
    console.log("Card is reated successfully");
  }

  const saveJob = () => {
    const payload = {
      data: {
        company,
        job_role: jobrole,
        new:jobcheck,
        feature: jobfeature,
        job_position:jobposition,
        job_level: joblevel,
        posted: postedtime,
        contract,
        location:joblocation,
      },
    };

    mutation.mutate(payload);
    //mutation.postCard(payload)
    //postCard
    console.log("save", payload);
  };
  // const handleLanguageClick = () => {
  //   if (languagechange.length <= 5) {
  //     setLanguage([...language, languagechange]);
  //     setLanguagechange("");
  //     setInputError(false);
  //   } else {
  //     setInputError(true);
  //   }
  // };

  const handleChange = (e) => {
    setJobRole(e.target.value);
  };

  // const handleClick = () => {
  //   if (jobrole.length > 15) {
  //     setError("Max 15 char allowed");
  //   } else {
  //     setUpdated(jobrole);
  //     setError("");
  //     setJobRole(" ");
  //   }
  // };

  // const handleLanguageDelete = (index) => {
  //   setLanguage(language.filter((_, i) => i !== index));
  // };

  return (
    <>
      <div class="text-center">
        <button onClick={handleShow} class="btn btn-primary mx-auto">
          Add Job
        </button>
      </div>

      {/* <Modall/> */}

      <Modal
        show={show}
        onHide={handleClose}
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Create Job</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-container">
          <br />
          <label>company:</label>

          <input
            onChange={(event) => {
              setCompany(event.target.value);
              console.log("company name:", event.target.value);
            }}
            name="job level"
            type="text"
            placeholder="company name"
            value={company}
          />

          {/* <button onClick={handleClick} class="btn btn-primary mx-auto">
            Show text
          </button> */}

          {/* <h2> updated: {updated} </h2>
          {error && <p style={{ color: "red" }}>{error}</p>} */}

          <Form.Check
            type="checkbox"
            label="New"
            checked={jobcheck}
            onChange={(event) => {
              setJobCheck(event.target.checked);
              // console.log("Jobcheck value:", event.target.checked);
            }}
          />

          <Form.Check
            type="checkbox"
            label="Feature"
            checked={jobfeature}
            onChange={(event) => {
              setJobFeature(event.target.checked);
              console.log("Jobcheck value:", event.target.checked);
            }}
          />

          <label>Job Position:</label>

          <input
            onChange={(event) => {
              setJobPosition(event.target.value);
              console.log("JobPosition value:", event.target.value);
            }}
            name="job position"
            type="text"
            placeholder="job position"
            value={jobposition}
          />

          <label>Job Role:</label>

          <input
            onChange={handleChange}
            name="job"
            type="text"
            placeholder="job role"
            value={jobrole}
          />
          <br />
          <label>Job level:</label>

          <input
            onChange={(event) => {
              setJobLevel(event.target.value);
              console.log("Joblevel value:", event.target.value);
            }}
            name="job level"
            type="text"
            placeholder="job level"
            value={joblevel}
          />

          <br />

          <label> Post Time:</label>

          <input
            type="text"
            value={postedtime}
            onChange={(event) => {
              setPostedTime(event.target.value);
              console.log("PostedTime value:", event.target.value);
            }}
          />
          <br />
          <br />
          {/* {console.log(setJobCheck , "checked here")} */}
          <Form.Select
            value={contract}
            onChange={(event) => {
              setContract(event.target.value);
              console.log("Contract value:", event.target.value);
            }}
          >
            <option value="">Contract</option>
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
          </Form.Select>

          <br />
          <label>Job location:</label>

          <input
            onChange={(event) => {
              setJobLocation(event.target.value);
              console.log("Joblevel value:", event.target.value);
            }}
            name="job level"
            type="text"
            placeholder="job location"
            value={joblocation}
          />

          {/* <Form.Select
            className="custom-select"
            aria-label="Default select example"
          >
            <option>Open this select menu</option>
            <option>One</option>
            <option>Two</option>
            <option>Three</option>
          </Form.Select> */}

          <br />
          <label>coding language:</label>
          <input
            value={languagechange}
            onChange={(e) => {
              setLanguagechange(e.target.value);
              console.log("language:", e.target.value);
            }}
            type="text"
            placeholder="languages"
          />
          {/* <ul>
            {language.map((item, index) => (
              <li key={index}>
                {item}
                <FontAwesomeIcon
                  icon={faTrash}
                  onClick={() => handleLanguageDelete(index)}
                />
              </li>
            ))}
          </ul> */}

          {/* {inputError && <p>Error: Input must be 5 characters or less.</p>} */}

          <br />

          {/* {language.length < 5 && (
            <button
              class="btn btn-primary mx-auto"
              onClick={handleLanguageClick}
            >
              Add More
            </button>
          )} */}
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={saveJob}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
