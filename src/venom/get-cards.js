import contractAddresses from "../contracts/contract-addresses.json";
import retailAccountAbi from "../contracts/abi/RetailAccount.abi.json";

export const NETWORK = "devnet";

const getCards = async (provider, retailAccountAddress) => {
  const retailAccountContract = new provider.Contract(
    retailAccountAbi,
    retailAccountAddress
  );

  const cards = (await retailAccountContract.methods._cards({}).call())._cards;
  return cards;
};

export default getCards;
