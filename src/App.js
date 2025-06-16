import { HashRouter, Routes, Route } from 'react-router-dom'

import ScrollToTop from 'components/ScrollToTop.js'
import NavLayout from 'layouts/NavLayout.js'
import ProjectLayout from 'layouts/ProjectLayout.js'
import Home from 'pages/Home.js'

import 'App.css'

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<NavLayout />}>
          <Route index element={<Home />} />
          <Route path=':projectId' element={<ProjectLayout />}>
          </Route>
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App
