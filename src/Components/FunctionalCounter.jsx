import React, { useState } from 'react'

function FunctionalCounter() {
    const [count,setCount] = useState(0);
  return (
    <div>
        <h3>Assignment-2 Functional Counter Application</h3>
        <p>{count}</p>
        <button onClick={() => setCount(prev => prev + 1)}>Increment</button>
        <button onClick={() => setCount(prev => Math.max(prev - 1, 0))} disabled={count === 0}>Decrement</button>
      
    </div>
  )
}

export default FunctionalCounter
