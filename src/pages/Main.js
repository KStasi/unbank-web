import React, { useEffect, useState } from "react";
import { Stack, Grid } from "@mui/material";
import WelcomeContainer from "../layout/welcome-container";
import WelcomeHeader from "../components/welcome-header";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import UserPage from "./User";
import WelcomePage from "./Welcome";

function MainPage({ venomConnect }) {
  const [role, setRole] = useState();
  const [venomProvider, setVenomProvider] = useState();
  const [standaloneProvider, setStandAloneProvider] = useState();
  const [address, setAddress] = useState();

  const getAddress = async (provider) => {
    const providerState = await provider?.getProviderState?.();
    return providerState?.permissions.accountInteraction?.address.toString();
  };

  const checkAuth = async (_venomConnect) => {
    const auth = await _venomConnect?.checkAuth();
    if (auth) await getAddress(_venomConnect);
  };

  const initStandalone = async () => {
    const standalone = await venomConnect?.getStandalone();
    setStandAloneProvider(standalone);
  };

  const onLogin = async () => {
    if (!venomConnect) return;
    await venomConnect.connect();
  };

  const onConnect = async (provider) => {
    setVenomProvider(provider);
    await onProviderReady(provider);
  };

  const onDisconnect = async () => {
    venomProvider?.disconnect();
    setAddress(undefined);
  };

  const onProviderReady = async (provider) => {
    const venomWalletAddress = provider
      ? await getAddress(provider)
      : undefined;
    setAddress(venomWalletAddress);
  };

  useEffect(() => {
    const off = venomConnect?.on("connect", onConnect);
    if (venomConnect) {
      initStandalone();
      checkAuth(venomConnect);
    }
    return () => {
      off?.();
    };
  }, [venomConnect]);

  return (
    <>
      {role ? (
        role == "user" && (
          <UserPage
            onLogin={onLogin}
            onDisconnect={onDisconnect}
            address={address}
            venomConnect={venomConnect}
          />
        )
      ) : (
        <WelcomePage setRole={setRole} />
      )}
    </>
  );
}

export default MainPage;
