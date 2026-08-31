import { useEffect } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Nav from './components/Nav/Nav.jsx'
import Home from './pages/Home.jsx'
import ProjectPage from './pages/ProjectPage.jsx'
import projects from './data/projects.js'

const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  return (
    <>
      <div className="ambient-glow" />
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Navigate to={`/work/${projects[0].slug}`} replace />} />
        <Route path="/work/:slug" element={<ProjectPage />} />
      </Routes>
    </>
  )
}

export default App
