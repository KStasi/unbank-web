import React, { useState } from "react";
import { Stack, Grid } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Autopayment from "./autopayment";
import AddAutopaymentModal from "../modals/add-autopayment";
import LoadingButton from "@mui/lab/LoadingButton";

function AutomaticPaymentScreen({
  autopayments,
  venomConnect,
  retailAccountAddress,
  onAutopaymentCreated,
  cards,
  userAddress,
}) {
  const [addAutopamentModalOpenned, setAddAutopaymentModalOpenned] =
    useState(false);
  const handleAddAutopaymentModalOpen = () => {
    setAddAutopaymentModalOpenned(true);
  };
  const handleAddAutopaymentModalClose = () => {
    setAddAutopaymentModalOpenned(false);
  };

  return (
    <Grid
      item
      xs={12}
      md={3}
      container
      direction="column"
      sx={{
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
      <Grid item spacing={1} direction="column">
        <Stack direction="column" spacing={1}>
          {autopayments.map((autopayment, index) => (
            <Autopayment {...autopayment} />
          ))}
        </Stack>
      </Grid>
      <br />
      <Grid item>
        <LoadingButton
          variant="outlined"
          color="inherit"
          onClick={handleAddAutopaymentModalOpen}
          sx={{ width: "100%" }}
        >
          Add Autopayment 🔁
        </LoadingButton>
        <AddAutopaymentModal
          userAddress={userAddress}
          venomConnect={venomConnect}
          open={addAutopamentModalOpenned}
          handleClose={handleAddAutopaymentModalClose}
          cards={cards}
          retailAccountAddress={retailAccountAddress}
          onAutopaymentCreated={onAutopaymentCreated}
        />
      </Grid>
    </Grid>
  );
}

export default AutomaticPaymentScreen;
