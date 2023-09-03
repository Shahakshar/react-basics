import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setlength] = useState(6)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [characterAllowed, setCharaterAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordRef = useRef(null)

  const passwordGenrator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrsstuvwxyz"

    if (numberAllowed) str += "0123456789"
    if (characterAllowed) str += "!@#$%^&*_+-./:;<=>?{}[]"

    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length, numberAllowed, characterAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 20)
    window.navigator.clipboard.writeText(password)
  }, [password, length])

  useEffect(() => {
    passwordGenrator()
  }, [length, numberAllowed, characterAllowed, passwordGenrator])

  return (
    <>
      <div className=' w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800'>
        <h1 className=' text-white text-center my-3'>Password Generator</h1>
        <div className=' flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            type="text"
            value={password}
            className=' outline-none w-full py-3 px-4'
            placeholder=' password'
            readOnly
            ref={passwordRef}
          />
          <button onClick={copyPasswordToClipboard} className=' outline-none text-white bg-blue-700 px-3 py-0.5 shrink-0'>Copy</button>
        </div>
        <div className=' flex justify-center text-sm gap-x-2 '>
          <div className=' flex items-center gap-x-1'>
            <input
              onChange={(e) => { setlength(e.target.value) }}
              type="range"
              min={6}
              max={100}
              value={length}
              className=' cursor-pointer'
            />
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id='numberInput'
              onChange={() => {
                setNumberAllowed((prev) => !prev)
              }}
            />
            <label>Number</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={characterAllowed}
              id='charInput'
              onChange={() => {
                setCharaterAllowed((prev) => !prev)
              }}
            />
            <label>Character</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
