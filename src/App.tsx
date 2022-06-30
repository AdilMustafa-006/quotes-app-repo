import React from 'react'
import './App.css'
import './fonts/Inter-Medium.ttf';


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import './App.css'
import Home from './pages/Home'

function App () {
  return (
    <div className='font-face-quotes'>
      <Router>
        <div>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App
