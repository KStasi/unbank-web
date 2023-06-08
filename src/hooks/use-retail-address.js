import { useEffect, useState } from "react";
import getRetailAccount from "../venom/get-retail-account";

const useRetailAddress = (address, venomConnect) => {
  const [retailAccountAddress, setRetailAccountAddress] = useState();

  const getRetailAccountAddress = async (provider) => {
    if (!provider || !provider.currentProvider || !address) return;
    const retailAccountAddressPrecalculated = await getRetailAccount(
      provider.currentProvider,
      address
    );
    return retailAccountAddressPrecalculated;
  };

  useEffect(() => {
    (async () => {
      const retailAccountAddressPrecalculated = await getRetailAccountAddress(
        venomConnect
      );
      if (!retailAccountAddress != retailAccountAddressPrecalculated)
        setRetailAccountAddress(retailAccountAddressPrecalculated);
    })();
  }, [address]);
  return { retailAccountAddress };
};

export default useRetailAddress;
