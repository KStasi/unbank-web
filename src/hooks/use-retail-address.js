import { useEffect, useState } from "react";
import getRetailAccount from "../venom/get-retail-account";

const useRetailAddress = (address, venomConnect) => {
  const [retailAccountAddress, setRetailAccountAddress] = useState();

  const onCreateAccount = async () => {
    const retailAccountAddressPrecalculated = await getRetailAccountAddress(
      venomConnect
    );
    if (!retailAccountAddress != retailAccountAddressPrecalculated)
      setRetailAccountAddress(retailAccountAddressPrecalculated);
  };

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
      await onCreateAccount();
    })();
  }, [address]);
  return { retailAccountAddress, onCreateAccount };
};

export default useRetailAddress;
