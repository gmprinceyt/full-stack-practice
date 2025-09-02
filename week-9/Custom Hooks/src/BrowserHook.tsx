import { useEffect, useState } from "react";

const App = () => {
  const { innerWidth, innerHeight } = useDimensions();
  return (
    <div className="flex flex-col overflow-hidden justify-center w-full h-screen items-center ">
      <strong>Cohort 2.0</strong>
      <div className="flex  justify-center w-full h-screen items-center ">
        Current Window Dimension - X:{innerHeight} , Y:{innerWidth}
      </div>
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

/*
 * !useMousePointer Usecase , Component
 *   const { clientX, clientY } = useMousePointer(); 
 * <div className="flex  justify-center w-full h-screen items-center ">
    Current mouse position - X:{clientX} , Y:{clientY}
    </div>
 */
type TMouesPosition = {
  clientX: number;
  clientY: number;
};

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

const useDimensions = () => {
  const [dimension, setDimension] = useState<TWindowDimension>({
    innerHeight: window.innerHeight,
    innerWidth: window.innerWidth,
  });
  useEffect(() => {
    function resizeHandle() {
      setDimension({
        innerHeight: window.innerHeight,
        innerWidth: window.innerWidth
      })
    }
    window.addEventListener("resize", resizeHandle);
    return ()=> window.removeEventListener("resize", resizeHandle);
  });

  return dimension;
};
type TWindowDimension = {
  innerHeight: number;
  innerWidth: number;
};
