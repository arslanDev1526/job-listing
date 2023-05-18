import React, { useState, useEffect } from "react";

const Apitesting = () => {
  const [card, setCard] = useState({});

  const fetchCard = () => {
    fetch("http://localhost:1337/api/cards/")
      .then((response) => response.json())
      .then((card) => setCard(card));
  };

  // useEffect(() => {
  //   fetchCard();
  // }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:1337/api/cards/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // update the card state after successful delete
        setCard((prevState) => ({
          ...prevState,
          data: prevState.data.filter((item) => item.id !== id),
        }));
      })
      .catch((error) => console.error(error));
  };

  return (
    <>
      <div>
        <button onClick={fetchCard}>Fetch Cards</button>
        <h1>Card List</h1>
        {card?.data &&
          card.data.map((item) => (
            <div key={item.id}>
              <h2>{item.attributes.job_title}</h2>
              <p>{item.attributes.job_description}</p>
              {/* <p>{item.id}</p> */}
              <button onClick={() => handleDelete(item.id)}>Delete</button>
            </div>
          ))}
      </div>
    </>
  );
};

export default Apitesting;
