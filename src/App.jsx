import { useState } from 'react'
import Greeting from './conditional-rendering/Greeting'
import UserStatus from './conditional-rendering/UserStatus'
import Warning  from './conditional-rendering/Warning'
import Login from './conditional-rendering/Login'
import NameList from './lists-in-react/NameList'
import ProductList from './lists-in-react/ProductList'
import FilteredLists from './lists-in-react/FilteredLists'
import FindList from './lists-in-react/FindList'
import NameForm from './controlled-inputs/NameForm'
import Todo from './todo-app/Todo'
import Counter from './use-effect/Counter'
import PostList from './use-effect/PostList'
import CountRef from './use-ref/CountRef'
import ExpensiveCalculation from './use-memo/ExpensiveCalculation'
import Note from './note-app/Note'


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
      {/* <FilteredLists/> */}
      {/* <FindList/> */}
      {/* <NameForm/> */}
      {/* <Todo/> */}
      {/* <Counter/> */}
      {/* <PostList/> */}
      {/* <CountRef/> */}
      {/* <ExpensiveCalculation/> */}
      <Note/>
    </>
  )
}

export default App
