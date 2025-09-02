import { useEffect, useState } from "react";

const useIsOnline = () => {
  const [isOnline, SetIsOnline] = useState<Boolean>(window.navigator.onLine);
  useEffect(() => {
    window.addEventListener("online", () => SetIsOnline(true));
    window.addEventListener("offline", () => SetIsOnline(false));
  }, []);
  return isOnline;
};

const App = () => {
    const  isOnline = useIsOnline();
  return (
    <div className="flex  justify-center w-full h-screen items-center ">
      {
        isOnline ? <h3 className="text-xl p-2 bg-green-900 border border-green-400 rounded-md text-white">You are online yay! 😍</h3> : <h3 className="text-xl bg-red-900 p-2 border border-red-400 rounded-md text-white">You are offline, please connect to the internet 😒</h3>
      }
    </div>
  );
};

export default App
