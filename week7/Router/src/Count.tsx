import React, { useContext, useState } from "react";
import { CountContext } from "./Context";

/**
 * ✅ Simple Definition:
 * Props drilling is when you pass data from a top-level component to a deep child component
 * by going through several layers of intermediate components that don’t use the data, just pass it down.
 *
 */

/**
 * ✅ How to Explain in Interview:
 * "Props drilling happens when we need to send data from a parent to a deep child,
 * but we have to pass that data through many components in between.
 * Those middle components don’t use the data—they just pass it forward.
 * It can make the code messy and harder to manage.
 * That’s why we use solutions like Context API, Redux, or Zustand to avoid props drilling."
 */

/**
 * ✅ One-line Summary:
“Props drilling is when we pass data through many layers of components just to reach the one that actually needs it.”
 */

const Count = () => {
  const [Count, setCount] = useState(0);
  return (
    <div style={{ padding: "50px " }}>
      <CountContext.Provider value={Count}>
        <Show setCount={setCount} />
      </CountContext.Provider>
    </div>
  );
};

function Show({
  setCount,
}: {
  setCount: React.Dispatch<React.SetStateAction<number>>;
}) {
    const Count = useContext(CountContext)
  return (
    <>
      <b>{Count}</b>
      <Buttons setCount={setCount} />
      <Show2/>
    </>
  );
}

function Show2() {
    const Count = useContext(CountContext)
  return (
    <>
      <b>{Count}</b>
    </>
  );
}

function Buttons({
  setCount,
}: {
  setCount: React.Dispatch<React.SetStateAction<number>>;
}) {
        const Count = useContext(CountContext)

  return (
    <div>
      <button onClick={() => setCount(Count + 1)}>increase</button>
      <button onClick={() => setCount(Count - 1)}>Decrease</button>
    </div>
  );
}

export default Count;
