import tokenRootAbi from "../contracts/abi/TokenRoot.abi.json";

export const NETWORK = "devnet";

const getTokenMetadata = async (provider, tokenRootAddress) => {
  const tokenRootContract = new provider.Contract(
    tokenRootAbi,
    tokenRootAddress
  );

  const name = (await tokenRootContract.methods.name({ answerId: 1 }).call())
    .value0;
  const symbol = (
    await tokenRootContract.methods.symbol({ answerId: 1 }).call()
  ).value0;
  const decimals = (
    await tokenRootContract.methods.decimals({ answerId: 1 }).call()
  ).value0;

  return {
    name,
    symbol,
    decimals,
  };
};

export default getTokenMetadata;
