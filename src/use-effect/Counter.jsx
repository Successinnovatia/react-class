import React from 'react'
import { useEffect, useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    document.title = `You clicked : ${count} times`

    // useEffect(()=>{
       
    // },[count])
  return (
    <div>
        <h1 className='text-3xl font-bold'>Count: {count}</h1>
        <button onClick={increment} className='bg-red-500 text-white p-4'>increment</button>
    </div>
  )
}

export default Counter