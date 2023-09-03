import {useState} from 'react'

function App() {
  const [color, setColor] = useState("olive");
  return (
    <>
      <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
        <div className=' fixed flex flex-wrap bottom-12 justify-center inset-x-0 px-2'>
          <div className=' flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-sm'>
            <button
            onClick={() => setColor("red")}
            className=' outline-none px-2 py-1 rounded-sm text-white shadow-lg' style={{background: 'red'}}>red
            </button>
            <button
            onClick={() => setColor("green")}
            className=' outline-none px-2 py-1 rounded-sm text-white shadow-lg' style={{background: 'green'}}>green
            </button>
            <button
            onClick={() => setColor("blue")}
            className=' outline-none px-2 py-1 rounded-sm text-white shadow-lg' style={{background: 'blue'}}>Red
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
