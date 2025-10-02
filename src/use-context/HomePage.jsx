import React from 'react'
import Header from './Header'
import { ThemeContext } from '../context/ThemeContext'
import { useContext } from 'react'

function HomePage() {

    const {theme} = useContext(ThemeContext)
  return (
    <div className={theme === 'light' ? '' : 'bg-black h-screen text-white'}>
        <Header/>
    </div>
  )
}

export default HomePage