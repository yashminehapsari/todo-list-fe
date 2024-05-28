import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './components/Todo/Todo'

function App() {

  return (
      <div className='d-flex flex-column justify-content-center align-self-center'>
        <Todo />
      </div>
  )
}

export default App
