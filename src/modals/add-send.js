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

function SendModal({
  open,
  handleClose,
  currencies,
  retailAccountAddress,
  currency,
  cardName,
}) {
  const [amount, setAmount] = useState(0);
  const [receiver, setReceiver] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleSubmit = useCallback(
    async (event) => {
      setLoading(true);
      event.preventDefault();
      // console.log(
      //   retailAccountAddress.toString(),
      //   cardType,
      //   currencies[currency]
      // );
      // try {
      //   if (
      //     retailAccountAddress &&
      //     cardType != undefined &&
      //     currencies[currency] &&
      //     currencies[currency].address
      //   ) {
      //     console.log(
      //       retailAccountAddress.toString(),
      //       cardType,
      //       currencies[currency].address,
      //       ""
      //     );

      //   }
      // } catch (error) {
      //   console.error(error);
      // }
      setLoading(false);
    },
    [cardName, retailAccountAddress]
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
                value={cardName}
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
