import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Youtube from './Components/youTube1'
import Youtube1 from './Components/myotube'
import { Routes, Route } from 'react-router-dom'
import SignUp from './Components/signUp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<SignUp />}></Route>
        <Route path="/Youtube" element={<Youtube />}></Route>
        {/* <Route path="/Youtube/:id" element={<Youtube1 />}></Route> */}
      </Routes>


    </>
  )
}

export default App
