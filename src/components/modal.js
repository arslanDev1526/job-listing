import "./modal.css";
import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import Form from "react-bootstrap/Form";

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

  const [languagechange, setLanguagechange] = useState("");

  const [posted, setPosted] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const queryClient = useQueryClient();

  const mutation = useMutation(postCard, {
    onSuccess: () => {
      queryClient.invalidateQueries(CARD_Query_KEY);
      handleClose();
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
        new: jobcheck,
        feature: jobfeature,
        job_position: jobposition,
        job_level: joblevel,
        posted: postedtime,
        contract,
        location: joblocation,
      },
    };

    mutation.mutate(payload);

    console.log("save", payload);
  };

  const handleChange = (e) => {
    setJobRole(e.target.value);
  };

  return (
    <>
      <div class="text-center">
        <button onClick={handleShow} class="btn btn-primary mx-auto">
          Add Job
        </button>
      </div>

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

          <Form.Check
            type="checkbox"
            label="New"
            checked={jobcheck}
            onChange={(event) => {
              setJobCheck(event.target.checked);
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
