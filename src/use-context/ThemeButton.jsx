import React from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { useContext } from 'react'
import { Moon } from 'lucide-react';
import { Sun } from 'lucide-react';


function ThemeButton() {
    const {theme, toggleTheme} = useContext(ThemeContext)

  return (
    <div>
        <button onClick={toggleTheme}>
            {theme === 'light' ? <Moon/> : <Sun/> }
        </button>
    </div>
  )
}

export default ThemeButton