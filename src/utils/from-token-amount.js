import BigNumber from "bignumber.js";

const fromTokenAmount = (amount, decimals) => {
  return new BigNumber(amount)
    .multipliedBy(new BigNumber(10).pow(decimals))
    .toString();
};

export default fromTokenAmount;
