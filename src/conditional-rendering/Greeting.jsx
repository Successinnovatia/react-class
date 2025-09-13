import React, { useState } from 'react'

export default function Greeting() {
    // Conditional Rendering
    // 1. if-else
    

    const [isLoggedIn, setIsLoggedIn] = useState(true);
   

    if (isLoggedIn) {
        return <h1>Welcome back!</h1>;
    }

    else {
        return <h1>Please sign up.</h1>;
    }

  return (
    <div>
        
    </div>
  )
}
