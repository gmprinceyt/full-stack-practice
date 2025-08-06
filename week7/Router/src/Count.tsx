import React, { useState } from 'react'

/**
 * ✅ Simple Definition:
 * Props drilling is when you pass data from a top-level component to a deep child component
 * by going through several layers of intermediate components that don’t use the data, just pass it down.
 * 
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