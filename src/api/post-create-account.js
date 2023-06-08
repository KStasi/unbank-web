import { AUTO_MANAGER_API } from "../constants";

const postCreateAccount = (userAddress) => {
  fetch(`${AUTO_MANAGER_API}/create-account`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userAddress,
    }),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Error:", error));
};

export default postCreateAccount;
