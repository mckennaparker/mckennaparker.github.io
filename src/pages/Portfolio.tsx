import Footer from '../components/Footer.tsx';
import ProjectCard from '../components/ProjectCard.tsx';
import './Portfolio.css';
import { projects } from '../data/projects.ts';

function Portfolio() {
    const graphicsProjects = projects.filter((project) => project.type === 'graphics' || !project.type);
    const uxUiProjects = projects.filter((project) => project.type === 'web' || project.type === 'AI/ML');

    return (
        <div className="portfolio">
            <div className="portfolio-content">
                <div className="project-sections">
                    <h1>Portfolio</h1>
                    <div className="graphics-section section">
                        <div className="section-text">
                            <h3>Graphics Projects</h3>
                            <p className="portfolio-intro">
                                A selection of recent projects across animation, procedural modeling, and graphics work.
                            </p>
                        </div>
                        <div className="portfolio-grid">
                            {graphicsProjects.map((project) => (
                                <ProjectCard key={project.id} className="project-card-portfolio" project={project} />
                            ))}
                        </div>
                    </div>
                    <div className="design-section section">
                        <div className="section-text">
                            <h3>UX/UI Projects</h3>
                            <p className="portfolio-intro">
                                A selection of recent projects across animation, procedural modeling, and graphics work.
                            </p>
                        </div>
                        <div className="portfolio-grid">
                            {uxUiProjects.map((project) => (
                                <ProjectCard key={project.id} className="project-card-portfolio" project={project} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Portfolio;