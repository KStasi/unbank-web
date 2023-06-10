import React, { useEffect, useState } from "react";
import { Stack, Grid } from "@mui/material";
import WelcomeContainer from "../layout/welcome-container";
import TopBar from "../components/top-bar";
// import Card from "../components/card";
// import Autopayment from "../components/autopayment";
import UserDashboard from "../components/user-dashboard";
import DashboardWithoutAccount from "../components/dashboard-without-account";

import useRetailAddress from "../hooks/use-retail-address";
import useRetailAddressInitiated from "../hooks/use-retail-address-initiated";

function UserPage({ onDisconnect, onLogin, address, venomConnect }) {
  const { retailAccountAddress, onCreateAccount } = useRetailAddress(
    address,
    venomConnect
  );
  const { retailAccountInitiated } = useRetailAddressInitiated(
    retailAccountAddress,
    venomConnect
  );

  return (
    <>
      <Stack direction="column" spacing={0}>
        <TopBar
          onDisconnect={onDisconnect}
          onLogin={onLogin}
          address={address}
        />
        {retailAccountInitiated ? (
          <UserDashboard
            retailAccountAddress={retailAccountAddress}
            venomConnect={venomConnect}
            userAddress={address}
          />
        ) : (
          <DashboardWithoutAccount
            address={address}
            onCreateAccount={onCreateAccount}
          />
        )}
      </Stack>
    </>
  );
}

export default UserPage;
