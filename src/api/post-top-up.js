import { AUTO_MANAGER_API } from "../constants";

const postTopUp = (cardAddress, currency) => {
  console.log("postTopUp", cardAddress, currency);
  fetch(`${AUTO_MANAGER_API}/top-up`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      cardAddress,
      currency,
    }),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Error:", error));
};

export default postTopUp;
