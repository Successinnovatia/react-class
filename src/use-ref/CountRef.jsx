import React, { useRef, useState } from 'react'

function CountRef() {

    //syntax
    // const userefContainer = useref(initialValue)

    //accessed using .current property
    // userefContainer.current

    // const count = useRef(0)

    // count.current = 5

    // console.log(count.current)

    //Accessing DOM element 
    // 
    
    const [count, setCount] = useState(0)
    const renderedRef = useRef(5)

    const handleIncrement = () => {
        setCount(count + 1)
        
    }

  return (
    <div>
        {/* <input ref={inputRef} type="text" placeholder='type something here'/>
        <button onClick={handleClick}>Focus Input</button> */}

        <h1 className='text-3xl font-bold'>Count Ref</h1>
        <h2 className='text-2xl font-semibold'>Count: {count}</h2>
        <h2 className='text-2xl font-semibold'>Rendered Ref: {renderedRef.current}</h2>

        <button className='bg-amber-400 text-white p-2' onClick={handleIncrement}>increase count </button>
    </div>
  )
}

export default CountRef