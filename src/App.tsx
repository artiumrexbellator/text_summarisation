import { useState } from 'react'
import './App.css'
import { Header } from './components/header'
import Body from './components/body'

function App() {
  const [count, setCount] = useState(0)
  const [darkToggle, setDarkToggle] = useState(false)

  return (
    <div className='dark:bg-gray-900 min-h-screen'>
      <Header />
      <Body />
    </div>
  )
}

export default App
