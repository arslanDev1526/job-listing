import React, { useState } from "react";
import { Modall } from "./modal.js";
import { SingleCard } from "./singlecard.js";
import { useQuery } from "react-query";
import "./mainpage.css";
import { CARD_Query_KEY, fetchCard } from "../api.js";
import { MobileImg } from "./images/mobileimg.js";
import { DesktopImg } from "./images/desktopimg.js";

export const MainPage = () => {
  const [show, setShow] = useState(false);
  const { isLoading, error, data } = useQuery(CARD_Query_KEY, fetchCard);
  // if (isLoading) return <div> Dataloading.... </div>;
  // if (error) return <div> Error: {error.message} </div>;

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="main-container w-100 ">
        <div className="mobile-img d-sm-none">
          {" "}
          <MobileImg />{" "}
        </div>
        <div className="desktop-img d-none d-sm-block">
          {" "}
          <DesktopImg />{" "}
        </div>

        <div className="d-flex justify-content-center align-items-center">
          <button onClick={handleShow}    type="button" className="btnn p-2 rounded ">
            Add Job
          </button>
        </div>

        <Modall show={show} handleClose={handleClose} />
        <div className="map-data">
          {data?.data &&
            data.data.map((item) => {
              return (
                <SingleCard
                  id={item.id}
                  company={item.attributes.company}
                  new={item.attributes.new}
                  featured={item.attributes.featured}
                  position={item.attributes.job_position}
                  role={item.attributes.job_role}
                  level={item.attributes.job_level}
                  postedAt={item.attributes.posted}
                  contract={item.attributes.contract}
                  location={item.attributes.location}
                />
              );
            })}
        </div>
      </div>
    </>
  );
};
