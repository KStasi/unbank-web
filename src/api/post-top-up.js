import { AUTO_MANAGER_API } from "../constants";

const postTopUp = async (cardAddress, currency) => {
  const response = await fetch(`${AUTO_MANAGER_API}/top-up`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      cardAddress,
      currency,
    }),
  });
  const data = await response.json();
  return data;
};

export default postTopUp;
