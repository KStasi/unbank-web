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

function AddCardModal({ open, handleClose, currencies }) {
  const handleSubmit = useCallback(async (event) => {
    event.preventDefault();
  }, []);

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
              />
              <Select
                id={`currency-select`}
                defaultValue={currencies.length ? currencies[0].symbol : 0}
                size="small"
                sx={{ width: "195px", textAlign: "left" }}
              >
                {currencies.map((key, index) => {
                  return (
                    <MenuItem key={key.symbol} value={key.symbol}>
                      {key.symbol}
                    </MenuItem>
                  );
                })}
              </Select>
              <Select
                id={`card-type-select`}
                defaultValue={CARD_TYPES[0]}
                size="small"
                sx={{ width: "195px", textAlign: "left" }}
              >
                {Object.values(CARD_TYPES).map((key, index) => {
                  return (
                    <MenuItem key={key} value={key}>
                      {key}
                    </MenuItem>
                  );
                })}
              </Select>
              <LoadingButton variant="outlined" type="submit" sx={{}}>
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
