export const CARD_Query_KEY = "CARD";

export const fetchCard = () => {
  return fetch("http://localhost:1337/api/cards/").then((res) => res.json());
};

export const postCard = (card) => {
  return fetch("http://localhost:1337/api/cards/", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(card),
  });
};

export const deleteCard = (id) => {
  return fetch(`http://localhost:1337/api/cards/${id}`, {
    method: "DELETE",
  });
};

export const updateCard = (cardData) => {
  const { id, payload } = cardData;
  console.log("update", cardData);
  console.log("id", id);
  return fetch(`http://localhost:1337/api/cards/${id}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },

    body: JSON.stringify(payload),
  });
};
