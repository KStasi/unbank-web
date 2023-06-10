import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import LoadingButton from "@mui/lab/LoadingButton";
import postCreateAccount from "../api/post-create-account";

function DashboardWithoutAccount({ address }) {
  const [loading, setLoading] = useState(false);

  function handleClick() {
    postCreateAccount(address.toString());
    setLoading(true);
  }

  return (
    <Grid
      container
      xs={12}
      direction="column"
      spacing={1}
      sx={{
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
      <LoadingButton
        onClick={handleClick}
        loading={loading}
        variant="outlined"
        color="inherit"
      >
        Request Account Now ❤️
      </LoadingButton>
    </Grid>
  );
}

export default DashboardWithoutAccount;
