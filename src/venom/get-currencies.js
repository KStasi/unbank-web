import contractAddresses from "../contracts/contract-addresses.json";
import bankAbi from "../contracts/abi/Bank.abi.json";
import { NETWORK } from "../constants";

const getCurrencies = async (provider) => {
  const bankContract = new provider.Contract(
    bankAbi,
    contractAddresses[NETWORK].Bank
  );

  const cbdcs = await bankContract.methods._supportedCbdc({}).call();
  return cbdcs._supportedCbdc;
};

export default getCurrencies;
