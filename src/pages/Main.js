import React, { useEffect, useState } from "react";
import { VenomConnect } from "venom-connect";

function Main({ venomConnect }) {
  const [venomProvider, setVenomProvider] = useState();
  const [standaloneProvider, setStandAloneProvider] = useState();
  const [address, setAddress] = useState();
  // This method allows us to gen a wallet address from inpage provider
  const getAddress = async (provider) => {
    const providerState = await provider?.getProviderState?.();
    return providerState?.permissions.accountInteraction?.address.toString();
  };
  // Any interaction with venom-wallet (address fetching is included) needs to be authentificated
  const checkAuth = async (_venomConnect) => {
    const auth = await _venomConnect?.checkAuth();
    if (auth) await getAddress(_venomConnect);
  };
  // Method for getting a standalone provider from venomConnect instance
  const initStandalone = async () => {
    const standalone = await venomConnect?.getStandalone();
    setStandAloneProvider(standalone);
  };
  // Handling click of login button. We need to call connect method of out VenomConnect instance, this action will call other connect handlers
  const onLogin = async () => {
    if (!venomConnect) return;
    await venomConnect.connect();
  };
  // This handler will be called after venomConnect.login() action
  // connect method returns provider to interact with wallet, so we just store it in state
  const onConnect = async (provider) => {
    setVenomProvider(provider);
    await onProviderReady(provider);
  };
  // This handler will be called after venomConnect.disconnect() action
  // By click logout. We need to reset address and balance.
  const onDisconnect = async () => {
    venomProvider?.disconnect();
    setAddress(undefined);
  };
  // When our provider is ready, we need to get address and balance from.
  const onProviderReady = async (provider) => {
    const venomWalletAddress = provider
      ? await getAddress(provider)
      : undefined;
    setAddress(venomWalletAddress);
  };
  useEffect(() => {
    // connect event handler
    const off = venomConnect?.on("connect", onConnect);
    if (venomConnect) {
      initStandalone();
      checkAuth(venomConnect);
    }
    // just an empty callback, cuz we don't need it
    return () => {
      off?.();
    };
  }, [venomConnect]);
  return (
    <div className="box">
      <header>
        {address ? (
          <>
            {" "}
            <p>{address}</p>
            <a className="logout" onClick={onDisconnect}>
              Logout
            </a>
          </>
        ) : (
          <a className="btn" onClick={onLogin}>
            Connect wallet
          </a>
        )}
      </header>
    </div>
  );
}
export default Main;
