export const CARD_Query_KEY = "CARD"

export const fetchCard = () => {
  return fetch("http://localhost:1337/api/cards/");
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


   