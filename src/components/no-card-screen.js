import React from "react";
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AddCardModal from "../modals/add-card";

function NoCardScreen({}) {
  return (
    <Grid
      item
      container
      xs={12}
      md={9}
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
      <Typography variant="h1" align="center" sx={{ mt: 7, fontSize: "100px" }}>
        😒
      </Typography>
      <Typography variant="h6" align="center" sx={{ m: 3 }}>
        Hey, you've been here for 2 minutes
        <br />
        and haven't created any card yet!
      </Typography>
      <Button variant="outlined" color="inherit" sx={{}}>
        Issue immediately ⚡️
      </Button>
    </Grid>
  );
}

export default NoCardScreen;
