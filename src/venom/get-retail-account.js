import contractAddresses from "../contracts/contract-addresses.json";
import accountFactoryAbi from "../contracts/abi/RetailAccountFactory.abi.json";

export const NETWORK = "devnet";

const getRetailAccount = async (provider, userAddress) => {
  const accountFactoryContract = new provider.Contract(
    accountFactoryAbi,
    contractAddresses[NETWORK].RetailAccountFactory
  );

  const retailAccountAddress = await accountFactoryContract.methods
    .retailAccountAddress({ pubkey: null, owner: userAddress, answerId: 0 })
    .call();
  return retailAccountAddress.retailAccount;
};

export default getRetailAccount;
