import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Route, Routes } from 'react-router'
import './App.css'

// Main Page Imports
import Nav from './components/Nav.tsx'
import App from './App.tsx'
import Blog from './pages/Blog.tsx'
import Portfolio from './pages/Portfolio.tsx'
import Resume from './pages/Resume.tsx'

// Graphics Project Imports
import BehavioralAnimation from './pages/projects/BehavioralAnimation.tsx'
import PhysicallyBasedRenderer from './pages/projects/PhysicallyBasedRenderer.tsx'
import MonteCarloPathTracer from './pages/projects/MonteCarloPathTracer.tsx'

// UX/UI Project Imports
import Ultifilm from './pages/projects/Ultifilm.tsx'
import YoungChef from './pages/projects/YoungChef.tsx'

// Blog Imports
import HoudiniLearningLogFoundationsWelcome from './pages/blogposts/HoudiniLearningLogFoundationsWelcome.tsx'
import HoudiniLearningLogFoundationsVFX from './pages/blogposts/HoudiniLearningLogFoundationsVFX.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<App />} />
          <Route path="portfolio">
            <Route index element={<Portfolio />} />
            <Route path="behavioral-animation" element={<BehavioralAnimation />} />
            <Route path="physically-based-renderer" element={<PhysicallyBasedRenderer />} />
            <Route path="monte-carlo-path-tracer" element={<MonteCarloPathTracer />} />
            <Route path="ultifilm" element={<Ultifilm />} />
            <Route path="young-chef" element={<YoungChef />} />
          </Route>
          <Route path="blog">
            <Route index element={<Blog />} />
            <Route path="houdini-learning-log-foundations-welcome" element={<HoudiniLearningLogFoundationsWelcome />} />
            <Route path="houdini-learning-log-foundations-vfx" element={<HoudiniLearningLogFoundationsVFX />} />
          </Route>

          <Route path="resume" element={<Resume />} />
        </Route>
      </Routes>
    </HashRouter>
  </StrictMode>,
)
