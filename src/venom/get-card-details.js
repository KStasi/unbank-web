import baseCardAbi from "../contracts/abi/BaseCard.abi.json";
import cardWithLimitsAbi from "../contracts/abi/CardWithLimits.abi.json";
import savingCardAbi from "../contracts/abi/SavingCard.abi.json";
import tokenWalletAbi from "../contracts/abi/TokenWallet.abi.json";
import getTokenMetadata from "./get-token-metadata";
import BigNumber from "bignumber.js";
import toTokenAmount from "../utils/to-token-amount";
import { CARD_TYPES, DEFAULT_ANSWER_ID } from "../constants";

const getCardDetails = async (provider, cardAddress) => {
  const cardContract = new provider.Contract(baseCardAbi, cardAddress);

  const cardType = (await cardContract.methods._cardType({}).call())._cardType;
  const currency = (await cardContract.methods._currency({}).call())._currency;
  const isActive = (await cardContract.methods._isActive({}).call())._isActive;
  const wallet = (await cardContract.methods._wallet({}).call())._wallet;
  const frozenBalance = (await cardContract.methods._frozenBalance({}).call())
    ._frozenBalance;

  const walletContract = new provider.Contract(tokenWalletAbi, wallet);
  const balance = (
    await walletContract.methods.balance({ answerId: DEFAULT_ANSWER_ID }).call()
  ).value0;

  const currencyMetadata = await getTokenMetadata(provider, currency);
  const name = `${currencyMetadata.symbol} ${CARD_TYPES[cardType]} Card`;

  const cardDetails = {
    cardType: CARD_TYPES[cardType],
    currency: currency.toString(),
    address: cardAddress.toString(),
    isActive,
    wallet: wallet.toString(),
    name,
    balance: toTokenAmount(balance, currencyMetadata.decimals),
    frozenBalance: toTokenAmount(frozenBalance, currencyMetadata.decimals),
    currencyMetadata,
  };
  switch (cardType) {
    case "0": {
      const cardWithLimitsContract = new provider.Contract(
        cardWithLimitsAbi,
        cardAddress
      );
      const dailyLimit = (
        await cardWithLimitsContract.methods._dailyLimit({}).call()
      )._dailyLimit;
      const monthlyLimit = (
        await cardWithLimitsContract.methods._monthlyLimit({}).call()
      )._monthlyLimit;
      cardDetails.dailyLimit = toTokenAmount(
        dailyLimit,
        currencyMetadata.decimals
      );
      cardDetails.monthlyLimit = toTokenAmount(
        monthlyLimit,
        currencyMetadata.decimals
      );
      break;
    }
    case "1": {
      const savingCardContract = new provider.Contract(
        savingCardAbi,
        cardAddress
      );
      const targetAmount = (
        await savingCardContract.methods._targetAmount({}).call()
      )._targetAmount;
      const amountLeft =
        targetAmount < balance
          ? 0
          : new BigNumber(targetAmount).minus(balance).toString();
      cardDetails.targetAmount = toTokenAmount(
        targetAmount,
        currencyMetadata.decimals
      );
      cardDetails.amountLeft = toTokenAmount(
        amountLeft,
        currencyMetadata.decimals
      );
      break;
    }
    default:
      break;
  }
  return cardDetails;
};

export default getCardDetails;
