import { useEffect } from "react";

const useInterval = (callback, period = 10000) => {
  useEffect(() => {
    const interval = setInterval(callback, period);
    return () => clearInterval(interval);
  }, []);
};

export default useInterval;
