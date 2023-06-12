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
import prepareCardTransferCalldata from "../venom/prepare-card-transfer-calldata";
import prepareRetailAccountTrx from "../venom/prepare-retail-account-trx";
import fromTokenAmount from "../utils/from-token-amount";

function SendModal({
  userAddress,
  venomConnect,
  open,
  cardAddress,
  handleClose,
  retailAccountAddress,
  currencyMetadata,
}) {
  const [amount, setAmount] = useState();
  const [receiver, setReceiver] = useState();
  const [loading, setLoading] = useState(false);

  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      if (!venomConnect || !venomConnect.currentProvider) return;
      setLoading(true);

      try {
        // TODO: check if receiver address is valid
        // TODO: check if receiver wallet exists
        const calldata = await prepareCardTransferCalldata(
          venomConnect.currentProvider,
          cardAddress,
          fromTokenAmount(amount, currencyMetadata.decimals),
          receiver,
          "",
          true
        );
        const value = fromTokenAmount(1, 9);
        const trx = await prepareRetailAccountTrx(
          venomConnect.currentProvider,
          retailAccountAddress,
          cardAddress,
          0,
          calldata
        );

        const res = await trx.send({
          from: userAddress,
          amount: value,
        });
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
      handleClose();
    },
    [venomConnect, amount, receiver]
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
            Transfer Details
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
                label="Receiver Address"
                variant="outlined"
                size="small"
                onChange={(event) => setReceiver(event.target.value)}
                value={receiver}
                autoComplete="off"
              />
              <TextField
                id="outlined-basic"
                label={`${currencyMetadata.symbol} Amount`}
                variant="outlined"
                type="number"
                size="small"
                onChange={(event) => setAmount(event.target.value)}
                value={amount}
                autoComplete="off"
              />

              <LoadingButton
                variant="outlined"
                type="submit"
                color="inherit"
                loading={loading}
                sx={{}}
              >
                Send 🫡
              </LoadingButton>
            </Stack>
          </form>
        </Grid>
      </Paper>
    </Modal>
  );
}

export default SendModal;
