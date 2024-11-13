import { useState } from 'react'
import viteLogo from '/vite.svg'
import { Mainpage, Clock } from './mainpage'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <Clock/>
      <Mainpage/>
    </>
  )
}
export default App
