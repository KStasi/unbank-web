import React from "react";
import { Stack, Grid } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Autopayment from "./autopayment";

function AutomaticPaymentScreen({ autopayments }) {
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
  );
}

export default AutomaticPaymentScreen;
