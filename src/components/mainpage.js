import React from "react";
// import HeaderImage from './mages/'
import { Modall } from "./modal.js";
import { SingleCard } from "./singlecard.js";
import "./mainpage.css";
import { useQuery } from "react-query";

import "./mainpage.css";
import { CARD_Query_KEY, fetchCard } from "../api.js";

export const MainPage = () => {
  // const [card, setCard] = useState({});

  // const { isLoading, error, data } = useQuery(
  //   "mydata",
  //   () => fetch("http://localhost:1337/api/cards/").then((res) => res.json())
  //   // .then((card) =>setCard(card))
  // );

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
                  // logo={item.logo}
                  new={item.attributes.new}
                  featured={item.attributes.featured}
                  position={item.attributes.job_position}
                  role={item.attributes.job_role}
                  level={item.attributes.job_level}
                  postedAt={item.attributes.posted}
                  contract={item.attributes.contract}
                  location={item.attributes.location}
                  // languages={item.attriutes.languages}
                  // tools={item.tools}
                />
              );
            })}
        </div>
      </div>
    </>

    // <>
    //   <h1> tested dataTATATA </h1>
    //   {data?.data &&
    //     data.data.map((item) => (
    //       <div key={item.id}>
    //         <h2>{item.attributes.company}</h2>
    //         <p>{item.attributes.contract}</p>

    //         {item.attributes.feature === true ? <p> feature</p> : null }
    //         <p>{item.attributes.feature}</p>
    //         <p>{item.attributes.job_level}</p>
    //         <p>{item.attributes.job_position}</p>
    //         <p>{item.attributes.job_role}</p>
    //         <p>{item.attributes.location}</p>
    //         <p>{item.attributes.posted}</p>

    //       {item.attributes.new === true ?  <p> new </p> : null }

    //         {/* <p>{item.id}</p> */}
    //         {/* <button onClick={() => handleDelete(item.id)}>Delete</button> */}
    //       </div>
    //     ))}
    //   {console.log(data)}
    // </>
  );
};
