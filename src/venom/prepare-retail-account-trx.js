import retailAccountAbi from "../contracts/abi/RetailAccount.abi.json";
import tokenWalletAbi from "../contracts/abi/TokenWallet.abi.json";
import { DEFAULT_ANSWER_ID } from "../constants";

const prepareRetailAccountTrx = async (
  provider,
  retailAccountAddress,
  dest,
  value,
  payload
) => {
  const retailAccountContract = new provider.Contract(
    retailAccountAbi,
    retailAccountAddress
  );

  const trx = await retailAccountContract.methods.sendTransaction({
    dest: dest,
    value: value,
    bounce: false,
    flags: 64,
    payload,
  });

  return trx;
};

export default prepareRetailAccountTrx;
