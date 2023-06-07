import React from "react";
import { Stack, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import Autopayment from "./autopayment";
import AutopaymentBanner from "./autopayment-banner";

function NoAutomaticPaymentScreen({}) {
  const defaultAutopayments = [
    {
      text: "Never miss a bill payment",
    },
    {
      text: "Automate pocket money for your kids",
    },
    {
      text: "Effortlessly grow your savings",
    },
    {
      text: "Stress-free charitable donations",
    },
    {
      text: "Streamline loan repayments",
    },
    {
      text: "...And much more with your imagination!",
    },
  ];

  return (
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
        px: "15px",
      }}
    >
      <Grid item spacing={1}>
        <Typography variant="h6" align="left" sx={{ mt: 1, mb: 3 }}>
          The Life is Easier With Automations
        </Typography>
      </Grid>
      <Grid item spacing={1} direction="column">
        <Stack direction="column" spacing={1} alignContent={"center"}>
          {defaultAutopayments.map((autopayment, index) => (
            <AutopaymentBanner {...autopayment} />
          ))}
        </Stack>
      </Grid>
    </Grid>
  );
}

export default NoAutomaticPaymentScreen;
