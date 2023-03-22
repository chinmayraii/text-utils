import React, { useState } from 'react'
import Navbar from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import TextForms from './components/TextForms';




const App = () => {
  const [mode,setMode] = useState('light');


  const toggleMode = ()=>{
    if (mode==='light')
    {
      setMode('dark')
      document.body.style.backgroundColor = 'grey'
      
    }
    else
    {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      
      
    }
  }

  return (
    <>
    <Navbar mode={mode} toggleMode={toggleMode} />
    <TextForms heading='Enter the text to analyze below ' mode={mode} />
    </>
  )
}

export default App
