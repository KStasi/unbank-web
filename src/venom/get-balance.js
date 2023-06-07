import contractAddresses from "../contracts/contract-addresses.json";
import accountFactoryAbi from "../contracts/abi/RetailAccountFactory.abi.json";

export const NETWORK = "devnet";

const getBalance = async (provider, address) => {
  const balance = await provider.getBalance(address);
  return balance;
};

export default getBalance;
