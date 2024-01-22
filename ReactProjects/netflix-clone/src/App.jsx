import { useState } from 'react'
import './App.css'
import HomePage from './pages/HomePage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { UserPage } from './pages/UserPage'

function App() {



  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/user-page' element={<UserPage/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App
