import { useEffect, useState } from "react";

const App = () => {
  const { clientX, clientY } = useMousePointer();

  return (
    <div className="flex  justify-center w-full h-screen items-center ">
      Current mouse position - X:{clientX} , Y:{clientY}
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
    console.log("Mounted useMousePointer ");
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  return mousePosition;
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
    window.addEventListener("online", () => SetIsOnline(true));
    window.addEventListener("offline", () => SetIsOnline(false));
  }, []);
  return isOnline;
};

/*
* ! useIsOnline Usecase,  Component
{
  const isOnline = useIsOnline();
* isOnline ? <h3 className="text-xl p-2 bg-green-900 border border-green-400 rounded-md text-white">You are online yay! 😍</h3> : * * <h3 * className="text-xl bg-red-900 p-2 border border-red-400 rounded-md text-white">You are offline, please connect to the * * * * internet 😒</* h3>
*/
type TMouesPosition = {
  clientX: number;
  clientY: number;
};
