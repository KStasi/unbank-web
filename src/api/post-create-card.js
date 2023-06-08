import { AUTO_MANAGER_API } from "../constants";

const postCreateCard = (
  retailAccountAddress,
  cardTypeId,
  currency,
  otherCardDetails
) => {
  fetch(`${AUTO_MANAGER_API}//issue-card`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      retailAccountAddress,
      cardTypeId,
      currency,
      otherCardDetails,
    }),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Error:", error));
};

export default postCreateCard;
