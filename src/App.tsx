import ProjectCard from './components/ProjectCard'
import './App.css'

function App() {
  return (
    <div className="App">
      <h1>McKenna Parker</h1>
      <p>Welcome to my personal website! I'm a software developer with a passion for creating innovative solutions. Here, you can find information about my projects, skills, and experience. Feel free to explore and connect with me!</p>
      <div className="projects">
        <h2>Projects</h2>
        <div className="project-list">
          <ProjectCard title="Project 1" description="A web application that allows users to track their fitness goals." link="" />
          <ProjectCard title="Project 2" description="A web application that allows users to track their fitness goals." link="" />
          <ProjectCard title="Project 3" description="A web application that allows users to track their fitness goals." link="" />
        </div>
      </div>
    </div>
  )
}

export default App
