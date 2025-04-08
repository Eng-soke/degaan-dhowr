import React from "react"
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Services from "./pages/Services"
function App() {
  return <div>
    
    <Routes>

      <Route path="/" element={<Home/>} />
      <Route path="/services" element={<Services/>} />


    </Routes>

  </div>
}

export default App
