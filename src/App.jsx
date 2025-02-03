import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormSubmit from './components/Page1/FormSubmit'
import Merch from './components/Page1'
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    {/* <Merch/> */}
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Merch/>} />
    <Route path="/submission" element={<FormSubmit/>} />
    </Routes>
    
    </BrowserRouter>
    {/* <Merch/> */}
    
    </>
  )
}

export default App
