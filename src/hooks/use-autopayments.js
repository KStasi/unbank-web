import { useEffect, useState } from "react";
import getAutopayments from "../venom/get-autopayments";

const useAutopayments = (retailAccountAddress, venomConnect) => {
  const [autopayments, setAutopayments] = useState([]);

  const onAutopaymentCreated = async () => {
    await fetchAutopayments(venomConnect);
  };

  const fetchAutopayments = async (provider) => {
    if (!provider || !provider.currentProvider || !retailAccountAddress) return;

    const fetchedAutopayments = await getAutopayments(
      provider.currentProvider,
      retailAccountAddress
    );

    setAutopayments(fetchedAutopayments);
  };

  useEffect(() => {
    fetchAutopayments(venomConnect);
  }, [retailAccountAddress]);
  return { autopayments, onAutopaymentCreated };
};

export default useAutopayments;
