import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Route, Routes } from 'react-router'
import './App.css'

// Main Page Imports
import Nav from './components/Nav.tsx'
import App from './App.tsx'
import Blog from './pages/Blog.tsx'
import Portfolio from './pages/Portfolio.tsx'

// Project Imports
import BehavioralAnimation from './pages/projects/BehavioralAnimation.tsx'

// Blog Imports
import HoudiniLearningLogFoundationsWelcome from './pages/blogs/HoudiniLearningLogFoundationsWelcome.tsx'
import HoudiniLearningLogFoundationsVFX from './pages/blogs/HoudiniLearningLogFoundationsVFX.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<App />} />
          <Route path="portfolio">
            <Route index element={<Portfolio />} />
            <Route path="behavioral-animation" element={<BehavioralAnimation />} />
          </Route>
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
