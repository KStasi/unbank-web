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
function UserDashboard({}) {
  const cards = [
    {
      id: "1",
      type: "Debit",
      emoji: "🍩",
      address:
        "0:5368ceef99d6ce85728bc9924d8ceed46b30441d3f9efaf42853a3a6af3d46d0",
      balance: "1000,32",
      symbol: "veUSD",
      dailyLimit: "500",
      monthlyLimit: "1000",
    },
    {
      id: "2",
      type: "Debit",
      emoji: "🌰",
      address:
        "0:5368ceef99d6ce85728bc9924d8ceed46b30441d3f9efaf42853a3a6af3d46d0",
      balance: "1000,32",
      symbol: "veUSD",
      dailyLimit: "500",
      monthlyLimit: "1000",
      isActive: true,
    },
    {
      id: "3",
      type: "Saving",
      emoji: "🍿",
      address:
        "0:5368ceef99d6ce85728bc9924d8ceed46b30441d3f9efaf42853a3a6af3d46d0",
      balance: 1000,
      symbol: "veUSD",
      dailyLimit: "500",
      monthlyLimit: "1000",
      targetAmount: 4000,
      isActive: true,
    },
    {
      id: "4",
      type: "Saving",
      emoji: "🍪",
      address:
        "0:5368ceef99d6ce85728bc9924d8ceed46b30441d3f9efaf42853a3a6af3d46d0",
      balance: 1000.32,
      symbol: "veUSD",
      dailyLimit: "500",
      monthlyLimit: "1000",
      targetAmount: 800,
      isActive: false,
    },
  ];

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
      {cards.length ? <CardsScreen cards={cards} /> : <NoCardScreen />}
      {cards.length ? (
        <AutomaticPaymentScreen autopayments={autopayments} />
      ) : (
        <NoAutomaticPaymentScreen />
      )}
    </Grid>
  );
}

export default UserDashboard;
