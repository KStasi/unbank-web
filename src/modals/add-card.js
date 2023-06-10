import React, { useState, useEffect, useCallback } from "react";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { CARD_TYPES } from "../constants";
import LoadingButton from "@mui/lab/LoadingButton";
import postCreateCard from "../api/post-create-card";

function AddCardModal({
  open,
  handleClose,
  currencies,
  retailAccountAddress,
  onCardCreated,
}) {
  const [cardName, setCardName] = useState("");
  const [cardType, setCardType] = useState(0);
  const [currency, setCurrency] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleSubmit = useCallback(
    async (event) => {
      setLoading(true);
      event.preventDefault();
      console.log(
        retailAccountAddress.toString(),
        cardType,
        currencies[currency]
      );
      try {
        if (
          retailAccountAddress &&
          cardType != undefined &&
          currencies[currency] &&
          currencies[currency].address
        ) {
          await postCreateCard(
            retailAccountAddress,
            cardType,
            currencies[currency].address,
            ""
          );
          await onCardCreated();
          // TODO: process saving card
        }
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    },
    [cardName, currency, cardType, retailAccountAddress]
  );

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="add-card-modal-modal"
      aria-describedby="add-card-modal-modal"
    >
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
          <form onSubmit={handleSubmit}>
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
                onChange={(event) => setCardName(event.target.value)}
                value={cardName}
              />
              <Select
                id={`currency-select`}
                size="small"
                sx={{ width: "195px", textAlign: "left" }}
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
              >
                {currencies.map((key, index) => {
                  return (
                    <MenuItem key={index} value={index}>
                      {key.symbol}
                    </MenuItem>
                  );
                })}
              </Select>
              <Select
                id={`card-type-select`}
                size="small"
                value={cardType}
                onChange={(e) => setCardType(e.target.value)}
                sx={{ width: "195px", textAlign: "left" }}
              >
                {Object.values(CARD_TYPES).map((key, index) => {
                  return (
                    <MenuItem key={index} value={index}>
                      {key}
                    </MenuItem>
                  );
                })}
              </Select>
              <LoadingButton
                variant="outlined"
                type="submit"
                color="inherit"
                loading={loading}
                sx={{}}
              >
                Own It 🤌
              </LoadingButton>
            </Stack>
          </form>
        </Grid>
      </Paper>
    </Modal>
  );
}

export default AddCardModal;
