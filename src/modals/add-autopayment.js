import React, { useState, useEffect, useCallback } from "react";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import LoadingButton from "@mui/lab/LoadingButton";
import Select from "@mui/material/Select";
import prepareCreateAutopaymentTrx from "../venom/prepare-create-autopayment-trx";
import fromTokenAmount from "../utils/from-token-amount";
import MenuItem from "@mui/material/MenuItem";
import { PERIOD_TYPES, CARD_TYPES } from "../constants";

function AddAutopaymentModal({
  userAddress,
  venomConnect,
  open,
  handleClose,
  retailAccountAddress,
  onAutopaymentCreated,
  cards,
}) {
  const availableCards = cards.filter((card) => card.cardType != CARD_TYPES[1]);

  const [cardFrom, setCardFrom] = useState(0);
  const [receiver, setReceiver] = useState();
  const [period, setPeriod] = useState(PERIOD_TYPES[0]);
  const [amount, setAmount] = useState();
  const [loading, setLoading] = useState(false);

  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      if (!venomConnect || !venomConnect.currentProvider) return;
      setLoading(true);

      try {
        // TODO: check if receiver address is valid
        const trx = await prepareCreateAutopaymentTrx(
          venomConnect.currentProvider,
          retailAccountAddress.toString(),
          availableCards[cardFrom].address,
          receiver,
          fromTokenAmount(
            amount,
            availableCards[cardFrom].currencyMetadata.decimals
          ),
          PERIOD_TYPES[period]
        );

        const res = await trx.send({
          from: userAddress,
          flag: 1,
          amount: fromTokenAmount(1, 9),
        });
        await onAutopaymentCreated();
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
      handleClose();
    },
    [venomConnect, amount, receiver, period, cardFrom, userAddress]
  );

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="send-modal-modal"
      aria-describedby="send-modal-modal"
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
            Autopayment Details
          </Typography>
          <Divider />
          <form onSubmit={handleSubmit}>
            <Stack
              direction="column"
              spacing={2}
              alignItems="center"
              sx={{ mt: 2 }}
            >
              <Select
                id={`card-from-select`}
                size="small"
                value={cardFrom}
                onChange={(e) => setCardFrom(e.target.value)}
                sx={{ width: "195px", textAlign: "left" }}
              >
                {Object.values(availableCards).map((key, index) => {
                  return (
                    <MenuItem key={index} value={index}>
                      {key.name}
                    </MenuItem>
                  );
                })}
              </Select>
              {/* <TextField
                id="outlined-basic"
                label="Card From"
                variant="outlined"
                size="small"
                onChange={(event) => setCardFrom(event.target.value)}
                value={cardFrom}
              /> */}
              <TextField
                id="outlined-basic"
                label="Receiver Address"
                variant="outlined"
                size="small"
                onChange={(event) => setReceiver(event.target.value)}
                value={receiver}
                autoComplete="off"
              />
              {availableCards[cardFrom] != undefined && (
                <>
                  <TextField
                    id="outlined-basic"
                    label={`${availableCards[cardFrom].currencyMetadata.symbol} Amount`}
                    variant="outlined"
                    type="number"
                    size="small"
                    onChange={(event) => setAmount(event.target.value)}
                    value={amount}
                    autoComplete="off"
                  />
                  <Select
                    id={`period-type-select`}
                    size="small"
                    value={period}
                    onChange={(e) => setPeriod(e.target.value)}
                    sx={{ width: "195px", textAlign: "left" }}
                  >
                    {Object.keys(PERIOD_TYPES).map((key, index) => {
                      return (
                        <MenuItem key={index} value={key}>
                          {key}
                        </MenuItem>
                      );
                    })}
                  </Select>
                  {/* <TextField
                    id="outlined-basic"
                    label="Period (Seconds)"
                    variant="outlined"
                    size="small"
                    type="number"
                    onChange={(event) => setPeriod(event.target.value)}
                    value={period}
                  /> */}
                </>
              )}

              <LoadingButton
                variant="outlined"
                type="submit"
                color="inherit"
                loading={loading}
                sx={{}}
              >
                Add Autopayment 🤖
              </LoadingButton>
            </Stack>
          </form>
        </Grid>
      </Paper>
    </Modal>
  );
}

export default AddAutopaymentModal;
