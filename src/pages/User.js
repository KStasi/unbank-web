import React, { useEffect, useState } from "react";
import { Stack, Grid } from "@mui/material";
import WelcomeContainer from "../layout/welcome-container";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
import TopBar from "../components/top-bar";
// import Card from "../components/card";
// import Autopayment from "../components/autopayment";
import UserDashboard from "../components/user-dashboard";
import DashboardWithoutAccount from "../components/dashboard-without-account";

function UserPage({ onDisconnect, onLogin, address }) {
  return (
    <WelcomeContainer>
      <Stack direction="column" spacing={0}>
        <TopBar
          onDisconnect={onDisconnect}
          onLogin={onLogin}
          address={address}
        />
        {/* <UserDashboard /> */}
        <DashboardWithoutAccount />
      </Stack>
    </WelcomeContainer>
  );
}

export default UserPage;
