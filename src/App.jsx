import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import TodoCard from './components/TodoCard'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className='d-flex flex-wrap gap-3 m-3'>
        <TodoCard />
      </div>
  )
}

export default App
