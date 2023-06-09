import fromTokenAmount from "./utils/from-token-amount";
export const AUTO_MANAGER_API = "https://starfish-app-vh8q3.ondigitalocean.app";
export const NETWORK = "devnet";
export const CARD_TYPES = {
  0: "Debit",
  1: "Saving",
};
export const PERIOD_TYPES = {
  DAY: 24 * 60 * 60,
  MONTH: 30 * 24 * 60 * 60,
};
export const DEFAULT_ANSWER_ID = 0;
export const DEFAULT_DEPLOY_WALLET_VALUE = fromTokenAmount(0.5, 9);
export const SAVING_CARD_STRUCTURE = [
  { name: "targetAmount", type: "uint128" },
];
