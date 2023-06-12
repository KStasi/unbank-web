import React, { useEffect, useState } from "react";
import { Stack, Grid } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Card from "../components/card";
import Autopayment from "../components/autopayment";
import CardsScreen from "./cards-screen";
import NoCardScreen from "./no-card-screen";
import NoAutomaticPaymentScreen from "./no-automatic-payment-screen";
import AutomaticPaymentScreen from "./automatic-payment-screen";
import useCards from "../hooks/use-cards";
import useAutopayments from "../hooks/use-autopayments";
import useCurrencies from "../hooks/use-currencies";
import useInterval from "../hooks/use-interval";

function UserDashboard({ venomConnect, retailAccountAddress, userAddress }) {
  const { cards, onCardCreated } = useCards(retailAccountAddress, venomConnect);
  const { autopayments, onAutopaymentCreated } = useAutopayments(
    retailAccountAddress,
    venomConnect,
    cards
  );
  console.log(autopayments);
  const { currencies } = useCurrencies(venomConnect);

  useInterval(onCardCreated);
  useInterval(onAutopaymentCreated);

  return (
    <Grid container spacing={0} direction="row">
      {cards.length ? (
        <CardsScreen
          cards={cards}
          venomConnect={venomConnect}
          retailAccountAddress={retailAccountAddress}
          currencies={currencies}
          onCardCreated={onCardCreated}
          userAddress={userAddress}
        />
      ) : (
        <NoCardScreen
          onCardCreated={onCardCreated}
          retailAccountAddress={retailAccountAddress}
          currencies={currencies}
          venomConnect={venomConnect}
        />
      )}
      {cards.length ? (
        <AutomaticPaymentScreen
          userAddress={userAddress}
          autopayments={autopayments}
          venomConnect={venomConnect}
          retailAccountAddress={retailAccountAddress}
          onAutopaymentCreated={onAutopaymentCreated}
          cards={cards}
        />
      ) : (
        <NoAutomaticPaymentScreen />
      )}
    </Grid>
  );
}

export default UserDashboard;
