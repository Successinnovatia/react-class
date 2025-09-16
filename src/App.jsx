import { useState } from 'react'
import Greeting from './conditional-rendering/Greeting'
import UserStatus from './conditional-rendering/UserStatus'
import Warning  from './conditional-rendering/Warning'
import Login from './conditional-rendering/Login'
import NameList from './lists-in-react/NameList'
import ProductList from './lists-in-react/ProductList'
import FilteredLists from './lists-in-react/FilteredLists'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Greeting/>
      <UserStatus/>
      <Warning/> */}
      {/* <Login/> */}
      {/* <NameList/> */}
      {/* <ProductList/> */}
      <FilteredLists/>
    </>
  )
}

export default App
