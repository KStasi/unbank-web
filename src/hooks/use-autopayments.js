import { useEffect, useState } from "react";
import getAutopayments from "../venom/get-autopayments";
import toTokenAmount from "../utils/to-token-amount";

const useAutopayments = (retailAccountAddress, venomConnect, cards) => {
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
    const autopaymentsDetails = fetchedAutopayments.map((autopayment, id) => {
      const card = Object.values(cards).find(
        (card) => card.address === autopayment.cardFrom.toString()
      );
      if (!card) return null;
      return {
        id: id,
        from: card.name,
        to: autopayment.receiver.toString(),
        amount: toTokenAmount(
          autopayment.amount,
          card.currencyMetadata.decimals
        ),
        symbol: card.currencyMetadata.symbol,
        period: autopayment.period.toString(),
      };
    });
    const filteredAutopaymentDetails = autopaymentsDetails.filter(
      (autopayment) => autopayment !== null
    );
    if (
      JSON.stringify(filteredAutopaymentDetails) != JSON.stringify(autopayments)
    ) {
      setAutopayments(
        autopaymentsDetails.filter((autopayment) => autopayment !== null)
      );
    }
  };

  useEffect(() => {
    fetchAutopayments(venomConnect);
  }, [retailAccountAddress, cards]);
  return { autopayments, onAutopaymentCreated };
};

export default useAutopayments;
