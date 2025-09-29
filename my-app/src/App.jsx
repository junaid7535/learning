import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const handle = () => {
    setCount(count + 1);
  }

  const handleDec = () => {
    if(count > 0) setCount(count - 1);
  }

  return (
    <>
      
      <h1>Vite + React</h1>
      
      <h2 className='bg-blue-500 text-5xl font-bold mx-10 font-bold text-9xl'>Hello World</h2>

      <input type="text" className=' border-solid outline
      border-5 border-cyan-50 mx-10 mt-10 rounded-sm p-3' />

      <button className='cursor-pointer bg-blue-100 border 
      
      font-serif text-3xl text-sky-300

      rounded-2xl p-4 m-10' onClick={handle}>Inc</button>

      <button className='cursor-pointer bg-blue-100 border 
      
      font-serif text-3xl text-sky-300

      rounded-2xl p-4 m-10' onClick={handleDec}>Dec</button>

      <h1 className='text-4xl ml-80'>Count : {count}</h1>
    </>
  )
}

export default App
