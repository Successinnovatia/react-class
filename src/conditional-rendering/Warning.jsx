import React from 'react'

function Warning() {
    // 3. LOgical AND (&&) Operator
    const show = true
    const age = 28
    const height = 180

    if(age > 18 && height >= 180) {
       return <div className='bg-red-200 p-4'>
        <h1>This is the result</h1>
        <h1>User is Eligible for the ride</h1>
       </div>    
    }

    else if (age > 18 && height < 180) {
        return <h1>User is not Eligible for the ride due to height</h1>
    }

    else if (age < 18 && height >= 180) {
        return <h1>User is not Eligible for the ride due to age</h1>
    }

    // else {
    //     return <h1>User is not Eligible for the ride due to age and height</h1>
    // }


  return (
    <div>
        <h1>Main Content</h1>
        <h1>User is not Eligible for the ride due to age and height</h1>
    </div>
  )
}

export default Warning