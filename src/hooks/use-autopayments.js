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

    // {
    //   id: "1",
    //   from: "Card 1",
    //   to: "Card 2",
    //   amount: "100",
    //   symbol: "veUSD",
    //   period: "day",
    // },
    console.log(fetchedAutopayments);
    const autopaymentsDetails = fetchedAutopayments.map((autopayment, id) => {
      const card = Object.values(cards).find(
        (card) => card.address === autopayment.cardFrom.toString()
      );
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
    console.log("autopaymentsDetails", autopaymentsDetails);
    setAutopayments(autopaymentsDetails);
  };

  useEffect(() => {
    fetchAutopayments(venomConnect);
  }, [retailAccountAddress, cards]);
  return { autopayments, onAutopaymentCreated };
};

export default useAutopayments;
