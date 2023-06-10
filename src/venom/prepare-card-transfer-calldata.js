import baseCardAbi from "../contracts/abi/BaseCard.abi.json";
import { DEFAULT_DEPLOY_WALLET_VALUE } from "../constants";

const prepareCardTransferCalldata = async (
  provider,
  cardAddress,
  amount,
  recipient,
  payload,
  shouldDeployWallet = false
) => {
  const cardContract = new provider.Contract(baseCardAbi, cardAddress);

  const calldata = await cardContract.methods
    .transfer({
      amount,
      recipient,
      deployWalletValue: shouldDeployWallet ? DEFAULT_DEPLOY_WALLET_VALUE : 0,
      remainingGasTo: cardAddress,
      notify: false,
      payload,
    })
    .encodeInternal();

  return calldata;
};

export default prepareCardTransferCalldata;
