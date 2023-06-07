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
import getRetailAccount from "../venom/get-retail-account";
import getBalance from "../venom/get-balance";

const useRetailAddress = (address, venomConnect) => {
  const [retailAccountAddress, setRetailAccountAddress] = useState();

  const getRetailAccountAddress = async (provider) => {
    if (!provider || !provider.currentProvider || !address) return;
    const retailAccountAddressPrecalculated = await getRetailAccount(
      provider.currentProvider,
      address
    );
    return retailAccountAddressPrecalculated;
  };

  useEffect(() => {
    console.log("address");
    (async () => {
      const retailAccountAddressPrecalculated = await getRetailAccountAddress(
        venomConnect
      );
      if (!retailAccountAddress != retailAccountAddressPrecalculated)
        setRetailAccountAddress(retailAccountAddressPrecalculated);
    })();
  }, [address]);
  return { retailAccountAddress };
};

const useRetailAddressInitiated = (retailAccountAddress, venomConnect) => {
  const [retailAccountInitiated, setRetailAccountInitiated] = useState();

  const checkRetailAccountCreated = async (provider) => {
    if (!provider || !provider.currentProvider || !retailAccountAddress) return;
    const balance = await getBalance(
      provider.currentProvider,
      retailAccountAddress
    );
    return balance > 0;
  };

  useEffect(() => {
    (async () => {
      const initiated = await checkRetailAccountCreated(venomConnect);
      if (initiated != retailAccountInitiated)
        setRetailAccountInitiated(initiated);
    })();
  }, [retailAccountAddress]);
  return { retailAccountInitiated };
};

function UserPage({ onDisconnect, onLogin, address, venomConnect }) {
  console.log("address", address);
  const { retailAccountAddress } = useRetailAddress(address, venomConnect);
  const { retailAccountInitiated } = useRetailAddressInitiated(
    retailAccountAddress,
    venomConnect
  );
  console.log("retailAccountAddress", retailAccountAddress);

  return (
    <WelcomeContainer>
      <Stack direction="column" spacing={0}>
        <TopBar
          onDisconnect={onDisconnect}
          onLogin={onLogin}
          address={address}
        />
        {retailAccountInitiated ? (
          <UserDashboard />
        ) : (
          <DashboardWithoutAccount />
        )}
      </Stack>
    </WelcomeContainer>
  );
}

export default UserPage;
