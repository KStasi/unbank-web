const getBalance = async (provider, address) => {
  const balance = await provider.getBalance(address);
  return balance;
};

export default getBalance;
