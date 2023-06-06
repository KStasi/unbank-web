import React, { useEffect, useState } from "react";

// import "./styles/main.css";

import { initVenomConnect } from "./providers/venom-provider";
import MainPage from "./pages/Main";
// import WelcomePage from "./pages/Welcome";
// import UserPage from "./pages/User";

function App() {
  const [venomConnect, setVenomConnect] = useState();
  const init = async () => {
    const _venomConnect = await initVenomConnect();
    setVenomConnect(_venomConnect);
  };
  useEffect(() => {
    init();
  }, []);
  return <MainPage venomConnect={venomConnect} />;
  // return <Main venomConnect={venomConnect} />;
}

export default App;
