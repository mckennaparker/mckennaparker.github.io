import ProjectCard from './components/ProjectCard'
import BlogCard from './components/BlogCard'
import './App.css'
import Footer from './components/Footer'
import { projects } from './data/projects.ts'
import { blogPosts } from './data/blogs.ts'
import { takeFirst } from './data/content.ts'
import type { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from 'react';
import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router'

const SlickSlider = ((Slider as unknown as { default?: typeof Slider }).default ?? Slider) as typeof Slider;

function App() {
  const [slidesToShow, setSlidesToShow] = useState(() => {
    if (typeof window === 'undefined') {
      return 3;
    }

    return window.innerWidth <= 800 ? 1 : window.innerWidth <= 1200 ? 2 : 3;
  });

  useEffect(() => {
    const handleResize = () => {
      setSlidesToShow(window.innerWidth <= 800 ? 1 : window.innerWidth <= 1200 ? 2 : 3);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const recentProjects = takeFirst(projects, 3)
  const recentBlogs = takeFirst(blogPosts, 3)

  const settings = {
    dots: true,
    infinite: false,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    arrows: false,
    appendDots: (dots: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined) => (
      <div
        style={{
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <ul style={{ margin: "-10px" }}> {dots} </ul>
      </div>
    )
  }

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
            <p>Throughout my page (and on my <a href="McKennaParkerResume.pdf" download="McKennaParkerResume.pdf">resume</a>) you can see some of my projects in both computer graphics and UX/UI design. Also feel free to check out my blog posts where I hope to continue writing about what I learn through my projects and experiences!</p>
            <br />
            <p>When I'm not learning, you can find me playing ultimate frisbee, trying out a new recipe, or traveling!</p>
          </div>
        </div>
        <div className="projects">
          <div className="projects-header">
            <h3>Recent Projects</h3>
            <Link to="/portfolio"><button className="btn btn-primary">View All Projects</button></Link>
          </div>
          <SlickSlider {...settings} className="project-list">
            {recentProjects.map((project) => (
              <ProjectCard key={project.id} className="project-card-about" project={project} />
            ))}
          </SlickSlider>
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
