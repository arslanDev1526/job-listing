import "./modal.css";
import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useMutation, useQueryClient } from "react-query";
import { CARD_Query_KEY, postCard, updateCard } from "../api";

export const Modall = (props) => {
  const [company, setCompany] = useState(props.company);
  const [jobrole, setJobRole] = useState(props.role);
  const [jobcheck, setJobCheck] = useState(false);
  const [jobfeature, setJobFeature] = useState(false);
  const [jobposition, setJobPosition] = useState(props.position);
  const [joblevel, setJobLevel] = useState(props.level);
  const [postedtime, setPostedTime] = useState(props.postedAt);
  const [contract, setContract] = useState(props.contract);
  const [joblocation, setJobLocation] = useState(props.location);
  const [languagechange, setLanguagechange] = useState("");

  const isEditMode = props.id ? true : false;

  const queryClient = useQueryClient();

  const createJobMutation = useMutation(postCard, {
    onSuccess: () => {
      queryClient.invalidateQueries(CARD_Query_KEY);
      props.handleClose();
    },
  });

  const updateJobMutation = useMutation(updateCard, {
    onSuccess: () => {
      queryClient.invalidateQueries(CARD_Query_KEY);
      props.handleClose();
    },
  });

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

    if (isEditMode) {
      updateJobMutation.mutate(
        { id: props.id, payload },

        {
          onSuccess: () => {
            toast.success("job updated successfully");
            props.handleClose();
          },
          onError: () => {
            toast.error("Failed to update job");
          },
        }
      );
    } else {
      createJobMutation.mutate(payload, { 
        onSuccess: () => { 

          toast.success("job created successfully");
          props.handleClose();
        },

        onError: () => { 
          toast.error("Failed to create the job");
        }
      });
    }

    console.log("save", payload);
    setCompany("");
    setJobRole(" ");
    setJobCheck(false);
    setJobFeature(false);
    setJobPosition("");
    setJobLevel("");
    setPostedTime("");
    setContract("");
    setJobLocation("");
    setLanguagechange("");
  };

  const handleChange = (e) => {
    setJobRole(e.target.value);
  };

  return (
    <>
   

      <Modal className="modal"
        show={props.show}
        onHide={props.handleClose}
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>{isEditMode ? "Edit Job" : "Create Job"}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-container d-flex justify-content-center">

          <div  className="d-flex flex-column gap-3 sab-container "> 
          <div>
            <label>Company</label>
            <br />
            <input className="p-1"
              onChange={(event) => {
                setCompany(event.target.value);
                console.log("company name:", event.target.value);
              }}
              name="job level"
              type="text"
              placeholder="company"
              value={company}
            />
          </div>
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
          <div>
            <label>Job Position</label>
            <br />
            <input className="p-1"
              onChange={(event) => {
                setJobPosition(event.target.value);
                // console.log("JobPosition value:", event.target.value);
              }}
              name="job position"
              type="text"
              placeholder="position"
              value={jobposition}
            />
          </div>
          <div>
            <label>Job Role</label>
            <br />
            <input className="p-1"
              onChange={handleChange}
              name="job"
              type="text"
              placeholder="role"
              value={jobrole}
            />
          </div>
          <div>
            <label>Job level</label>
            <br />
            <input className="p-1"
              onChange={(event) => {
                setJobLevel(event.target.value);
                console.log("Joblevel value:", event.target.value);
              }}
              name="job level"
              type="text"
              placeholder="level"
              value={joblevel}
            />
          </div>

          <div>
            <label>Post Time</label>
            <br />
            <input className="p-1"
              type="text"
              value={postedtime}
              placeholder="time"
              onChange={(event) => {
                setPostedTime(event.target.value);
                console.log("PostedTime value:", event.target.value);
              }}
            />
          </div>
          <Form.Select
            className="form-select"
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

          <div>
            <label>Job location</label>
            <br />
            <input className="p-1"
              onChange={(event) => {
                setJobLocation(event.target.value);
                console.log("Joblevel value:", event.target.value);
              }}
              name="job level"
              type="text"
              placeholder="location"
              value={joblocation}
            />
          </div>
          </div>
        </Modal.Body>

        <Modal.Footer>
          <button className="px-3 py-1 rounded modal-btn"  onClick={props.handleClose}>
            Close
          </button>
          <button className="px-3 py-1 rounded modal-btn"  onClick={saveJob}>
            {isEditMode ? "Update" : "Save"}
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
