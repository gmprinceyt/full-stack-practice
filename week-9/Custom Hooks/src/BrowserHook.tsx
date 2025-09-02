import { useEffect, useState } from "react";
import { useInterval } from "./PerformanceHooks";

const App = () => {
  const [count, setCount] = useState(0);
  useInterval(function () {
    setCount((p) => p + 1);
  }, 200);

  return (
    <div className="flex flex-col  justify-center w-full h-screen items-center ">
      <strong>Cohort 2.0</strong>
      <p>Timeout {count}</p>
    </div>
  );
};

export default App;

const useMousePointer = () => {
  const [mousePosition, setMousePosition] = useState<TMouesPosition>({
    clientX: 0,
    clientY: 0,
  });

  useEffect(() => {
    function handleMouseMove(e: MouseEvent) {
      setMousePosition({
        clientX: e.clientX,
        clientY: e.clientY,
      });
    }
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return mousePosition;
};
type TMouesPosition = {
  clientX: number;
  clientY: number;
};
/**
 * useMousePointer Usecase , Component
 *   const { clientX, clientY } = useMousePointer(); 
 * <div className="flex  justify-center w-full h-screen items-center ">
    Current mouse position - X:{clientX} , Y:{clientY}
    </div>
 */

const useIsOnline = () => {
  const [isOnline, SetIsOnline] = useState<Boolean>(window.navigator.onLine);
  useEffect(() => {
    const handleOnline = () => SetIsOnline(true);
    const handleOffline = () => SetIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("mousemove", handleOnline);
      window.removeEventListener("mousemove", handleOffline);
    };
  }, []);
  return isOnline;
};

/*
* ! useIsOnline Usecase,  Component
{
  const isOnline = useIsOnline();
* isOnline ? <h3 className="text-xl p-2 bg-green-900 border border-green-400 rounded-md text-white">You are online yay! 😍</h3> : * * <h3 * className="text-xl bg-red-900 p-2 border border-red-400 rounded-md text-white">You are offline, please connect to the * * * * internet 😒</* h3>
*/

