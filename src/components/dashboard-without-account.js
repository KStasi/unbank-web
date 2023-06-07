import React, { useEffect, useState } from "react";
import { Stack, Grid } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Card from "../components/card";
import Autopayment from "../components/autopayment";

function DashboardWithoutAccount({}) {
  return (
    <Grid
      container
      xs={12}
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
      <Typography variant="h1" align="center" sx={{ mt: 7, fontSize: "200px" }}>
        😱
      </Typography>
      <Typography variant="h4" align="center" sx={{ mb: 4 }}>
        Oops, it seams you don't
        <br />
        have any account yet
      </Typography>
      <Button variant="outlined" color="secondary" sx={{}}>
        Request Account Now ❤️
      </Button>
    </Grid>
  );
}

export default DashboardWithoutAccount;
