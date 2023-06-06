import React, { useEffect, useState } from "react";
import { Stack, Grid } from "@mui/material";
import WelcomeContainer from "../layout/welcome-container";
import WelcomeHeader from "../components/welcome-header";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import UserPage from "./User";

function WelcomePage({ setRole }) {
  const setUserRole = () => {
    setRole("user");
  };

  return (
    <WelcomeContainer>
      <Stack direction="column" spacing={0}>
        <WelcomeHeader />
        <Grid container spacing={0}>
          <Grid
            item
            xs={12}
            md={6}
            lg={6}
            container="true"
            direction="column"
            sx={{
              backgroundColor: "#042f22",
              height: "100vh",
              align: "center",
              alignContent: "center",
              paddingTop: "15%",
            }}
          >
            <Typography variant="h1" align="center" sx={{ fontSize: "150px" }}>
              🐯
            </Typography>
            <Button color="success" variant="outlined">
              Managing Tiger
            </Button>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            lg={6}
            container="true"
            direction="column"
            sx={{
              backgroundColor: "#011132",
              height: "100vh",
              align: "center",
              alignContent: "center",
              paddingTop: "15%",
            }}
          >
            <Typography variant="h1" align="center" sx={{ fontSize: "150px" }}>
              🦊
            </Typography>
            <Button color="warning" variant="outlined" onClick={setUserRole}>
              Relaxing Fox
            </Button>
          </Grid>
        </Grid>
      </Stack>
    </WelcomeContainer>
  );
}

export default WelcomePage;
