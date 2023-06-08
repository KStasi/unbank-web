import BigNumber from "bignumber.js";

const toTokenAmount = (amount, decimals) => {
  return new BigNumber(amount)
    .dividedBy(new BigNumber(10).pow(decimals))
    .toString();
};

export default toTokenAmount;
