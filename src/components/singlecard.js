import { useMutation , useQueryClient} from "react-query";
import { deleteCard,CARD_Query_KEY, updateCard } from "../api";
// import { UpdateModal } from "./updatemodal";
import "./singlecard.css";
import { Modall } from "./modal.js";
import { useState } from "react";

export const SingleCard = (props) => {

  const [editMode, setEditMode] = useState(false)
  const queryClient = useQueryClient();
  const deleteCardMutation = useMutation(deleteCard, { 
    
    onSuccess: () => { 
      queryClient.invalidateQueries(CARD_Query_KEY);
      // console.log("the card is deleted"  , (props.id));
     }
  });

  const handleDelete = () => { 

    deleteCardMutation.mutate(props.id)
    console.log("Card is deletd" , (props.id));
  }


  const updateCardMutation = useMutation ( updateCard, { 
    onSuccess: () => { 
      queryClient.invalidateQueries(CARD_Query_KEY);
    }
  } );


   const handleUpdate = ( ) => {
    updateCardMutation.mutate(props.id)

    console.log("Update" , (props.id));
  }


  return (
    <>
      <div className="mt-5 custome-container position-relative container">
        <div className="custome-position-setter position-absolute ">
          <img className="round-img" src={props.logo} />
        </div>

        <div className="content">
          <div className="position-desktop">
            <div className="d-flex justify-content-start gap-2">
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

            <div className="black-text">
              <p>{props.position}</p>{" "}
            </div>

            <div>
              <p className="text-secondary">
                {" "}
                <span> {props.postedAt} </span> <span> {props.contract} </span>{" "}
                <span> {props.location} </span>{" "}
              </p>{" "}
            </div>
          </div>
        </div>

        <div className="languages d-flex flex-wrap mt-4">
          <p> {props.role} </p>
          <p> {props.level} </p>

          {/* <p> {props.language} </p> */}
        </div>

        <button
          type="button"
          className="btn btn-outline-danger"
          onClick={handleDelete}
        
        >
          Delete
        </button>

{/* 
        <button
      style={{ marginLeft: 30 }}
      type="button"
      className="btn btn-outline-danger"
      onClick={() => setEditMode(true)}
    >
      Edit
    </button> */}

                
        <button style={{ marginLeft:30 }}
          type="button"
          className="btn btn-outline-danger"
          onClick={() => setEditMode(true)}
        
        >
        <Modall  
        
        id={props.id}
        company = {props.company}
        position = {props.position}
        postedAt= {props.postedAt}
        contract= {props.contract}
        location= {props.location}   
        role= {props.role}
        level= {props.level}
        language= {props.language}
        />


        
        </button>
{/* {editMode && (
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
    closeModal={() => setEditMode(false)}
    handleUpdate={handleUpdate}
  />
)} */}

        
      </div>
    </>
  );
};
