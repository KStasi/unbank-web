import BigNumber from "bignumber.js";

BigNumber.config({
  EXPONENTIAL_AT: 1000,
});

const toTokenAmount = (amount, decimals) => {
  return new BigNumber(amount)
    .dividedBy(new BigNumber(10).pow(decimals))
    .toString();
};

export default toTokenAmount;
