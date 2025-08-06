import React, { useState } from 'react'

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
    const [Count , setCount ] = useState(0)
  return (
    <div style={{
        padding: "50px "
    }}>
        <Show Count={Count} setCount={setCount} />
    </div>
  )
}

function Show({Count, setCount}:{Count: number, setCount: React.Dispatch<React.SetStateAction<number>>}){
    return (
        <>
        <b>{Count}</b>
                <Buttons setCount={setCount}/>

        </>

    )
}

function Buttons({setCount}: {setCount: React.Dispatch<React.SetStateAction<number>> }) {
    return (
        <div>

            <button onClick={()=> setCount(p => p + 1)}>increase</button>
            <button onClick={()=> setCount(p => p - 1)}>Decrease</button>
        </div>
    )
}


export default Count