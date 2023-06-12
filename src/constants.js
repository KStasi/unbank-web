import fromTokenAmount from "./utils/from-token-amount";
export const AUTO_MANAGER_API = "http://localhost:3007";
export const NETWORK = "devnet";
export const CARD_TYPES = {
  0: "Debit",
  1: "Saving",
};
export const DEFAULT_ANSWER_ID = 0;
export const DEFAULT_DEPLOY_WALLET_VALUE = fromTokenAmount(0.5, 9);
export const SAVING_CARD_STRUCTURE = [
  { name: "targetAmount", type: "uint128" },
];
