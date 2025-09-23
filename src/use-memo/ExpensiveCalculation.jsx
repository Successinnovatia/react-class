import React, { useState, useMemo } from 'react'

function ExpensiveCalculation() {
    const [count, setCount] = useState(0)
    const [darkMode, setDarkMode] = useState(false)

    

    const dollarRate = 1500

    useMemo(()=>{
        console.log('Calculating...')
        // let result = 0;
        // for (let i=0; i<100000000; i++){
        //     result +=1
        // }

        // return result + count

        let countInDollar = count * dollarRate
        return countInDollar
    },[dollarRate])

  return (
    <div className='p-5' style={{backgroundColor: darkMode ? 'black' : 'white', color: darkMode ? 'white' : 'black'}}>
        <h1 className='text-3xl font-bold'>Expensive Calculation</h1>
        <h2 className='text-2xl font-semibold'>Count: {count}</h2>
        <div className="flex flex-col space-y-4">
            <button onClick={()=>setCount(count + 1)} className='bg-amber-400 text-white p-2'>Increase Count</button>
        <button onClick={()=>setDarkMode(!darkMode)} className='bg-amber-400 text-white p-2'>toggle dark mode</button>
        </div>
    </div>
  )
}

export default ExpensiveCalculation