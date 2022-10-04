import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import NavLayout from 'layouts/NavLayout.js'
import Home from 'pages/Home.js'
import Genshin from 'pages/Genshin.js'
import Mario from 'pages/Mario.js'

import 'App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavLayout />}>
          <Route index element={<Home />} />
          <Route path="genshin" element={<Genshin />} />
          <Route path="mario" element={<Mario />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
