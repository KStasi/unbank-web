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

function UserDashboard({ venomConnect, retailAccountAddress }) {
  const { cards } = useCards(retailAccountAddress, venomConnect);

  const autopayments = [
    {
      id: "1",
      from: "Card 1",
      to: "Card 2",
      amount: "100",
      symbol: "veUSD",
      period: "day",
    },
    {
      id: "2",
      from: "Card 1",
      to: "Card 2",
      amount: "1",
      symbol: "veUSD",
      period: "month",
    },
  ];
  return (
    <Grid container spacing={0} direction="row">
      {cards.length ? (
        <CardsScreen cards={cards} venomConnect={venomConnect} />
      ) : (
        <NoCardScreen />
      )}
      {cards.length ? (
        <AutomaticPaymentScreen autopayments={autopayments} />
      ) : (
        <NoAutomaticPaymentScreen />
      )}
    </Grid>
  );
}

export default UserDashboard;
