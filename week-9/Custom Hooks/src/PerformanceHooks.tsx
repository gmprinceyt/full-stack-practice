import { useEffect } from "react";

export const useInterval = (callbackFn: () => void, delay: number) => {
  useEffect(() => {
    const timeout = setInterval(callbackFn, delay);
    console.log("Mounted");
    return () => clearInterval(timeout);
  }, []);
};
