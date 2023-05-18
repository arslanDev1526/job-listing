import "./singlecard.css";

import RoundImage from "./images/eyecam-co.svg";

export const SingleCard = (props) => {
  return (
    <>
      <div className="mt-5 custome-container position-relative container">
        <div className="custome-position-setter position-absolute ">
          <img className="round-img" src={props.logo}/>
        </div>

        <div className="content">
          <div className="position-desktop">
            <div className="d-flex justify-content-start gap-2">
              <p className="colored-text"> {props.company}</p>
              <h6 className={props.new ? "new text-white" : "text-white"}>New!</h6>
              <h6 className={props.featured ? "feature bg-dark text-white" : "text-white"}>Featured</h6>
            </div>

            <div className="black-text">
              <p>{props.position}</p>{" "}
            </div>

            <div>
              <p className="text-secondary">
                {" "}
                <span> {props.postedAt} </span>  <span> {props.contract} </span>{" "}
                 <span> {props.location} </span>{" "}
              </p>{" "}
            </div>
          </div>
        </div>

        <div className="languages d-flex flex-wrap mt-4">
          <p> {props.role} </p>
          <p> {props.level} </p>
          {/* {props.languages.map((language,xy) => {
            return <p key={xy}>{language} </p>;
          })} */}

          <p> {props.language} </p>

          {/* {props.tools.map((tool,ab) => (
            <p key={ab}>{tool}</p>
          ))} */}
        </div>
      </div>
    </>
  );
};
