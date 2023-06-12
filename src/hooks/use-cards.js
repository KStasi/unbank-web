import { useEffect, useState } from "react";
import getCards from "../venom/get-cards";
import getCardDetails from "../venom/get-card-details";

const useCards = (retailAccountAddress, venomConnect) => {
  const [cards, setCards] = useState([]);

  const onCardCreated = async () => {
    await fetchCards(venomConnect);
  };

  const fetchCards = async (provider) => {
    if (!provider || !provider.currentProvider || !retailAccountAddress) return;

    const fetchedCards = await getCards(
      provider.currentProvider,
      retailAccountAddress
    );
    const cardDetails = await Promise.all(
      fetchedCards.map(async (card) => {
        const cardDetail = await getCardDetails(
          provider.currentProvider,
          card[0]
        );
        return cardDetail;
      })
    );
    if (JSON.stringify(cardDetails) != JSON.stringify(cards)) {
      setCards(cardDetails);
    }
  };

  useEffect(() => {
    fetchCards(venomConnect);
  }, [retailAccountAddress]);
  return { cards, onCardCreated };
};

export default useCards;
