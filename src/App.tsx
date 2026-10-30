import './App.css'
import { experiences } from './data/experiences.ts'
import ExperienceCard from './components/ExperienceCard.tsx'

function App() {
  return (
    <div className="App">
      <div className="content">
        <div className="about">
          <img className="about-img" src="/about.jpg" alt="A picture of McKenna on a boat at sunset" />
          <div className="about-info">
            <h2>About Me</h2>
            <p>I'm a current senior at the University of Pennsylvania studying in the interdisciplinary Digital Media Design program, combining computer graphics, interactive media design, and fine arts.</p>
            <br />
            <p></p>
          </div>
        </div>
        <div className="experience">
          <h2>Experience Timeline</h2>
          <div className="experience-list">
            {experiences.map((experience) => (
              <ExperienceCard key={experience.id} experience={experience} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
