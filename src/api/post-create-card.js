import { AUTO_MANAGER_API } from "../constants";

const postCreateCard = async (
  retailAccountAddress,
  cardTypeId,
  currency,
  otherCardDetails
) => {
  const response = await fetch(`${AUTO_MANAGER_API}/issue-card`, {
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
  });
  const data = await response.json();
  return data;
};

export default postCreateCard;
