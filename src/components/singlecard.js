import { useMutation, useQueryClient } from "react-query";
import { deleteCard, CARD_Query_KEY, updateCard } from "../api";

import "./singlecard.css";
import { Modall } from "./modal.js";
import { useState } from "react";

export const SingleCard = (props) => {
  const [show, setShow] = useState(false);
  const queryClient = useQueryClient();

  const deleteCardMutation = useMutation(deleteCard, {
    onSuccess: () => {
      queryClient.invalidateQueries(CARD_Query_KEY);
    },
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = () => {
    deleteCardMutation.mutate(props.id);
    console.log("Card is deletd", props.id);
  };

  return (
    <>
      <div className="mt-4 custome-container container p-3  mb-4">
        <div className="d-flex flex-column justify-content-center flex-lg-row main-content">
          {" "}
          <div className="position-desktop">
            <div className="d-flex gap-2">
              <p className="colored-text"> {props.company}</p>
              <h6 className={props.new ? "new text-white" : "text-white"}>
                New!
              </h6>
              <h6
                className={
                  props.featured ? "feature bg-dark text-white" : "text-white"
                }
              >
                Featured
              </h6>
            </div>

            <div className="black-text ">
              <p>{props.position}</p>
            </div>

            <div>
              <p className="text-secondary">
                {" "}
                <span> {props.postedAt} </span> <span> {props.contract} </span>{" "}
                <span> {props.location} </span>{" "}
              </p>{" "}
            </div>
          </div>
          <div className="content d-none d-sm-block d-lg-none"> </div>
          <div className="languages d-flex flex-wrap mt-4 ">
            <p> {props.role} </p>
            <p> {props.level} </p>
          </div>{" "}
        </div>

        <div className="d-flex flex-column align-items-center gap-3 mt-3 mb-2">
          <button
            type="button"
            className="btn-card p-2 rounded"
            onClick={handleDelete}
          >
            Delete
          </button>

          <button
            style={{}}
            type="button"
            className="btn-card p-2 rounded"
            onClick={() => handleShow()}
          >
            Edit
          </button>
        </div>
      </div>

      <Modall
        id={props.id}
        company={props.company}
        position={props.position}
        postedAt={props.postedAt}
        contract={props.contract}
        location={props.location}
        role={props.role}
        level={props.level}
        language={props.language}
        show={show}
        handleClose={handleClose}
      />
    </>
  );
};
