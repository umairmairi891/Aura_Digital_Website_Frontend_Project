import { useState } from 'react'
import Navbar from './Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer/Footer'
import './index.css'

function App() {

  return (
    <>
       <Navbar />
        <Outlet />
      <Footer />
    </>
  )
}

export default App
