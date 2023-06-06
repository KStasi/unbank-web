import React, { useEffect, useState } from "react";
import { Stack, Grid } from "@mui/material";
import WelcomeContainer from "../layout/welcome-container";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TopBar from "../components/top-bar";
import Card from "../components/card";
import Autopayment from "../components/autopayment";

function UserPage({ onDisconnect, onLogin, address }) {
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
    <WelcomeContainer>
      <Stack direction="column" spacing={0}>
        <TopBar
          onDisconnect={onDisconnect}
          onLogin={onLogin}
          address={address}
        />
        <Grid container spacing={0} direction="row">
          <Grid
            item
            xs={12}
            md={9}
            direction="column"
            spacing={1}
            sx={{
              // backgroundColor: "#042f22",
              // height: "100vh",
              width: "100%",
              align: "center",
              alignContent: "center",
              paddingTop: "5px",
              px: "15px",
            }}
          >
            <Typography variant="h6" align="left" sx={{ my: 1 }}>
              Cards
            </Typography>
            <Grid
              container
              item
              spacing={1}
              xs={12}
              md={8}
              sx={{
                width: "inherit",
              }}
            >
              {cards.map((card, index) => (
                <Grid
                  item
                  key={index}
                  xs={12}
                  sm={6}
                  md={4}
                  lg={4}
                  spacing={1}
                  sx={{}}
                >
                  <Card {...card} />
                </Grid>
              ))}
            </Grid>
            <br />
            <Grid
              item
              spacing={1}
              xs={12}
              md={8}
              sx={
                {
                  // width: "100%",
                }
              }
            >
              <Button variant="outlined" color="inherit" sx={{ width: "100%" }}>
                Add Card 🤑
              </Button>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            md={3}
            container
            direction="column"
            sx={{
              // backgroundColor: "#011132",
              // height: "100vh",
              align: "center",
              alignContent: "center",
              paddingTop: "1%",
            }}
          >
            <Grid item spacing={1}>
              <Typography variant="h6" align="left" sx={{ my: 1 }}>
                Autopayments
              </Typography>
            </Grid>
            <Grid
              item
              spacing={1}
              direction="column"
              // sx={{
              //   width: "inherit",
              // }}
            >
              <Stack direction="column" spacing={1}>
                {autopayments.map((autopayment, index) => (
                  <Autopayment {...autopayment} />
                ))}
              </Stack>
            </Grid>
            <br />
            <Grid item>
              <Button variant="outlined" color="inherit" sx={{ width: "100%" }}>
                Add Autopayment 🔁
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Stack>
    </WelcomeContainer>
  );
}

export default UserPage;
