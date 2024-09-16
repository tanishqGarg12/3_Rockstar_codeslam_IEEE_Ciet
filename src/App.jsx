import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Sec1 from './components/Sec1'
import Sec4 from './components/Sec4'
import Sec7 from './components/Sec7'


export default function App() {
  return (
    <div className=' h-screen'>
      <Sec1/>
      <Sec4/>
      <Sec7/>
    </div>
  )
}