import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Route, Routes } from 'react-router'
import Nav from './components/Nav.tsx'
import App from './App.tsx'
import './App.css'
import Blog from './pages/Blog.tsx'
import Portfolio from './pages/Portfolio.tsx'
import HoudiniLearningLogFoundationsWelcome from './pages/blogs/HoudiniLearningLogFoundationsWelcome.tsx'
import HoudiniLearningLogFoundationsVFX from './pages/blogs/HoudiniLearningLogFoundationsVFX.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<App />} />
          <Route path="projects" element={<Portfolio />} />

          <Route path="blog">
            <Route index element={<Blog />} />
            <Route path="houdini-learning-log-foundations-welcome" element={<HoudiniLearningLogFoundationsWelcome />} />
            <Route path="houdini-learning-log-foundations-vfx" element={<HoudiniLearningLogFoundationsVFX />} />
          </Route>

          <Route path="resume" element={<div><h1>Resume</h1></div>} />
        </Route>
      </Routes>
    </HashRouter>
  </StrictMode>,
)
