import retailAccountAbi from "../contracts/abi/RetailAccount.abi.json";

const prepareCreateAutopaymentTrx = async (
  provider,
  retailAccountAddress,
  cardFrom,
  receiver,
  amount,
  period
) => {
  const retailAccountContract = new provider.Contract(
    retailAccountAbi,
    retailAccountAddress
  );

  const trx = await retailAccountContract.methods.addAutopayment({
    autopayment: {
      cardFrom,
      receiver,
      amount,
      period,
      nextPayment: 0,
    },
  });

  return trx;
};

export default prepareCreateAutopaymentTrx;
