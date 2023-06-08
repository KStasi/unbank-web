import { useEffect, useState } from "react";
import getCurrencies from "../venom/get-currencies";
import getTokenMetadata from "../venom/get-token-metadata";
import contractAddresses from "../contracts/contract-addresses.json";
import { NETWORK } from "../constants";

const useCurrencies = (venomConnect) => {
  const [currencies, setCurrencies] = useState([]);

  const fetchCurrencies = async (provider) => {
    if (!provider || !provider.currentProvider) return;

    const fetchedCurrencies = await getCurrencies(
      provider.currentProvider,
      contractAddresses[NETWORK].Bank
    );
    const tokensMetadata = await Promise.all(
      fetchedCurrencies.map(async (currencyDetails) => {
        const tokenMetadata = await getTokenMetadata(
          provider.currentProvider,
          currencyDetails[0]
        );
        return tokenMetadata;
      })
    );

    setCurrencies(tokensMetadata);
  };

  useEffect(() => {
    fetchCurrencies(venomConnect);
  }, []);
  return { currencies };
};

export default useCurrencies;
