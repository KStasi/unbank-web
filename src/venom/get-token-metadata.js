import tokenRootAbi from "../contracts/abi/TokenRoot.abi.json";
import { DEFAULT_ANSWER_ID } from "../constants";

const getTokenMetadata = async (provider, tokenRootAddress) => {
  const tokenRootContract = new provider.Contract(
    tokenRootAbi,
    tokenRootAddress
  );

  const name = (
    await tokenRootContract.methods.name({ answerId: DEFAULT_ANSWER_ID }).call()
  ).value0;
  const symbol = (
    await tokenRootContract.methods
      .symbol({ answerId: DEFAULT_ANSWER_ID })
      .call()
  ).value0;
  const decimals = (
    await tokenRootContract.methods
      .decimals({ answerId: DEFAULT_ANSWER_ID })
      .call()
  ).value0;

  return {
    name,
    symbol,
    decimals,
    address: tokenRootAddress.toString(),
  };
};

export default getTokenMetadata;
