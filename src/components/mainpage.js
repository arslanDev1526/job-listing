import React from "react";
import { Modall } from "./modal.js";
import { SingleCard } from "./singlecard.js";
import "./mainpage.css";
import { useQuery } from "react-query";
import "./mainpage.css";
import { CARD_Query_KEY, fetchCard } from "../api.js";


export const MainPage = () => {
  const { isLoading, error, data } = useQuery(CARD_Query_KEY, fetchCard);
  if (isLoading) return <div> Dataloading.... </div>;
  if (error) return <div> Error: {error.message} </div>;
  
  return (
    <>
      <div className="main-container">
        <img className="header-img" />

        <Modall />

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
