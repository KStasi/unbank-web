import { useEffect, useState } from "react";
import getBalance from "../venom/get-balance";

const useRetailAddressInitiated = (retailAccountAddress, venomConnect) => {
  const [retailAccountInitiated, setRetailAccountInitiated] = useState();

  const checkRetailAccountCreated = async (provider) => {
    if (!provider || !provider.currentProvider || !retailAccountAddress) return;
    const balance = await getBalance(
      provider.currentProvider,
      retailAccountAddress
    );
    return balance > 0;
  };

  useEffect(() => {
    (async () => {
      const initiated = await checkRetailAccountCreated(venomConnect);
      if (initiated != retailAccountInitiated)
        setRetailAccountInitiated(initiated);
    })();
  }, [retailAccountAddress]);
  return { retailAccountInitiated };
};

export default useRetailAddressInitiated;
