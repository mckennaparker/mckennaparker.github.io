import ProjectCard from './components/ProjectCard'
import './App.css'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <div className="content">
        <div className="about">
          <div className="about-img">
            <img src="/me.JPG" alt="A picture of McKenna on a boat at sunset" />
          </div>
          <div className="about-info">
            <h2>Hi, I'm McKenna!</h2>
            <p>I'm a rising senior at the University of Pennsylvania studying in the interdisciplinary <a href="https://cg.cis.upenn.edu/dmd.html" target="_blank">Digital Media Design</a> program, which combines computer science and fine arts coursework. Through coursework in computer graphics, immersive media, and user experience design, I've developed a strong foundation in both technical and creative skills which I hope to use to create engaging and novel digital experiences.</p>
            <br />
            <p>Throughout my page (and on my <a href="">resume</a>) you can see some of my projects in both computer graphics and UX/UI design. Also feel free to check out my blog posts where I hope to continue writing about what I learn through my projects and experiences!</p>
            <br />
            <p>When I'm not learning, you can find me playing ultimate frisbee, trying out a new recipe, or traveling!</p>
          </div>
        </div>
        <div className="currently">
          <div className="currently-item listening">
            <h4>Currently Listening</h4>
            <img src="/sawayama.png" alt="Spotify logo" />
            <p>Commes Des Garçons (Like The Boys)</p>
            <p>Rina Sawayama</p>
          </div>
          <div className="currently-item watching">
            <h4>Currently Watching</h4>
            <img src="/loveIsland.avif" alt="Love Island logo" />
            <p>Love Island USA</p>
            <p>Season 8</p>
          </div>
          <div className="currently-item reading">
            <h4>Currently Reading</h4>
            <img src="/longGame.webp" alt="The Long Game book cover" />
            <p>The Long Game</p>
            <p>Rachel Reid</p>
          </div>
        </div>
        <div className="projects">
          <h3>Recent Projects</h3>
          <div className="project-list">
            <ProjectCard className="project-card-about" title="Project 1" description="A web application that allows users to track their fitness goals." link="" />
            <ProjectCard className="project-card-about" title="Project 2" description="A web application that allows users to track their fitness goals." link="" />
            <ProjectCard className="project-card-about" title="Project 3" description="A web application that allows users to track their fitness goals." link="" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
