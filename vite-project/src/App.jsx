import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  function increseCount() {
    setCount(prevCount => prevCount+1)
    setCount(prevCount => prevCount+1)
    setCount(prevCount => prevCount+1)
  }

  return (
    <>
      <h1 className='bg-green-500 text-black p-4 rounded-sm mb-4'>Tailwind test</h1>
      <button onClick={increseCount} className='mb-2'>
        hit me !! {count}
      </button>
      <Card channel="chai aur code"/>
      <Card/>
    </>
  )
}

export default App
