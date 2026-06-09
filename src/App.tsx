import ProjectCard from './components/ProjectCard'
import BlogCard from './components/BlogCard'
import './App.css'
import Footer from './components/Footer'
import { projects } from './data/projects.ts'
import { blogPosts } from './data/blogs.ts'
import { takeFirst } from './data/content.ts'

function App() {
  const recentProjects = takeFirst(projects, 3)
  const recentBlogs = takeFirst(blogPosts, 3)

  return (
    <div className="App">
      <div className="content">
        <div className="about">
          <div className="about-img">
            <img className="about-img-main" src="/me.JPG" alt="A picture of McKenna on a boat at sunset" />
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
        <div className="projects">
          <h3>Recent Projects</h3>
          <div className="project-list">
            {recentProjects.map((project) => (
              <ProjectCard key={project.id} className="project-card-about" project={project} />
            ))}
          </div>
        </div>
        <div className="blogs">
          <h3>Recent Blogs</h3>
          <div className="blog-list-about">
            {recentBlogs.map((blog) => (
              <BlogCard key={blog.id} className="blog-card-about" blog={blog} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
