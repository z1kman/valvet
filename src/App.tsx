import React from 'react'

import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Routes
import { Main } from './routes/Main'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
