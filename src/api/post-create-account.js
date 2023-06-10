import { AUTO_MANAGER_API } from "../constants";

const postCreateAccount = async (userAddress) => {
  const response = await fetch(`${AUTO_MANAGER_API}/create-account`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userAddress,
    }),
  });
  const data = await response.json();
  return data;
};

export default postCreateAccount;
