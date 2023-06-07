import React, { useState, useEffect, useCallback } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Stack from "@mui/material/Stack";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

function AddCardModal({}) {
  const cbdcs = [
    {
      symbol: "veUSD",
    },
    {
      symbol: "veEUR",
    },
    {
      symbol: "veGBP",
    },
  ];
  const cardTypes = ["Debit", "Saving"];
  const open = true;
  return (
    <Paper
      elevation={0}
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        bgcolor: "#ffffff",
        px: 3,
        py: 2,
        textAlign: "center",
        maxWidth: "400px",
        minWidth: "250px",
        border: 0.5,
      }}
    >
      <Grid container spacing={2} direction="column" sx={{}}>
        <Typography id="add-card-title" variant="h6" sx={{ my: 1 }}>
          New Card Details
        </Typography>
        <Divider />
        <form onSubmit={{}}>
          <Stack
            direction="column"
            spacing={2}
            alignItems="center"
            sx={{ mt: 2 }}
          >
            <TextField
              id="outlined-basic"
              label="Card Name"
              variant="outlined"
              size="small"
            />
            <Select
              id={`currency-select`}
              defaultValue={0}
              size="small"
              sx={{ width: "195px", textAlign: "left" }}
            >
              {cbdcs.map((key, index) => {
                return (
                  <MenuItem key={key.symbol} value={key.symbol}>
                    {key.symbol}
                  </MenuItem>
                );
              })}
            </Select>
            <Select
              id={`card-type-select`}
              defaultValue={0}
              size="small"
              sx={{ width: "195px", textAlign: "left" }}
            >
              {cardTypes.map((key, index) => {
                return (
                  <MenuItem key={key} value={key}>
                    {key}
                  </MenuItem>
                );
              })}
            </Select>
            <Button variant="outlined" color="inherit" sx={{}}>
              Own It 🤌
            </Button>
          </Stack>
        </form>
      </Grid>
    </Paper>
  );
}

export default AddCardModal;
