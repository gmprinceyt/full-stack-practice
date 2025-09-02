import { useEffect, useState } from "react";

const App = () => {
  const [some, setSome] = useState("");
  const value = useDebounce(some, 1000);
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen">
      <input
        type="text"
        className="rounded-lg border-2 border-gray-400 py-1 px-2 placeholder:text-sm"
        onChange={(e) => setSome(e.target.value)}
        placeholder="Enter Some Text"
      />
      Debounced Value: {value}
    </div>
  );
};

export const useDebounce = <T,>(value: T, delay: number): T => {
  const [debouncedValue, SetDebouncedValue] = useState<T>();
  useEffect(() => {
    let timeout = setTimeout(() => {
      SetDebouncedValue(value);
    }, delay);
    return () => {
      clearInterval(timeout);
    };
  }, [value]);
  return debouncedValue!;
};

/**
 * Google Defination 
 * used to limit the rate at which a function is executed, 
 * particularly when that function is triggered by events that occur rapidly and repeatedly, 
 * such as user input (typing), window resizing, or scrolling. 
 * @param callbackFn 
 * @param delay 
 * 
 * useDenounce Usecase 
 *   const value = useDebounce(some, 1000);
 */

export const useInterval = (callbackFn: () => void, delay: number) => {
  useEffect(() => {
    const timeout = setInterval(callbackFn, delay);
    console.log("Mounted");
    return () => clearInterval(timeout);
  }, [callbackFn, delay]);
};
/**
 * useInterval Usecase - runs a certain callback function every n seconds.
 * useInterval(function () {
    setCount((p) => p + 1);
  }, 200);
 */

export default App;
