import React, { useEffect, useState } from "react";

// import "./styles/main.css";

import { initVenomConnect } from "./providers/venom-provider";
import Main from "./pages/Main";
import WelcomePage from "./pages/Welcome";

function App() {
  const [venomConnect, setVenomConnect] = useState();
  const init = async () => {
    const _venomConnect = await initVenomConnect();
    setVenomConnect(_venomConnect);
  };
  useEffect(() => {
    init();
  }, []);
  return <WelcomePage venomConnect={venomConnect} />;
  // return <Main venomConnect={venomConnect} />;
}

export default App;
