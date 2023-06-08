import contractAddresses from "../contracts/contract-addresses.json";
import accountFactoryAbi from "../contracts/abi/RetailAccountFactory.abi.json";
import { NETWORK, DEFAULT_ANSWER_ID } from "../constants";

const getRetailAccount = async (provider, userAddress) => {
  const accountFactoryContract = new provider.Contract(
    accountFactoryAbi,
    contractAddresses[NETWORK].RetailAccountFactory
  );

  const retailAccountAddress = await accountFactoryContract.methods
    .retailAccountAddress({
      pubkey: null,
      owner: userAddress,
      answerId: DEFAULT_ANSWER_ID,
    })
    .call();
  return retailAccountAddress.retailAccount;
};

export default getRetailAccount;
