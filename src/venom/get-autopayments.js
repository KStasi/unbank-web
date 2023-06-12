import retailAccountAbi from "../contracts/abi/RetailAccount.abi.json";

const getAutopayments = async (provider, retailAccountAddress) => {
  const retailAccountContract = new provider.Contract(
    retailAccountAbi,
    retailAccountAddress
  );

  const autopayments = (
    await retailAccountContract.methods._autopayments({}).call()
  )._autopayments;
  return autopayments;
};

export default getAutopayments;
